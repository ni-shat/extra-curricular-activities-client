import React from 'react';
import useEnrolledClasses from '../../../../hooks/useEnrolledClasses';

const EnrolledClasses = () => {

    const [enrollClasses] = useEnrolledClasses();

    return (
        <div>
            {enrollClasses.length}
        </div>
    );
};

export default EnrolledClasses;