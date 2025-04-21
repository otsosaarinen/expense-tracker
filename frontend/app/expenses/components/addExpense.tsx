import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

type DisplayType = "hidden" | "flex";

type VisibilityType = {
    visibility: DisplayType;
};

export default function AddExpense({ visibility }: VisibilityType) {
    const router = useRouter();

    return (
        <>
            <div
                className={`${visibility} absolute flex h-screen w-screen items-center justify-center bg-neutral-900/80`}
            >
                <div className="flex h-auto w-2xs flex-col items-center justify-center gap-2 rounded-xl border-3 border-white bg-white p-5">
                    <div className="text-xl font-medium">New expense</div>
                    <TextField
                        variant="outlined"
                        label="Expense type"
                    ></TextField>
                    <TextField variant="outlined" label="Value"></TextField>
                    <TextField variant="outlined" label="Date"></TextField>
                    <Button
                        variant="contained"
                        color="success"
                        endIcon={<AddIcon />}
                        onClick={() => {
                            location.reload();
                        }}
                    >
                        Add expense
                    </Button>
                </div>
            </div>
        </>
    );
}
