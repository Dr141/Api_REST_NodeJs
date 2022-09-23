import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express();

// Configuração da aplicação
app.use(express.json);
app.use(express.urlencoded({extended: true}));

// Configuração da rotas
app.use(usersRoute);

// Inicialização do servidor
app.get('/status',(req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({Status:'true'});
});

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});