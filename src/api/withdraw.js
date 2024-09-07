import axiosSecure from ".";

export const withdraw = async(withDrawData) =>{
    const { data } = await axiosSecure.post(`/withdraw`, withDrawData);
    return data;
  }

  export const getWithdraw = async (email) => {
    const { data } = await axiosSecure(`/withdraw?email=${email}`);
    return data;
  };


  export const updateWithdrawStatus = async (id) =>{
    const {data} = await axiosSecure.put(`/withdraw/${id}`)
    return data;
  }
  