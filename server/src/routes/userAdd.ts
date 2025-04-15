import { Router, Request, Response } from "express";
import pg from "pg";
import bcrypt from "bcryptjs";
import "dotenv/config";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        // create constants for connecting to database
        const USER = process.env.PG_USER as string;
        const PASSWORD = process.env.PG_PASSWORD as string;
        const HOST = process.env.PG_HOST as string;
        const PORT = process.env.PG_PORT as string;
        const DATABASE = process.env.PG_DATABASE as string;

        // save request body variables to constants
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email_address = req.body.email_address;
        const password = req.body.password;

        // generate salt and hash the password + salt
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const { Client } = pg;
        const client = new Client({
            user: USER,
            password: PASSWORD,
            host: HOST,
            port: parseInt(PORT),
            database: DATABASE,
        });

        // connect to database
        await client.connect();

        const query = {
            text: "INSERT INTO users (first_name, last_name, email_address, hash) VALUES($1, $2, $3, $4) RETURNING *",
            values: [first_name, last_name, email_address, hash],
        };

        const query_res = await client.query(query);
        console.log(query_res.rows);

        // disconnect from the database
        await client.end();

        // send succesfull response to frontend
        res.status(200).json({ message: "User added to database" });
    } catch (error) {
        console.log(
            "Error occured while saving account information to database: ",
            error
        );
        // send error response in case something goes wrong
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
