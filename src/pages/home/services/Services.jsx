import banner from '../../../assets/bg-3-copy.jpg';

const Services = () => {
    return (
        <div>
            <div className='mt-20 relative'>
                <img className='w-full h-[700px] object-cover ' src={banner} alt="" />
                <div className={`absolute inset-0 bg-black opacity-30 bg-blend-multiply `}></div>
                <div className='flex justify-center gap-4 absolute  w-[78%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex flex-col p-16 font-semibold text-white space-y-6 w-[30%] '>
                        <p className='text-xl'>FROM</p>
                        {/* <p className='text-red-500 font-bold text-7xl'>$40</p> */}
                        <p className='text-red-500 font-bold text-7xl gap-1 flex items-center'>
                            <p className='text-5xl'>$</p> <span>40</span>
                        </p>
                        <h3>PAY AS YOU GO LESSION</h3>
                        <hr className='w-1/4' />
                        <p className='leading-8 font-normal'>Expand Your Musical Horizons at Your Own Pace without long-term commitments.</p>
                    </div>
                    <div className='flex flex-col p-16 font-semibold text-white space-y-6 w-[30%] border-2 border-red-500'>
                        <p className='text-xl'>FROM</p>
                        <p className='text-red-500 font-bold text-7xl gap-1 flex items-center'>
                            <p className='text-5xl'>$</p> <span>250</span>
                        </p>
                        <h3>5 PRIVATE CLASSES</h3>
                        <hr className='w-1/4' />
                        <p className='leading-8 font-normal'>Unlock Your Full Musical Potential with Personalized Instruction.</p>
                    </div>
                    <div className='flex flex-col p-16 font-semibold text-white space-y-6 w-[30%] '>
                        <p className='text-xl'>FROM</p>
                        {/* <p className='text-red-500 font-bold text-7xl space-y-3'>$480</p> */}
                        <p className='text-red-500 font-bold text-7xl gap-1 flex items-center'>
                            <p className='text-5xl'>$</p> <span>480</span>
                        </p>
                        <h3>10 GROUP CLASSES</h3>
                        <hr className='w-1/4' />
                        <p className='leading-8 font-normal'>Learn, Collaborate, and Grow Together in a Dynamic Musical Community.</p>
                    </div>
                </div>
            </div>
            <div className='bg-red-600  flex px-44 justify-between py-14 items-center font-roboto-bold z-10'>
                    <div className='text-[43px]'>
                        <h3 className='text-white font-bold'>Can't find what you're looking for?</h3>
                    </div>
                    <div>
                        <button className='btn btn-lg bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-red-600'>
                            Get in touch
                        </button>
                    </div>
                </div>
        </div>

    );
};

export default Services;