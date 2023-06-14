import { useQuery } from "@tanstack/react-query";
import { FaCheckCircle, FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import UseHandleDelete from "../../../../hooks/useHandleDelete";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleInstructorAdmin = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = async (id) => {
        console.log("Hit delet btn")
        
        try {
            console.log('im in try hook dlt')
            const response = await axiosSecure.delete(`/users/${id}`);
    
            console.log("data in delete hookkkk",response.data);
           
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            refetch();
            return response.data;
        } catch (error) {
            console.error('error in deleteeeeeee hook',error);
        }
    }


    return (
        <div className="w-full pl-16 pr-20">
            <Helmet>
                <title>Music School | Manage users</title>
            </Helmet>
            <div className="overflow-scroll h-screen mt-32">
                <table className="table table-pin-rows   ">
                    {/* head */}
                    <thead>
                        <tr className="bg-slate-100 z-10">
                            <th className="text-gray-800 font-roboto-bold text-base"></th>
                            <th className="text-gray-800 font-roboto-bold text-base">Name</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Email</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Role</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Action</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-scroll">
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className="flex gap-3">
                                        <div>
                                            {
                                                user.role === 'admin' ? <button disabled className=" text-green-600 btn-xs bg-green-100 text-base flex items-center gap-2"><span>admin</span>  <FaCheckCircle/> </button>
                                                    :
                                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-xs bg-green-500  text-white">make admin</button>
                                            }
                                        </div>
                                        <div>
                                            {
                                                user.role === 'instructor' ? <button disabled className=" text-blue-600 btn-xs bg-blue-100 text-base flex items-center gap-2"><span>instructor</span>  <FaCheckCircle/> </button>
                                                    :
                                                    <button onClick={() => handleInstructorAdmin(user)} className="btn btn-xs border bg-blue-500  text-white">Make instructor</button>
                                            }
                                        </div>
                                    </div>

                                </td>
                                <td><button onClick={() => handleDelete(user._id)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;