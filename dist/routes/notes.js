"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = require("express");
var notesRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
notesRouter.post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, tags, body } = req.body;
    const note = yield prisma.note.create({
        data: {
            title,
            tags,
            body,
            user: { connect: { email: 'manolo89@gmail.com' } }
        }
    });
    res.json(note);
}));
notesRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield prisma.note.findUnique({
        where: { id: Number.parseInt(req.params.id) }
    });
    res.json(note);
}));
notesRouter.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, tags, body } = req.body;
    const note = yield prisma.note.update({
        where: {
            id: Number.parseInt(req.params.id)
        },
        data: {
            title,
            tags,
            updatedAt: new Date(Date.now()),
            body
        }
    });
    res.json(note);
}));
notesRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield prisma.note.delete({
        where: {
            id: Number.parseInt(req.params.id)
        }
    });
    res.json(note);
}));
notesRouter.get('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield prisma.note.findMany();
    res.json(notes);
}));
exports.default = notesRouter;
