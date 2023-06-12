import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses_Instructor = () => {

    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: allClasses = [],  refetch } = useQuery({
        queryKey: ['allClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/users/all-classes?email=${user?.email}`);
            console.log('res from axios', res);
            return res.data;
        }
    })

    return [allClasses, refetch]

}

export default useAllClasses_Instructor;
