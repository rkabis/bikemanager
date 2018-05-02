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
			open: false
		}
		this.handleOpen = () => {this.setState({open: true})}
		this.handleClose = () => {this.setState({open: false})}
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
        <RaisedButton className='w-25' label='Part' onClick={this.handleOpen} />
        <Dialog
          title='Part'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
	        <div className='flex flex-column'>
	          <DatePicker hintText='Enter Date' />
	          <TextField floatingLabelText='Part Number' />
	          <TextField floatingLabelText='Part Name' />
	          <TextField floatingLabelText='Quantity' />
	        </div>
        </Dialog>
			</div>
		)
	}
}