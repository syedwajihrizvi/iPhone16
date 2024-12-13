import ComparisionCard from "./ComparisionCard"
import { appleIntelligenceIcon, a18Icon, cameraControlIcon, 
         baseCameraIcon, proCameraIcon, batteryIcon, a18ProIcon,  } from "../utils/image"

const models = [
    {
        modelColors: ['#9AACF5', '#B0D4D2', '#F2ADDA', '#FAFAFA', '#3C4042'],
        title: 'iPhone 16',
        prices: 'From $1129 or $51.05/mo. for 24 mos. at 7.99% APR',
        features: [
            {
                icon: appleIntelligenceIcon,
                text: (
                    <ul className="modelFeature__list">
                        <li className="modelFeature__list__item">Apple Intelligence</li>
                    </ul>
                )
            },
            {
                icon: a18Icon,
                text: (
                    <ul className="modelFeature__list">
                        <li className="modelFeature__list__item">A18 chip with 5-core GPU</li>

                    </ul>
                )
            },
            {
                icon: cameraControlIcon,
                text: (
                    <ul className="modelFeature__list">
                        <li className="modelFeature__list__item">Camera Control</li>
                    </ul>
                )
            },
            {
                icon: baseCameraIcon,
                text: (
                    <ul className="modelFeature__list">
                        <li className="modelFeature__list__item">Advanced dual-camera system</li>
                        <li className="modelFeature__list__item">Advanced 48MP Fusion camera</li>
                        <li className="modelFeature__list__item">2x Telephoto</li>
                        <li className="modelFeature__list__item">12MP Ultra Wide Camera</li>
                    </ul>
                )
            },
            {
                icon: batteryIcon,
                text: (
                    <ul className="modelFeature__list">
                        <li className="modelFeature__list__item">Up to 27 hours video playback</li>
                    </ul>
                )
            }
        ]
    },
    {
        modelColors: ['#BFA48F', '#C2BCB2', '#F2F1EC', '#3C3C3D'],
        title: 'iPhone 16 Pro',
        prices: 'From $1449 or $65.52/mo. for 24 mos. at 7.99% APR',
        features: [
            {
                icon: appleIntelligenceIcon,
                text: (
                    <ul className="modelFeature__list">
                        <li className="modelFeature__list__item">Apple Intelligence</li>
                    </ul>
                )
            },
            {
                icon: a18ProIcon,
                text: (
                    <ul className="modelFeature__list">
                        <li className="modelFeature__list__item">A18 chip with 6-core GPU</li>

                    </ul>
                )
            },
            {
                icon: cameraControlIcon,
                text: (
                    <ul className="modelFeature__list">
                        <li className="modelFeature__list__item">Camera Control</li>
                    </ul>
                )
            },
            {
                icon: proCameraIcon,
                text: (
                    <ul className="modelFeature__list">
                        <li className="modelFeature__list__item">Advanced dual-camera system</li>
                        <li className="modelFeature__list__item">Advanced 48MP Fusion camera</li>
                        <li className="modelFeature__list__item">5x Telephoto camera</li>
                        <li className="modelFeature__list__item">48MP Ultra Wide camera</li>
                    </ul>
                )
            },
            {
                icon: batteryIcon,
                text: (
                    <ul className="modelFeature__list">
                        <li className="modelFeature__list__item">Up to 33 hours video playback</li>
                    </ul>
                )
            }
        ]
    }
]
function Comparision() {
    return (
        <section className="comparision">
            <div className="container">
                <header className="comparision__header">
                    <h3 className="comparision__heading">Keep exploring iPhone.</h3>
                    <a href="#" className="link">Explore all iPhones</a>
                </header>
                <div className="comparision-grid">
                    {models.map(feature => (
                        <ComparisionCard modelColors={feature.modelColors} title={feature.title}
                                         prices={feature.prices} features={feature.features}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Comparision