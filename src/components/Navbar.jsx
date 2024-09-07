import { IoIosNotifications } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import avatar from "../assets/images/avatar.jpg"
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axiosSecure from "../api";
import { setAuthUser } from "../redux/slice/authSlice";
import { useState } from "react";
import useUser from "../hooks/useUser";


const Navbar = () => {
    const [userData,isLoading] = useUser()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [show,setShow] = useState(true)
    const logout = async()=>{
        try {
            const res = await axiosSecure('/logout');
            if (res.data.success) {
                dispatch(setAuthUser(null));
                navigate('/login')
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    if(isLoading){
        <div className="flex justify-center min-h-screen items-center"> <span className="loading loading-spinner text-success"></span></div>
    }
    return (
       <div className="flex justify-between items-center">
        <div className="flex gap-2">
            <div>
                <img src={avatar} alt="" width={50}/>
            </div>
            <div>
              <p className="font-bold text">Shovan</p>
              
                <button className="w-auto px-2 bg-blue-500 text-white rounded-lg" onClick={()=>setShow(false)}>
                    {
                        show? "click here" : `Balance : ${userData?.amount}`
                    }
                </button>
              
            </div>
        </div>
        <div className="flex gap-2">
            {
                userData?.role == 'admin' && <Link className="btn btn-outline" to={'/dashboard'}>Dashboard</Link>
            }
        <IoIosNotifications size={25} />
        <button onClick={logout}><MdLogout size={20}/></button>
           
        </div>
       
       </div>
    );
};

export default Navbar;