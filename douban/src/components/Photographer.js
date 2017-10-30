import React, {Component} from 'react';
import {connect} from 'react-redux';
class PhotographerUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="photographer">
				摄影师
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