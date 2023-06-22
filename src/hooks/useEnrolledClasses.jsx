import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useEnrolledClasses = () => {
    const {user} = useContext(AuthContext);

    const {data: enrollClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['enrollClasses'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/enrolled-classes?email=${user?.email}`);
            return res.json();
        }
    })

    return [enrollClasses, loading, refetch]
}

export default useEnrolledClasses;