import React, {Component} from 'react';
import {connect} from 'react-redux';
class FeatureUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="feature">
				
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

const Feature = connect(mapStateToProps, mapDispatchToProps)(FeatureUI);

export default Feature;