import express, {Express} from 'express';
import dotenv from 'dotenv';
import notesRouter from './routes/notes';
import usersRouter from './routes/users';

// Load environment variables from .env file.
dotenv.config();

const app: Express = express();

// Routes

app.use(express.static('public'));
app.use(express.json()); // Middleware to parse application/json
app.use('/notes', notesRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT, () => {
    console.log(`Express server is listen connections using the url: http://${process.env.HOST}:${process.env.PORT}`);
});