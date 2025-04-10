import express from "express";
import userAdd from "./routes/userAdd";
import userAuth from "./routes/userAuth";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/userAdd", userAdd);
app.use("/userAuth", userAuth);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
