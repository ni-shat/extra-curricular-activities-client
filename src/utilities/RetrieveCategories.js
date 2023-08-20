import { useEffect, useState } from "react";
import useAllClasses from "../hooks/useApprovedClasses";
const categoriesAr = [
    {
        id: 1,
        title: "Music",
    },
    {
        id: 2,
        title: "Dance",
    },
    {
        id: 3,
        title: "Arts",
    },
    {
        id: 4,
        title: "Crafts",
    },
    {
        id: 5,
        title: "Sports",
    },
    {
        id: 6,
        title: "Photography & Videography",
    },
    {
        id: 7,
        title: "Cooking and Baking",
    },
    {
        id: 8,
        title: "STEM",
    },
    {
        id: 9,
        title: "Writing and Literature",
    }
]


const RetrieveCategories = () => {

    // const [loadedData, setLoadedData] = useState([]);
    // const [categoriesAr, setCategoriesAr] = useState(categories); // this will only store all the category names 
    const [classesOfCategories, setClassesOfCategories] = useState([]); // this stores specific categories. 

    const [all_Classes, refetch] = useAllClasses();
    // console.log("in all retrieve classes", all_Classes);


   

    useEffect(() => {


        let temp_OfOneCategory_Ar = [];

        for (const category of categoriesAr) {
            // console.log("categry js", category)
            const classes_OneCategory = all_Classes.filter(data => data.categories == category.title);
           
            // console.log(classes_OneCategory);  // stores an array of all classes matches with above category element
            temp_OfOneCategory_Ar.push(classes_OneCategory);
        }
        setClassesOfCategories(temp_OfOneCategory_Ar);

    }, [all_Classes]);


    return { categoriesAr, classesOfCategories};
};

export default RetrieveCategories; 