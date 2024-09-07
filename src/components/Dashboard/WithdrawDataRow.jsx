/* eslint-disable react/prop-types */

import { MdDeleteOutline } from "react-icons/md";
import { updateWithdrawStatus } from "../../api/withdraw";


const WithdrawDataRow = ({item,index,refetch}) => {
    const handleAccept =  async(id) =>{
        await updateWithdrawStatus(id)
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
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
                                                {(() => {
                                                    const date = new Date(item?.
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
                                                        <>
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {formattedDate}
                                                            </p>
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {formattedTime}
                                                            </p>
                                                        </>
                                                    );
                                                })()}
                                            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.userEmail}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.payment_amount}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.paymentId}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.medium}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={() => handleAccept(item?._id)} className='relative text-red cursor-pointer'>{item.status !== 'completed' && <MdDeleteOutline></MdDeleteOutline>}</button>
            </td>
           
        </tr>
    );
};

export default WithdrawDataRow;