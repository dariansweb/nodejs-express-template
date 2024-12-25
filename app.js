// Import required modules
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Middleware to parse incoming JSON requests
app.use(express.json());

// 2. Serve static files early
app.use(express.static(path.join(__dirname, 'public'), {
    fallthrough: true,
    onerror: (err, req, res) => {
        console.error('Static file error:', err);
        res.status(500).send('Error serving static file');
    }
}));

// 3. Define routes
app.get('/', (req, res) => {
    res.send('Hello, world! Welcome to your basic Node.js Express server.');
});

app.get('/api/greeting', async (req, res, next) => {
    try {
        res.json({ message: 'Hello from the API!' });
    } catch (error) {
        next(error); // Pass errors to the error handler
    }
});

// 4. Catch-All Route
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// 5. Error Logging Middleware (optional)
const errorLogger = (err, req, res, next) => {
    console.error(`[${new Date().toISOString()}] Error:`, err);
    next(err);
};
app.use(errorLogger);

// 6. Global Error Handler
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
