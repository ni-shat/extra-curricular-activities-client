import React from 'react';

const ApprovedClass = ({ cls }) => {

    // const { classes } = cls;

    console.log(cls)

    return (
        <div>


            {
                cls.status !== 'denied' && <div >
                    <div className={`relative border border-transparent w-[1/4]`}>

                        <img className="w-full h-[390px] object-cover transition-transform duration-500 transform origin-center cursor-pointer hover:scale-110 bg-gradient-to-b from-transparent to-black mix-blend-multiply" src={cls.image} alt="" />

                        <div className="text-white px-6 flex flex-col h-fit">
                            {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {c?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                            <p className="text-3xl font-roboto">{cls.title}</p>
                        </div>
                        <div className="text-white px-6 flex flex-col h-fit">
                            {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {c?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                            <p className="text-3xl font-roboto">{cls.instructor}</p>
                        </div>
                        <div className="text-white px-6 flex flex-col h-fit">
                            {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {c?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                            <p className="text-3xl font-roboto">{cls.price}</p>

                        </div>
                        <button className='btn'>Select</button>
                    </div>

                </div>
            }

        </div>
    );
};

export default ApprovedClass;