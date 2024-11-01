import React, { useRef, useState } from 'react';
import Tilttext from '../components/Tilttext';
import Page1_bottomtext from '../components/Page1_bottomtext';
import { gsap } from 'gsap';


function Page1() {
    
    const tiltRef = useRef(null);
    const [valX, setvalX] = useState(0);
    const [valY, setvalY] = useState(0);

    const mouseMoving = (e) => {
        const rect = tiltRef.current.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        setvalX((e.clientX - centerX) / 20);
        setvalY((centerY - e.clientY) / 20);

        gsap.to(tiltRef.current, {
            duration: 3,
            rotateY: valX,
            rotateX: valY,
            ease: 'powerout4',
          });

        tiltRef.current.style.transform = `rotateY(${valX}deg) rotateX(${valY}deg)`;
    };
   

    return (
        <div
            onMouseMove={(e) => {
                mouseMoving(e);
            }}
            className='h-screen w-full bg-white px-4 py-5'
        >
            <div id='page1-in' className='absolute py-11 px-10 md:px-16 w-full'>
                <a href="/"><img className='h-10 md:h-20 ' src='/img/ak.png' alt='' /></a>
                <Tilttext r={tiltRef}/>

                <Page1_bottomtext />
            </div>
            {/*  work on responsiveness of the image */}
            <div className='h-full w-full shadow-black shadow-lg bg-[url(/img/akbg2.png)] bg-cover bg-center md:bg-center rounded-[40px]'></div>
        </div>
    );
}

export default Page1;