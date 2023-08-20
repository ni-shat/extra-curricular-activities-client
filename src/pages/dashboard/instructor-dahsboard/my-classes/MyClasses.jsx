import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import MyClass from './MyClass';
import UseHandleDelete from '../../../../hooks/useHandleDelete';
import Swal from 'sweetalert2';
import useAllClasses_Instructor from '../../../../hooks/useAllClasses_Instructor';

const MyClasses = () => {

    const [allClasses, refetch] = useAllClasses_Instructor();
    console.log("allClasses in where im troubling", allClasses) 
    
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = async (id) => {
        console.log("Hit delet btn")
        
        try {
            console.log('im in try hook dlt')
            const response = await axiosSecure.delete(`/all-classes/${id}`);
    
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
           <div className='w-full pl-16 pr-20 mt-32  '>
            <div className=" h-screen ">
                <table className="table table-pin-rows ">
                    {/* head */}
                    <thead className='z-10'>
                        <tr className='bg-slate-100 '>
                            <th className='text-gray-800 font-roboto-bold text-base w-2'>
                            </th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Classes</th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Total Enrolled</th>
                            <th className='text-gray-800 font-roboto-bold text-base'></th>
                        </tr>
                    </thead>
                    <tbody className='overflow-scroll'>
                        {
                            allClasses?.map((cls, index) => <MyClass key={cls._id} 
                            cls={cls} 
                            index={index} 
                            handleDelete={handleDelete}
                            ></MyClass>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;