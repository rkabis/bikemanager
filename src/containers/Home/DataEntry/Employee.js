import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'

export default class extends Component {
	constructor() {
		super()
		this.state = {
			open: false,
			nameValue: ''
		}
		this.handleOpen = () => {this.setState({open: true})}
		this.handleClose = () => {
			this.setState({open: false})
			alert(this.state.nameValue)
		}
		this.handleChange = (event) => {
			this.setState({
				nameValue: event.target.value
			})
		}
	}

	render() {
		const actions = [
		  <FlatButton
		    label="SEND"
		    primary={true}
		    keyboardFocused={true}
		    onClick={this.handleClose}
		  />,
		]

		return (
			<div>
        <RaisedButton className='w-25' label='Employee' onClick={this.handleOpen} />
        <Dialog
          title='Employee'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
	        <div className='flex flex-column'>
	          <DatePicker hintText='Enter Date' />
	          <TextField floatingLabelText='Employee Number' />
	          <TextField floatingLabelText='Employee Name' />
	          <TextField floatingLabelText='Contact Number' />
	          <DatePicker hintText='Completion Date' />
	          <TextField floatingLabelText='Rate' />
	        </div>
        </Dialog>
			</div>
		)
	}
}