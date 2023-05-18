import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Authentication/AuthContext";




const SignIn = () => {
    
    
     const {signIn} = useContext(Context)

    const loginHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.password.value

        signIn(email, pass)
            .then(res => {
            alert('logiong')
            })
        .catch(error=>console.log(error.message))
         
    }

    return (
        <div className="text-center m-auto my-10 py-5 border rounded-lg lg:w-[50%] w-[90%]">
            <h1 className="text-pink-600 text-2xl font-semibold">Sign In</h1>
            <form onSubmit={loginHandler} className="m-7 flex flex-col gap-7"   action="">
                <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" required />
                <input type="password" name='password' placeholder="password" className="input input-bordered w-full" required />
                <p className='text-red-600 font-semibold mb-2'>{}</p>
                <input className=" font-semibold border bg-pink-600 p-3 rounded-lg text-slate-50" type="submit" value='Sign In' />
            </form>
            <p className="font-semibold">dont have an account ? <Link to='/signup' className="text-pink-600 font-semibold">Register</Link></p>
            <span className="text-xl font-semibold text-gray-600">or</span>

            
        </div>
    );
};

export default SignIn;