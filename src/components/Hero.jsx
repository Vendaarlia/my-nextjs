import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="hero-container">
        <Image src='/images/profile.jpg' className='profile-img' width={300} height={300} alt='vendaarlia profile' />
        <div className="hero-text">
            <h1>Hey, I'm VENDAARLIA</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic commodi provident blanditiis nesciunt illum error reprehenderit ex obcaecati et dolores, dolor incidunt unde temporibus praesentium, laboriosam magnam. Enim, quibusdam rerum.
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
            </div>
        </div>
    </div>
  )
}

export default Hero;