import { bannerOne } from "../utils/image"
import ResponsiveImage from "./ResponsiveImage"
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function Banner() {
    useGSAP(() => {
        gsap.to('.banner', {
            scrollTrigger: {
                trigger: '.banner',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            top: 0,
            duration: 1
        })
    }, [])

    return (
        <section className="banner">
            <header className="banner__header">
                <h3 className="banner__heading banner__heading--blue">iOS 18</h3>
                <h3 className="banner__heading">Customize. Stylize</h3>
                <h3 className="banner__heading">Mesmerize.</h3>
            </header>
            <ResponsiveImage imageData={bannerOne}/>
        </section>
    )
}

export default Banner