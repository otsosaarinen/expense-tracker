"use client";

import Expense from "./components/expense";
import AddExpense from "./components/addExpense";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";

type ExpenseFormat = {
    ID: number;
    type: string;
    value: number;
    date: string | Date;
    user: number;
};

export default function Expenses() {
    type DisplayType = "hidden" | "flex";

    const [expenses, setExpenses] = useState<ExpenseFormat[]>([]);
    const [buttonVisibility, setButtonVisibility] =
        useState<DisplayType>("hidden");

    const fetchExpenses = async () => {
        const body = {
            user_id: "43",
        };

        try {
            const response = await fetch(
                "http://localhost:4000/expensesFetch",
                {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(body),
                },
            );

            const data = await response.json();
            setExpenses(data.expenses);
        } catch (error) {
            console.log("Error while fetching expenses: ", error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const toggleAddExpenseButton = () => {
        setButtonVisibility("flex");
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5">
                <Link href="/dashboard">
                    <Button variant="contained" color="success">
                        Dashboard
                    </Button>
                </Link>
                <div className="flex h-150 flex-col overflow-auto p-5">
                    {expenses.map((expense) => {
                        return (
                            <div className="my-1" key={expense.ID}>
                                <Expense
                                    type={expense.type}
                                    value={expense.value}
                                    date={
                                        new Date(expense.date)
                                            .toISOString()
                                            .split("T")[0]
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
                <Button
                    variant="contained"
                    color="success"
                    onClick={toggleAddExpenseButton}
                >
                    Click here to add expenses
                </Button>
                <AddExpense visibility={buttonVisibility} />
            </div>
        </>
    );
}
