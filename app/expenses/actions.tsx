"use server";
import pg from "pg";

export async function postgres() {
    const { Client } = pg;

    const client = new Client({
        user: "postgres",
        password: "POPSOburgeri2014",
        host: "localhost",
        port: 5432,
        database: "postgres",
    });

    await client.connect();

    const res = await client.query("SELECT * FROM expenses;");

    await client.end();

    return res.rows;
}
