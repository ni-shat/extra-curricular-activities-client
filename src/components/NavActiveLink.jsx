import { NavLink } from 'react-router-dom';


const NavActiveLink = ({ to, children }) => {
    
    return (

        <NavLink to={to}
            className={ ({ isActive }) => isActive ? "text-red-600 " : "text-black "}
        >
            
            {children} 

        </NavLink>

    );
};

export default NavActiveLink;