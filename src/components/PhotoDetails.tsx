import { photoDetailOne, photoDetailThree, photoDetailTwo } from "../utils/image"
import ResponsiveImage from "./ResponsiveImage"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

const photoDetails = [
    {
        image: <ResponsiveImage imageData={photoDetailOne}/>,
        heading: <h3 className="photo-details__heading">Lock in your look.</h3>,
        description: (
            <p className="shade-text">
                We’ve created new styles that let you <span>dial in your exact 
                desired look with more advanced skin-tone renderin</span>and set it across your photos. 
                And thanks to the powerful A18 chip, you can see the change in a live preview before you apply it.
            </p>
        )
    },
    {
        image: <ResponsiveImage imageData={photoDetailTwo}/>,
        heading: <h3 className="photo-details__heading">Align with your aesthetic.</h3>,
        description: (
            <p className="shade-text">
                Our improved image pipeline also enables more creative styles, which allow you to 
                <span>customize the different moods of a photo through colour.</span>
            </p>
        )
    },
    {
        image: <ResponsiveImage imageData={photoDetailThree}/>,
        heading: <h3 className="photo-details__heading">Make the most of your megapixels.</h3>,
        description: (
            <p className="shade-text">
                Personalize every style even more with the new control pad, which makes 
                it <span>easy to adjust tone and colour simultaneously.</span>. 
                You can also use the slider to adjust the intensity of the specific colours, 
                instead of applying a one-size-fits-all approach.
            </p>
        )
    }
]

function PhotoDetails() {

    useGSAP(() => {
        gsap.to('.photo-details__header', {
            scrollTrigger: {
                trigger: '.photo-details',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            duration: 1,
            top: 0
        })
        gsap.to('photo-details__content', {
            scrollTrigger: {
                trigger: '.photo-details',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            duration: 1,
            top: 0
        })
    })

    return (
        <section className="photo-details">
            <header className="photo-details__header">
                <p className="shade-text">
                    Our latest generation of Photographic Styles gives you greater creative flexibility 
                    than ever before, so you can <span>make every photo even more you</span>. 
                    And you can add, change or remove a style anytime you want.
                </p>
            </header>
            <div className="grid grid-1x2">
                {photoDetails.map(photoDetail => (
                    <>
                        <div className="photo-details__content">
                            {photoDetail.heading}
                            {photoDetail.description}
                        </div>
                        {photoDetail.image}
                    </>
                ))}
            </div>
        </section>
    )
}

export default PhotoDetails