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
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.upsert({
            where: { id: 1 },
            update: {},
            create: {
                id: 1,
                username: 'Manolo',
                email: 'manolo89@gmail.com',
                password: 'clearpassword123',
                notes: {
                    create: [
                        { title: 'First note', tags: 'test, music, jazz', body: 'Some random text' },
                        { title: 'Second note', tags: 'work, exercise, religion', body: 'airplane glass smartphone' },
                        { title: 'Portugal watch black', tags: 'pet, cool, weapon', body: 'electron pendrive cloth' }
                    ]
                }
            }
        });
        yield prisma.user.upsert({
            where: { id: 2 },
            update: {},
            create: {
                id: 2,
                username: 'Pedro',
                email: 'pedro@hotmail.com',
                password: 'warning!Intruder',
                notes: {
                    create: [
                        { title: 'hack sunday ball', tags: 'potatoes, supermarket, hell', body: 'hair gun post' },
                        { title: 'Quisque interdum metus', tags: 'eget, blandit, feugiat', body: 'Suspendisse scelerisque nulla' },
                        { title: 'Sit amet lectus tristique sodales', tags: 'erat volutpat. Donec', body: 'consequat elit tellus' }
                    ]
                }
            }
        });
        yield prisma.user.upsert({
            where: { id: 3 },
            update: {},
            create: {
                id: 3,
                username: 'Roberto',
                email: 'roberto@protonmail.com',
                password: 'Aenean_id',
                notes: {
                    create: [
                        { title: 'per inceptos himenaeos', tags: 'Morbi posuere a nisi', body: 'a laoreet. Nam' },
                        { title: 'Integer eu euismod enim', tags: 'Sed eu augue risus', body: 'Nunc vestibulum tempus' },
                        { title: 'massa sed consectetur', tags: 'efficitur leo quis cursus pretium', body: 'eget metus in ipsum' }
                    ]
                }
            }
        });
    });
}
main().then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
})).catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
