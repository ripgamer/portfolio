import React from 'react'
import Tilttext from '../components/Tilttext'
import Page1_bottomtext from '../components/Page1_bottomtext'

function Page1() {
    return (
        <div className='h-screen   w-full bg-white px-4 py-5 '>

            <div className='absolute  py-11 px-16 w-full'>
                <img className='h-20' src="./src/assets/img/logo.png" alt="" />
                <Tilttext/>
                <Page1_bottomtext/>
            </div>


            <div className='h-full w-full shadow-black shadow-lg bg-[url(./src/assets/img/bg.png)]  bg-cover rounded-[40px] '></div>
            

            



        </div>
    )
}

export default Page1