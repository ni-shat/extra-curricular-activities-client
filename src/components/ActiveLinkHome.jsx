import { NavLink } from 'react-router-dom';


const ActiveLinkHome = ({ to, children }) => {
    
    return (

        <NavLink to={to}
            className={ ({ isActive }) => isActive ? "text-red-600 text-base leading-6" : "text-base"}
        >
            
            {children} 

        </NavLink>

    );
};

export default ActiveLinkHome;