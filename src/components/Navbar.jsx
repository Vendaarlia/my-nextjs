import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    VENDAARLIA
                </Link>
            </div>
            <a href="" className="cta-btn"></a>
        </div>
    )
}

export default Navbar;