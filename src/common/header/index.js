import React, { Component } from 'react';
import { HeaderWrapper,
		 Logo,
     Nav,
		 NavItem,
     InputWrapper
		} from './style.js';
import Inputer from './input.js';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
        	<Logo href = '/' />
          <Nav>
            <NavItem className = 'left active' href = '/'>首页</NavItem>
            <NavItem className = 'left' href = '/premium'>会员</NavItem>
            <NavItem className = 'right underline'>注册</NavItem>
            <NavItem className = 'right'>/</NavItem>
            <NavItem className = 'right underline'>登录</NavItem>
          </Nav>	
          <Inputer />
        </HeaderWrapper>     
      </div>
    );
  }
}

export default Header;
