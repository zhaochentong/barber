import styled from 'styled-components';
import barber_logo from '../../statics/barber_logo.jpg';

export const HeaderWrapper = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 50px;
	background: #fff;
	border-bottom: 1px solid #f0f0f0;
	z-index: 100;
	.ant-input-search{
		float: right;
		margin-top: 8px;
		margin-right: 200px;
		width: 20%;
	}

	.login-form {
		position: fixed;
		width: 320px;
		height: 320px;
		margin-top: 120px;
		left: 50%;
		margin-left: -150px;
		padding: 15px 15px;
		border: 1px solid #d9d9d9;
		background: #fff;
		z-index: 999;
	}

	.login{
		float: left;
		margin-left: 120px;
		margin-bottom: 10px;
		width: 60px;
		height: 40px;
		font-weight: bold;
		font-size: 20px;
	}

	.ant-form-item-children .ant-input-affix-wrapper{
		float: right;
		width: 75%;
	}

	.login-form-forgot {
  		float: right;
	}


	.user,.psw{
		position: absolute;
		left: 15px;
		color: #666;
		font-weight: bold;
		font-size: 15px;
	}

	.user{
		top: 67px;
	}

	.psw{
		top: 123px;
	}

	.login-form-button{
		width: 60%;
		margin-top: 12px;
		margin-left: 55px;
	}

	.regist-form{
		position: fixed;
		top: 80px;
		left: 50%;
		margin-left: -200px;
		width: 400px;
		height: 470px;
		padding-top: 15px;
		padding: 20px 12px 10px;
		background: #fff;
		border: 1px solid #d9d9d9;
		z-index: 999;
	}

	.reg-info{
		margin-bottom: 12px;
	}

	.reg-title{
		font-size: 20px;
		font-weight: bold;
		text-align: center;
	}

	.ant-col-sm-8{
		margin-right: 8px;
	}

	.ant-col-sm-16{
		width: 60%;
	}

	.ant-btn-primary{
		background-color: #3F2AEB;
		border-color: #3F2AEB;
	}

	.login-form-forgot{
		color: #705FEC;
	}

	.a-font{
		color: #705FEC;
	}

	.ant-checkbox::-webkit-selection{
		background-color: #705FEC;
	}
`;

export const Cover = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background: #333;
	opacity: 0.5;
	cursor: pointer;
`;

export const Logo = styled.a`
	position: absolute;
	left: 25px;
	top: 0;
	width: 150px;
	height: 50px;
	display: block;
	background: url(${barber_logo});
	background-size: contain;
	pointer: cursor;
`;

export const Nav = styled.div`
	position: absolute;
	top: 0;
	left: 250px;
	width: 1000px;
	height: 50px;
`;

export const NavItem = styled.a`
	display: inline-block;
	margin-top: 12px;
	text-decoration: none;
	&.left{
		float: left;
		width: 50px;
		height: 50px;
		margin-left: 30px;
		font-size: 22px;
		color: #333;
		font-weight: bold;
		cursor: pointer;
	}
	&.right{
		float: right;
		margin-right: 3px;
		font-size: 14px;
	}
	&.underline{
		text-decoration: underline;
	}

	&.active{
		color: rgb(64,41,235);
	}

	&.a-font{
		color: #705FEC;
	}
`;

