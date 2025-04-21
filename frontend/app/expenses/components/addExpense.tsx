import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type DisplayType = "hidden" | "flex";

type VisibilityType = {
    visibility: DisplayType;
};

export default function AddExpense({ visibility }: VisibilityType) {
    const [type, setType] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [user, setUser] = useState<number>(43);

    const addExpenseToDatabase = async () => {
        const body = {
            type: type,
            value: Number(value),
            date: date,
            user: user,
        };
        try {
            const response = await fetch("http://localhost:4000/expensesAdd", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(
                "Error occured while adding expense to database: ",
                error,
            );
        }
    };

    return (
        <>
            <div
                className={`${visibility} absolute flex h-screen w-screen items-center justify-center bg-neutral-900/80`}
            >
                <div className="flex h-auto w-2xs flex-col items-center justify-center gap-2 rounded-xl border-3 border-white bg-white p-5">
                    <div className="text-xl font-medium">New expense</div>
                    <FormControl variant="filled" color="success" fullWidth>
                        <InputLabel>Expense type</InputLabel>
                        <Select
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value);
                            }}
                            label="Expense type"
                        >
                            <MenuItem value={"income"}>Income</MenuItem>
                            <MenuItem value={"expense"}>Expense</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        variant="outlined"
                        label="Value"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    ></TextField>
                    <TextField
                        variant="outlined"
                        label="Date"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    ></TextField>
                    <Button
                        variant="contained"
                        color="success"
                        endIcon={<AddIcon />}
                        onClick={() => {
                            addExpenseToDatabase();
                            location.reload();
                        }}
                    >
                        Add expense
                    </Button>
                </div>
            </div>
        </>
    );
}
