import express from "express";
import cors from "cors";

import userAdd from "./routes/userAdd";
import userAuth from "./routes/userAuth";
import expensesFetch from "./routes/expensesFetch";
import expensesAdd from "./routes/expensesAdd";

const app = express();
const cors_middleware = cors();
const port = 4000;

app.use(cors_middleware);
app.use(express.json());

app.use("/userAdd", userAdd);
app.use("/userAuth", userAuth);
app.use("/expensesFetch", expensesFetch);
app.use("/expensesAdd", expensesAdd);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
