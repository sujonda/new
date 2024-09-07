import useUser from "../hooks/useUser";
import avatar from "../assets/images/avatar.jpg"
import { CgProfile } from "react-icons/cg";
import { LuPackagePlus } from "react-icons/lu";
import { FaRegFileCode, FaUserFriends } from "react-icons/fa";
import { IoTime } from "react-icons/io5";


const Profile = () => {
    const [userData, isLoading] = useUser();

    if (isLoading) {
        <div className="flex justify-center min-h-screen items-center"> <span className="loading loading-spinner text-success"></span></div>
    }
    return (
        <div className="bg-blue-500 rounded-lg min-h-screen">
            <div className=" bg-white py-4 pl-8">
                <p className="font-bold text-2xl">My Profile</p>
            </div>
            <div className="flex justify-center my-10">
                <div className="flex flex-col items-center">
                    <img src={avatar} className="h-24 rounded-full" />
                    <p className="text-white font-bold text-xl">{userData?.name}</p>
                </div>
            </div>

            <div className=" bg-white m-8 rounded-lg pl-3 py-3 space-y-2">
                <div className="flex items-center gap-2">
                    <CgProfile />
                    <p className="font-bold">Name: {userData?.name}</p>
                </div>
                <hr />
                <div className="flex items-center gap-2">
                    <LuPackagePlus />
                    <p className="font-bold">Package : {userData?.package == 'none' ? 'No Package activated' : userData?.package}</p>
                </div>
                <hr />

                <div className="flex  gap-2">
                    <div className="mt-1">
                    <IoTime />
                    </div>
                    <p className="font-bold">Expire :  {(() => {
                        const date = new Date(userData?.
                            createAt);
                        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
                            .toString()
                            .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
                        const formattedTime = `${date
                            .getHours()
                            .toString()
                            .padStart(2, "0")}:${date
                                .getMinutes()
                                .toString()
                                .padStart(2, "0")}:${date
                                    .getSeconds()
                                    .toString()
                                    .padStart(2, "0")}`;
                        return (
                            <div className="flex gap-2">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {formattedDate}
                                </p>
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {formattedTime}
                                </p>
                            </div>
                        );
                    })()}</p>
                </div>
                <hr />
                <div className="flex items-center gap-2">
                    <FaUserFriends />
                    <p className="font-bold">Total Refer: {userData?.referCount}</p>
                </div>
                <hr />
                <div className="flex items-center gap-2">
                    <FaRegFileCode />
                    <p className="font-bold">Refer Code: {userData?.userId}</p>
                </div>
                <hr />

            </div>
        </div>
    );
};

export default Profile;