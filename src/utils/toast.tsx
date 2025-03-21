import { CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";

export const toastMessage = (status: "success" | "failed", message: string) => {
    return toast.custom((t) => (
        <div
            className={`md:w-[25vw] flex items-center gap-2 p-4 rounded-lg shadow-md font-[Roboto] 
            ${status === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
        >
            {status === "success" ? (
                <CheckCircle className="text-white w-5 h-5" />
            ) : (
                <XCircle className="text-white w-5 h-5" />
            )}
            <div>
                {/* <strong>{status === "success" ? "Success" : "Error"}</strong> */}
                <p className="text-sm">{message}</p>
            </div>

            {/*  Dismiss Button Using `t`  cheyadaniki*/}
            <button onClick={() => toast.dismiss(t)} className="ml-auto text-white">
                ✖
            </button>
        </div>
    ),
{ 
    position: "top-right" //  Position ni maro object this is best way
},
);
};
