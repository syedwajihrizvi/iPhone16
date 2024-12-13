export interface ImageData {
    xLarge: string,
    large: string,
    medium: string,
    small: string   
}

export interface Highlight {
    imageData: ImageData,
    description: string,
    descriptionColor: string
}

export interface ModelVariation {
    size : 'small' | 'large',
    type: 'normal' | 'pro'
}
