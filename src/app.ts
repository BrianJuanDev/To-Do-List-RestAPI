import express from 'express';
import { DB, USER, PASSWORD, HOST } from './config'
import taskRoutes from './routes/TaskRouter';

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())


app.use('/api', taskRoutes);

app.use((req, res, next) => res.status(404).json({
    message: 'endpoint not found'
}))  
    

export default app;

