const AsetReducer = (state=[], action)=>{
	switch(action.type) {
		case 'ASET_GET_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default AsetReducer;