import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import notesRouter from './routes/notes';
import usersRouter from './routes/users';

// Load environment variables from .env file.

dotenv.config();

// Create Express application

const app: Express = express();

// Middlewares

app.use(express.static('public')); // Load static files
app.use(cors()); // Enable Cross Origin Resource Sharing (CORS)
app.use(express.json()); // Parse application/json on req.body object

// Routes

app.use('/notes', notesRouter);
app.use('/users', usersRouter);

// Start Express.js server

app.listen(process.env.PORT, () => {
    console.log(`Express.js server is listen connections using the url: http://${process.env.HOST}:${process.env.PORT}`);
});