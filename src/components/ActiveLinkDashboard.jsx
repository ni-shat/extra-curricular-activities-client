import { NavLink } from 'react-router-dom';


const ActiveLinkDashboard = ({ to, children }) => {
    
    return (

        <NavLink to={to}
            className={ ({ isActive }) => isActive ? "text-white" : "text-black"}
        >
            
            {children} 

        </NavLink>

    );
};

export default ActiveLinkDashboard;