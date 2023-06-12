// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";


// const useAddClass = (User) => {

//     const { user, loading } = useContext(AuthContext);

//     const [axiosSecure] = useAxiosSecure();

//     const { data: addClass = [],  refetch } = useQuery({
//         queryKey: ['addClass', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure();
//             console.log('res from axios', res);
//             return res.data;
//         }
//     })

//     return [addClass, loading, refetch]

// }

// export default useAddClass;