import React, { Component } from 'react';
import { Form } from 'antd';
import 'antd/dist/antd.css';
import RegistrationForm from './form.js';
import Datepicker from './datepicker.js';
import { RegistWrapper,
		DateWrapper
 } from './style.js';
 import { connect } from 'react-redux';

const WrappedRegistrationForm = Form.create()(RegistrationForm);

class Home extends Component{

	componentWillMount(){
		this.props.homeHighLight();
	}

	render(){
		return(
				<div>
					<RegistWrapper>
						<div className = "reginfo">会员注册</div>
						<WrappedRegistrationForm />	
					</RegistWrapper>
					<DateWrapper>
						<Datepicker />
					</DateWrapper>
				</div>		
			)
	}
}

const mapStateToProps = (state) => {
  return{
  	home_title: state.home_title
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    homeHighLight(){
    	const action = {
    		type: 'home_hightlight'
    	}
    	dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);