import axiosSecure from ".";

export const deposite = async(depositeData) =>{
    const { data } = await axiosSecure.post(`/deposite`, depositeData);
    return data;
  }

  export const updateStatus = async (id) =>{
    const {data} = await axiosSecure.put(`/deposite/${id}`)
    return data;
  }
  