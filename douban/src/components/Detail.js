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
		// getData: function(){
		// 	axios.get("shopping/restaurants?latitude=38.913689&longitude=121.614761&offset=0&limit=20&extras[]=activities&terminal=h5")
		// 	.then((res)=>{
		// 		dispatch({
		// 			type: "Main_GET_DATA",
		// 			payload: res.data
		// 		})
		// 	})
		// }
	}
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailUI);

export default Detail;