import React, { Component } from 'react'

import Customer from './DataEntry/Customer.js'
import Employee from './DataEntry/Employee.js'
import Order from './DataEntry/Order.js'
import Job from './DataEntry/Job.js'
import Part from './DataEntry/Part.js'
import Supplier from './DataEntry/Supplier.js'

export default class extends Component {	
	render() {
		return (
			<div className='pa3 justify-between vh-50 flex flex-column'>
				<Customer />
				<Employee />
				<Order />
				<Job />
				<Part />
				<Supplier />
			</div>
		)
	}
}