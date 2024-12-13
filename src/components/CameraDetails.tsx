import { cameraDetails } from "../utils/image"
import ResponsiveImage from "./ResponsiveImage"
import { detailOne, detailTwo, detailThree, detailFour } from "../utils/image"
import { useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function CamereDetails() {
    const images = [
        <ResponsiveImage imageData={detailOne}/>,
        <ResponsiveImage imageData={detailTwo}/>,
        <ResponsiveImage imageData={detailThree}/>
    ]

    const imageCategories = ['Macro', '0.5x', '1x']
    const descriptions = [
        "For compelling close-ups with exceptional detail",
        "Capture 4x more of a scene with the Ultra Wide Camera",
        "Take spectacular high-resolution photos with the 48MP Fusion camera."

    ]
    const [current, setCurrent] = useState(0)

    useGSAP(() => {
        console.log("Called animation")
        gsap.to('.camera-details--flex__container', {
            duration: 1,
            xPercent: -current*100,
        })
        gsap.fromTo('.camera-detail__type_detail__text', {
            opacity: 0,
            y: -20,
            duration: 0.5
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5
        })
    }, [current])

    return (
        <section className="camera-details">
            <div className="camera-details__text">
                <header className="camera-details__header">
                    <h3 className="camera-details__heading">
                        <span className="camera-details__heading__pink">New camera system. </span> 
                        Go to great lengths to get the perfect shot.
                    </h3>
                </header>
                <p className="shade-text">
                The <span>versatile new iPhone 16 camera system </span>captures beautiful photos — 
                from up close or far away. The two-in-one 48MP Fusion camera lets you take 
                stunning super-high-resolution images, or zoom in with the 2x optical-quality Telephoto. 
                The Ultra Wide camera shoots extreme close-up macro photos or wider, more expansive pictures. 
                Altogether, it’s like having <span>four lenses in your pocket</span>. And with spatial capture, 
                you can even take photos and videos in 3D, which you can watch with Apple Vision Pro.
                </p>
            </div>
            <ResponsiveImage imageData={cameraDetails}/>
            <div className="camera-details__text camera-details__wide">
                <h4 className="camera-details__wide__heading">Ultra Wide camera. Focus on the little things. And the bigger picture.</h4>
                <p className="shade-text">
                The new Ultra Wide camera with autofocus takes incredibly 
                <span>sharp, detailed macro photos and videos</span>. You can also frame more expansive 
                scenes without taking a step back. And because it has a larger aperture and 
                bigger pixels, it can capture up to <span>2.6x more light </span>
                for higher image quality — 
                even in low light
                </p>
            </div>
            <div className="camera-details--flex">
                {images.map(image => (
                    <div className="camera-details--flex__container">
                        {image}
                    </div>))}
            </div>
            <span className="camera-details__types">
                {imageCategories.map((imageCategory, index) => (
                    <span className="camera-details__types__item" 
                        style={index == current ? {backgroundColor: 'black', color: 'white'} : {}}
                        onClick={() => setCurrent(index)}>
                        <p>{imageCategory}</p>
                    </span>
                ))}
            </span>
            <span className="camera-detail__type_detail">
                <p className="camera-detail__type_detail__text">
                    {descriptions[current]}
                </p>
            </span>
        </section>
    )
}

export default CamereDetails