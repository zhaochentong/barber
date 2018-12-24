import styled from 'styled-components';

export const Search = styled.input`
	float: left;
	width: 400px;
	height:30px;
	margin-left: 80px;
	margin-top: 50px;
	boder: 1px solid #ccc;
`;

export const SearchButton = styled.button`
	float: left;
	width: 50px;
	height: 36px;
	margin-left: 10px;
	margin-top: 50px;
	border: 1px solid #ccc;
	background: #bbb;
`;

export const Container = styled.div`
	float: left;
	width: 500px;
	height: 300px;
	margin-top: 50px;
	margin-left: 50px;
	border: 1px solid #e8e8e8;
	border-radius: 4px;
	overflow: auto;
	padding: 8px 24px;
	clear: both;
`;

export const LoadingContainer = styled.div`
	position: absolute;
	bottom: 40px;
	width: 100%;
	text-align: center;
`;

export const CardWrapper = styled.div`
	float: left;
	width: 550px;
	margin-top: 50px;
	margin-left: 20px;
	border: 1px solid #e8e8e8;
	.carditem{
		margin-left: 6px;
		font-size: 15px;
	}
	.name{
		width: 100px;
		height: 10px;
		margin-top: 10px;
	}
	.cellphone{
		width: 100px;
		height: 10px;
		margin-top: 20px;
	}
	.credit{
		width: 100px;
		height: 10px;
		margin-top: 20px;
	}
	.history{
		display: block;
		margin-top: 20px;
	}
`

