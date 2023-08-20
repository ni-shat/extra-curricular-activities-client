import React, { useState } from 'react';
import useAllClasses from '../../hooks/useApprovedClasses';
import ApprovedClass from './ApprovedClass';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useStudent from '../../hooks/useStudent';
import { useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RetrieveCategories from '../../utilities/RetrieveCategories';
import CategoryTabPanel from './CategoryTabPanel';



const AllApprovedClasses = () => {

    const location = useLocation();
    // console.log("location", location.pathname)
    if (location.pathname === '/all-approved-classes') {
        // console.log("NIhstatat");
    }

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    // const [isStudent] = useStudent();

    const [tabIndex, setTabIndex] = useState(0);
    // const { categoriesAr, toysOfCategories } = RetrieveCategories();
    const [selectedOption, setSelectedOption] = useState('search by category');




    const [all_Classes, refetch] = useAllClasses();
    // console.log("in all approved classes", all_Classes);

    const { categoriesAr, classesOfCategories } = RetrieveCategories();



    return (
        <div className=''>
            <div>
                <h3 className='font-monoton opacity-10 pt-32 px-10  text-gray-500'>ALL CLASSES</h3>
            </div>


            {/* implement tabs here */}

            <Tabs className='md:mt-20 mt-5 w-[90%] mx-auto ' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} id="controlled-tabs" selectedTabClassName="bg-slate-50  transition-all duration-500 rounded-lg border-b-2  border-red-400 px-3 hidden md:inline-block mr-2 text-gray-600 py-0">

                <TabList className='md:ml-10 ml-0 md:pb-10 pb-2 hover:cursor-pointer ' >
                    {
                        categoriesAr.map(category => <Tab tabindex="-1"
                            className=' focus:rounded-lg focus:border-b focus:border-red-500 px-3 hidden md:inline-block mr-2 font-medium text-gray-900 py-2.5 '
                            key={category.id}
                        >
                            {category.title}
                        </Tab>)
                    }

                </TabList>

                {/* main content */}
                {
                    classesOfCategories.map((cls, index) => <TabPanel key={index}><CategoryTabPanel
                        classesByCategory={cls}
                        classesOfCategories={classesOfCategories}
                        isAdmin={isAdmin}
                        isInstructor={isInstructor}

                    ></CategoryTabPanel> </TabPanel>)
                }

            </Tabs>


            


        </div>
    );
};

export default AllApprovedClasses;