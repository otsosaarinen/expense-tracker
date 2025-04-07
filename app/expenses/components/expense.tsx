type ExpenseProps = {
    type: string;
    value: number;
    date: string;
};

export default function Expense({ type, value, date }: ExpenseProps) {
    let expenseValue = type == "income" ? `+${value}€` : `-${Math.abs(value)}€`;
    let expenseType = type == "income" ? "text-green-500" : "text-red-500";

    return (
        <>
            <div
                className={`my-2 flex h-18 w-xs flex-row items-center justify-around rounded-full bg-neutral-200`}
            >
                <div className={`${expenseType} text-3xl`}>{expenseValue}</div>
                <div className="text-lg">{date}</div>
            </div>
        </>
    );
}
