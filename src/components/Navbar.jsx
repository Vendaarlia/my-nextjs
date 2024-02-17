import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    <img src='https://solstafir.is/zinc/logo/goldsolstafir-logo@2x.png' width={80} className='logo-brand' />
                </Link>
            </div>
            <a href="https://www.impericon.com/de/solstafir.html" className="cta-btn">MERCH</a>
        </div>
    )
}

export default Navbar;