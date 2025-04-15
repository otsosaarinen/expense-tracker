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
        const email_address = req.body.email_address;
        const password = req.body.password;

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
            text: "SELECT hash FROM users WHERE email_address = $1",
            values: [email_address],
        };

        const query_res = await client.query(query);
        const db_hash = query_res.rows[0].hash;

        // disconnect from the database
        await client.end();

        const check_password = await bcrypt.compare(password, db_hash);

        if (check_password) {
            // send succesfull response to frontend
            res.status(200).json({ message: "User succesfully authenticated" });
        } else {
            // if there is no succesfull password match send 401 response
            res.status(401).json({
                message: "User authentication was not succesfull",
            });
        }
    } catch (error) {
        console.log("Error occured while logging in: ", error);
        // send error response in case something goes wrong
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
