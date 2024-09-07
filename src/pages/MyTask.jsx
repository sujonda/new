/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getAllTask } from "../api/task";
import useUser from "../hooks/useUser";
import TaskCard from "../components/TaskCard";
import axiosSecure from "../api";


const MyTask = () => {
    const [userData, isLoading] = useUser();
    const [task, setTask] = useState([])
    let displayTask;
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        getAllTask()
            .then(data => {
                setTask(data);
            })
        setLoader(false)
    }, [])

    if (isLoading || loader) {
        <div className="flex justify-center min-h-screen items-center"> <span className="loading loading-spinner text-success"></span></div>
    }


    displayTask = task;


    if (userData.package === 'Basic') {
        displayTask = task.slice(0, 5)
    }
    else if (userData.package === 'Standard') {
        displayTask = task.slice(0, 10)
    }
    else if (userData.package === 'Premium') {
        displayTask = task.slice(0, 15)
    }
    else if (userData.package === 'Ultra') {
        displayTask = task.slice(0, 20)
    }

    const handleAdd = async (taskId) => {
        const res = await axiosSecure.put(`/task/${userData._id}`, { taskId })
    }


    displayTask = displayTask.filter(element => !userData?.completedTasks?.includes(element?._id));


    if(isLoading){
        <div className="flex justify-center min-h-screen items-center"> <span className="loading loading-spinner text-success"></span></div>
    }

    return (
        <div className="m-10">

            <div className="text-center font-bold text-green-900 mb-10">
              <p>My Balance: {userData?.amount}</p>
            </div>

            {
                userData?.expireAt < Date.now() ? 'Please Buy a plane to Income'

                    : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            displayTask.length?
                            displayTask?.map((item, index) => <TaskCard key={index} handleAdd={handleAdd} item={item} index={index}></TaskCard>):
                           <p className="text-center font-bold text-red-500">Todays all Task done</p>
                        }
                    </div>

            }
        </div>

    );
};

export default MyTask;