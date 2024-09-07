import { useLoaderData } from "react-router-dom";


const TaskDetails = () => {
    const { _id, taskName,taskUrl } = useLoaderData()
    return (
        <div className="w-40 h-40 bg-gray-100 mx-auto flex items-center">
           <div>
              <h1>{taskName}</h1>
               <button className="btn btn-outline"><a href={taskUrl}>Click Here</a></button>
           </div>
        </div>
    );
};

export default TaskDetails;