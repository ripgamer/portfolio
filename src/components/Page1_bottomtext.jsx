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
      ease: 'linear',
    });

    gsap.to(this.img2, {
      duration: 5,
      rotation: 360,
      repeat: -1,
      ease: 'linear',
    });
  }

  render() {
    return (
      <div className='text-white w-full text-[2.25vh] text-left bottom-0 left-0 flex items-end justify-between'>
        <div className='flex flex-col'>
          <h1 className='font-[anzo2]'>BRAND DESIGN | WEBSITE DESIGN</h1>
          <h1 className='font-[anzo3] leading-'>BESPOKE FREELANCE</h1>
        </div>
        <div className='flex flex-col mt-[-10vh]'>
          <img
            ref={(el) => (this.img1 = el)}
            className='mb-5'
            src='./src/assets/img/wix2.png'
            alt='Image 1'
          />
          <img
            ref={(el) => (this.img2 = el)}
            src='./src/assets/img/wix.png'
            alt='Image 2'
          />
        </div>
      </div>
    );
  }
}

export default Page1_bottomtext;