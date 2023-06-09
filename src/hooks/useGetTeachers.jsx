import { useQuery } from "@tanstack/react-query";

const useGetTeachers = () => {

    const {data: getTeachers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popularTeachers'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/popular-instructors');
            return res.json();
        }
    })

    return [getTeachers, loading, refetch]
}

export default useGetTeachers;