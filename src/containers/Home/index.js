import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'

import DataEntry from './DataEntry.js'
import Queries from './Queries.js'
import Report from './Report.js'

export default class extends Component {
	render() {
		return (
			<Tabs>
				<Tab label='Data Entry'>
					<DataEntry />
				</Tab>
				<Tab label='Queries'>
					<Queries />
				</Tab>
				<Tab label='Report'>
					<Report />
				</Tab>
			</Tabs>
		)
	}
}