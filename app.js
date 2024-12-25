import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files early
app.use(express.static(path.join(__dirname, 'public'), {
    fallthrough: true,
    onerror: (err, req, res) => {
        console.error('Static file error:', err);
        res.status(500).send('Error serving static file');
    }
}));

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world! Welcome to your basic Node.js Express server.');
});

app.get('/api/greeting', async (req, res, next) => {
    try {
        res.json({ message: 'Hello from the API!' });
    } catch (error) {
        next(error);
    }
});

// Example route using fetch
app.get('/api/external', async (req, res, next) => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        next(error);
    }
});

// Catch-All Route
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: err.status || 500
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
