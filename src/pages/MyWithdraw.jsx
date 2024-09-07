import useMyWithdraw from "../hooks/useMyWithdraw";


const MyWithdraw = () => {
    const [withdraw, refetch, isLoading] = useMyWithdraw();
    
    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr className='text-center'>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            #
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            Date
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal'
                                        >
                                            Withdraw Amount
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            Mobile Number/Id
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            medium
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal'
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {

                                        withdraw?.map((item, index) => (<tr key={index} className='text-center'>
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
                                                <p className='text-gray-900 whitespace-no-wrap'>{item?.payment_amount} USD</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{item?.paymentId}</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{item?.medium}</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{item?.status || 'pending'}</p>
                                            </td>
                                        </tr>))

                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default MyWithdraw;
