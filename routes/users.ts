import {Router, Request, Response} from 'express';

var usersRouter:Router = Router();

usersRouter.post('', (req: Request, res: Response) => {
    // TODO: Create a user.
});

usersRouter.get('/:id', (req: Request, res: Response) => {
    // TODO: Read a user.
});

usersRouter.patch('/:id', (req: Request, res: Response) => {
    // TODO: Update a user.
});

usersRouter.delete('/:id', (req: Request, res: Response) => {
    // TODO: Delete a user.
});

usersRouter.get('', (req: Request, res: Response) => {
    // TODO: Get all users.
    console.log('You need to get all users (list)');
    res.send('hello');
    res.end();
});

export default usersRouter;