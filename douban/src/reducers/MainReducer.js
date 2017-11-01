const MainReducer = (state={price:[]}, action)=>{
	switch(action.type) {
		case 'Main_GET_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default MainReducer;