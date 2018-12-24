import React, { Component } from 'react';
import { Search,
		 SearchButton,
		 List
 } from './style.js';
 import InfiniteListExample from './list.js';
 import Info from './card.js';

class Premium extends Component{
	render(){
		return(
			<div>
				<Search></Search>
				<SearchButton>搜索</SearchButton>
				<InfiniteListExample />
				<Info />
			</div>
			)
	}
}

export default Premium;