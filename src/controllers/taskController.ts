import { pool } from '../../config/mysql';
import { Task, task } from '../../types';


export const createTask = async (req, res) => {

    const [titulo, descripcion] = req.body;
    
    try {
        const [rows] = await pool.query('INSERT INTO task (titulo, descripcion) VALUES (?, ?)', [titulo, descripcion]);

        res.send({
            id: rows.insertId,
            titulo,
            descripcion
        })
    } catch (e) {
        return res.status(500).json({
            messagge: 'algo salio mal'
    }
}


export const getTask = async (req, res): Task => {

    try {
        const [rows] = await pool.query('SELECT * FROM task WHERE id = ?', [req.params.id]);;

        if (rows.lenght <= 0) return res.status(404).json({
            messagge: 'Tarea no encontrada'
    })

        res.json(rows[0])
    } catch (e) {
        return res.status(500).json({
            messagge: 'algo salio mal'
    })
}

export const updateTask = async (req, res) => {

    const { id } = req.params;
    const { titulo, descripcion } = req.body;

   try {
    const [results] = await pool.query('UPDATE task SET titulo = IFNULL(?, titulo), descripcion = IFNULL(?, descripcion), WHERE id = ?', [titulo, descripcion, id])
    
    if (results.affectedRows === 0) return res.status(404).json({
        message: 'tarea no encontrada'
    })

    const [rows] = await pool.query('SELECT * FROM task WHERE id = ?', [id])

    res.json(rows[0])

   } catch (e) {
        return res.status(500).json({
           messagge: 'algo salio mal'
        })
   }
}

export const deleteTask = (req, res) => {
    try {
        const [results] = await pool.query('DELETE FROM task WHERE id = ?', [req.params.id]);

        if (results.affectedRows <= 0) return res.status(404).json({
        messagge: 'Tarea no encontrada'
    })
    res.sendStatus(204);

    } catch (e) {
        return res.status(500).json({
            messagge: 'algo salio mal'
        })
    }
}

export const getTasks = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM task');
        res.json(rows);

    } catch (e) {
        return res.status(500).json({
            messagge: 'algo salio mal'
        })
    }
}

