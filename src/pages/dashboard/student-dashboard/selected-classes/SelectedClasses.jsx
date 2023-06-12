import React from 'react';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';

const SelectedClasses = () => {

    const [selectedClasses] = useSelectedClasses();
    console.log(selectedClasses)

    return (
        <div>
            {selectedClasses.length}
        </div>
    );
};

export default SelectedClasses;