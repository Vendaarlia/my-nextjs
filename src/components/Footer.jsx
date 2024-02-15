import React from 'react'

function Footer() {
  return (
    <>
        <hr />
        <div className="footer-container">
            <p>
                © {new Date().getFullYear()} VENDAARLIA
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
    </>
  )
}

export default Footer