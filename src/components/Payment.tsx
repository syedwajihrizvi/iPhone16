import { useState,useEffect } from "react";
import { tradeIcon, payIcon, deliveryIcon, messageIcon, connectIcon, shopIcon } from "../utils/image"
import { IoIosAddCircle } from "react-icons/io";
import ResponsiveImage from "./ResponsiveImage"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

const paymentBenefits = [
    {
        icon: <ResponsiveImage imageData={tradeIcon}/>,
        title: 'Save with Apple Trade In.',
        body: "Get $200-$905 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher."
    },
    {
        icon: <ResponsiveImage imageData={payIcon}/>,
        title: 'Monthly payment options available.',
        body: 'Choose an easy way to finance with convenient monthly payment options.'
    },
    {
        icon: <ResponsiveImage imageData={deliveryIcon}/>,
        title: 'Get flexible delivery and easy pickup.',
        body: 'Choose two-hour delivery from an Apple Store, free delivery or easy pickup options.'
    },
    {
        icon: <ResponsiveImage imageData={messageIcon}/>,
        title: 'Shop one on one with a Specialist.',
        body: 'Online or in a store.'
    },
    {
        icon: <ResponsiveImage imageData={connectIcon}/>,
        title: 'Meet your new iPhone with Personal Setup.',
        body: 'Jump into online sessions with a Specialist to set up your iPhone and discover new features.'
    },
    {
        icon: <ResponsiveImage imageData={shopIcon}/>,
        title: 'Explore a shopping experience designed around you.',
        body: 'When you shop in the Apple Store App.'
    }
]

function Payment() {
    const [current, setCurrent] = useState(0)
    const chevronControlBaseClass = 'features__control-button'
    const chevronControlDisabledClass = 'features__control-button__disabled'
    const chevronControlEnabledClass = 'features__control-button__interact'
    const [currentScrollPoint, setCurrentScrollPoint] = useState('min')

    useEffect(() => {
        const paymentFlexContainer = document.querySelector('.payment-flex')
        paymentFlexContainer?.addEventListener('scroll', () => {
            const scrollLeft = paymentFlexContainer.scrollLeft
            const maxScrollWidth = paymentFlexContainer.scrollWidth - paymentFlexContainer.clientWidth
            if (scrollLeft === 0) {
                setCurrentScrollPoint('min')
            } else if (scrollLeft >= maxScrollWidth) {
                setCurrentScrollPoint('max')
            } else {
                setCurrentScrollPoint('middle')
            }
        })
    }, [])

    useGSAP(() => {
        const benefitWidth = document.querySelector('.benefit')?.getBoundingClientRect().width as number
        gsap.to('.payment-flex', {
            scrollLeft: current*benefitWidth,
            duration: 1,
        })
    }, [current])

    useGSAP(() => {
        gsap.to('.benefit', {
            scrollTrigger: {
                trigger: '.payment',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            top: 0,
            duration: 1,
            stagger: 0.2
        })
    }, [])

    const renderLeftNavClass = () => {
        if (currentScrollPoint == "min") {
            return `${chevronControlBaseClass} ${chevronControlDisabledClass}`
        }
        return `${chevronControlBaseClass} ${chevronControlEnabledClass}`
    }

    const renderRightNavClass = () => {
        if (currentScrollPoint == "max") {
            return `${chevronControlBaseClass} ${chevronControlDisabledClass}`
        }
        return `${chevronControlBaseClass} ${chevronControlEnabledClass}`
    }

    return (
        <section className="payment">
            <header className="payment__header">
                <h3 className="payment__heading">Why Apple is the best place to buy iPhone.</h3>
                <a href="#" className="link">Shop iPhone</a>
            </header>
            <div className="payment-flex">
                {paymentBenefits.map(benefit => (
                    <div className="benefit">
                        <div className="icon-container">
                            {benefit.icon}
                        </div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.body}</p>
                        <div className="benefit-footer">
                            <IoIosAddCircle fontSize='4rem'/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="features__flex-controls">
                <div className="features__button-group">
                    <span className={renderLeftNavClass()}>
                        <FaChevronLeft fontSize='2rem' onClick={() => setCurrent((prevValue) => Math.max(prevValue-1, 0))}/>
                    </span>
                    <span className={renderRightNavClass()}>
                        <FaChevronRight fontSize='2rem' onClick={() => setCurrent((prevValue) => Math.min(prevValue+1, 3))}/>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Payment