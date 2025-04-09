import Chart from "./components/chart";

export default function Dashboard() {
    return (
        <>
            <div className="flex w-full flex-col items-center gap-5">
                <div className="w-7xl">
                    <Chart />
                </div>
            </div>
        </>
    );
}
