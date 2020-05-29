import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const TableElement = ({ style, tagging, addStyle }) => {

	const { newTemplate } = useContext(GlobalContext)

	let tagsString = style.tags.join(", ")
	if (tagsString.length >= 20) {
		tagsString = tagsString.substr(0, 17) + "..."
	}

	let samplesString = style[tagging[0]].join(", ")
	if (samplesString.length >= 20) {
		samplesString = samplesString.substr(0, 17) + "..."
	}
	
	const selectStyle = () => {
		const newStyle = {
            id: style.id,
            name: style.name,
            samples: style[tagging[0]].join(", ")
        }

		addStyle(newStyle)
	}

    return (
        <tr>
			<td>
				<input className="input_radio" type="radio" name="id"
				onChange={selectStyle} checked={style.id === newTemplate[tagging[1]]} />
			</td>
			<td>{style.name}</td>
			<td>{tagsString}</td>
			<td>{samplesString}</td>
        </tr>
    )
}
