import axiosSecure from ".";

export const addTask = async(taskData) =>{
    const { data } = await axiosSecure.post(`/task`, taskData);
    return data;
  }

  export const getAllTask = async () =>{
    const {data} = await axiosSecure('/task')
    return data
}

export const getTask = async (id) =>{
  const {data} = await axiosSecure(`/task/${id}`)
  return data
}


export const updateTaskStatus = async () => {
  const { data } = await axiosSecure.put(`/updatestatus`);
  return data;
};