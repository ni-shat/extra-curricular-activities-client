
import { Link } from 'react-router-dom';
import ActiveLink from '../../../../components/ActiveLink';
import { FaHome } from 'react-icons/fa';
import logo from '../../../../assets/logo-black.svg'

const ULStudents = () => {
    return (
        <div>
            <ul className=" px-8  -mt-8  w-80 h-full">
                        {
                            <>
                                <li className="flex">
                                    <Link className="w-[30%]" to='/'><img className='w-[100%] -ml-2' src={logo} alt="" /></Link>
                                    {/* <li className="text- mt-2">hi</li> */}
                                </li>
                                <li className="text-transparent mt-2">hi</li>
                                <li>
                                    <ActiveLink to="/dashboard/userHome">
                                        <button className="flex items-center gap-2 mb-5 mt-3"><FaHome></FaHome> <p>User Home</p></button>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/selected-classes"> <button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Selected Classes</p></button>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/enrolled-classes"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Enrolled Classes</p></button>
                                    </ActiveLink>
                                </li>
                            </>
                        }

                        <div className="divider h-[0.1px] bg-black w-[80%]"></div>
                        <li><ActiveLink to="/"><button className="flex items-center gap-2 my-5"><FaHome></FaHome> <p>User Home</p></button> </ActiveLink> </li>
                        <li><ActiveLink to="/menu"> <button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>User ALl Classes</p></button> </ActiveLink></li>
                        <li><ActiveLink to="/order/salad"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Enroll</p></button> </ActiveLink></li>
                        <li><ActiveLink to="/order/salad"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>About Us</p></button> </ActiveLink></li>
                    </ul>
        </div>
    );
};

export default ULStudents;