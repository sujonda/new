
import { getSingleUser } from '../api/Auth';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useUser = () => {
    const { user } = useSelector(store => store.auth);
    
    const {refetch ,data: userData = {},isLoading } =useQuery({
        enabled: !!user?.email,
        queryKey : ['user'],
        queryFn : async () =>{
            return await getSingleUser(user?.email);
        }
    })

   
    return [userData,refetch,isLoading];
        
    
};

export default useUser;