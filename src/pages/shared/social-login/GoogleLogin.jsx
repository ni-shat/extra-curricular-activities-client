import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import ggl from '../../../assets/ggl.png'


const GoogleLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider mt-10">OR</div>
            <div className="w-full flex justify-center my-4">
                <button onClick={handleGoogleSignIn} className='flex text-black text-center   items-center gap-2 btn border-gray-500  hover:bg-gray-200 bg-white'> <span>Sign in with google</span>  <img className='w-7 h-7' src={ggl} alt="" /></button>
            </div>
        </div>
    );
};

export default GoogleLogin;