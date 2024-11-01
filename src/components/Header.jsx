import React, { Component } from 'react'
import 'remixicon/fonts/remixicon.css'

export class Header extends Component {
  render() {
    return (
      <div className='fixed w-full z-10 flex items-center justify-end py-16 p-16 gap-3'>
       <a href='https://www.linkedin.com/in/aakashdeepkumar/'
        className='text-white hover:bg-gray-600 font-[anzo4] bg-black border-4 rounded-full px-10 py-2'
        target='_blank' rel='noopener noreferrer'
      >
        Hire me
      </a>
      <i className="ri-menu-2-line font-bold text-2xl text-center hover:text-gray-600"></i>
      </div>
    )
  }
}

export default Header