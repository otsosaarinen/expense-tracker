import { Router, Request, Response } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Add user endpoint works!" });
});

export default router;
