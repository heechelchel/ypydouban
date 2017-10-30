class WaimaiUI extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		return (
			<div id="waimai">
				<ul>
				{this.props.list.map((item, index)=>{
					return <li key={item.id}>{item.shop_name}</li>;
				})}
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
			axios.get("https://restapi.ele.me/shopping/v3/hot_search_words?latitude=38.913689&longitude=121.614761")
			.then((res)=>{
				dispatch({
					type: "WAIMAI_GET_DATA",
					payload: res.data
				})
			})
		}
	}
}

const Waimai = connect(mapStateToProps, mapDispatchToProps)(WaimaiUI);

export default Waimai;