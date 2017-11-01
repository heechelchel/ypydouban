import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  Link
} from 'react-router-dom';
import Aset from '../Aset';
import Detail from '../Detail';
class PortraitUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="portrait">
				<h2>写真</h2>
				<div className="label">
					<div className="label_after">
						<div className="label_before">
							在这里，你是女主角
						</div>
					</div>
				</div>
				<div className="locs">
					<Route exact path="/aset" component={Aset}/>
					<Link to="/aset">北京</Link>
				    <Link to="/aset">上海</Link>
				    <Link to="/aset">广州</Link>
				    <Link to="/aset">成都</Link>
				    <Link to="/aset">武汉</Link>
				    <Link to="/aset">全部</Link>
				</div>
				<div className="list">


				
				      <Link to="detail/1478" className="first"><img alt="" src="https://qnypy.doubanio.com/201606281158561682__l"/></Link>
					  <Route exact path="/detail" component={Detail}/>
				      <Link to="/detail/2208" className="detail_list">
				          <img alt="" src="https://qnypy.doubanio.com/201612272246553725__l"/>
				          <div className="title">越夜越美丽</div>
				          <div className="price">￥3480起/套</div>
				          <div className="loc">厦门，南京，成都，广州，上海，北京</div>
				      </Link>
				      <Link to="/detail/1909" className="detail_list">
				          <img alt="" src="https://qnypy.doubanio.com/201701151804014695__l"/>
				          <div className="title">一百种可能  |  20</div>
				          <div className="price">￥3480起/套</div>
				          <div className="loc">
				          Tokyo,厦门，台北，沈阳，南京，成都，广州，上海</div>
				      </Link>
				      <Link to="/detail/1447" className="detail_list">
				          <img alt="" src="https://qnypy.doubanio.com/201611281135447008__l"/>
				          <div className="title">萌宠照相馆</div>
				          <div className="price">￥790起/套</div>
				          <div className="loc">北京</div>
				      </Link>
				      <Link to="/detail/2168" className="detail_list">
				          <img alt="" src="https://qnypy.doubanio.com/201612051403116167__l"/>
				          <div className="title">全家福</div>
				          <div className="price">￥3750起/套</div>
				          <div className="loc">昆明，洛阳，福州，长沙，苏州，西安，南京，郑州</div>
				      </Link>
				      <Link to="/detail/1415" className="detail_list">
				          <img alt="" src="https://qnypy.doubanio.com/201701031223474755__l"/>
				          <div className="title">清迈印象</div>
				          <div className="price">￥1700起/套</div>
				          <div className="loc">Pai，清迈</div>
				      </Link> 
				</div>
				<div className="more">
					<Link to="/aset">更多写真套系</Link>
				</div>



				<h2>婚纱</h2>
				<div className="label">
					<div className="label_after">
						<div className="label_before">
							新婚照，格调最重要
						</div>
					</div>
				</div>
				<div className="locs">
					 <Route exact path="/aset" component={Aset}/>
					<Link to="/aset">北京</Link>
				    <Link to="/aset">上海</Link>
				    <Link to="/aset">广州</Link>
				    <Link to="/aset">成都</Link>
				    <Link to="/aset">武汉</Link>
				    <Link to="/aset">全部</Link>
				</div>
				<div className="list">
					  <Route exact path="/detail" component={Detail}/>
				      <Link to="/detail" className="first"><img alt="" src="https://qnypy.doubanio.com/201612071124478858__l"/></Link>
				      <Link to="/detail" className="detail_list">
				          <img alt="" src="https://qnypy.doubanio.com/201611081230072939__l"/>
				          <div className="title">青岛|遇见一个温暖的你</div>
				          <div className="price">￥7800起/套</div>
				          <div className="loc">青岛</div>
				      </Link>
				      <Link to="/detail" className="detail_list">
				          <img alt="" src="https://qnypy.doubanio.com/201609092241423441__l"/>
				          <div className="title">复古结婚照</div>
				          <div className="price">￥5880起/套</div>
				          <div className="loc">北京</div>
				      </Link>
				      <Link to="/detail" className="detail_list">
				          <img alt="" src="https://qnypy.doubanio.com/201611151334204439__l"/>
				          <div className="title">最美不过你和阳光都在啊啊啊啊啊</div>
				          <div className="price">￥790起/套</div>
				          <div className="loc">北京</div>
				      </Link>
				      <Link to="/detail" className="detail_list">
				          <img alt="" src="https://qnypy.doubanio.com/201605111858147461__l"/>
				          <div className="title">等风来</div>
				          <div className="price">￥8898起/套</div>
				          <div className="loc">北京</div>
				      </Link>
				      <Link to="/detail" className="detail_list">
				          <img alt="" src="https://qnypy.doubanio.com/201701052157092562__l"/>
				          <div className="title">日常即永恒-轻婚纱集</div>
				          <div className="price">￥2399起/套</div>
				          <div className="loc">重庆，成都，大理，清迈，kyoto，香港，杭州，厦门，南京，武汉，深圳，上海</div>
				      </Link> 
				</div>
				<div className="more">
					<Link to="/aset">更多婚纱套系</Link>
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

const Portrait = connect(mapStateToProps, mapDispatchToProps)(PortraitUI);

export default Portrait;