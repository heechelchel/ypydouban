import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  Link
} from 'react-router-dom';
import Main from "../Main";
class FootUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="foot">
				<div className="foot_serve">
					<img alt="" src="https://img3.doubanio.com/f/ypy/1f6d8a4cb8c89de5d931a3d4e3276a7221c3c0d9/pics/promotion/lion/qr.jpg"/>
					<p>微信服务号 ypy-douban</p>
				</div>	
				<div className="foot_copyright">
					<p>客服电话：<span>400-8353-331请按3</span> (工作日9:30到19::30)</p>
					<ul>
						<li>&copy;2016豆瓣摄影</li>
						<li>
							<Route exact path="/main" component={Main}/>
							<Link to="/main">关于我们</Link>
						</li>
						<li>
							<Route exact path="/main" component={Main}/>
							<Link to="/main">拍摄流程</Link>
						</li>
						<li>
							<Route exact path="/main" component={Main}/>
							<Link to="/main">常见问题</Link>
						</li>
					</ul>
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

const Foot = connect(mapStateToProps, mapDispatchToProps)(FootUI);

export default Foot;