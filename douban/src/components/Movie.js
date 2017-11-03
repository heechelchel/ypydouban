import React, {Component} from 'react';
import {connect} from 'react-redux';
import Head_com from "./Head_com";
import Nav from "./Nav";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class MovieUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="movie">
				<Head_com/>
					<div className="list">
						
					</div>
					<div className="title">
						婚纱.旅拍客片
					</div>

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