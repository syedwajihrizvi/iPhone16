
import { FaPlay, FaPause } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";
import { highlight_one, highlight_two, highlight_three, highlight_four, highlight_five } from "../utils/image"
import ResponsiveImage from "./ResponsiveImage";
import { Highlight } from "../utils/interfaces";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

const highlights : Highlight[] = [
    {
        imageData: highlight_one, 
        description: `The first iPhone built for Apple Intelligence. Personal, private, powerful`,
        descriptionColor: 'white'
    },
    {
        imageData: highlight_two, 
        description: `Camera Control. Get the perfect photo. While barley lifting a finger.`,
         descriptionColor: 'black'
    },
    {
        imageData: highlight_three, 
        description: `The all-new chip that empowers Apple Intelligence and you.`,
         descriptionColor: 'white'
    },
    {
        imageData: highlight_four, 
        description: `A big boost in battery life? Yes, please.`,
         descriptionColor: 'black'
    },
    {
        imageData: highlight_five, 
        description: `New Ultra Wide camera. Take your photos further and closer.`,
         descriptionColor: 'white'
    }
]

const maxHighLightCount = highlights.length - 1
function Highlights() {
    
    const highlightRefs = useRef<(HTMLDivElement | null)[]>([])
    const highlightDescriptionRefs = useRef<(HTMLDivElement | null)[]>([])
    const progressBarRefs = useRef<(HTMLSpanElement | null)[]>([])
    const progressRefs = useRef<(HTMLDivElement | null)[]>([])

    const [highlightsState, setHighlightsState] = useState({
        highlightID: 0,
        isPlaying: false,
        isComplete: false,
        duration: 0
    })

    const { isPlaying, highlightID } = highlightsState

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setHighlightsState((prevState) => {
                    const newState = {...prevState, duration: prevState.duration + 1}
                    if (newState.duration >= 5) {
                        newState.highlightID += 1
                        newState.duration = 0
                    }
                    if (prevState.highlightID >= maxHighLightCount)
                        newState.isPlaying = false
                    return newState
                }
                )
            }, 1000)
            return () => clearInterval(interval)
        }
        // Set the highlight container to translate with the video
    }, [isPlaying])

    useEffect(() => {
        const highlightContainer = document.querySelector('.highlights__container');
        const highlightControls = document.querySelector('.highlights__controls');
      
        const handleScroll = () => {
          if (!highlightContainer || !highlightControls) return;
      
          const { innerHeight } = window;
          const { top, bottom, height } = highlightContainer.getBoundingClientRect();
      
          if (top < innerHeight - height / 3 && bottom > innerHeight - 100) {
            highlightControls.classList.add('highlights__controls__sticky');
          } else {
            highlightControls.classList.remove('highlights__controls__sticky');
          }
        };
      
        document.addEventListener('scroll', handleScroll);
      
        // Cleanup event listener on component unmount
        return () => {
          document.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(() => {
        highlightRefs.current.forEach((highlight) => {
            const description = highlight?.querySelector('.highlight__description')
            gsap.to((description as any), {
                scrollTrigger: {
                    trigger: description,
                    scroller: '.highlights__container',
                    start: 'left center',
                    end: 'right center',
                    horizontal: true,
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                left: '5%',
                duration: 1
            })
        })
    }, [])

    useGSAP(() => {

        gsap.to('.highlight__item', {
            xPercent: -highlightID*100,
            duration: 1
        })

        gsap.to(highlightDescriptionRefs.current[highlightID], {
            opacity: 1,
            left: '5%',
            duration: 1
        })
    
        // Animate the description since GSAP is not synced with the useEffect
        // Animate the progress bars
        progressBarRefs.current.forEach(progressBar => {
            gsap.to(progressBar, {
                width: '1rem',
                borderRadius: '100%',
                duration: 0.05
            })         
        });

        gsap.to(progressBarRefs.current[highlightID], {
            width: '4rem',
            borderRadius: '1rem',
            duration: 0.1
        })

    }, [highlightID, isPlaying])

    useGSAP(() => {
        gsap.to('.highlights__header__heading, .highlights__header__link', {
            scrollTrigger: {
                trigger: '.highlights__header',
                start: 'top 80%'
            },
            opacity: 1,
            transform: 'translateY(0)',
            duration: 0.8,
            stagger: 0.1
        })
    }, [])

    const renderIcon = () => {
        if (highlightID >= maxHighLightCount) {
            return <VscDebugRestart className="icon"/>
        }
        else if (!isPlaying) {
            return <FaPlay className="icon"/>
        } 
        return <FaPause className="icon"/>
    }

    return (
        <section className="highlights">
            <header className="highlights__header">
                <h3 className="highlights__header__heading">Get the highlights.</h3>
                <a href="#" className="highlights__header__link">Watch the film <FaRegCirclePlay/></a>
            </header>
            <div className="highlights__container">
                {highlights.map((highlight) => (
                    <div className="highlight__item" 
                    ref={(element) => highlightRefs.current.push(element)}>
                        <ResponsiveImage imageData={highlight.imageData}/>
                        <div className="highlight__description"
                        ref={(element) => highlightDescriptionRefs.current.push(element)}>
                            <p style={{color: highlight.descriptionColor}}>{highlight.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="highlights__controls">
                <span className="icon__container" onClick={() => {
                    if (highlightID >= maxHighLightCount) {
                        setHighlightsState(prevState => ({...prevState, isPlaying: true, highlightID: 0}))
                    }
                    else if (isPlaying) {
                        setHighlightsState(prevState => ({...prevState, isPlaying: false}))
                    } 
                    else if (!isPlaying) {
                        setHighlightsState(prevState => ({...prevState, isPlaying: true}))
                    }
                }}>
                    {renderIcon()}
                </span>
                <div className="highlight__navigation">
                    {highlights.map((_, index) => (
                        <span key={index} className="highlight__progress-bar"
                        ref={(element) => progressBarRefs.current.push(element)}
                        onClick={() => {
                            setHighlightsState((prevState) => ({...prevState, highlightID: index, isPlaying: false}))
                        }}>
                            <div className="highlight__progress"
                            ref={(element) => progressRefs.current.push(element)}/>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Highlights