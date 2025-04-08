"use server";

import pg from "pg";
import "dotenv/config";

interface accountData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export async function create_user({
    firstName,
    lastName,
    email,
    password,
}: accountData) {
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

    const query = {
        text: "INSERT INTO users(first_name, last_name, email, hash) VALUES($1, $2, $3, $4) RETURNING *",
        values: [firstName, lastName, email, password],
    };

    const res = await client.query(query);
    console.log(res.rows[0]);

    await client.end();
}
