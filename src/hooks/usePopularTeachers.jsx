import { useQuery } from "@tanstack/react-query";

const usePopularTeachers = () => {

    const {data: getPopularTeachers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popularTeachers'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/popular-instructors');
            return res.json();
        }
    })

    return [getPopularTeachers, loading, refetch]
}

export default usePopularTeachers;
