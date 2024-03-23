import React from 'react'
import { FaBehance, FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div className="footer__socials">
                    <a href="instagram.com/keshxvdayal/" className="footer__social-link">
                        <FaInstagram />
                    </a>

                    <a href="https://github.com/keshxvdayal" className="footer__social-link">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/keshav-dayal/" className="footer__social-link">
                        <FaLinkedin />
                    </a>
                </div>

                <p className="footer__copyright text-cs">
                    &copy; 2023 <span>Keshav</span>. All Rights Reserved
                </p>

                <p className="footer__copyright text-cs">
                    Developed by <span>Keshav Dayal</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
