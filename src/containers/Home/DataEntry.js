import React, { Component } from 'react'

import Customer from './DataEntry/Customer.js'
import Order from './DataEntry/Order.js'
import Job from './DataEntry/Job.js'
import Part from './DataEntry/Part.js'
import Supplier from './DataEntry/Supplier.js'

export default class extends Component {	
	render() {
		return (
			<div className='flex flex-column pa3'>
				<Customer />
				<Order />
				<Job />
				<Part />
				<Supplier />
			</div>
		)
	}
}