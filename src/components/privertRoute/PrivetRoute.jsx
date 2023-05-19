import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthContext';

const PrivetRoute = ({ children }) => {
    const { user,loading} = useContext(Context)
    
    if (loading) {
        return <div>
            <progress className="progress w-56"></progress>
            <progress className="progress w-56"></progress>
            <progress className="progress w-56"></progress>
            <progress className="progress w-56"></progress>
         </div>
    }
    if (user) {
        return children
    }
    
    <Navigate to='/signin'/>
};

export default PrivetRoute;