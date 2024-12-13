import { privacy } from "../utils/image"
import ResponsiveImage from "./ResponsiveImage"

function Privacy() {
    return (
        <section className="privacy">
            <header className="privacy__header">
                <ResponsiveImage imageData={privacy}/>
                <h1 className="privacy__heading">Great powers come with great privacy.</h1>
            </header>
            <div className="privacy__content">
                <p className="shade-text">
                Apple Intelligence is designed to <span>protect your privacy at every step</span>. 
                It’s integrated into the core of iPhone through on-device processing. 
                So it’s aware of your personal information without collecting your personal information.  
                </p>
                <p className="shade-text">
                And with <span>groundbreaking Private Cloud Compute</span>,
                 Apple Intelligence can draw on 
                larger Apple-designed server-based models, running on Apple silicon, 
                to handle more complex requests for you while protecting your privacy.
                </p>
            </div>
            <a href="#" className="link">Learn more about Apple Intelligence</a>
        </section>
    )
}

export default Privacy