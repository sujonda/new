import axiosSecure from ".";

export const saveUser = async (user) => {
     const { data } = await axiosSecure.post(`/register`, user);
      return data;
  };


  export const loginUser = async(user) =>{
    const { data } = await axiosSecure.post(`/login`, user);
    return data;
  }

  export const getToken = async (email) => {
    const { data } = await axiosSecure.post(`/login`, email);
    console.log("token revi ", data);
    return data;
  };

  export const clearCookie = async () => {
    const { data } = await axiosSecure.get("/logout");
    return data;
  };

  export const getSingleUser = async (email) => {
    const { data } = await axiosSecure(`/user/${email}`);
    return data;
  };