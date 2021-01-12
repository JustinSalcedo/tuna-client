import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const TableElement = ({ model }) => {
	const { addModel, modelId } = useContext(GlobalContext)
	
	const selectModel = () => {
		const newModel = {
			id: model._id,
			category: model.category,
			structure: model.structure
		}

		addModel(newModel)
	}

    return (
        <tr>
			<td>
				<input className="input_radio" type="radio" name="modelId"
				onChange={selectModel} checked={model._id === modelId} />
			</td>
			<td>{model.model}</td>
			<td>{model.category}</td>
			<td>{model.structure}</td>
        </tr>
    )
}
