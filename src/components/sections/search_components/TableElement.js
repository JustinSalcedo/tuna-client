import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const TableElement = ({ compoEle, component }) => {
	const { updateComponents, componentList } = useContext(GlobalContext)

	const tagChildren = () => {
		if(component.children && (component.children.length !== 0)) {
			return 'Components'
		} else if(component.nodes && (component.nodes.length !== 0)) {
			return 'Nodes'
		} else if(component.placeholder) {return 'Placeholder'}
	}
	
	const selectComponent = () => {
		const newComponentList = componentList.map(item => {
			if (item.id === compoEle.id) {
				return {...item, docId: component._id, type: component.type, tag: component.tag}
			} else return {...item}
		})

		updateComponents(newComponentList)
	}

    return (
        <tr>
			<td>
				<input className="input_radio" type="radio" name="id"
				onChange={selectComponent} checked={compoEle.docId === component._id} />
			</td>
			<td>{component.type}</td>
			<td>{component.tag}</td>
			<td>{tagChildren()}</td>
        </tr>
    )
}
