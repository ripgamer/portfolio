import React, { Component } from 'react';

export class Page1_bottomtext extends Component {
  render() {
    return (
      <div className='text-white  w-full text-[2.25vh] text-left bottom-0 left-0 flex items-end justify-between '>
        <div className='flex flex-col  '>
          <h1 className='font-[anzo2]'>BRAND DESIGN | WEBSITE DESIGN</h1>
          <h1 className='font-[anzo3] leading-'>BESPOKE FREELANCE</h1>
        </div>
        <div className='flex flex-col mt-[-10vh] '>
          <img className=' mb-5' src="./src/assets/img/wix2.png" alt="Image 1" />
          <img src="./src/assets/img/wix.png" alt="Image 2" />
        </div>
      </div>
    );
  }
}

export default Page1_bottomtext;