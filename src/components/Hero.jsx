import Image from 'next/image';


function Hero() {
  return (
    <div className="hero-container">
        <Image src='/images/profile.jpg' className='profile-img' width={300} height={300} alt='vendaarlia profile' />
        <div className="hero-text">
            <p>
            While early Sólstafir lyrics delved into Nordic mythology and critiques of organized religion, more recent songs explore their spiritual connection with nature, and lately, mental disorders ranging from depression to alcoholism and the taboo behind men in particular discussing those things for fear of being perceived weak.
            </p>
            <div className="social-icons">
                <a href="https://twitter.com/solstafir" aria-label='Twitter' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/solstafirice" aria-label='facebook' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/solstafir_official" aria-label='instagram' target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero;