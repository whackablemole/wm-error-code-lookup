import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
`;

const Input = styled.input`
	width: 100%;
	height: 100px;
	background-color: white;
	filter: drop-shadow(22px 22px 37px rgba(0, 0, 0, 0.45));
	margin-top: 30px;
	border-radius: 15px;
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 48px;
	color: #484848;
	padding-left: 43px;
	padding-right: 107px;
`;

const Icon = styled.img`
	position: absolute;
	top: 54px;
	right: 28px;
`;

const SearchBox = () => {
	return ( 
		<>
			<Wrapper>
				<Input />
				<Icon src={'images/icons/icon-search.svg'} />
			</Wrapper>
		</>
	 );
}
 
export default SearchBox;