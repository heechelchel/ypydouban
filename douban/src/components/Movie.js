import React, {Component} from 'react';
import {connect} from 'react-redux';
class MovieUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="movie">
				电影
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		list: state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
		}
	}
}

const Movie = connect(mapStateToProps, mapDispatchToProps)(MovieUI);

export default Movie;