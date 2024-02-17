import React from 'react';
import Image from 'next/image';


function Hero() {
  return (
    <div className="hero-container">
        <Image src='/images/profile.jpg' className='profile-img' width={300} height={300} alt='vendaarlia profile' />
        <div className="hero-text">
            <p>
            While early Sólstafir lyrics delved into Nordic mythology and critiques of organized religion, more recent songs explore their spiritual connection with nature, and lately, mental disorders ranging from depression to alcoholism and the taboo behind men in particular discussing those things for fear of being perceived weak.
            </p>
            <div className="social_icon">
                <a href="" aria-label='Twitter' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brand fa-instagram"></i>
                </a>
                <a href="" aria-label='Github' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brand fa-github"></i>
                </a>
                <a href="" aria-label='linkedIn' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brand fa-linkedin"></i>
                </a>
                <a href="" aria-label='linkedIn' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brand fa-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero;