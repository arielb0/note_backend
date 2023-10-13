"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const notes_1 = __importDefault(require("./routes/notes"));
const users_1 = __importDefault(require("./routes/users"));
// Load environment variables from .env file.
dotenv_1.default.config();
// Create Express application
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.static('public')); // Load static files from public folder.
app.use((0, cors_1.default)()); // Enable Cross Origin Resource Sharing (CORS)
app.use(express_1.default.json()); // Parse application/json on req.body object
// Routes
app.use('', (req, res) => {
    res.sendFile('/public/index.html');
});
app.use('/notes', notes_1.default);
app.use('/users', users_1.default);
// Start Express.js server
app.listen(process.env.PORT, () => {
    console.log(`Express.js server is listen connections using the url: http://${process.env.HOST}:${process.env.PORT}`);
});
