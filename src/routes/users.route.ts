import { Router, Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) =>{
    const users = [{userName: 'Rhemerson'}];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send(uuid);
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) =>{
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    const modifideUser = req.body;

    modifideUser.uuid = uuid;
    res.status(StatusCodes.OK).send({modifideUser});
});

usersRoute.delete('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    res.status(StatusCodes.OK);
});


export default usersRoute;