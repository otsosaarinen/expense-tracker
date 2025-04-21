import { Router, Request, Response } from "express";
import pg from "pg";
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
        const user_id = req.body.user_id;

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
            text: `SELECT * FROM expenses WHERE "user" = $1`,
            values: [user_id],
        };

        const query_res = await client.query(query);

        // disconnect from the database
        await client.end();

        // send succesfull response to frontend
        res.status(200).json({
            message: "Expenses fetched",
            expenses: query_res.rows,
        });
    } catch (error) {
        console.log("Error occured while fetching expenses: ", error);
        // send error response in case something goes wrong
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
