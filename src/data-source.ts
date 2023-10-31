import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from "typeorm";

const dbPort = process.env.DB_PORT as number | undefined;


export const appDataSource = new DataSource({
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": dbPort,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "entities": [`${__dirname}/**/models/*.{ts,js}`],
    "migrations": [`${__dirname}/**/migrations/*.{ts,js}`]
});