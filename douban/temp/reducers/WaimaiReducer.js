const function WaimaiReducer = (state=[], action)=>{
	switch(action.type) {
		case 'WAIMAI_GET_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default WaimaiReducer;