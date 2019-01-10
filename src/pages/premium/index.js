import React, { Component } from 'react';
import { InputWrapper
 } from './style.js';
 import InfiniteListExample from './list.js';
 import Info from './card.js';
 import Inputer from './input.js';
 import { connect } from 'react-redux';

class Premium extends Component{

	componentWillMount(){
		this.props.premiumHighLight();
	}

	render(){
		return(
			<div>
				<InputWrapper>
					<Inputer />
				</InputWrapper>
				<InfiniteListExample />
				<Info />
			</div>
			)
	}
}

const mapStateToProps = (state) => {
  return{
    premium_title: state.premium_title,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    premiumHighLight(){
    	const action = {
    		type: 'premium_hightlight'
    	}
    	dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Premium);