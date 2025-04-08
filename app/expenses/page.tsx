"use client";

import Expense from "./components/expense";
import { find_expenses } from "./pg_actions/SELECT";
import { useEffect, useState } from "react";

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
            {expenses.map((singleExpense, index) => {
                return (
                    <Expense
                        key={index}
                        type={singleExpense.type}
                        value={singleExpense.value}
                        date={
                            new Date(singleExpense.date)
                                .toISOString()
                                .split("T")[0]
                        }
                    />
                );
            })}
        </>
    );
}
