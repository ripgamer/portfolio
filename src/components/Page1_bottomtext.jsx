import React, { Component } from 'react';
import { gsap } from 'gsap';

export class Page1_bottomtext extends Component {
  componentDidMount() {
    this.animateImages();
  }

  animateImages() {
    gsap.to(this.img1, {
      duration: 5,
      rotation: 360,
      repeat: -1,
      ease: 'power1.inOut',
    });

    gsap.to(this.img2, {
      duration: 5,
      rotation: 360,
      repeat: -1,
      ease: 'power1.inOut',
    });
  }

  render() {
    return (
      <div className='text-white w-full text-[2.25vh] text-left bottom-0 left-0 flex items-end justify-between'>
        <div className='flex flex-col'>
          <h1 className='font-[anzo2]'>GRAPHICS DESIGN | WEBSITE DESIGN</h1>
          <h1 className='font-[anzo3] leading-'>GDSC Member'23-24 | MITA'26</h1>
        </div>
        <div className='flex flex-col   mt-[-10vh] md:mt-[-20vh] xl:mt-[-10vh]'>
          <a href="https://teameklavya.vercel.app/" target='_blank' rel='noopener noreferrer'><img
            ref={(el) => (this.img1 = el)}
            className='mb-5 w-[80px] md:w-[94px] '
            src='/img/eklavya.png'
            alt='Image 1'
          /></a>
          
          <a href="https://cyberpunkaakash.vercel.app/" target='_blank' rel='noopener noreferrer'><img
            ref={(el) => (this.img2 = el)}
            className='w-[80px] md:w-[94px]'
            src='/img/cp.png'
            alt='Image 2'
          /></a>
        </div>
      </div>
    );
  }
}

export default Page1_bottomtext;