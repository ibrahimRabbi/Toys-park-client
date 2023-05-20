import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthContext';
 
 import ActiveLink from '../utility/ActiveLink';

const Navbar = () => {
    
    const { user, logOut } = useContext(Context)
    const navigate = useNavigate()
    
    const logoutHandler = () => {
        logOut()
            .then(res => {
            navigate('/')
            })
        .catch(error=>console.log(error.message))
    }
    
    return (
        <nav className='bg-pink-600'>
            <div className="navbar w-[94%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        {
                            user ? <ul tabIndex={0} className="menu menu-compact text-slate-900 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className='flex items-end gap-1'>
                                        <img className='rounded-full' width={50} src="../../../public/logo.png" border="0" />
                                        <h2 className="text-2xl lg:static relative -top-4  font-semibold text-slate-800 normal-case">Toys park</h2>
                                    </Link>
                                </li>
                                <li><ActiveLink to='/'>Home</ActiveLink></li>
                                <li><ActiveLink to='/alltoys'>All toys</ActiveLink></li>
                                <li><ActiveLink to='/mytoys'>My toys</ActiveLink></li>
                                <li><ActiveLink to='/addtoys'>Add a toy</ActiveLink></li>
                                <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                                <li><button className='bg-slate-200 p-2 rounded-lg text-md font-semibold lg:hidden' onClick={logoutHandler}>Sign out</button></li>
                            </ul> :
                            <ul tabIndex={0} className="menu menu-compact text-slate-900 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link className='flex items-end gap-1'>
                                            <img className='rounded-full' width={50} src="../../../public/logo.png" border="0" />
                                            <h2 className="text-2xl lg:static relative -top-4  font-semibold text-slate-800 normal-case">Toys park</h2>
                                        </Link>
                                </li>
                                <li><ActiveLink to='/'>Home</ActiveLink></li>
                                <li><ActiveLink to='/alltoys'>All toys</ActiveLink></li>
                                <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                                     
                            </ul>
                        }
                    </div>
                    <Link className=' hidden lg:flex items-center gap-1'>
                        <img className='rounded-full' width={70} src="../../../public/logo.png"   border="0" /> 
                        <h2 className="text-2xl lg:static relative -top-4  font-semibold text-slate-50 normal-case">Toys park</h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {
                        user ? <ul className="menu menu-horizontal text-slate-50 text-lg font-semibold px-1">
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li><ActiveLink to='/alltoys'>All toys</ActiveLink></li>
                            <li><ActiveLink to='/mytoys'>My toys</ActiveLink></li>
                            <li><ActiveLink to='/addtoys'>Add a toy</ActiveLink></li>
                            <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                        </ul> :
                        <ul className="menu menu-horizontal text-slate-50 text-lg font-semibold px-1">
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li><ActiveLink to='/alltoys'>All toys</ActiveLink></li>
                            <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                        </ul>
                    }
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex items-center gap-3'>
                            <div className="tooltip tooltip-bottom " data-tip={user.displayName}>
                                <label className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                            </div>
                            <button className='bg-slate-200 p-2 rounded-lg text-md font-semibold hidden lg:flex' onClick={logoutHandler}>Sign out</button>
                        </div> : 
                            <Link to='/signin' className='bg-slate-200 p-2 rounded-lg text-md font-semibold'>Sign In</Link>
                      }
                            
                </div>
            </div>


        </nav>
        
    );
};

export default Navbar;

