/* eslint-disable no-unused-vars */
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { addTask, updateTaskStatus } from "../../api/task";
import toast from "react-hot-toast";


const Addtask = () => {
    const [loader, setLoader] = useState(false)

    const handleUpdate = () =>{
        updateTaskStatus()
        .then(data => {
            if (data.modifiedCount > 0) {
                console.log("update");
            }
        })
        .then(err => console.log(err));
    }

    const handleSummit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const task = form.task.value;
        const url = form.url.value
        const taskData = {
            taskName: task,
            taskUrl: url
        }
        try {
            setLoader(true)
            const res = await addTask(taskData)
            if (res.success) {
                toast.success(res.message)
            }
        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setLoader(false)
        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSummit}>
                <div className="flex flex-col gap-3">
                    <input
                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                        name='task'
                        id='task'
                        type='text'
                        placeholder='Task Name'
                        required
                    />
                    <input
                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                        name='url'
                        id='url'
                        type='text'
                        placeholder='Task Url'
                        required
                    />

                    <button
                        type="submit"
                        className="bg-rose-500 w-full rounded-md py-3 text-white"
                    >
                        {loader ? (
                            <TbFidgetSpinner className="animate-spin m-auto" />
                        ) : (
                            "Continue"
                        )}
                    </button>
                </div>
            </form>
            <div className="flex justify-end ">
                <button onClick={handleUpdate} className="btn btn-outline">Reset button</button>
            </div>
        </div>
    );
};

export default Addtask;
