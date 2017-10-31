import React, {Component} from 'react';
import {connect} from 'react-redux';
class FeatureUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="feature">
				<ul>
					<li>
						<div className="figure">
							<img alt="" src="https://img3.doubanio.com/f/ypy/82992bcd72242f6eace5ec8a1d96b7b72069058e/pics/ic_feature_1.png"/>
						</div>
						<div className="desc">
							<div className="desc_t">最棒的摄影师</div>
							<p>这里每一位摄影师，都是豆瓣摄影从专业、创意、服务三个反面，于千百摄影师中精挑细选而来。</p>
						</div>
					</li>
					<li>
						<div className="figure">
							<img alt="" src="https://img3.doubanio.com/f/ypy/d454782b767bd9473b6f4d4b6e7f1aff9e6514f1/pics/ic_feature_2.png"/>
						</div>
						<div className="desc">
							<div className="desc_t">1对1定制拍摄</div>
							<p>每一次拍摄都花足心思，在意每一个人的个性特点，拒绝模式化生产。好照片，属于每一个特别的你。</p>
						</div>
					</li>
					<li>
						<div className="figure">
							<img alt="" src="https://img3.doubanio.com/f/ypy/873f3f59f1f97a447b745a7718cf492de7b6f785/pics/ic_feature_3.png"/>
						</div>
						<div className="desc">
							<div className="desc_t">没有额外消费</div>
							<p>所有服务内容均价格透明，没有任何形式的诱导消费，你最初看到的价格就是最终要支付的金额。</p>
						</div>
					</li>
				</ul>
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

const Feature = connect(mapStateToProps, mapDispatchToProps)(FeatureUI);

export default Feature;