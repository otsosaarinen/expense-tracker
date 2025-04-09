"use client";

import Expense from "./components/expense";
import { find_expenses } from "../../db_actions/find_expenses";
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
            <div className="flex flex-col">
                {expenses.map((expense) => {
                    return (
                        <div className="my-1">
                            <Expense
                                key={expense.ID}
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
        </>
    );
}
