import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.div animate={{ y: 0 }} initial={{ y: -50 }} transition={{ duration: 0.5 }} className="nav-container">
            <div className="logo">
                <Link href="/">
                    <img src='https://solstafir.is/zinc/logo/goldsolstafir-logo@2x.png' width={70} height={50} className='logo-brand' />
                </Link>
            </div>
            <a href="https://www.impericon.com/de/solstafir.html" className="cta-btn">MERCH</a>
        </motion.div>
    )
}

export default Navbar;