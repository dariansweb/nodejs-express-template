// Import the required modules
const express = require('express'); // Express framework
const path = require('path'); // Built-in Node.js module for handling file paths

// Create an instance of an Express app
const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// At the top of your file
const errorLogger = (err, req, res, next) => {
    console.error(`[${new Date().toISOString()}] Error:`, err);
    next(err);
};

// Add it before your routes
app.use(errorLogger);


// Basic route to respond with a simple message
app.get('/', (req, res) => {
    res.send('Hello, world! Welcome to your basic Node.js Express server.');
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public'), {
    fallthrough: true,
    // Handle static file errors
    onerror: (err, req, res) => {
        console.error('Static file error:', err);
        res.status(500).send('Error serving static file');
    }
}));

// Example API endpoint
app.get('/api/greeting', async (req, res, next) => {
    try {
        res.json({ message: 'Hello from the API!' });
    } catch (error) {
        next(error); // Pass errors to the error handler
    }
});


// Global error handler - place this before the 404 handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: err.status || 500
        }
    });
});


// Catch-all route for undefined routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
