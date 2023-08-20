import { NavLink } from 'react-router-dom';


const ActiveLink = ({ to, children }) => {
    return (

        <NavLink to={to}
            className={ ({ isActive }) => isActive ? "text-red-400 " : "text-white "}
        >
            
            {children} 

        </NavLink>

    );
};

export default ActiveLink;