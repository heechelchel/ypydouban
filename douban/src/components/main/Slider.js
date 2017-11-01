import React, {Component} from 'react';

// import head from '../../style/head.scss'
import { Carousel} from 'antd-mobile';
class Slider extends Component {

	render() {
		return (
			<div id="slider">
				<h3>热门专题</h3>
			 	<Carousel className="my-carousel" autoplay={true} infinite dots={true}>
			      {['201603231536339756__xl', '201611241207566793__xl', '201701161845001702__l','201604121600574057__xl','201611281905327232__xl'].map(ii => (
			        <a href="" key={ii}><img alt="" src={`https://qnypy.doubanio.com/${ii}`} /></a>
			      ))}
			    </Carousel>
		    </div>
		)
	}
}

export default Slider;