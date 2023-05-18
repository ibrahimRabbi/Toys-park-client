import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
 
 import ActiveLink from '../utility/ActiveLink';

const Navbar = () => {
    

    return (
        <nav className='bg-pink-600'>
            <div className="navbar lg:w-[94%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact text-slate-900 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li><ActiveLink to='/blog'>All toys</ActiveLink></li>
                            <li><ActiveLink to='/latest'>My toys</ActiveLink></li>
                            <li><ActiveLink to='/latest'>Add a toy</ActiveLink></li>
                            <li><ActiveLink to='/latest'>Blog</ActiveLink></li>
                        </ul>
                    </div>
                    <Link className='flex items-center gap-1'>
                        <img className='rounded-full' width={70} src="../../../public/logo.png"   border="0" /> 
                        <h2 className="text-2xl font-semibold text-slate-50 normal-case">Toys park</h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-slate-50 text-lg font-semibold px-1">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li><ActiveLink to='/blog'>All toys</ActiveLink></li>
                        <li><ActiveLink to='/latest'>My toys</ActiveLink></li>
                        <li><ActiveLink to='/latest'>Add a toy</ActiveLink></li>
                        <li><ActiveLink to='/latest'>Blog</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                      <div className='flex items-center gap-3'>
                            <div className="tooltip tooltip-bottom " data-tip='rabbi'>
                                <label className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img />
                                    </div>
                                </label>
                            </div>
                            <button className='bg-slate-200 p-2 rounded-lg text-md font-semibold' onClick={() =>logOut() }>Sign out</button>
                        </div>
                            
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;