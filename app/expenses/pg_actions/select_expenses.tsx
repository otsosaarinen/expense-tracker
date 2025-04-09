"use server";

import pg from "pg";
import "dotenv/config";

export async function select_expenses() {
    const USER = process.env.PG_USER as string;
    const PASSWORD = process.env.PG_PASSWORD as string;
    const HOST = process.env.PG_HOST as string;
    const PORT = process.env.PG_PORT as string;
    const DATABASE = process.env.PG_DATABASE as string;

    const { Client } = pg;

    const client = new Client({
        user: USER,
        password: PASSWORD,
        host: HOST,
        port: parseInt(PORT),
        database: DATABASE,
    });

    await client.connect();

    const res = await client.query("SELECT * FROM expenses;");

    await client.end();

    return res.rows;
}
