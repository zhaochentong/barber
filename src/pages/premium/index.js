import React, { Component } from 'react';
import { InputWrapper
 } from './style.js';
 import InfiniteListExample from './list.js';
 import Info from './card.js';
 import Inputer from './input.js';

class Premium extends Component{
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

export default Premium;