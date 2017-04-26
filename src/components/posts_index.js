import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {


	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts(){
		if(!this.props.posts){
			return <div/>
		}
		return _.map(this.props.posts, post => {
			return <li className="list-group-item" key={post.id}>{post.title}</li>
		})

	}

	render(){
		return(
			<div>
				<div className="text-xs-right">
					<Link to='/posts/new' className="btn btn-primary">New Post</Link>
				</div>
				<h4>Post List</h4>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return { posts: state.posts }
}

export default connect(mapStateToProps ,{ fetchPosts })(PostsIndex);