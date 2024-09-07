import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import MyTask from "../pages/MyTask";
import Deposite from "../pages/Deposite";
import Package from "../pages/Package";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Withdraw from "../pages/Withdraw";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../layout/DashboardLayout";
import DepositeRequest from "../pages/Dashboard/DepositeRequest";
import Profile from "../pages/Profile";
import Addtask from "../pages/Dashboard/Addtask";
import MyWithdraw from "../pages/MyWithdraw";
import WithdrawRequest from "../pages/Dashboard/WithdrawRequest";
import AdminRoutes from "./AdminRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoutes><MainLayout></MainLayout></PrivateRoutes>,
      children:[
        {
            path:'/',
            element: <PrivateRoutes><Home></Home></PrivateRoutes>
        },
        {
            path:'/task',
            element: <PrivateRoutes><MyTask></MyTask></PrivateRoutes>
        },
        // {
        //   path:`/task/:id`,
        //   element: <TaskDetails></TaskDetails>,
        //   loader:({params}) => getTask(params.id)
        // },
        {
            path: '/deposite',
            element: <PrivateRoutes><Deposite></Deposite></PrivateRoutes>
        },
        {
            path: '/withdraw',
            element:<PrivateRoutes><Withdraw></Withdraw></PrivateRoutes>
        },
        {
            path: '/my-withdraw',
            element:<PrivateRoutes><MyWithdraw></MyWithdraw></PrivateRoutes>
        },
        {
            path: '/package',
            element: <Package></Package>
        },
        {
            path: '/package',
            element: <PrivateRoutes><Package></Package></PrivateRoutes>
        },
        {
            path: '/profile',
            element: <PrivateRoutes><Profile/></PrivateRoutes>
        },
      ]
    },
    {
      path: '/signup',
      element: <Signup></Signup>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
       path:'/dashboard',
       element:<PrivateRoutes><AdminRoutes><DashboardLayout></DashboardLayout></AdminRoutes></PrivateRoutes>,
       children:[
        {
          path:'add-task',
          element:<PrivateRoutes><AdminRoutes><Addtask></Addtask></AdminRoutes></PrivateRoutes>
        },
        {
          path:'deposite',
          element:<PrivateRoutes><AdminRoutes><DepositeRequest></DepositeRequest></AdminRoutes></PrivateRoutes>
        },
        {
          path:'withdraw',
          element:<PrivateRoutes><AdminRoutes><WithdrawRequest></WithdrawRequest></AdminRoutes></PrivateRoutes>
        },
       ]
    }
  ]);


  export default router