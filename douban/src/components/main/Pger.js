import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  Link
} from 'react-router-dom';
import Movie from "../Movie";
class PgerUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="pger">
				<h2>本期推荐摄影师</h2>
				<div className="pger_more">
					<Route exact path="/movie" component={Movie}/>
					<Link to="/movie">全部摄影师</Link>
				</div>
				<div className="card">
					<div className="card_info">
						<div className="card_info_avater">
							<img alt="" src="https://img1.doubanio.com/view/ypy_pger_avatar/small/public/7d3b15a35cf7268.jpg"/>
						</div>
						<div className="card_info_name">人生海海工作室</div>
						<div className="card_info_loc">(北京)</div>
						<div className="card_info_rec">
							"人生海海－一拍一签约工作室，一个除了［很赞］没有其他评价的工作室，一个把“每一个你”都当作明星一样闪耀的工作室。主理人吴晓松，从事人像摄影工作八年，他是一拍一“写真摄影师养成计划”的讲师，也是著名音乐人金玟岐、刘瑞琦唱片封面的拍摄及策划者。"
							<p>--小拍推荐</p>
						</div>
						<div className="card_info_more">
							<Link to="/aset">更多zuopin</Link>
						</div>
					</div>
					<div className="card_photo">
						<img alt="" src="https://qnypy.doubanio.com/201701161232106551__l"/>
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
		}
	}
}

const Pger = connect(mapStateToProps, mapDispatchToProps)(PgerUI);

export default Pger;