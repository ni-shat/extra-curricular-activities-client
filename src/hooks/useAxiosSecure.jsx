import { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation(); 
    console.log(location.pathname);
    
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                
                // if student and not admin and 
                console.log(error)
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.log(error)
                    if( location.pathname !== '/all-approved-classes' ){
                        await logOut();
                        navigate('/signup');
                    }
                    else {
                        return {error: true}
                    }

                    /** if(location.pathname === '/all-approved-classes'){
                        console.log('hiiiiiiiii')
                    }
                    else{
                        console.log("hello")
                        await logOut();
                        navigate('/');
                    } */
                }
                return Promise.reject(error);
            }
        );
    }, [ logOut, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;
