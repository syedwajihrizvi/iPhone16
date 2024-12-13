import { Environment, OrbitControls, PerspectiveCamera, View} from "@react-three/drei"
import { Suspense } from "react"
import IPhone from "./iPhone"

interface Props {
    index: number,
    modelRef: any,
    size: 'small' | 'large',
    id: string,
    color: string,
    currentVariation: 'small' | 'large'
}

function IPhoneModelView({index, modelRef, size, id, color, currentVariation}: Props) {
    return (
        <View index={index} id={id} className="model__view" style={{translate: currentVariation == 'small' ? '0%' : '-100%'}}>
            <ambientLight intensity={0.3}/>
            <PerspectiveCamera makeDefault position={[10, 0, 40]}/>
            <OrbitControls makeDefault enableZoom={false} enablePan={false} rotateSpeed={0.7}/>
            <Environment preset="warehouse"/>
            <group ref={modelRef} name="iPhone" position={[0 ,0 ,0]}>
                <Suspense>
                    <IPhone scale={size === 'small' ? [2, 2, 2] : [2.18, 2.18, 2.18]} color={color}/>
                </Suspense>
            </group>
        </View>
    )
}

export default IPhoneModelView