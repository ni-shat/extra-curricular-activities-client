
import img from '../../../assets/m0.jpg'
import '../../../index.css'
import Navbar from '../../shared/navbar/Navbar';

const Banner = () => {
    return (
        <div className='relative bg-opacity-50'>
            <div className='h-screen '>
                {/* <img className='w-2/4 absolute right-0 -top-60' src={img} alt="" /> */}
                <img className='h-full w-full object-cover' src={img} alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter"></div>
            <div>
                <h3 className='heading text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>
                    Lose Yourself to the Beat <br />
                </h3>
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-4'>
                <button className='bg-white py-4 uppercase mt-64 px-14 rounded-full font-bold text-xl text-[#C20909]'>Apply today</button>
                <button className=' py-4 uppercase mt-64 px-14 rounded-full bg-transparent text-xl border-2 text-white font-bold'>View more</button>

            </div>
            <div className='absolute top-0 bg-transparent w-full'>
                <Navbar></Navbar>
            </div>


        </div>

    );
};

export default Banner;