
function Footer() {
  return (
    <>
        <hr />
        <div className="footer-container">
            <p>
                © {new Date().getFullYear()} Sólstafir
            </p>
            <div className="social_icons">
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
    </>
  )
}

export default Footer