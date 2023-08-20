import ApprovedClass from "./ApprovedClass";



const CategoryTabPanel = ({ classesByCategory, classesOfCategories, isAdmin, isInstructor }) => {



    return (
        <div> 
            {/* <hr className=" w-[85%] mx-auto -mt-7 mb-14" /> */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0  w-full place-items-center  mt-4 
            '>
                {/* value */}
                {
                    classesByCategory.map(cls => <ApprovedClass
                        key={classesOfCategories.indexOf(cls)}
                        cls={cls}
                        isAdmin={isAdmin}
                        isInstructor={isInstructor}

                    ></ApprovedClass>)
                }
                {/* <div>Panel 1</div> */}
            </div>
        </div>

    );
};

export default CategoryTabPanel;