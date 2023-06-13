import React from 'react';
import useAllClasses from '../../hooks/useApprovedClasses';
import ApprovedClass from './ApprovedClass';
import { useState } from 'react';
import { useEffect } from 'react';

const AllApprovedClasses = () => {

    const [all_Classes] = useAllClasses();
    console.log("hi",all_Classes)

    const [clss, setClss] = useState(all_Classes);

    useEffect(() => {
        setClss(all_Classes);

    }, [ all_Classes])


    return (
        <div>
            <div>
                <h3 className='uppercase font-extrabold px-10 pt-20 text-5xl'>All approved classes</h3>
            </div>
            <div className='grid grid-cols-4 px-10 pt-20'>
                {
                    all_Classes.length && clss.map(c => <ApprovedClass key={c._id} cls={c}></ApprovedClass>)
                }


            </div>
        </div>
    );
};

export default AllApprovedClasses;