import React, {Component} from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
class Head extends Component {

	render() {
		return (
			<div id="head">
				<Link to="/" className="logo"><img src="https://img3.doubanio.com/f/ypy/5b18ed9f97e03c20fcbbbd0dfc979c8a0fda6ced/pics/lg_ypy_w.png"/></Link>
				<a className="login">登入</a>
			</div>
		)
	}
}

export default Head;