import React from 'react';
import { Link,  } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center bg-pink-600  p-4 absolute z-10 w-full'>
                <div>
                    <Link>hello</Link>
                </div>
                <div>
                    component
                </div>
                <div>
                    section
                </div>
            </nav>
            
        </div>
    );
};

export default Navbar;