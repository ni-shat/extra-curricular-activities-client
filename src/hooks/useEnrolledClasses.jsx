import { useQuery } from "@tanstack/react-query";

const useEnrolledClasses = () => {

    const {data: enrollClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['enrollClasses'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/enrolled-classes');
            return res.json();
        }
    })

    return [enrollClasses, loading, refetch]
}

export default useEnrolledClasses;