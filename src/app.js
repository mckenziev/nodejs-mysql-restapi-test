//para que import funcione hay que agregar 
//"type": "module",
//en cualquier parte de package.json
//preferiblemente despues de "main"
import express from "express";
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

//se declara una constante para utilizar express
const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api', employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
});

export default app;