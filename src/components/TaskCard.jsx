/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskCard = ({ item, index, handleAdd }) => {

    const { _id, taskName, taskUrl } = item



    return (
        <div className="card card-compact bg-base-100  shadow-xl">


            <div className="card-body">
                <div className="flex items-center gap-5">
                    <FaTasks />
                    <h2 className="card-title">{taskName}</h2>
                </div>
                <p className="font-bold text-xs">To complete task click to view add button</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline" onClick={() => handleAdd(_id)}><a href={taskUrl} target="_blank">View add</a></button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;