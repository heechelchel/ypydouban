import React, {Component} from 'react';
import {connect} from 'react-redux';
import Head_com from "./Head_com";
import Nav from "./Nav";
class MovieUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="movie">
				<Head_com/>
					电影
				<Nav/>
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