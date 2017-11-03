import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Head from './main/Head';
import Banner from './main/Banner';
import Slider from './main/Slider';
import Portrait from './main/Portrait';
import Feature from './main/Feature';
import Pger from './main/Pger';
import Nav from './Nav';
import Foot from './main/Foot';
import Photographer from "./Photographer";
import Aset from "./Aset";
import Movie from "./Movie";

class MainUI extends Component {
	componentDidMount() {
		this.props.getAsetData();
	}
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
		list: state.aset_list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getAsetData:function(){
			axios.get("/ajax/promotion/info")
  			.then((res)=>{
   				 dispatch({
      					type: "ASET_GET_DATA",
      					payload: res.data.promotion_config.new_arrival.services
    			})
  			})
  		}
	}
}

const Main = connect(mapStateToProps, mapDispatchToProps)(MainUI);

export default Main;