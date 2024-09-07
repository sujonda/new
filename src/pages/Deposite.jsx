import { useSelector } from "react-redux";
import { deposite } from "../api/deposite";


const Deposite = () => {
   const {user} = useSelector(store=>store.auth)

   const handleSummit = async(e) =>{
      e.preventDefault();
      const form = e.target;
      const  packageName = form.package.value;
      const tranId = form.tranId.value;
      const medium = form.medium.value;

      const depositeData = {
         userId : user?.userId,
         packageName,
         tranId,
         medium,
         userEmail: user?.email
      }

     const res = await deposite(depositeData)
   }

    return (
        <div>
           Deposite
           <div className="bg-blue-300 min-h-screen p-10">
                 <div className="bg-white">
                    <p>message</p>
                 </div>
                 <div className="bg-white my-8">
                    <p>Binance</p>
                    <p>Payeer</p>
                    <p>Nogod</p>
                 </div>

                 <div className="flex justify-center">
                    <form action="" onSubmit={handleSummit}>
                      <div className="flex flex-col gap-3">
                      <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='package'
                            >
                               <option value="basic">Basic</option>
                               <option value="gold">Gold </option>
                               <option value="premium">premium</option>
                               <option value="premium">diamond</option>
                            </select>
                            <input
                                className='w-80 md:w-96 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='tranId'
                                id='tran. Id'
                                type='text'
                                placeholder='Transection Id'
                                required
                            />
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='medium'
                            >
                               <option value="nagad">Nagad</option>
                               <option value="binance">Binance</option>
                            </select>
                            <button
                                type="submit"
                                className="bg-rose-500 w-full rounded-md py-3 text-white"
                            >
                                {/* {loader ? (
                                    <TbFidgetSpinner className="animate-spin m-auto" />
                                ) : (
                                    "Continue"
                                )} */}
                                pay
                            </button>
                      </div>
                    </form>
                 </div>

           </div>
        </div>
    );
};

export default Deposite;