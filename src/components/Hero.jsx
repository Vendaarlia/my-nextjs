import Image from 'next/image';
import { motion } from 'framer-motion';


function Hero() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="hero-container" >
        <motion.div initial={{ opacity: 0 }} transition={{ delay: 1 }} animate={{ opacity: 1 }} >
        <Image src='/images/profile.jpg' className='profile-img' width={300} height={300} alt='vendaarlia profile' />
        </motion.div>
        <div className="hero-text">
            <motion.p initial={{ opacity: 0 }} transition={{ delay: 2 }} animate={{ opacity: 1 }}>
            While early Sólstafir lyrics delved into Nordic mythology and critiques of organized religion, more recent songs explore their spiritual connection with nature, and lately, mental disorders ranging from depression to alcoholism and the taboo behind men in particular discussing those things for fear of being perceived weak.
            </motion.p>
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
    </motion.div>
  )
}

export default Hero;