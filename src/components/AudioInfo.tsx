import ResponsiveImage from "./ResponsiveImage"
import { audioImage } from "../utils/image"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

const audioFeatures = [
    {
        heading: 'In-frame',
        description: `Only captures the voices of the people on camera, 
                      even if people off-camera are talking during the recording.`
    },
    {
        heading: 'Studio',
        description: `Makes voices sound like you’re recording in a professional studio 
                      equipped with sound-dampening walls. Great for vloggers or podcasters 
                      because the recording will sound like the mic is close to the subject’s 
                      mouth, even if it’s a few metres away.`
    },
    {
        heading: 'Cinematics',
        description: `Captures all of the voices around you and consolidates them 
                      toward the front of the screen — just like sound is formatted 
                      for the movies.`
    }
]

function AudioInfo() {
    useGSAP(() => {
        gsap.to('.audio-info', {
            scrollTrigger: {
                trigger: '.audio-info',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            opacity: 1,
            left: 0
        })
    }, [])

    return (
        <section className="audio-info">
            <div className="container">
                <div className="audio-info-header">
                    <h3 className="text shade-text">
                        <span>Audio Mix.</span> <br/>Make your voice heard.
                    </h3>
                    <ResponsiveImage imageData={audioImage}/>
                    <p className="text audio-info-text shade-text">
                        Powered by advanced intelligence and Spatial Audio capture, 
                        Audio Mix lets you <span>adjust the way voices sound in your videos</span> 
                        using three different voice options. Want to decrease background sound? 
                        Or just ocus on the voices that are in frame? Simply select the mix and 
                        adjust intensity to get the sound you want after video capture.
                    </p>
                </div>
                <div className="text audio-flex">
                    {audioFeatures.map(feature => (
                        <div className="audio-feature">
                            <h4 className="audio-feature__heading">{feature.heading}</h4>
                            <div className="audio-feature__desc">
                                <p className="shade-text">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AudioInfo