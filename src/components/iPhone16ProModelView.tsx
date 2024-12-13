import { Environment, OrbitControls, PerspectiveCamera, View} from "@react-three/drei"
import { Suspense } from "react"
import IPhonePro from "./iPhone16Pro"

interface Props {
    index: number,
    modelRef: any,
    size: 'small' | 'large',
    id: string,
    color: string,
    currentVariation: 'small' | 'large'
}

function IPhone16ProModelView({index, modelRef, size, id, color, currentVariation}: Props) {
    return (
        <View index={index} id={id} className="model__view" style={{translate: currentVariation == 'small' ? '0%' : '-100%'}}>
            <ambientLight intensity={0.3}/>
            <PerspectiveCamera makeDefault position={[2, 0, 3]}/>
            <OrbitControls makeDefault enableZoom={false} rotateSpeed={0.7} 
            enablePan={false}/>
            <Environment preset="warehouse"/>
            <group ref={modelRef} name="iPhonePro" position={[0 ,0 ,0]}>
                <Suspense>
                    <IPhonePro scale={size === 'small' ? [1.55, 1.55, 1.55] : [1.68, 1.68, 1.68]} color={color}/>
                </Suspense>
            </group>
        </View>
    )
}

export default IPhone16ProModelView