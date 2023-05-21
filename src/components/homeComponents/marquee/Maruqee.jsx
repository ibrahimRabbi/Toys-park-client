import React from 'react';
import Marquee from "react-fast-marquee";
const Maruqee = () => {
    return (
        <section className='my-28 lg:w-[90%] w-full mx-auto'>
            <Marquee>
                <img width={220} src="https://i.ibb.co/1QvyGpX/IMG-20230520-145426.png" alt="IMG-20230520-145426" />
                <img width={220} src="https://i.ibb.co/XCTzzbr/IMG-20230520-145724-1.png" alt="IMG-20230520-145724-1" />
                <img width={220} src="https://i.ibb.co/PMfV1qX/IMG-20230520-144451-1.jpg" alt="IMG-20230520-144451-1" />
                <img width={220} src="https://i.ibb.co/r3M3Spd/IMG-20230520-144858.jpg" alt="IMG-20230520-144858"/>
                <img width={220} src="https://i.ibb.co/brtdQjs/IMG-20230520-145045.jpg" alt="IMG-20230520-145045" />
            </Marquee>
        </section>
    );
};

export default Maruqee;