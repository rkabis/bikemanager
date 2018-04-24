import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from './Home'

export default class extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Home />
			</MuiThemeProvider>
		)
	}
}