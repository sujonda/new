/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user} = useSelector(store=>store.auth)
    const navigate = useNavigate();
    useEffect(()=>{
       if(!user){
        navigate('/login')
       }
    },[user,navigate])
    return (
        <>{children}</>
    );
};

export default PrivateRoutes;