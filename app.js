// Import the required modules
import express from 'express'; // Express framework for building web servers
import path from 'path'; // Utility for handling and transforming file paths
import { fileURLToPath } from 'url'; // Utility for converting module URL to file paths

// Resolve the __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create an instance of an Express app
const app = express();

// Define the port for the server, defaulting to 3000 if not set in the environment
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
// This makes `req.body` accessible when the client sends JSON data
app.use(express.json());

// Serve static files from the "public" directory
// Files in this directory (like HTML, CSS, JS, images) will be served directly
app.use(express.static(path.join(__dirname, 'public'), {
    fallthrough: true, // Allows other routes to handle requests if no static file is found
    onerror: (err, req, res) => { // Custom error handler for static file serving
        console.error('Static file error:', err);
        res.status(500).send('Error serving static file');
    }
}));

// Define the root route (GET /)
// Sends a simple welcome message as the response
app.get('/', (req, res) => {
    res.send('Hello, world! Welcome to your basic Node.js Express server.');
});

// Define a route (GET /api/greeting)
// Sends a JSON response with a greeting message
app.get('/api/greeting', async (req, res, next) => {
    try {
        res.json({ message: 'Hello from the API!' });
    } catch (error) {
        next(error); // Pass errors to the global error handler
    }
});

// Example route using fetch (GET /api/external)
// Demonstrates making an external HTTP request and returning the response
app.get('/api/external', async (req, res, next) => {
    try {
        const response = await fetch('https://api.example.com/data'); // Make a request to an external API
        const data = await response.json(); // Parse the JSON response
        res.json(data); // Send the data as the response
    } catch (error) {
        next(error); // Pass errors to the global error handler
    }
});

// Catch-All Route for Undefined Routes
// Sends a 404 status code with a "Page not found" message
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Global Error Handling Middleware
// Handles any errors passed to `next()` and sends a JSON error response
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(err.status || 500).json({ // Send a JSON response with the error details
        error: {
            message: err.message || 'Internal Server Error',
            status: err.status || 500
        }
    });
});

// Start the server and listen on the specified port
// Logs a message indicating the server is running
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
