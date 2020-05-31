import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const TableElement = ({ style, addStyle }) => {

	const { newSection } = useContext(GlobalContext)

	let tagsString = style.tags.join(", ")
	if (tagsString.length >= 20) {
		tagsString = tagsString.substr(0, 17) + "..."
	}

	let sectionsString = style.sections.join(", ")
	if (sectionsString.length >= 20) {
		sectionsString = sectionsString.substr(0, 17) + "..."
	}
	
	const selectStyle = () => {
		const newStyle = {
            id: style._id,
            name: style.name,
            tags: style.tags.join(", ")
        }

		addStyle(newStyle)
	}

    return (
        <tr>
			<td>
				<input className="input_radio" type="radio" name="id"
				onChange={selectStyle} checked={style._id === newSection.layout} />
			</td>
			<td>{style.name}</td>
			<td>{tagsString}</td>
			<td>{sectionsString}</td>
        </tr>
    )
}
