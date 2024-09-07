import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../api";
import WithdrawDataRow from "../../components/Dashboard/WithdrawDataRow";


const WithdrawRequest = () => {

    const getWithdraw = async () => {
        const res = await axiosSecure.get('/withdraw')
        return res
    }

    const {
        data: withdraws,
        isLoading,
        isSuccess,
        refetch,
    } = useQuery({
        queryKey: ['withdraw'],
        queryFn: getWithdraw,
    })

    console.log(withdraws);
    
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            {
                    <div className='py-8'>
                        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                <table className='min-w-full leading-normal'>
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
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                            >
                                                email
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal'
                                            >
                                                withdraw amount
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                            >
                                                tranId
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
                                                Mark done
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>{/* Room row data */}
                                        {
                                             withdraws?.data.map((item, index) => <WithdrawDataRow key={item._id} item={item} index={index} refetch={refetch}></WithdrawDataRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            }


        </div>
    );
};

export default WithdrawRequest;