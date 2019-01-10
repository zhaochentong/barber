const defaultState = {
	focused: false,
	popout: false,
	home_title: false,
	premium_title: false
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

	if(action.type === 'home_hightlight'){
		return{
			home_title: true,
			premium_title: false
		}
	}

	if(action.type === 'premium_hightlight'){
		return{
			premium_title: true,
			home_title: false
		}
	}
	return state;
}