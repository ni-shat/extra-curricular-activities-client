import { useQuery } from "@tanstack/react-query";

const useTeachers = () => {

    const {data: getTeachers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['teachers'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json();
        }
    })

    return [getTeachers, loading, refetch]
}

export default useTeachers;
