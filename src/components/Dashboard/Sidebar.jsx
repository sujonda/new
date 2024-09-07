
import { useState } from 'react'

import { AiOutlineBars } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'
import { MdOutlineSpaceDashboard } from 'react-icons/md'




// import AdminMenu from './AdminMenu'
// import ClientMenu from './ClientMenu'



const Sidebar = () => {
    const [isActive, setActive] = useState(false)



    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }


    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to={'/'} className=''>
                            <p>Logo</p>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            <Link to={'/'} className='hidden md:block'>
                                <p>Logo</p>
                            </Link>
                        </div>
                    </div>


                    <div className='flex flex-col justify-between flex-1 mt-6'>


                        <nav>

                            <MenuItem
                                icon={MdOutlineSpaceDashboard}
                                label='Dashboard'
                                address='/dashboard'
                            />
                            <MenuItem
                                icon={MdOutlineSpaceDashboard}
                                label='Add Task'
                                address='/dashboard/add-task'
                            />
                            <MenuItem
                                icon={MdOutlineSpaceDashboard}
                                label='Deposite'
                                address='/dashboard/deposite'
                            />
                            <MenuItem
                                icon={MdOutlineSpaceDashboard}
                                label='Withdraw'
                                address='/dashboard/withdraw'
                            />




                        </nav>
                    </div>
                </div>

                <div>



                </div>
            </div>
        </>
    )
}

export default Sidebar