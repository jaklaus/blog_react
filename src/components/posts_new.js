import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
	render(){
		return(
			<div>
				<div className="text-xs-right">
					<Link to="/" className="btn btn-primary">Home</Link>
				</div>
				
				<form>
				  <div className="form-group">
				    <label htmlFor="formGroupExampleInput">Title</label>
				    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="formGroupExampleInput2">Category</label>
				    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
				  </div>
				  <div className="form-group">
				  	<label htmlFor="formGroupExampleInput3">Category</label>
				  	<textarea className="form-control" id="formGroupExampleInput3"></textarea>
				  </div>
				</form>
				<button className="btn btn-success">Submit</button>
				<button className="btn btn-danger">Cancel</button>
			</div>
		)
	}
}

export default PostsNew;