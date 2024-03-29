import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const links = [
        { to: '/', link: 'Home' },
        { to: '/listings', link: 'Listings' },
        { to: '/about', link: 'About' },
        { to: '/contact', link: 'Contact Us' },
        { to: '/cart', link: <FaRegHeart className='text-red-700' /> },
    ]

    const [isNavOpen, setIsNavOpen] = useState(false)
    const [hamLines, setHamLines] = useState({
        line1: {},
        line2: {},
        line3: {}
    })

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
        setHamLines({
            line1: isNavOpen ? {} : { transform: 'rotate(45deg)', position: 'absolute', top: '6px' },
            line2: isNavOpen ? {} : { opacity: 0 },
            line3: isNavOpen ? {} : { transform: 'rotate(-45deg)' }
        })
    }

    return (
        <nav className='flex justify-around items-center bg-[#222831] text-white h-[4.5rem] flex-col md:flex-row'>
            <div className="logo py-6">
                <span className='font-bold border-2 border-[#EEEEEE] rounded-lg px-3 py-1 text-2xl'>Broker App</span>

                <div className="md:hidden ham-menu cursor-pointer absolute top-7 right-7" onClick={toggleNav}>
                    <div className="ham-lines" style={hamLines.line1}></div>
                    <div className="ham-lines" style={hamLines.line2}></div>
                    <div className="ham-lines" style={hamLines.line3}></div>
                </div>
            </div>

            <ul className={`absolute top-[4.5rem] md:static md:flex w-full md:w-fit items-center flex-col md:flex-row justify-start bg-[#374151b3] md:bg-[#222831] ${isNavOpen ? 'flex' : 'hidden'}`}>
                {links.map((item, index) => {
                    return <li className='nav-btns' key={index}>
                        <NavLink className={(e) => { return e.isActive ? 'selected' : '' }}  to={item.to}>{item.link}</NavLink>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Navbar
