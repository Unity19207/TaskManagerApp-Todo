import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Updatetodo({ update, onUpdateComplete }) {
    const [inputs, setInputs] = useState({
        title: update.title,
        description: update.description,
        time: update.time,
    });

    const [isUpdating, setIsUpdating] = useState(false);

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const submit = async () => {
        setIsUpdating(true);
        try {
            await axios.put(
                `${window.location.origin}/api/v2/updateTask/${update._id}`,
                {
                    title: inputs.title,
                    description: inputs.description,
                    time: inputs.time,
                    id: update.id,
                }
            );
            toast.success("Task Updated Successfully!", {
                autoClose: 2000,
            });
            onUpdateComplete();
        } catch (error) {
            console.error("Error updating task:", error);
            toast.error("Failed to update task!", {
                autoClose: 2000,
            });
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="absolute  top-0 left-0 flex justify-center items-center w-full max-w-[calc(100vw)] h-[100dvh] sm:h-[150dvh] bg-[#151515a9]">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex flex-col items-center justify-center gap-4 mt-7 p-8 sm:w-[350px] max-w-[100%] w-[500px] h-[500px] bg-[#151515] border border-gray-200 text-[#EEEEEE] rounded-xl shadow-sm">
                <h1 className="block text-2xl font-bold pb-2 text-[#C73659]">
                    Update Task Details
                </h1>
                <div className="max-w-sm space-y-3 w-full text-[#EEEEEE]">
                    <label htmlFor="title" className="block text-sm mb-2">
                        Title of Task
                    </label>
                    <input
                        type="text"
                        className="py-3 px-4 block w-full text-[#EEEEEE] bg-[#151515] border border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Enter Your Title"
                        name="title"
                        id="title"
                        value={inputs.title}
                        onChange={change}
                        required
                    />
                </div>
                <div className="max-w-sm space-y-3 w-full">
                    <label htmlFor="description" className="block text-sm mb-2">
                        Task Description
                    </label>
                    <textarea
                        className="py-3 px-4 block w-full text-[#EEEEEE] bg-[#151515] border border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none resize-none"
                        rows="7"
                        placeholder="Write Description"
                        name="description"
                        id="description"
                        value={inputs.description}
                        onChange={change}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#C73659] text-[#EEEEEE] hover:text-[#EEEEEE] focus:outline-none hover:bg-[#A91D3A] disabled:opacity-50 disabled:pointer-events-none"
                    onClick={submit}
                    disabled={
                        !inputs.title ||
                        !inputs.description ||
                        inputs.title.length > 35 ||
                        isUpdating
                    }
                >
                    {isUpdating ? "Updating..." : "Update Todo"}
                </button>
            </div>
        </div>
    );
}

export default Updatetodo;
