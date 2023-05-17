import React,{useContext} from 'react';
 
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


const SigninProvider = ({redirect}) => {
    
    const { signinGoogle, signinGithub } = useContext(Context)
    const navigate = useNavigate();
    
     const googleHandler = () => {
        signinGoogle()
            .then(res => {
                navigate(redirect,{replace:true})
            })
            .catch(error => console.log(error))
    }
    const githubHandler = () => {
        signinGithub()
            .then(res => {
                navigate(redirect,{replace:true})
            })
            .catch(error => console.log(error.message))
    }


    return (
        <div className="flex flex-col gap-3 w-[60%] m-auto mt-7">
            <button onClick={googleHandler} className="btn btn-outline border-purple-600 flex gap-1 items-center">
                <FaGoogle className='text-blue-400 text-xl' />
                Continue with Google
            </button>
            <button onClick={githubHandler} className="btn btn-outline border-purple-600 flex gap-1 items-center">
                <FaGithub className='text-xl' />
                Continue with Github
            </button>
        </div>
    );
};

export default SigninProvider;