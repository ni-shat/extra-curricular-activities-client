import React from 'react';

const Teacher = ({teacher}) => {
    console.log(teacher)
    return (
        <div>
            <div key={teacher._id} className={`relative border border-transparent w-[1/4]`}>

                <img className="w-full h-[390px] object-cover transition-transform duration-500 transform origin-center cursor-pointer hover:scale-110 bg-gradient-to-b from-transparent to-black mix-blend-multiply" src={teacher.instructorImage} alt="" />


                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-multiply transition duration-300"></div> */}
                <div className={`absolute inset-0 bg-black opacity-50 `}></div>
                <div className="text-white absolute top-[320px] px-6 flex flex-col h-fit">
                    {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {teacher?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                    <p className="text-3xl font-roboto">{teacher.name}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Teacher;