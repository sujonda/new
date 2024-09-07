import { BiSupport, BiTask } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuPackageCheck } from "react-icons/lu";
import { MdWorkHistory } from "react-icons/md";
import { PiHandWithdraw } from "react-icons/pi";
import { Link } from "react-router-dom";



const Service = () => {

    return (
        <div className="my-6">
            <h2 className="font-bold text-xl text-center mb-5">All Services</h2>
            <div className="bg-yellow-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-300 duration-300 max-w-md mx-auto m-4 py-10 space-y-6 rounded-xl">

                <div className="flex justify-evenly">
                    <Link to={'/task'} className="flex flex-col justify-center items-center">
                        <BiTask className="bg-white rounded-full p-2" color="blue" size={40} />
                        <p className="font-bold text-xs">My Task</p>
                    </Link>


                    <Link to={'/package'} className="flex flex-col justify-center items-center">
                        <LuPackageCheck className="bg-white rounded-full p-2" color="blue" size={40} />
                        <p className="font-bold text-xs">All Packages</p>
                    </Link>


                    <Link to={'/withdraw'} className="flex flex-col justify-center items-center">
                        <PiHandWithdraw className="bg-white rounded-full p-2" color="blue" size={40} />
                        <p className="font-bold text-xs">Withdraw</p>
                    </Link>

                </div>

                <div className="flex justify-evenly">

                   
                <Link to={'/profile'} className="flex flex-col justify-center items-center">
                        <CgProfile className="bg-white rounded-full p-2" color="blue" size={40} />
                        <p className="font-bold text-xs">Profile</p>
                    </Link>

                  
                    <Link to={'/my-withdraw'} className="flex flex-col justify-center items-center">
                        <MdWorkHistory className="bg-white rounded-full p-2" color="blue" size={40} />
                        <p className="font-bold text-xs">Withdraw History</p>
                    </Link>


                    <Link to={'/support'} className="flex flex-col justify-center items-center">
                        <BiSupport className="bg-white rounded-full p-2" color="blue" size={40} />
                        <p className="font-bold text-xs">Support</p>
                    </Link>
            
                </div>


            </div>

        </div>
    );
};

export default Service;