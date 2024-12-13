import { hero_imgs } from "../utils/image"
import ResponsiveImage from "./ResponsiveImage"

function Hero() {
    return (
        <section className="hero">
            <ResponsiveImage imageData={hero_imgs}/>
            <div className="hero__detail">
                <button className="btn hero__detail__btn btn-large">Buy</button>
                <h3 className="hero__detail__header">From $1129 or $51.05/mo. for 24 mos. at 7.99% APR</h3>
                <p className="hero__detail__text">Apple Intelligence coming this December</p>
            </div>
        </section>
    )
}

export default Hero