import { createPool } from 'mysql2/promise';
import { PASSWORD, HOST, PORT, DB, USER } from '../src/config';

// Configuramos la base de datos
export const pool = createPool({
  	host: HOST,
  	user: USER,
  	password: PASSWORD,
  	port: PORT,
  	database: DB
})
