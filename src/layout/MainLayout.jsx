import { Outlet } from "react-router-dom";



const MainLayout = () => {

    return (
        <div className="max-w-[2520px] mx-auto px-2">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;