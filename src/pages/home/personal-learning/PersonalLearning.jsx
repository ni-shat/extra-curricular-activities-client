import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const PersonalLearning = () => {
    return (
        <div className='mt-20'>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage="/football.jpg"
                // bg-[url('/b.jpg')]
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='h-[500px] bg-[#1e326e] bg-opacity-40' >
                    <div className='w-[65%]  h-full mx-auto flex flex-col justify-center items-center text-white gap-4 text-center robo'>
                        <p className='font-medium text-2xl'>Private Classes</p>
                        <h5 className='mave text-4xl  font-semibold '> Personalized Learning for Your Journey</h5>
                        <p className='font-extralight pt-3  text-base'>Unlock the full potential of your skills with our private classes. Enjoy one-on-one attention, tailored curriculum, and flexible scheduling to achieve your learning goals. 
                        </p>

                        <button className='mt-5 flex items-center gap-2 mave text-xl rounded-full bg-slate-50 bg-opacity-25 border-b-red-500 border-b-4 px-7 py-2.5 text-black font-extrabold shadow-2xl shadow-[#000000] w-fit
                                hover:bg-black hover:text-white transition-all duration-500 ease-in-out'>Start Today!
                        </button>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default PersonalLearning;