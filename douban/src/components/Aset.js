import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Head_com from "./Head_com";
import Nav from "./Nav";
import '../style/aset.scss';
class AsetUI extends Component {
	componentDidMount() {
		this.props.getAsetData();
	}
	render() {
		return (
			<div id="aset">
				<Head_com/>
				<div className="aset_list">
					<div className="aset_head">
						<div className="cate">
							<select>
								<option>类别</option>
								<option>写真</option>
								<option>婚纱</option>
							</select>
						</div>
						<div className="city">
							<select>
								<option>拍摄地</option>
								<option>北京</option>
								<option>上海</option>
								<option>成都</option>
								<option>武汉</option>
								<option>清迈</option>
							</select>
						</div>
						<div className="filter">
							<select>
								<option>筛选</option>
								<option>有优惠</option>
								<option>最受欢迎</option>
								<option>小拍推荐</option>
							</select>
						</div>
					</div>
					
					<div className="aset_title">全部套系</div>
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
				</div>
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
		getAsetData: function(){
			axios.get("/ajax/promotion/info")
			.then((res)=>{
				console.log(res);
				dispatch({
					type: "ASET_GET_DATA",
					payload: res.data.promotion_config.new_arrival.services
				})
			})
		}
	}
}

const Aset = connect(mapStateToProps, mapDispatchToProps)(AsetUI);

export default Aset;