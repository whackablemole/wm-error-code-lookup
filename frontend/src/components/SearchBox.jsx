import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
`;

const Input = styled.input`
	width: 100%;
	height: 100px;
	background-color: white;
	box-shadow: ${({ theme }) => theme.shadows.searchElements};
	margin-top: 30px;
	border-radius: ${({ theme }) => theme.radii.xl};
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

const SearchBox = ({ doSearch }) => {
	return ( 
		<>
			<Wrapper>
				<Input onChange={e => doSearch(e.target.value)}/>
				<Icon src={'images/icons/icon-search.svg'} />
			</Wrapper>
		</>
	 );
}
 
export default SearchBox;