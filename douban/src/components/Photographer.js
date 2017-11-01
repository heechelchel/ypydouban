import React, {Component} from 'react';
import {connect} from 'react-redux';
import Head_com from "./Head_com";
import Nav from "./Nav";
class PhotographerUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="photographer">
				<Head_com/>
					摄影师
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

const Photographer = connect(mapStateToProps, mapDispatchToProps)(PhotographerUI);

export default Photographer;