import React from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';

const Wrapper = styled.div`
	width: 775px;
	margin-right: auto;
	margin-left: auto;
`;

const H1 = styled.h1`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 76px;
	color: white;
`;

const Subtitle = styled.div`
	font-size: 18px;
	font-family: ${({ theme }) => theme.fonts.semibold};
	color: #ccc;
`;

const Search = () => {
	return ( 
		<Wrapper>
			<H1>Search</H1>
			<Subtitle>Enter a Diagnostic Trouble Code (DTC) to continue...</Subtitle>
			<SearchBox />
		</Wrapper>
	 );
}
 
export default Search;