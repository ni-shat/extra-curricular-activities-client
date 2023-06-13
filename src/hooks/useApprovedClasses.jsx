import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {

    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: all_Classes = [],  refetch } = useQuery({
        queryKey: ['all_Classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/users/all-approved-classes');
            console.log('res from axios', res);
            return res.data;
        }
    })

    return [all_Classes, refetch]

}

export default useAllClasses;
