import React, { Component } from 'react';
import { SearchArea } from './style.js';
import { Form } from 'antd';
import 'antd/dist/antd.css';
import RegistrationForm from './form.js';
import { RegistWrapper } from './style.js';

const WrappedRegistrationForm = Form.create()(RegistrationForm);

class Home extends Component{
	render(){
		return(
				<RegistWrapper>
					<WrappedRegistrationForm />
				</RegistWrapper>
			)
	}
}

export default Home;