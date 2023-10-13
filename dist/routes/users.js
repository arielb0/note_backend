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
var usersRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
usersRouter.post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const user = yield prisma.user.create({
        data: {
            username,
            email,
            password
        }
    });
    res.json(user);
}));
usersRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: {
            id: Number.parseInt(req.params.id)
        }
    });
    res.json(user);
}));
usersRouter.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const user = yield prisma.user.update({
        where: {
            id: Number.parseInt(req.params.id)
        },
        data: {
            username,
            email,
            password
        }
    });
    res.json(user);
}));
usersRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.delete({
        where: {
            id: Number.parseInt(req.params.id)
        }
    });
    res.json(user);
}));
usersRouter.get('', (req, res) => {
    // TODO: Get all users.
    // This operation is not allowed, return an error or not implement.
});
exports.default = usersRouter;
