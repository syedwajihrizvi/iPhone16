import { useState } from "react"
import { ImageData } from "../utils/interfaces"

interface Props {
    imageData: ImageData
}

function Loading() {
    return (
        <h1>Loading...</h1>
    )
}

function ResponsiveImage({imageData}: Props) {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            {isLoading && <Loading/>}
            <picture>
                <source media="(max-width: 767px)" 
                        srcSet={imageData.small} />
                <source media="(min-width: 768px) and (max-width: 1024px)" 
                        srcSet={imageData.medium} />
                <source media="(min-width: 1025px) and (max-width: 1280px)" 
                        srcSet={imageData.large}/>
                <source media="(min-width: 1281px)" 
                        srcSet={imageData.xLarge}/>
                <img className="img" src={imageData.medium} 
                    alt="Responsive" onLoad={() => setIsLoading(false)}/>
            </picture>
        </>
    )
}

export default ResponsiveImage