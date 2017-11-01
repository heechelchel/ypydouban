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
// import {
//     BrowserRouter as Router,
//     Link
// } from 'react-router-dom'

=======
import Foot from './main/Foot';
>>>>>>> c0bad83b9bd23b13bb0e737c1b2459b63e081587
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