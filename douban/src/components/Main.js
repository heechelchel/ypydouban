import React, {Component} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios';
import Head from './main/Head';
import Banner from './main/Banner';
import Slider from './main/Slider';
import Portrait from './main/Portrait';
import Feature from './main/Feature';
import Pger from './main/Pger';
<<<<<<< HEAD

=======
import Nav from './Nav';
>>>>>>> e354dda5569fa438bd3fde3e92d2cc76ea7c8523
// import {
//     BrowserRouter as Router,
//     Link
// } from 'react-router-dom'
<<<<<<< HEAD


import Foot from './main/Foot';

=======
import Foot from './main/Foot';
>>>>>>> e354dda5569fa438bd3fde3e92d2cc76ea7c8523
class MainUI extends Component {
	// componentDidMount() {
	// 	this.props.getData();
	// }
	render() {
		return (
			<div id="main">
				<Head/>
				<Banner/>
				<Slider/>
				<Portrait/>
				<Feature/>
				<Pger/>
				<Foot/>
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

const Main = connect(mapStateToProps, mapDispatchToProps)(MainUI);

export default Main;