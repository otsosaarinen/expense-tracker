"use server";

import pg from "pg";
import "dotenv/config";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

interface loginData {
    email: string;
    password: string;
}

export async function check_login({ email, password }: loginData) {
    const USER = process.env.PG_USER as string;
    const PASSWORD = process.env.PG_PASSWORD as string;
    const HOST = process.env.PG_HOST as string;
    const PORT = process.env.PG_PORT as string;
    const DATABASE = process.env.PG_DATABASE as string;

    const { Client } = pg;

    // set database variables to succesfully connect to postgres
    const client = new Client({
        user: USER,
        password: PASSWORD,
        host: HOST,
        port: parseInt(PORT),
        database: DATABASE,
    });

    await client.connect();

    // create SQL query for fetching the hash of user's password
    const query = {
        text: "SELECT * FROM users WHERE email_address = ($1)",
        values: [email],
    };

    const res = await client.query(query);
    console.log(res.rows[0]);

    await client.end();

    const password_check = await bcrypt.compare(password, res.rows[0].hash);

    if (password_check) {
        // redirect user to dashboard if login is succesfull
        redirect("/dashboard");
    }
}
