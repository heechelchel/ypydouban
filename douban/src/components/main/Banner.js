import React, {Component} from 'react';



class Banner extends Component {

	render() {
		return (
			<div id="banner">
			<img src="https://qnypy.doubanio.com/201701151757113816__l" alt=""/>
			<h2>
				预约摄影师拍照<br/>记录每一个特别的你
			</h2>
			<a href="" className="order">如何预约拍照?</a>
			<div className="camer">						
        		© 摄影师: <a href="">人生海海(北京)</a>
			</div>
			</div>
		)
	}
}

export default Banner;