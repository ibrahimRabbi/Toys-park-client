import { useContext,useState,useEffect } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { Context } from "../Authentication/AuthContext";
import SigninProvider from "./SigninProvider";
import Swal from 'sweetalert2'



const SignIn = () => {
    
    const { signIn } = useContext(Context)
    const location = useLocation()
    const redirectTo = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const [error, setError] = useState('')


    const loginHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.password.value

        signIn(email, pass)
            .then(res => {
                e.target.reset()
                setError('')
                Swal.fire({
                    title: 'Log In Successfull',
                    text: 'keep Rock',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
               navigate(redirectTo)
            })
            .catch(error => {
                if (error.message == "Firebase: Error (auth/user-not-found).") {
                    setError('user is not exist in this application plz provied a valid password and email')
                } else if (error.message == 'Firebase: Error (auth/wrong-password).') {
                    setError('invalid password plz provide a valid password')
                }
        })
         
    }

    useEffect(() => {
        document.title = "toys-park || signIn"
    }, [])

    return (
        <section className="lg:flex items-center w-[90%] mx-auto my-11">
            <div className="w-1/2 hidden lg:inline-block">
                <img src="https://i.ibb.co/c3L5p60/undraw-Login-re-4vu2.png" alt="undraw-Login-re-4vu2" />
            </div>
            <div className="text-center m-auto my-10 py-5  border rounded-lg lg:w-1/2 w-[90%]">
                <h1 className="text-pink-600 text-2xl font-semibold">Sign In</h1>
                <form onSubmit={loginHandler} className="m-7 flex flex-col gap-7" action="">
                    <input type="email" name='email' placeholder="Email" className="input border-pink-500 input-bordered w-full" required />
                    <input type="password" name='password' placeholder="password" className=" border-pink-500 input input-bordered w-full" required />
                    <p className='text-red-600 font-semibold mb-2'>{error}</p>
                    <input className=" font-semibold border bg-pink-600 p-3 rounded-lg text-slate-50" type="submit" value='Sign In' />
                </form>
                <p className="font-semibold">dont have an account ? <Link to='/signup' className="text-pink-600 font-semibold">Register</Link></p>
                <span className="text-xl font-semibold text-gray-600">or</span>

                <div className="flex justify-center mt-5">
                    <SigninProvider redirect={redirectTo} />
                </div>
            </div>
        </section>
    );
};

export default SignIn;