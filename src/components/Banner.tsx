import { bannerOne } from "../utils/image"
import ResponsiveImage from "./ResponsiveImage"

function Banner() {
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