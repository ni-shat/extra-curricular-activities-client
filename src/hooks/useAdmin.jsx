import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    // if(loading){
    //   return { isAdmin: false }
    // }

    // // if(!user && !loading) {
    // //     const isAdmin = false
    // //     return [isAdmin];
    // // }

    // use axios secure with react query
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log("is admin response ",res)
            // console.log(res.data.admin)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;