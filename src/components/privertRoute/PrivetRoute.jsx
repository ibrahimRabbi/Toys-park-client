import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../Authentication/AuthContext';
import { Bars } from 'react-loader-spinner'


const PrivetRoute = ({ children }) => {
    const { user,loading} = useContext(Context)
    const location = useLocation()
   

    if (loading) {
          
           return <div className=' my-44 text-center flex justify-center mx-auto'>
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
         
    }
    if (user) {
        return children
    }
    
   return <Navigate to='/signin' state={{from : location}} replace/>
};

export default PrivetRoute;