import React,{useContext} from 'react';
 import { Context } from '../Authentication/AuthContext';
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


const SigninProvider = ({redirect}) => {
    
    const { signinGoogle } = useContext(Context)
   // const navigate = useNavigate();
    
     const googleHandler = () => {
        signinGoogle()
            .then(res => {
               // navigate(redirect,{replace:true})
                alert('done')
            })
            .catch(error => console.log(error))
    }


    return (
        <button onClick={googleHandler} className="btn btn-outline border-pink-600 flex gap-1 items-center">
            <FaGoogle className='text-blue-400 text-xl' />
            Continue with Google
        </button>
    );
};

export default SigninProvider;