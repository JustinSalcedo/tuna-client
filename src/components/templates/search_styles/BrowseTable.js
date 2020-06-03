import React from 'react'

import { TableElement } from './TableElement'

export const BrowseTable = ({ styles, tagging, addStyle }) => {

	const randomSelection = () => {
		if(styles.length !== 0) {
			const randomId = Math.floor(Math.random() * styles.length)
			const randomStyle = styles[randomId]
	
			const newStyle = {
				id: randomStyle.id,
				name: randomStyle.name,
				samples: randomStyle[tagging[1]].join(", ")
			}
	
			addStyle(newStyle)
		}
	}
	
	return (
		<div className="browse_table">
			<table className="table">
				<thead>
					<tr>
						<th>
							<button className="secondary_button mini-button" onClick={randomSelection} >
								<svg className="bi bi-shuffle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M12.646 1.146a.5.5 0 01.708 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708-.708L14.793 4l-2.147-2.146a.5.5 0 010-.708zm0 8a.5.5 0 01.708 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708-.708L14.793 12l-2.147-2.146a.5.5 0 010-.708z" clip-rule="evenodd"></path>
									<path fill-rule="evenodd" d="M0 4a.5.5 0 01.5-.5h2c3.053 0 4.564 2.258 5.856 4.226l.08.123c.636.97 1.224 1.865 1.932 2.539.718.682 1.538 1.112 2.632 1.112h2a.5.5 0 010 1h-2c-1.406 0-2.461-.57-3.321-1.388-.795-.755-1.441-1.742-2.055-2.679l-.105-.159C6.186 6.242 4.947 4.5 2.5 4.5h-2A.5.5 0 010 4z" clip-rule="evenodd"></path>
									<path fill-rule="evenodd" d="M0 12a.5.5 0 00.5.5h2c3.053 0 4.564-2.258 5.856-4.226l.08-.123c.636-.97 1.224-1.865 1.932-2.539C11.086 4.93 11.906 4.5 13 4.5h2a.5.5 0 000-1h-2c-1.406 0-2.461.57-3.321 1.388-.795.755-1.441 1.742-2.055 2.679l-.105.159C6.186 9.758 4.947 11.5 2.5 11.5h-2a.5.5 0 00-.5.5z" clip-rule="evenodd"></path>
								</svg>
							</button>
						</th>
						<th>Name</th>
						<th>Tags</th>
						<th>{tagging[0]}</th>
					</tr>
				</thead>
				<tbody>
					{styles.map(style => (<TableElement key={style.id} style={style} tagging={[tagging[1], tagging[2]]} addStyle={addStyle} />))}
				</tbody>
			</table>
		</div>
		)
}
