import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {

   
    const { data: all_Classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['all_Classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-approved-classes');

            return res.json();
        }
    })

    return [all_Classes, refetch]

}

export default useAllClasses;
