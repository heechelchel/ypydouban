import React, {Component} from 'react';
import {connect} from 'react-redux';
import Head_com from "./Head_com";
import Nav from "./Nav";
import Foot from "./main/Foot";
import '../style/aset.scss';
import '../style/photographer.scss';
class PhotographerUI extends Component {
	componentDidMount() {
		// this.props.getAsetData();
	}
	render() {
		return (
			<div id="photographer">
				<Head_com/>
				<div className="head">
					<h1>我们专注为你拍照</h1>
					<p>"美丽存在于万物，看见并发掘出美丽，是摄影不同于随拍的地方。"</p>
					<p>—马特·哈迪</p>
				</div>
				<div className="city">
					<select>
						<option>全部城市</option>
						<option>北京</option>
						<option>上海</option>
						<option>成都</option>
						<option>武汉</option>
						<option>清迈</option>
					</select>
				</div>
				<ul className="aset_count">
						{this.props.list.map((item,index)=>{
						return  <li key={item.title}>
								    <img alt="" src={item.cover} />
								    <p className="title">{item.title}</p>
								    <p className="price">￥{item.price}<span>{item.num_remain}人想拍</span><i className="iconfont">&#xe63b;</i></p>
								    <p className="loc">拍摄地：{item.loc}</p>
						        </li>
						})}
					</ul>
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

		}
	}	
}

const Photographer = connect(mapStateToProps, mapDispatchToProps)(PhotographerUI);

export default Photographer;