import { config } from 'dotenv';

config()

export const PORT = process.env.PORT;
export const PASSWORD = process.env.PASSWORD;
export const USER = process.env.USER;
export const DB = process.env.DB;
export const HOST = process.env.HOST;