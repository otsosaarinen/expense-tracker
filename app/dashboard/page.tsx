import Chart from "./components/chart";

export default function Dashboard() {
    return (
        <>
            <div className="flex w-full flex-col items-center">
                <div>Dashboard</div>
                <div className="w-6xl">
                    <Chart />
                </div>
            </div>
        </>
    );
}
