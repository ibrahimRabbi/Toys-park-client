import { useContext,useState,useEffect } from "react";
import { Context } from "../Authentication/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import SigninProvider from "./SigninProvider";
import Swal from "sweetalert2"; 




const SignUp = () => {

    const [error, setError] = useState('');
    const  {signUp,profile} = useContext(Context)
      const navigate = useNavigate()
    
    const submit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        
        
        signUp(email, password)
            .then(res => {
                profile(res.user, name, photo)
                e.target.reset()
                setError('')
                Swal.fire({
                    title: 'registation Successfull',
                    text: 'now you can access any kind of information',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate('/')
                
            })
            .catch(error => {
                if (error.message == "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    setError('please provied a password at least 6 characters')
                }
                if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                    setError('this email already have an account')
                }
        })
       
 
    }

     
    useEffect(() => {
        document.title = "toys-park || signUp"
    }, [])


    return (
        <section className="flex items-center w-[90%] mx-auto" >
            <div className="w-1/2 hidden lg:inline-block">
                <img src="https://i.ibb.co/zN0vDwx/undraw-Sign-up-n6im.png" alt="undraw-Sign-up-n6im" />
            </div>
            <div className="text-center m-auto my-10 py-5 border rounded-lg lg:w-[50%] w-[90%]">
                <h1 className="text-pink-600 text-2xl font-semibold">Sign Up</h1>
                <form onSubmit={submit} className="m-7 flex flex-col gap-7" >
                    <input type="text" name='name' placeholder="user name" className="input input-bordered border-pink-600 w-full" required />
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered border-pink-600 w-full" required />
                    <input type="email" name='email' placeholder="Email" className="input input-bordered border-pink-600 w-full" required />
                    <input type="password" name='password' placeholder="password" className="input input-bordered border-pink-600 w-full" required />
                    <p className='text-red-600 font-semibold mb-2'>{error}</p>
                    <input className=" font-semibold border bg-pink-600 p-3 rounded-lg text-slate-50" type="submit" value='Sign Up' />
                </form>
                <p className="font-semibold">already have an account ? <Link to='/signin' className="text-pink-600 font-semibold">Sign In</Link></p>
                <span className="text-xl font-semibold text-gray-600">or</span>
                <div className="flex justify-center mt-5">
                    <SigninProvider redirect='/' />
                </div>
            </div>
             
            
        </section>
    );
};

export default SignUp;