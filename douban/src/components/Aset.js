import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Head_com from "./Head_com";
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
					
					<div className="aset_title">写真套系</div>
				</div>
				
				{this.props.list.map((item, index)=>{
					return <li key={item.title}>{item.title}
						<img src={item.pger_pic} />
					</li>;
				})}
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