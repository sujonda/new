/* eslint-disable no-unused-vars */
import { useState } from "react";
import DepositeModal from "../components/DepositeModal";
import { useSelector } from "react-redux";
import { deposite } from "../api/deposite";
import toast from "react-hot-toast";


const Package = () => {

    let [isOpen, setIsOpen] = useState(false)
    const [item, setItem] = useState("None")
    const {user} = useSelector(store=>store.auth)
    const [loader,setLoader]= useState(false)
    

    const handleDeposite = (item) => {
        setIsOpen(true)
        setItem(item)
    }

    function closeModal() {
        setIsOpen(false)
    }


    const handleSummit = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const tranId = form.tranId.value;
        const medium = form.medium.value;
  
        const depositeData = {
           userId : user?.userId,
           packageName:item,
           tranId,
           medium,
           userEmail: user?.email,
           status:'not-done',
           createAt: Date.now(),
        }
  
       try {
        setLoader(true)
        const res = await deposite(depositeData)
       if(res.success){
        toast.success(res.message)
       }
       } catch (error) {
        toast.error('Deposite Request Failed')
       }finally{
           setLoader(false)
           setIsOpen(false)
       }
     }
  

    return (
        <div className="bg-blue-500 min-h-screen">
            <div className=" bg-white py-4 pl-8">
                <p className="font-bold text-2xl">All Packages</p>
            </div>

            <div className="bg-white m-6 p-4 rounded-lg">
                <p className="font-semibold">Binance : <span className="text-blue-700 font-bold">hdhfff</span></p>
                <p className="font-semibold">Binance : <span className="text-blue-700 font-bold">hdhfff</span></p>
                <p className="font-semibold">Binance : <span className="text-blue-700 font-bold">hdhfff</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4 pb-6">
                <div className="bg-white p-10 rounded-lg">
                    <h1 className="text-center font-bold text-xl mb-1">Basic <span>( 5 USD )</span></h1>
                    <hr />
                    <div className="my-3 space-y-1">
                        <p className="text-sm font-bold">Daily 5 ads</p>
                        <p className="text-sm font-bold">Daily .35 USD</p>
                        <p className="text-sm font-bold">Overall 7 USD</p>
                        <p className="text-sm font-bold">Validity 20 Days</p>
                    </div>
                    <button onClick={() => handleDeposite('Basic')} className="bg-rose-500 w-full rounded-md py-3 text-white">Pay</button>
                </div>
                <div className="bg-white p-10 rounded-lg">
                    <h1 className="text-center font-bold text-xl mb-1">Standard <span>( 10 USD )</span></h1>
                    <hr />
                    <div className="my-3 space-y-1">
                        <p className="text-sm font-bold">Daily 10 ads</p>
                        <p className="text-sm font-bold">Daily .70 USD</p>
                        <p className="text-sm font-bold">Overall 14 USD</p>
                        <p className="text-sm font-bold">Validity 20 Days</p>
                    </div>
                    <button onClick={() => handleDeposite('Standard')} className="bg-rose-500 w-full rounded-md py-3 text-white">Deposite Now</button>
                </div>
                <div className="bg-white p-10 rounded-lg">
                    <h1 className="text-center font-bold text-xl mb-1">Premium <span>( 15 USD )</span></h1>
                    <hr />
                    <div className="my-3 space-y-1">
                        <p className="text-sm font-bold">Daily 15 ads</p>
                        <p className="text-sm font-bold">Daily 1.05 USD</p>
                        <p className="text-sm font-bold">Overall 21 USD</p>
                        <p className="text-sm font-bold">Validity 20 Days</p>
                    </div>
                    <button onClick={() => handleDeposite('Premium')} className="bg-rose-500 w-full rounded-md py-3 text-white">Pay</button>
                </div>
                <div className="bg-white p-10 rounded-lg">
                    <h1 className="text-center font-bold text-xl mb-1">Ultra <span>( 20 USD )</span></h1>
                    <hr />
                    <div className="my-3 space-y-1">
                        <p className="text-sm font-bold">Daily 20 ads</p>
                        <p className="text-sm font-bold">Daily 1.40 USD</p>
                        <p className="text-sm font-bold">Overall 28 USD</p>
                        <p className="text-sm font-bold">Validity 20 Days</p>
                    </div>
                    <button onClick={() => handleDeposite('Ultra')} className="bg-rose-500 w-full rounded-md py-3 text-white">Pay</button>
                </div>
            </div>

            {
                <DepositeModal
                    closeModal={closeModal}
                    isOpen={isOpen}
                    item={item}
                    handleSummit={handleSummit}
                    loader={loader}
                >
                </DepositeModal>
            }
        </div>
    );
};

export default Package;