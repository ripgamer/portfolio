import React from 'react'
import PropTypes from 'prop-types'

function Tilttext(props) {
    return (
        <div
            id='tiltdiv'
            ref={props.r}
            className='text-white text-left font-[anzo2] text-[3vw] mt-56'
            style={{ transform: 'rotateY(0deg) rotateX(0deg)' }}

        >
            <h1 className='leading-[4vw]'>
                I AM<span className='text-black'> Aakashdeep k.</span> a
            </h1>
            <h1 className='text-[8vw] leading-[7vw]'>DESIGNER</h1>
            <h1 className='leading-[4vw]'>WEB DEVLOPER | STUDENT </h1>
            {/* <h1 className='leading-[4vw]'>
                        I AM<span className='text-black'> DARK MODE</span>™
                    </h1>
                    <h1 className='text-[8.5vw] leading-[7vw]'>DESIGNER</h1>
                    <h1 className='leading-[4vw]'>TO HIRE</h1> */}
        </div>
    )
}

Tilttext.propTypes = {}

export default Tilttext
