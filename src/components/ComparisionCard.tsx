import { ReactNode } from "react"
import { iPhone } from "../utils/image"
import { ImageData } from "../utils/interfaces"
import ResponsiveImage from "./ResponsiveImage"

interface Props {
    modelColors: string[],
    title: string,
    prices: string,
    features: {icon: ImageData, text: ReactNode}[]
}

function ComparisionCard({modelColors, title, prices, features}: Props) {
    return (
        <div className="modelDetails">
            <div className="modelDetails-image-container">
                <ResponsiveImage imageData={iPhone}/>
            </div>
            <div className="modelColors">
                {modelColors.map(color => (
                    <span className="modelColor" style={{backgroundColor: color}}></span>
                ))}
            </div>
            <p className="new-label">New</p>
            <h4 className="model-title">{title}</h4>
            <p className="model__prices">
                {prices}
            </p>
            <a href="#" className="link">Buy</a>
            <div className="modelFeatures">
                {features.map(feature => (
                    <div className="modelFeature">
                        <ResponsiveImage imageData={feature.icon}/>
                        {feature.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ComparisionCard