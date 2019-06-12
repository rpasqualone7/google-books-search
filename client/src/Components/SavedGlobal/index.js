import React, { Component } from 'react';
import SavedGallery from '../SavedGallery';
import Logo from '../Logo';

class SavedGlobal extends Component {
	state = {
		items: [],
		promiseIsResolved: false
	};
	loadSaved() {

	}
	render() {
		return (
			<div className="global">
				<Logo />
				<SavedGallery items={this.state.items} />
			</div>)
	}
}

export default SavedGlobal