/* eslint-disable react/prop-types */

import { MdDeleteOutline } from "react-icons/md";

import { updateStatus } from "../../api/deposite";


const DepositeDataRow = ({item,index,refetch}) => {

    const handleAccept = async(id) => {
       await updateStatus(id)
         .then(data => {
            if (data.modifiedCount > 0)
                refetch();
        })
        }


    return (
        <tr className='text-center'>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
                <p className='text-gray-900 whitespace-no-wrap'>{index + 1}</p>
            </td>
            

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.userEmail}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.packageName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.tranId}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.medium}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={() => handleAccept(item?._id)} className='relative text-red cursor-pointer'>{item.status!== 'done' &&<MdDeleteOutline></MdDeleteOutline>}</button>
            </td>
            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                <Link to={`/dashboard/update-product/${item?._id}`}>

                    <button className='relative text-green font-bold cursor-pointer'><GrUpdate></GrUpdate></button>
                </Link>
            </td> */}
        </tr>
    );
};

export default DepositeDataRow;