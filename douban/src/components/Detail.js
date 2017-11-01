import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
// class Detail extends Component {
// 	constructor(){
// 		super();
// 		this.componentDidMount = this.componentDidMount.bind(this);
// 		this.state={
// 			title:"",
// 			pic:"",
// 			spe:"",
// 			author:"",
// 			rep:"",
// 			dan:""
// 		}
// 	}
// 	componentDidMount (){
// 		var that = this
// 		axios.get(`/ajax/graphql?query=%0A++++%7B%0A++++++photographer(id%3A+%222087%22)+%7B%0A++++++++uid%2C%0A++++++++name%2C%0A++++++++good_rate%2C%0A++++++++finished_order_num%2C%0A++++++++available_time(show_unavailable%3Atrue%2C+show_expired%3Afalse)+%7B%0A++++++++++id%2C%0A++++++++++loc_id%2C%0A++++++++++loc_name%2C%0A++++++++++order_id%2C%0A++++++++++start_time%2C%0A++++++++++end_time%2C%0A++++++++%7D%0A++++++%7D%0A++++++package(id%3A+${this.props.match.params.id})+%7B%0A++++++++id%2C%0A++++++++title%2C%0A++++++++type_text%2C%0A++++++++collected_num%2C%0A++++++++services+%7B%0A++++++++++id%2C%0A++++++++++price%2C%0A++++++++++prepay%2C%0A++++++++++origin_photo_n%2C%0A++++++++++final_photo_n%2C%0A++++++++++duration%2C%0A++++++++++suit_num%2C%0A++++++++++has_makeup%2C%0A++++++++++pger_suit_num%2C%0A++++++++%7D%2C%0A++++++++config%2C%0A++++++++locations+%7B%0A++++++++++loc_id%2C%0A++++++++++loc_name%2C%0A++++++++%7D%2C%0A++++++%7D%0A++++%7D%0A++`)
// 		.then(function(res){
// 			console.log(res)
// 			that.state.title = res.data.package.title
// 			that.state.pic = JSON.parse(res.data.package.config).contents.cover.photo.url
// 			that.state.spe = res.data.package.type_text
// 			that.state.author = res.data.photographer.name
// 			that.state.rep = Math.floor((res.data.photographer.good_rate)*100)
// 			that.state.dan = res.data.photographer.finished_order_num
// 			that.setState({
// 					list:that.state.list
// 				})
// 			// console.log(JSON.parse(res.data.package.config).contents.cover.photo.square_url)
// 		})
// 	}
// 	render() {
// 		return (
// 			<div id="detail">
// 				<div className="head"><a>登入</a></div>
// 				<div className="banner">
// 					<img src={this.state.pic}/>
// 					<h1><span>[{this.state.spe}]</span>{this.state.title}</h1>
// 				</div>
// 				<div className="con">
// 					<div>
// 						<span>摄影师:</span>
// 						<span>{this.state.author}</span>
// 						<span>(好评率{this.state.rep}%,</span>
// 						<span>已拍摄{this.state.dan}单)</span>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }


class DetailUI extends Component {
	componentDidMount() {
		this.props.getData.bind(this)();

	}
	render() {
		return (
			<div id="detail">
				<div className="head">
					<a>登入</a>
				</div>
				<div className="banner">
<<<<<<< HEAD
					<img src={this.props.list.pic}/>
					<h1><span>[{this.props.list.spe}]</span>{this.props.list.title}</h1>
=======
					<img alt="" src={this.state.pic}/>
					<h1><span>[{this.state.spe}]</span>{this.state.title}</h1>
>>>>>>> e354dda5569fa438bd3fde3e92d2cc76ea7c8523
				</div>
				<div className="con">
					<div className="top">
						<span>摄影师:</span>
						<span>{this.props.list.author}</span>
						<span>(好评率{this.props.list.rep}%,</span>
						<span>已拍摄{this.props.list.dan}单)</span>
					</div>
					<div className="center">
						{this.props.list.price.map((item, index)=>{
							return <a href="#" key="item + index">{Math.floor(item.price)}<span>元</span></a>
						})}
					</div>
				</div>
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
			axios.get(`/ajax/graphql?query=%0A++++%7B%0A++++++photographer(id%3A+%222087%22)+%7B%0A++++++++uid%2C%0A++++++++name%2C%0A++++++++good_rate%2C%0A++++++++finished_order_num%2C%0A++++++++available_time(show_unavailable%3Atrue%2C+show_expired%3Afalse)+%7B%0A++++++++++id%2C%0A++++++++++loc_id%2C%0A++++++++++loc_name%2C%0A++++++++++order_id%2C%0A++++++++++start_time%2C%0A++++++++++end_time%2C%0A++++++++%7D%0A++++++%7D%0A++++++package(id%3A+${this.props.match.params.id})+%7B%0A++++++++id%2C%0A++++++++title%2C%0A++++++++type_text%2C%0A++++++++collected_num%2C%0A++++++++services+%7B%0A++++++++++id%2C%0A++++++++++price%2C%0A++++++++++prepay%2C%0A++++++++++origin_photo_n%2C%0A++++++++++final_photo_n%2C%0A++++++++++duration%2C%0A++++++++++suit_num%2C%0A++++++++++has_makeup%2C%0A++++++++++pger_suit_num%2C%0A++++++++%7D%2C%0A++++++++config%2C%0A++++++++locations+%7B%0A++++++++++loc_id%2C%0A++++++++++loc_name%2C%0A++++++++%7D%2C%0A++++++%7D%0A++++%7D%0A++`)
			.then((res)=>{
				console.log(res)
		dispatch({
			type:"Main_GET_DATA",
			payload:{
				title : res.data.package.title,
				pic : JSON.parse(res.data.package.config).contents.cover.photo.url,
				spe : res.data.package.type_text,
				author : res.data.photographer.name,
				rep : Math.floor((res.data.photographer.good_rate)*100),
				dan : res.data.photographer.finished_order_num,
				price:res.data.package.services
			}
		})
			})
		}
	}
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailUI);


export default Detail;