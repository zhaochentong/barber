import React, { Component } from 'react';
import { Card } from 'antd';
import { CardWrapper } from './style.js';

class Info extends Component{
	render() {
		return(
			<CardWrapper>
				<Card className = 'card'>
				    <div className = 'carditem name'>姓名：</div>
				    <div className = 'carditem cellphone'>电话：</div>
				    <div className = 'carditem credit'>积分：</div>
				    <a href = './history' className = 'carditem history'>历史记录:</a>
				</Card>
			</CardWrapper>
			
			)
	}
}

export default Info;