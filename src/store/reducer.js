const defaultState = {
	focused: false,
	popout: false,
}

export default (state = defaultState, action) => {
	if(action.type === 'item_click'){
		return{
			focused: true
		}
	}

	if(action.type === 'login_click'){
		return{
			popout: true
		}
	}

	if(action.type === 'cover_click'){
		return{
			popout: false
		}
	}
	return state;
}