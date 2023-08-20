import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ManageClass from './ManageClass';


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: allAvailableClasses = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/all-instructor-classes/admin')
        return res.data;
    })
    console.log(allAvailableClasses)


    return (
        <div className="w-full pl-10 pr-5">
            <Helmet>
                <title>Music School | Manage Classes</title>
            </Helmet>
            <div className="h-screen mt-32">
                <table className="table table-pin-rows   ">

                    <thead>
                        <tr className="bg-slate-100 z-10">
                            <th className="text-gray-800 font-roboto-bold text-base"></th>
                            <th className="text-gray-800 font-roboto-bold text-base">Classes</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Instructor</th>
                            {/* <th className="text-gray-800 font-roboto-bold text-base">Email</th> */}
                            <th className="text-gray-800 font-roboto-bold text-base">Seats</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Price</th>
                            <th className="text-gray-800 font-roboto-bold text-base">status</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Action</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-scroll">
                        {
                            allAvailableClasses.map((cls, index) =>
                                <ManageClass
                                    key={cls._id}
                                    cls={cls}
                                    refetch={refetch}
                                    index={index}></ManageClass>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;