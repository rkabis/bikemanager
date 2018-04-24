import React, { Component } from 'react'

import Order from './DataEntry/Order.js'

export default class extends Component {
	constructor() {
		super()
		this.state = {
			open: false
		}
		this.handleOpen = () => {this.setState({open: true})}
		this.handleClose = () => {this.setState({open: false})}
	}

	render() {
		return (
			<div>
				<Order
					open={this.state.open}
					handleClose={this.handleClose}
					handleOpen={this.handleOpen}
				/>
			</div>
		)
	}
}