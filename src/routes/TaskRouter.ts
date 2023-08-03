import { Router } from 'express';

import { getTasks, createTask, getTask, updateTask, deleteTask} from '../controllers/taskController'

const router = Router()

// Obtener todas las tareas
//router.get('/ping', async (req, res)=> {
//    const [task] = await connection.query('SELECT "title" FROM task')
//    res.send(task[0]);
// })

// Obtener una tarea
router.get('/task/:id', getTask)

// Obtener todas las tareas
router.get('/tasks', getTasks)

// Crear una tarea
router.post('/task/:id', createTask)

// Actualizar las tareas
router.patch('/task/:id', updateTask)

// Borrar la tarea
router.delete('/task/:id', deleteTask)


export default router;