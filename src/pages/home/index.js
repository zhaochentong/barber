import React, { Component } from 'react';
import { SearchArea } from './style.js';
import { Form } from 'antd';
import 'antd/dist/antd.css';
import RegistrationForm from './form.js';
import Datepicker from './datepicker.js';
import { RegistWrapper,
		DateWrapper
 } from './style.js';

const WrappedRegistrationForm = Form.create()(RegistrationForm);

class Home extends Component{
	render(){
		return(
				<div>
					<RegistWrapper>
						<div className = "reginfo">注册信息</div>
						<WrappedRegistrationForm />	
					</RegistWrapper>
					<DateWrapper>
						<Datepicker />
					</DateWrapper>
				</div>
				
			)
	}
}

export default Home;