import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'

export default class extends Component {
	render() {
		const actions = [
		  <FlatButton
		    label="Ok"
		    primary={true}
		    keyboardFocused={true}
		    onClick={this.props.handleClose}
		  />,
		]

		return (
			<div>
        <RaisedButton label="Order" onClick={this.props.handleOpen} />
        <Dialog
          title="Order"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
          <DatePicker hintText="Enter Date" />
          <TextField hintText='Ryan Abis' floatingLabelText='Enter Name' />
        </Dialog>
			</div>
		)
	}
}