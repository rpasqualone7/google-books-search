import React, { Component } from 'react';
import Delete from "../Delete"
import API from "../../utils/api";
import "./style.css"

class SavedGallery extends Component {
	state = {
		items: [],
		promiseIsResolved: false
	};

	deleteSaved(props) {
		API.deleteBook(props.id)
		.then(
			this.setState({items: this.state.items.filter(item => item._id !== props.id)}))

	}

	componentDidMount() {
		API.getBook().then((res => {
			this.setState({ items: res.data })}))
			.then(this.setState({promiseIsResolved: true}));
	}

	render() {
		let altImage = 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Play-Books-icon.png'
		if(!this.state.promiseIsResolved){return null}
		else{
			return(
				<div className="book-list-wrapper">
					<div className="col-sm-12">
						<p className="search-status">Saved Items</p>
					</div>
					{
						this.state.items.map((item, index) => {
							let { authors, image, link, description,} = item;
							let bookTitle = item.title;
							return(
								<div key={index} className="col-sm-12 col-md-4 col-lg-12 book-column">
								<div className="book-wrapper">
									{<Delete
										id={item}
									deleteSaved={this.deleteSaved.bind(this)}
								/>}
								<a className="book" href={link} target="_blank" rel="noopener noreferrer">
									<div className="book-title white-text">
										<h3>{bookTitle}</h3>
									</div>
								</a>
								<p><strong>Author: </strong>{authors}</p>
								<div className="book-inner-flex">
									<a className="book" href={link} target="_blank" rel="noopener noreferrer">
										<div className="book-image-wrapper">
											<img src={image[0] !== undefined ? image[0].thumbnail : altImage}
											alt="Book Image"
											className="book-image"

											/>
										</div>

									</a>
									<div className="description">
										<div><strong>Description:</strong></div>
										{description}</div>
									</div>
								</div>

								</div>
							)
						})
					}
				</div>
			)
		}
	}
}

export default SavedGallery;