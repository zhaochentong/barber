import React, { Component } from 'react';
import { HeaderWrapper,
		 Logo,
     Nav,
		 NavItem
		} from './style.js';
import Inputer from './input.js';
import WrappedNormalLoginForm from './login.js';
import { connect } from 'react-redux';

const showLogin = (show) => {
  if(show){
    return(
      <WrappedNormalLoginForm />
      );
  }else{
    return null;
  }
}

class Header extends Component {

  render() {
    return (
      <div className="App">
        <HeaderWrapper>
        	<Logo href = '/' />
          <Nav>
            <NavItem 
              className = {this.props.home_title ? 'active left':'left'}
              href = '/'
              onClick = {this.props.handleClick}
              >
              首页
            </NavItem>
            <NavItem 
              className = {this.props.premium_title ? 'active left' : 'left'}
              href = '/premium'
              onClick = {this.props.handleClick}>
              会员
            </NavItem>
            <NavItem 
              className = 'right underline'
              >
              注册
            </NavItem>
            <NavItem className = 'right'>/</NavItem>
            <NavItem 
              className = 'right underline'
              onClick = {this.props.handleLoginClick}>
              登录
            </NavItem>
          </Nav>	
          <Inputer />
          {showLogin(this.props.popout)}
        </HeaderWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    focused: state.focused,
    popout: state.popout,
    home_title: state.home_title,
    premium_title: state.premium_title,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleClick(){
      const action = {
        type: 'item_click'
      };
      dispatch(action);
    },
    handleLoginClick(){
      const action = {
        type: 'login_click'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
