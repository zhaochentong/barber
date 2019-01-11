import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
// import {Cover} from './style';
import { connect } from 'react-redux';

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {/*<Cover onClick = {this.props.handleCoverClick}></Cover>*/}     
        <Form onSubmit={this.handleSubmit} className="login-form">
          <div className = 'login'>登录</div>
          <div className = 'user'>用户名</div>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <div className = 'user'>用户名</div>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <div className = 'psw'>密码</div>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="https://www.baidu.com/">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <br/>
            Or <a href="https://www.baidu.com/" className = "a-font">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = (state) => {
  return{
    login_popout: state.login_popout
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    // handleCoverClick(){
    //   const action = {
    //     type: 'cover_click'
    //   };
    //   dispatch(action);
    // }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm);