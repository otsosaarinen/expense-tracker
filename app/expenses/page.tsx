"use client";

import Expense from "./components/expense";
import { find_expenses } from "../../db_actions/find_expenses";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";

type ExpenseFormat = {
    ID: number;
    type: string;
    value: number;
    date: string | Date;
};

export default function Expenses() {
    const [expenses, setExpenses] = useState<ExpenseFormat[]>([]);

    const fetchExpenses = async () => {
        try {
            const data = await find_expenses();
            setExpenses(data);
        } catch (error) {
            console.log("Error while fetching expenses: ", error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5">
                <Link href="/dashboard">
                    <Button variant="contained" color="success">
                        Dashboard
                    </Button>
                </Link>
                <div className="flex flex-col">
                    {expenses.map((expense, index) => {
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
            </div>
        </>
    );
}
