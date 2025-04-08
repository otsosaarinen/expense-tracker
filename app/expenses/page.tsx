"use client";

import Expense from "./components/expense";
import { postgres } from "./pg_actions/actions";
import { useEffect, useState } from "react";

export default function Expenses() {
    const [expenses, setExpenses] = useState([
        { type: "income", value: 67.25, date: "2025-04-05" },
        { type: "expense", value: 100, date: "2025-04-06" },
        { type: "expense", value: 83, date: "2025-04-07" },
    ]);

    const fetchExpenses = async () => {
        try {
            const data = await postgres();

            // Format the data before appending
            const formatted = data.map((item: any) => ({
                type: item.expense_type,
                value: item.value,
                date: new Date(item.date).toISOString().split("T")[0], // format to YYYY-MM-DD
            }));

            setExpenses((prev) => [...prev, ...formatted]);
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
                        date={singleExpense.date}
                    />
                );
            })}
        </>
    );
}
