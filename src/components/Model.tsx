import { useRef, useState } from 'react'
import * as THREE from 'three'
import { ModelVariation } from '../utils/interfaces'
import { models } from '../utils/models/modelData'
import IPhoneModelView from './iPhoneModelView'
import { Canvas } from '@react-three/fiber'
import { View } from "@react-three/drei"
import IPhone16ProModelView from './iPhone16ProModelView'

function Model() {
    const [variation, setVariation] = useState<ModelVariation>({size: 'small', type: 'normal'})

    const [model, setModel] = useState(models[variation.type].colors[0])

    console.log(model)
    //model container
    const modelContainer = useRef<HTMLDivElement | null>(null)
    // Camera control for each model
    const cameraControlNormalSmall = useRef()
    const cameraControlNormalLarge = useRef()
    const cameraControlProNormalSmall = useRef()
    const cameraControlProNormalLarge = useRef()

    // models
    const smallNormal = useRef(new THREE.Group())
    const largeNormal = useRef(new THREE.Group())
    const smallPro = useRef(new THREE.Group())
    const largePro = useRef(new THREE.Group())

    // rotation
    const [smallRotation, setSmallRotation] = useState()
    const [largeRotation, setLargeRotation] = useState()
    const [smallProRotation, setSmallProRotation] = useState()
    const [largeProRotation, setLargeProRotation] = useState()

    const renderSizeClass = (size: string) => {
        let sizeClass = 'iPhone-size'
        sizeClass += variation.size == size ? ' iPhone-active-size' : ''
        return sizeClass
    }

    const renderModelHeading = () => {
        return `iPhone 16 ${variation.type == 'pro' ? ' Pro' : ''} ${model.title}`
    }

    const renderIPhoneVariationClass = (variationType: string) => {
        let variationClass = 'iPhone-variation-title'
        variationClass += variation.type == variationType ? ' iPhone-variaton-title-active' : ''
        return variationClass
    }

    const renderIPhoneColorClass = (colorTitle: string) => {
        let colorClass = "iPhone-color"
        colorClass +=  colorTitle == model.title ? ' iPhone-color-active' : ''
        return colorClass
    }

    return (
        <section className='model'>
            <header className='model__header'>
                <h3 className='model__header__heading'>Take a closer look</h3>
            </header>
            <span className="iPhone-variation-changer">
                <div className="iPhone-variation-title" onClick={() => {
                        setVariation(prevVariation => ({...prevVariation, type: 'normal'}))
                        setModel(models['normal'].colors[0])
                    }}>
                    <p className={renderIPhoneVariationClass('normal')}>iPhone 16</p>
                </div>
                <div className="iPhone-variation-title" onClick={() => {
                        setVariation(prevVariation => ({...prevVariation, type: 'pro'}))
                        setModel(models['pro'].colors[0])  
                    }}>
                    <p className={renderIPhoneVariationClass('pro')}>iPhone 16 Pro</p>
                </div>              
            </span>
            <div id="model__container" ref={modelContainer}>
                {variation.type == 'normal' && 
                <>
                    <IPhoneModelView index={1} modelRef={smallNormal} size='small' id="view1" color={model.id} currentVariation={variation.size}/>
                    <IPhoneModelView index={2} modelRef={largeNormal} size='large' id="view2" color={model.id} currentVariation={variation.size}/>
                </>}
                {variation.type == 'pro' && 
                <>
                    <IPhone16ProModelView index={3} modelRef={smallPro} size='small' id="view3" color={model.id} currentVariation={variation.size}/>
                    <IPhone16ProModelView index={4} modelRef={largePro} size='large' id="view4" color={model.id} currentVariation={variation.size}/>
                </>}           
                <Canvas className='model__canvas' eventSource={modelContainer as any}>
                    <View.Port/>
                </Canvas>
            </div>
            <h3 className='model__heading'>{renderModelHeading()}</h3>
            <div className='model-changer'>
                <span className="iPhone-color-changer">
                    {models[variation.type].colors.map((modelInformation, _) => (
                        <div className={renderIPhoneColorClass(modelInformation.title)} style={{backgroundColor: modelInformation.color}}
                        onClick={() => setModel(modelInformation)}/>
                    ))}
                </span>
                <span className='iPhone-size-changer'>
                    <div className={renderSizeClass('small')} onClick={() => setVariation(prevVariation => ({...prevVariation, size: 'small'}))}>
                        <p>{models[variation.type].sizes.small}</p>
                    </div>
                    <div className={renderSizeClass('large')} onClick={() => setVariation(prevVariation => ({...prevVariation, size: 'large'}))}>
                        <p>{models[variation.type].sizes.large}</p>
                    </div>
                </span>
            </div>
        </section>
    )
}

export default Model