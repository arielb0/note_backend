import { PrismaClient } from '@prisma/client';
import {Router, Request, Response} from 'express';

var usersRouter:Router = Router();
const prisma: PrismaClient = new PrismaClient();

usersRouter.post('', async (req: Request, res: Response) => {
    
    const {username, email, password} = req.body;

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password
        }
    });
    res.json(user);
});

usersRouter.get('/:id', async (req: Request, res: Response) => {
    
    const user = await prisma.user.findUnique({
        where: {
            id: Number.parseInt(req.params.id)
        }
    })

    res.json(user);
});

usersRouter.patch('/:id', async (req: Request, res: Response) => {
    
    const {username, email, password} = req.body;

    const user = await prisma.user.update({
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
});

usersRouter.delete('/:id', async (req: Request, res: Response) => {
    
    const user = await prisma.user.delete({
        where: {
            id: Number.parseInt(req.params.id)
        }
    });

    res.json(user);
});

usersRouter.get('', (req: Request, res: Response) => {
    // TODO: Get all users.
    // This operation is not allowed, return an error or not implement.
});

export default usersRouter;