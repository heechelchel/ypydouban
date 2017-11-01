import React, {Component} from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
class Head_com extends Component {

	render() {
		return (
			<div id="head_com">
				<Link to="/" className="logo"><img src="https://img3.doubanio.com/f/ypy/0eef120aa1ec4fbf5235c1e9c28ceb4208bc797c/pics/lg_ypy_r.png"/></Link>
				<a className="login">登入</a>
			</div>
		)
	}
}

export default Head_com;