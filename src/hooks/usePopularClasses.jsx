import { useQuery } from "@tanstack/react-query";

const usePopularClasses = () => {

    const {data: popularClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/popular-classes');
            return res.json();
        }
    })

    return [popularClasses, loading, refetch]
}

export default usePopularClasses;