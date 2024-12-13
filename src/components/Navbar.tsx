import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiBagLight, PiListLight } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const navbarDropdownItems = ["Store", "Mac", "iPad", "iPhone", 
                        "Watch", "Vision", "AirPods", "TV & Home", 
                        "Entertainment", "Accessories", "Support"]
function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false)

    useGSAP(() => {
        if (showDropdown)
            gsap.to('.navbar__dropdown', {
                maxHeight: '100vh',
                opacity: 1,
                duration: 0.6
            })
        else
            gsap.to('.navbar__dropdown', {
                maxHeight: '0',
                opacity: 0,
                duration: 0.6
            })           
    }, [showDropdown])

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <FaApple fontSize='2.5rem'/>
                <ul className="navbar__list">
                    {navbarDropdownItems.map(item => <li>{item}</li>)}
                </ul>
                <div className="navbar__icons">
                    <IoIosSearch fontSize='2.5rem'/>
                    <PiBagLight fontSize='2.5rem'/>
                    <PiListLight className="navbar__dropdown-toggler" fontSize='2.5rem' onClick={() => setShowDropdown(true)}/>
                </div>
            </nav>
            <div className="navbar__dropdown">
                {showDropdown && <IoClose className="navbar__dropdown-toggler" fontSize='2.5rem' onClick={() => setShowDropdown(false)}/>}
                <ul>
                    {navbarDropdownItems.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Navbar