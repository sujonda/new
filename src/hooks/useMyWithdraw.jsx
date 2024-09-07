import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getWithdraw } from "../api/withdraw";


const useMyWithdraw = () => {
   
    const { user } = useSelector(store => store.auth);
    const { refetch, data: withdraw = [],isLoading} = useQuery({
        queryKey : ['withdraw',user?.email],
        queryFn: async () => {
            return await getWithdraw(user?.email)
          },
    })
    return [withdraw,refetch,isLoading];
       
    
};

export default useMyWithdraw;