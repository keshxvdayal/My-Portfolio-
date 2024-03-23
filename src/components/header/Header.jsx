import React, { useEffect, useState } from 'react'
import { FaBehance, FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { links } from '../../Data'
import { BsSun, BsMoon } from 'react-icons/bs'
import './header.css'
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'
import shapeOne from '../../assets/shape-1.png'

const getStorageTheme = () => {
    let theme = 'light-theme'
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    }
}

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)
    const [theme, setTheme] = useState(getStorageTheme())

    const scrollTop = () => {
        animateScroll.scrollToTop()
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu)
    }, [showMenu])

    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
            <nav className="nav">
                <Link to='/' onClick={scrollTop} className="nav__logo text-cs">
                    KESHAV
                </Link>

                <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {
                                links.map(({ name, path }, index) => {
                                    return (
                                        <li className="nav__item" key={index}>
                                            <Link
                                                className='nav__link text-cs'
                                                to={path}
                                                spy={true}
                                                hashSpy={true}
                                                smooth={true}
                                                offset={-150}
                                                duration={500}
                                                onClick={() => setShowMenu(!showMenu)}
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="header__socials">
                            <a href="instagram.com/keshxvdayal/" className="header__social-link">
                                <FaInstagram />
                            </a>

                            <a href="https://github.com/keshxvdayal" className="header__social-link">
                                <FaGithub/>
                            </a>

                            <a href="https://www.linkedin.com/in/keshav-dayal/" className="header__social-link">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="section__deco deco__left header__deco">
                        <img src={shapeOne} alt="" className='shape' />
                    </div>
                </div>

                <div className="nav__btns">
                    <div className="theme__toggler" onClick={toggleTheme}>
                        {
                            theme === 'light-theme' ? <BsMoon /> : <BsSun />
                        }
                    </div>

                    <div
                        className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
