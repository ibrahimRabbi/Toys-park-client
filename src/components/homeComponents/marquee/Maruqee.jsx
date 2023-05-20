import React from 'react';
import Marquee from "react-fast-marquee";
const Maruqee = () => {
    return (
        <section className='my-28 w-[90%] mx-auto'>
            <Marquee>
                <img width={220} src="../../../../public/logos/logo1.jpg" alt="" />
                <img width={220} src="../../../../public/logos/logo2.jpg" alt="" />
                <img width={220} src="../../../../public/logos/logo3.jpg" alt="" />
                <img width={220} src="../../../../public/logos/logo4.jpg" alt="" />
                <img width={220} src="../../../../public/logos/logo5.jpg" alt="" />
            </Marquee>
        </section>
    );
};

export default Maruqee;