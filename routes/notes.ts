import { PrismaClient } from '@prisma/client';
import {Router, Request, Response} from 'express';
var notesRouter:Router = Router();
const prisma = new PrismaClient();

notesRouter.post('', async (req: Request, res: Response) => {
    
    const { title, tags, body } = req.body;
    
    const note = await prisma.note.create({
        data: {
            title,
            tags,
            body,
            user: {connect: {email: 'manolo89@gmail.com'}}
        }
    });

    res.json(note);
});

notesRouter.get('/:id', async (req: Request, res: Response) => {
    const note = await prisma.note.findUnique({
        where: {id: Number.parseInt( req.params.id)}
    });
    
    res.json(note);    
    
});

notesRouter.patch('/:id', async (req: Request, res: Response) => {
    
    const {title, tags, body} = req.body;

    const note = await prisma.note.update({
        where: {
            id: Number.parseInt(req.params.id)
        },
        data: {
            title,
            tags,
            body
        }
    });
    
    res.json(note);
});

notesRouter.delete('/:id', async (req: Request, res: Response) => {
    
    const note = await prisma.note.delete({
        where: {
            id: Number.parseInt(req.params.id)
        }
    })

    res.json(note);
});

notesRouter.get('', async (req: Request, res: Response) => {
    const notes = await prisma.note.findMany();

    res.json(notes);
});

export default notesRouter;