import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useSelectedClasses = () => {

    const {user} = useContext(AuthContext);

    const { data: selectedClasses = [], isLoading: loading , refetch} = useQuery({
        queryKey: ['selectedclasses', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/selected-classes?email=${user?.email}`);
            return res.json();
        }
    })

    return [selectedClasses, loading, refetch]
}

export default useSelectedClasses;
