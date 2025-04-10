import Chart from "./components/chart";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Dashboard() {
    return (
        <>
            <div className="flex w-full flex-col items-center gap-5">
                <Link href="/expenses">
                    <Button variant="contained" color="success">
                        Expenses
                    </Button>
                </Link>
                <div className="w-7xl">
                    <Chart />
                </div>
            </div>
        </>
    );
}
