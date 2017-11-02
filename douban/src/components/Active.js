import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aset from './Aset'
class ActiveUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="active">
				{this.props.list.spe}
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

const Active = connect(mapStateToProps, mapDispatchToProps)(ActiveUI);

export default Active;