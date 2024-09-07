/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({children}) => {
   
    const { user } = useSelector(store => store.auth);
    if(user.role === 'admin') return children
    return <Navigate to='/'></Navigate>
};

export default AdminRoutes;