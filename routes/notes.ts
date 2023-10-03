import { PrismaClient } from '@prisma/client';
import {Router, Request, Response} from 'express';

var notesRouter:Router = Router();
const prisma = new PrismaClient();

notesRouter.post('', (req: Request, res: Response) => {
    // TODO: Create a note.
});

notesRouter.get('/:id', async (req: Request, res: Response) => {
    const note = await prisma.note.findUnique({
        where: {id: Number.parseInt( req.params.id)}
    });

    if (note) {
        res.json(note);
    } else {
        res.status(404);
        res.end();
    }
    
});

notesRouter.patch('/:id', (req: Request, res: Response) => {
    // TODO: Update a note.
});

notesRouter.delete('/:id', (req: Request, res: Response) => {
    // TODO: Delete a note.
});

notesRouter.get('', async (req: Request, res: Response) => {
    const notes = await prisma.note.findMany();
    res.json(notes);
});

export default notesRouter;