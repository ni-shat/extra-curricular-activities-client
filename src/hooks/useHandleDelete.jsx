import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";



const UseHandleDelete = async (url) => {

    const [axiosSecure] = useAxiosSecure();

    console.log('im in hook dlt')
    try {
        console.log('im in try hook dlt')
        const response = await axiosSecure.delete(url);

        console.log(response.data);
       
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
        return response.data;
    } catch (error) {
        console.error('error in hook',error);
    }
}

export default UseHandleDelete;