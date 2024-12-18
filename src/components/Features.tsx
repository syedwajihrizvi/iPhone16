import { useEffect, useState } from "react";
import { featureOne, featureTwo, featureThree, featureFour } from "../utils/image"
import ResponsiveImage from "./ResponsiveImage"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const features = [
    {
        image: <ResponsiveImage imageData={featureOne}/>,
        description: (
            <p className="shade-text">
                <span>Personalize your Home Screen</span>. Tint your icons with any colour. 
                Rearrange and resize apps and widgets. You can even lock or 
                hide apps to protect sensitive information — it's your call.`
            </p>
        )
    },
    {
        image: <ResponsiveImage imageData={featureTwo}/>,
        description: (
            <p className="shade-text">
                <span>Choose your controls</span>. Swap out your Lock Screen controls for
                ones you love to use more often. Or you can assign a control to the Action button.`
            </p>
        )
    },
    {
        image: <ResponsiveImage imageData={featureThree}/>,
        description: (
            <p className="shade-text">
                <span>Find your favorite shots faster</span>. 
                In the redesigned Photos app, your Collections are automatically organized by topic, 
                like People & Pets.`
            </p>
        )
    },
    {
        image: <ResponsiveImage imageData={featureFour}/>,
        description: (
            <p className="shade-text">
                <span>Get expressive with text</span>. 
                Add playful, animated effects to any word, phrase or emoji in iMessage - many of which are automatically
                suggested as you type.`
            </p>
        )
    }
]

function Features() {
    const chevronControlBaseClass = 'features__control-button'
    const chevronControlDisabledClass = 'features__control-button__disabled'
    const chevronControlEnabledClass = 'features__control-button__interact'
    const [current, setCurrent] = useState(0)
    const [currentScrollPoint, setCurrentScrollPoint] = useState('min')
    useEffect(() => {
        const featureFlexContainer = document.querySelector('.features-flex')
        featureFlexContainer?.addEventListener('scroll', () => {
            const scrollLeft = featureFlexContainer.scrollLeft
            const maxScrollWidth = featureFlexContainer.scrollWidth - featureFlexContainer.clientWidth
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
        gsap.to('.feature', {
            scrollTrigger: {
                trigger: '.features',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            top: 0,
            stagger: 0.2
        })
    }, [])

    useGSAP(() => {
        const featureWidth = document.querySelector('.feature')?.getBoundingClientRect().width as number
        gsap.to('.features-flex', {
            scrollLeft: current*featureWidth,
            duration: 1,
        })
    }, [current])

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
        <section className="features">
            <div className="features-flex">
                {features.map(feature => (
                    <div className="feature">
                        {feature.image}
                        {feature.description}
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

export default Features