import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';


// TODO: when clicking in cross I want the dropdown keeps open. DOn't get closed. 

const itemObject = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



const Dropdown = ({ SetCategories, selectedItems, setSelectedItems, placeholder, setAllData, allData, propertyName }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [objectItems, setObjectItems] = useState(itemObject); // filtered object

    const [opacity, setOpacity] = useState(true);
    const [searchText, setSearchText] = useState('');
    const dropdownRef = useRef();
    const inputRef = useRef(null);


    const [hoveredItem, setHoveredItem] = useState([0, Object.keys(itemObject)[0]]);


    const handleItemCrossClick = (item) => {
        inputRef.current.focus();
        console.log("key, item:",  item)

        /********-----OLD APPROACH------ */
        const updatedSelectedItems = selectedItems.selectedDays.filter(it => it !== item); //old
        
        selectedItems.selectedDays = updatedSelectedItems;

        
        setObjectItems([item, ...objectItems]);

    }

    const handleItemClick = (item) => {
        inputRef.current.focus();
        // console.log(key, item)

        // set all selected data in parent state ---------- OLD
        // const objectTmp = {
        //     [propertyName]: [...selectedItems, item] // I have wrap the propertyName in thirdBracket to set property name dynamically. 
        // }
        // setAllData({ ...allData, ...objectTmp });
        // end setting all selected data in parent state 

        const filteredItems = itemObject.filter(
            item => item.toLowerCase().includes(searchText.toLowerCase())
        );
        setObjectItems(filteredItems)

        console.log("nishat", selectedItems)

        let tmpArr = selectedItems['selectedDays']

        if (filteredItems.includes(item)) {
            console.log('j')
            console.log([...tmpArr, item])
            selectedItems['selectedDays'] = [...tmpArr, item];
        }

        const filteredobjectItem = objectItems.filter(it => it !== item); 
        setObjectItems(filteredobjectItem)  



        //------------- OLD
        // const selectedObjTmp = { key: [...selectedItems, item] }
        // setSelectedItems(selectedObjTmp); console.log("selectedObjTmp", selectedObjTmp)


        /**END setting selected items objects keywise */

        // setSelectedItems([...selectedItems, item]); //old

        // It updates the object items after selecting an item, thus this item from dropdown gets removed
        // if (key in objectItems) {
        //     const filteredArrayValues = objectItems[key].filter(it => it !== item);
        //     objectItems[key] = filteredArrayValues;
        // }

        // const filteredobjectItem = objectItems.filter(it => it !== item); //old
        // setObjectItems(filteredobjectItem) //old

        // setSearchText("");
        // setOpacity(!opacity);
    };




    // console.log("filteredItems", filteredItems)
    // setObjectItems(filteredItems);


    const handleInputChange = (event) => {
        event.stopPropagation();
        setSearchText(event.target.value);
        // console.log(searchText)
        setOpacity(true);
        setHoveredItem([0, Object.keys(itemObject)[0]])
        // console.log(event.target.value) 
        for (const propertyName in itemObject) {
            objectItems[propertyName] = itemObject[propertyName].filter(item => item.toLowerCase().includes(event.target.value.toLowerCase()));
        }
        // setObjectItems(tmpObj)
    };

    const handleIconClick = (e) => {
        e.stopPropagation();
        inputRef.current.focus();
        setIsOpen(!isOpen);
    };

    const handleInputClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
        inputRef.current.focus();

        //check all the selected items
        // if (propertyName === 'classes') {
        //     console.log("hi hello");
        //     const selectedCategoriValues = selectedItems[0].values;
        //     console.log("print", selectedCategoriValues.categories); // its an object

        //     console.log(Classes)
        //     let tmpClasses = {};

        //     for (const element of selectedCategoriValues.categories) {
        //         if (element in Classes) {
        //             console.log(Classes.element)
        //             tmpClasses[element] = Classes[element];
        //         }
        //     }
        //     console.log("temp", tmpClasses)
        //     setItemObject(tmpClasses);
        //     setObjectItems(tmpClasses);
        // }

    };


    const handleOutsideClick = (event) => {
        // console.log('outside')
        const dropdownContainer = dropdownRef.current; //if I keep moving mouse, it will execute

        if (dropdownContainer && !dropdownContainer.contains(event.target)) {
            const isScrollbarClicked = event.target.classList.contains('overflow-auto');

            // if (!isScrollbarClicked && !isExcludedElement) {
            if (!isScrollbarClicked) {
                setIsOpen(false);
                setSearchText("") // It solved the problem of opening dropdown box even when clicking outside, if user writes something in the input
            }
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);



    const dropdownOptionsRef = useRef();

    const handleMouseEnter = (index, key) => {
        // if (!isKeyPressing) {
        // console.log("index", index)
        setHoveredItem([index, key]);
        // }
    };
    // const handleMouseLeave = () => {
    //   setHoveredItem(null);
    // };

    const [focusedIndex, setFocusedIndex] = useState(null);
    const handleKeys = (event) => {  //it working
        // console.log(event.key)


        if (event.key === 'ArrowDown') {
            console.log("arrow down clicked")
            event.preventDefault();

        }
    };

    if (propertyName == 'categories' && selectedItems) {
        // console.log("HI")
        SetCategories(selectedItems);
    }
    // console.log(selectedItems)


    return (
        <div onKeyDown={handleKeys} className="dropdown dropdown-bottom dropdown-end  bg--100 w-full mt-2 " ref={dropdownRef}>
            <div

                tabIndex={0}
                className="flex flex-wra w-full border- gap-1 px-1 items-center border hover:border-black whitespace-normal max-h-60 "
                onClick={handleInputClick}
            >
                <div className='flex w-full items-center justify-between'>
                    <div className='py-2.5 mt-0.5 px-1'>
                        {
                            selectedItems.selectedDays.map((item, index) => (
                                <p key={index} className='inline-flex mx-1 text-[13px] w-fit border border-[#1e326e] rounded-full  items-center mb-2 px-2' >{item}
                                    <p onClick={() => handleItemCrossClick(item)} className='my-2.5 text-white hover:cursor-pointer
                                     ml-1.5 inline-flex font-semibold  justify-center pb-1 items-center bg-blue-600 rounded-full w-3.5 h-3.5'>x</p>
                                </p>
                            ))
                        }

                        {/* <div className=''> */}
                        <input
                            type="text" ref={inputRef}
                            value={searchText}
                            onChange={handleInputChange}
                            onClick={handleInputClick}
                            placeholder={'Select week days...        '}
                            className={`hover:cursor-default w-fit inline-flex focus:outline-0 bg--100 pb-1.5 pt-1 pl-2 ml-0 text-sm ${selectedItems ? 'text-gray-600' : 'text-gray-400'
                                } flex justify-between items-center`}
                        />

                        {/* </div> */}
                    </div>


                    <div
                        onClick={handleIconClick}
                        className="mt-0 py-4  pr-3.5  hover:cursor-pointer"
                    >
                        <FaAngleDown />
                    </div>

                </div>
            </div>

            {/* opacity is added to remove the open dropdown after clicking os selecting an item. */}
            {(isOpen || searchText && opacity) && (

                <ul
                    key={propertyName}
                    tabIndex={0}
                    className="absolute dropdown text-sm text-gray-700  z-30 right-0 border shadow-sm shadow-black bg-white rounded-box overflow-y-auto max-h-60 w-full"
                >


                    {/* {
                        Object.entries(filteredItems).map(([key, value]) => (
                            <>
                                <p className='uppercase flex justify-between text-blue-800 px-4 font-medium pt-3 py-2 text-xs ' key={key}>
                                    {key} <span className='rounded-full p-1 font-medium bg-gray-200 text-[11px] w-5 h-5 flex justify-center items-center'>
                                        {value.length}</span>
                                </p>
                                <hr className='w-[95%] -mt-1 mx-auto' />
                                <p className='my-2.5'></p>

                            </>
                        ))
                    } */}
                    {
                        objectItems.map((item, index) => (
                            <li
                                onMouseEnter={() => handleMouseEnter(index)}
                                // onMouseLeave={handleMouseLeave}
                                ref={dropdownOptionsRef}
                                onClick={() => handleItemClick(item)}
                                className={`py-3 px-4   ${(index === hoveredItem[0]) ? 'bg-blue-100' : ''}`}
                                key={index}>
                                {item}
                            </li>
                        ))
                    }


                </ul>

            )}
        </div>
    );
};

export default Dropdown;
