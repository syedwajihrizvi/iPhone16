import { useEffect, useState } from "react"
import { FaChevronDown } from "react-icons/fa6"
import gsap from "gsap"

function StickyNavbar() {

    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY/document.body.scrollHeight) * 100
            if (scrollPercent > 15) {
                gsap.to('.sticky-nav', {
                    opacity: 1,
                    duration: 0.6,
                    top: 0,
                    ease: 'power3.out'
                })
            } else {
                gsap.to('.sticky-nav', {
                    opacity: 0,
                    duration: 0.6,
                    top: '-100px',
                    ease: 'power3.out'
                })            
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        if (expanded) {
            const tl = gsap.timeline()
            tl.to('.sticky-nav__content', {maxHeight: '100vh', duration: 0.1, overflow: 'show'})
            tl.to('.sticky-nav__content', {opacity: 1, duration: 0.2})
        } else {
            const tl = gsap.timeline()
            tl.to('.sticky-nav__content', {opacity: 0, duration: 0.2}) 
            tl.to('.sticky-nav__content', {maxHeight: '0', duration: 0.1, overflow: 'hidden'})         
        }
    }, [expanded])

    return (
        <nav className="sticky-nav">
            <div className="bar">
                <h3 className="sticky-nav__heading">
                    iPhone 16
                </h3>
                <div className="sticky-nav__button">
                    <FaChevronDown className="toggler" onClick={() => setExpanded(!expanded)}/>
                    <button className="btn btn-primary">
                        Buy
                    </button>
                </div>
            </div>
            <div className="sticky-nav__content">
                <ul className="sticky-nav__content__list">
                    <li className="sticky-nav__content__list__item">Overview</li>
                    <li className="sticky-nav__content__list__item">Switch from Android to iPhone</li>
                    <li className="sticky-nav__content__list__item">Tech Specs</li>
                </ul>
            </div>
        </nav>
    )
}

export default StickyNavbar