import toast from "react-hot-toast";
import useUser from "../hooks/useUser";
import { withdraw } from "../api/withdraw";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";



const Withdraw = () => {

    const [userData, refetch, isLoading] = useUser();

    const { referCount, amount, payment_refer } = userData;
    // console.log(payment,referCount,amount);

    const [loader,setLoader] = useState(false)

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const paymentId = form.paymentId.value;
        const payment_amount = Number(form.payment_amount.value);
        const medium = form.medium.value;

        let refer;
        if (payment_amount == 3)
            refer = payment_refer + 1;
        else if (payment_amount == 5)
            refer = payment_refer + 2;
        else if (payment_amount == 7)
            refer = payment_refer + 3;

        if (payment_amount > amount) {
            toast.error('Insufficient Balance')
        } else if (refer > referCount) {
            toast.error(`You need ${refer - referCount} refers to withdraw amount`)
        } else {
            const withDrawData = {
                userId: userData?.userId,
                userEmail: userData?.email,
                paymentId,
                payment_amount,
                medium,
                refer,
                createAt: Date.now()
            }
            try {
                setLoader(true)
                const res = await withdraw(withDrawData);
                if (res.success) {
                    toast.success(res.message)
                    refetch();
                }
            } catch (error) {
                toast.error(error)
            }finally{
                setLoader(false)
            }
        }

    }




    return (
        <div>
            {
                isLoading ? <div className="flex justify-center min-h-screen items-center"> <span className="loading loading-spinner text-success"></span></div> :
                    <div className="bg-blue-500 min-h-screen">
                        <div className=" bg-white py-4 pl-8">
                            <p className="font-bold text-2xl">Withdraw</p>
                        </div>

                        <div className="h-16 m-6 flex items-center justify-center bg-white rounded-lg">
                            <p className="font-semibold">Notice: Payment will sent within 24 Hours</p>
                        </div>


                        <div className="bg-white m-6 rounded-lg p-2">
                            <p className="text-center font-bold text-blue-900 mt-6">Balance: {userData?.amount} USD</p>
                            <div className="py-10 space-y-2">
                                <p className="text-center font-semibold text-sm">Enter Your Payment Information</p>
                                <div className="max-w-md mx-auto bg-yellow-300 rounded-lg p-7">
                                    <form action="" onSubmit={handleSubmit} >
                                        <div className="flex flex-col gap-3 space-y-3">
                                            <input
                                                className='w-full font-bold px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                                name='paymentId'
                                                id='paymentId'
                                                type='text'
                                                placeholder='Payment Id/Phone'
                                                required
                                            />

                                            <select
                                                required
                                                className='w-full font-bold px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                                name='payment_amount'
                                            >
                                                {userData?.payment == 0 && <option value="1">1 Dollar</option>}
                                                {userData?.payment > 0 && <option value="3">3 Dollar</option>}
                                                {userData?.payment > 0 && <option value="5">5 Dollar</option>}
                                                {userData?.payment > 0 && <option value="7">7 Dollar</option>}


                                            </select>

                                            <select
                                                required
                                                className='w-full font-bold px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                                name='medium'
                                            >
                                                <option value="nagad">Nagad</option>
                                                <option value="binance">Binance</option>
                                                <option value="payeer">Payeer</option>
                                            </select>


                                            <button
                                                type="submit"
                                                className="bg-rose-500 w-full font-bold rounded-md py-3 text-white"
                                            >
                                                {loader ? (
                                                    <TbFidgetSpinner className="animate-spin m-auto" />
                                                ) : (
                                                    "Continue"
                                                )}
                                                
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>






                    </div>
            }
        </div>
    );
};

export default Withdraw;