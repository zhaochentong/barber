import styled from 'styled-components';
import barber_logo from '../../statics/barber_logo.jpg';

export const HeaderWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 50px;
	background: #fff;
	border-bottom: 1px solid #f0f0f0;
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
`;

export const NavSearch = styled.input`
	float: right;
	width: 200px;
	height: 25px;
	margin-top: 9px;
	margin-right: 10px;
	padding-left: 3px;
	border: 1px solid #ccc;
`;

export const NavButton = styled.button`
	float: right;
	width: 40px;
	height: 28px;
	margin-right: 50px;
	margin-top: 9px;
	text-align: center;
	line-height: 25px;
	line-height: 25px;
	border: 1px solid #ccc;
	font-size: 12px;
	background: #bbb;
	cursor: pointer;
`


