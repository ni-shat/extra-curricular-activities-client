import React from 'react';

const dltlater = () => {
    return (
        <div>
            <Tabs className='md:mt-20 mt-5 w-[85%] mx-auto' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} id="controlled-tabs" selectedTabClassName="bg-blue">
                <TabList className='md:ml-10 ml-0 md:pb-10 pb-2 hover:cursor-pointer' >

                    {
                        categoriesAr.map(category => <Tab tabindex="-1"
                            className=' focus:bg-slate-50 focus:rounded-lg focus:border-b focus:border-cyan-500 px-3 hidden md:inline-block mr-2 text-gray-600 py-3 '
                            key={categoriesAr.indexOf(category)}
                        >
                            {category}
                        </Tab>)
                    }

                    <div className="dropdown text-xs btn-xs md:hidden"> <label tabIndex={0} className="btn m-1">{selectedOption}</label>

                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                categoriesAr.map(category => <>

                                    <Tab onClick={handleClick} tabindex="-1"
                                        className=' focus:bg-slate-50  focus:rounded-lg focus:border-b focus:border-cyan-500 px-3 block  mr-2 text-gray-600 py-1 text-xs'
                                        key={categoriesAr.indexOf(category)}
                                    >
                                        {category}
                                    </Tab>


                                </>)
                            }
                        </ul>
                    </div>

                </TabList>


                {
                    toysOfCategories.map(toys =>
                        <TabPanel key={toysOfCategories.indexOf(toys)}>

                            <CategoryTabPanel key={toys._id}
                                toysByCategory={toys}
                                toysOfCategories={toysOfCategories}
                            ></CategoryTabPanel>

                        </TabPanel>)
                }


            </Tabs>
        </div>
    );
};

export default dltlater;