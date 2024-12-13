import { iPhone16Colors, iPhone16ProColors } from "./colors";

export const models = {
    'pro': {
       colors: [
        {
            title: 'Desert Titanium',
            color: iPhone16ProColors.desertTitanium,
            id: 'desertTitanium'
        },
        {
            title: 'Natural Titanium',
            color: iPhone16ProColors.naturalTitanium,
            id: 'naturalTitanium'
        },
        {
            title: 'White Titanium',
            color: iPhone16ProColors.whiteTitanium,
            id: 'whiteTitanium'
        },
        {
            title: 'Black Titanium',
            color: iPhone16ProColors.blackTitanium,
            id: 'blackTitanium'
        }
       ],
       sizes: {
        small: "6.3''",
        large: "6.9''"
       }
    },
    'normal': {
        colors: [
            {
                title: 'Ultra Marine',
                color: iPhone16Colors.ultramarine,
                id: 'ultramarine'
            },
            {
                title: 'Teal',
                color: iPhone16Colors.teal,
                id: 'teal'
            },
            {
                title: 'Pink',
                color: iPhone16Colors.pink,
                id: 'pink'
            },
            {
                title: 'White',
                color: iPhone16Colors.white,
                id: 'white'
            },
            {
                title: 'Black',
                color: iPhone16Colors.black,
                id: 'black'
            }
        ],
        sizes: {
            small: "6.1''",
            large: "6.7''"
           }
    }
}