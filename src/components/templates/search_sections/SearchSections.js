import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { GlobalContext } from '../context/GlobalState'

import { ElementsList } from './ElementsList'

export const SearchSections = () => {

    const { fullSections, appendSections, getColors, getFonts } = useContext(GlobalContext)

    const searchStyles = () => {
        appendSections()

        // const newColors = [
        //     { id: 1, file: "I need to stick that poster", name: "Bottle glass", tags: ["matching", "wet", "emerald"], samples: ["#7cbdc9", "#d0d0b8", "#afbaa3"] },
        //     { id: 2, file: "Lorem ipsum dolor sit amet,", name: "Greece", tags: ["beige", "brown", "coffee"], samples: ["#dae8ec", "#dac5bc", "#b48464"] },
        //     { id: 3, file: "Maecenas rutrum augue mauri", name: "Austere", tags: ["minimal", "cold", "fall"], samples: ["#4d3d5d", "#f00000", "#1a3b5c"] },
        //     { id: 4, file: "Vestibulum a sapien odio.", name: "Boats", tags: ["brown", "contrast", "ginger"], samples: ["#3d677b", "#a6a7a3", "#d3c7b1"] },
        //     { id: 5, file: "Quisque eleifend vestibulum", name: "Renovation", tags: ["matching", "gold", "dark"], samples: ["#b67929", "#a3acb1", "#3c5b74"] },
        //     { id: 6, file: "Nullam sagittis orci at neq", name: "Dull", tags: ["cyan", "cold", "greenery"], samples: ["#487549", "#abba82", "#a7b5b7", "#037c87", "#102020"] },
        //     { id: 7, file: "Duis felis mi, venenatis ut", name: "Ceramic", tags: ["minimal", "brown", "matching", "coffe"], samples: ["#1d0f0b", "#796d5d", "#baae97", "#a6a7a5"] },
        //     { id: 8, file: "Donec eros leo, tincidunt u", name: "Baked", tags: ["clay", "beige", "orange", "home"], samples: ["#eb8b35", "#a43604"] },
        //     { id: 9, file: "Integer volutpat dolor eget", name: "Banana", tags: ["bright", "yellow", "pink"], samples: ["#e55b7e", "#f6f5f0", "#f6da73", "#948f47", "#3e5336"] },
        // ]

        // getColors(newColors)

        // const newFonts = [
        //     { id: 1, file: "I need to stick that poster", name: "Formal", tags: ["slab", "serif", "monotype"], faces: ["calvert", "acumin"] },
        //     { id: 2, file: "Lorem ipsum dolor sit amet,", name: "Writer", tags: ["typewrite", "serif", "light"], faces: ["montserrat", "courier"] },
        //     { id: 3, file: "Maecenas rutrum augue mauri", name: "Newspaper", tags: ["modern", "serif", "robust"], faces: ["skolar latin", "proxima nova"] },
        //     { id: 4, file: "Vestibulum a sapien odio.", name: "TextBlock", tags: ["sans", "small", "caps", "robust"], faces: ["alegreya sans", "source sans"] },
        //     { id: 5, file: "Quisque eleifend vestibulum", name: "Tropical", tags: ["brush", "sans", "display", "light", "hand"], faces: ["pacifico", "quicksand"] },
        //     { id: 6, file: "Nullam sagittis orci at neq", name: "Geometric", tags: ["display", "caps", "sans", "stroke"], faces: ["julius sans", "archivo narrow"] },
        //     { id: 7, file: "Duis felis mi, venenatis ut", name: "Magazine", tags: ["display", "serif", "elegant","print"], faces: ["playfair display", "raleway"] },
        //     { id: 8, file: "Donec eros leo, tincidunt u", name: "Alternate", tags: ["stroke", "sans", "versatile"], faces: ["oswald", "lato"] },
        //     { id: 1, file: "Integer volutpat dolor eget", name: "LittleFancy", tags: ["headline", "serif", "sans", "modern"], faces: ["minion", "super grotesk"] }
        // ]

        // getFonts(newFonts)

        let urlColor = 'http://127.0.0.1:3001/colors/search'

        axios.post(urlColor, {})
            .then(res => {
                const data = res.data.body
                getColors(data)
            })


        let urlFont = 'http://127.0.0.1:3001/fonts/search'

        axios.post(urlFont, {})
            .then(res => {
                const data = res.data.body
                getFonts(data)
            })
    }
    
    const verifier = () => {

        if (fullSections) {
			return (
				<div className="submit_buttons">
                    <div className="row">
                        <Link to="search_models">
                            <button className="btn secondary_button">{"<<<Go back"}</button>
                        </Link>
                        <Link to="search_styles">
                            <button className="btn primary_button"
                            onClick={searchStyles} >Continue >>></button>
                        </Link>
                    </div>
				</div>
			)
		} else return (
            <div className="center_button">
                <Link to="/templates/add/search_models">
                    <button className="btn secondary_button">{"<<<Go back"}</button>
                </Link>
            </div>
            )
	}
	
	return (
        <>
            <h1>Choose the sections</h1>
            <ElementsList />
			{verifier()}
        </>
    )
}
