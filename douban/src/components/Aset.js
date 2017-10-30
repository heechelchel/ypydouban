import React, {Component} from 'react';
import {connect} from 'react-redux';
class AsetUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="aset">
				套系
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

const Aset = connect(mapStateToProps, mapDispatchToProps)(AsetUI);

export default Aset;