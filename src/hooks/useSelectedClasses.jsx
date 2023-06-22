import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {

    const { user, loading } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { data: selectedClasses = [],  refetch } = useQuery({
        queryKey: ['selectedclasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/all-selected-classes?email=${user?.email}`);
            console.log('res from axios', res);
            return res.data;
        }
    })

    return [selectedClasses, refetch]

}

export default useSelectedClasses;
