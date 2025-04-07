import Expense from "./components/expense";

const money = [
    { type: "income", value: 67.25, date: "5/4/2025" },
    { type: "expense", value: 100, date: "6/4/2025" },
    { type: "expense", value: 83, date: "7/4/2025" },
];

export default function Expenses() {
    return (
        <>
            {money.map((singleExpense, index) => {
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
