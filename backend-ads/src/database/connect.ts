import "reflect-metadata"
import { DataSource } from "typeorm"
import { Ads } from "../app/models/Ads";

export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    synchronize: true,
    entities: [Ads],
    migrations: [],
})
