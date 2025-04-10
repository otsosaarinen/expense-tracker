type ExpenseProps = {
    type: string;
    value: number;
    date: string;
};

export default function Expense({ type, value, date }: ExpenseProps) {
    // add plus or minus in front of the value
    let expenseValue = type == "income" ? `+${value}€` : `-${Math.abs(value)}€`;

    // make text green if type is "income", else make it red
    let expenseStyling = type == "income" ? "text-green-500" : "text-red-500";

    return (
        <>
            <div
                className={`flex h-14 w-2xs flex-row items-center justify-around rounded-md bg-white/75 backdrop-blur-xs`}
            >
                <div className={`${expenseStyling} text-3xl`}>
                    {expenseValue}
                </div>
                <div className="text-lg">{date}</div>
            </div>
        </>
    );
}
