import React, { Component } from 'react';
import {Cover} from './style';
import { connect } from 'react-redux';

class FormCover extends Component{
	render(){
		return(
			<Cover onClick = {this.props.handleCoverClick}></Cover>
			)
	}
}

const mapStateToProps = (state) => {
  return{
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleCoverClick(){
    	const action = {
    		type: 'cover_click'
    	}
    	dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormCover);