import React, {Component} from 'react';
import {connect} from 'react-redux';
class DetailUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="detail">
				{this.props.match.params.id}
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

const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailUI);

export default Detail;