import express from 'express';
import morgan from 'morgan';


const app = express();
const PORT = process.env.PORT || 3000;
const apiVersion = 'v1'

// Middleware to parse JSON and log requests
app.use(express.json());
app.use(morgan('dev'));


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
