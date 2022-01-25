import React from 'react';
import styled, { css } from 'styled-components';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

const CentredContainer = css`
	width: 775px;
	margin-right: auto;
	margin-left: auto;
`;

const Wrapper = styled.div`
	${CentredContainer}
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

const ResultsContainer = styled.div`
	${CentredContainer}
`;

const Search = () => {

	const [errorCode, setErrorCode] = React.useState("");

	const doSearch = (term) => {
		setErrorCode(term);
	}

	return ( 
		<Wrapper>
			<H1>Search</H1>
			<Subtitle>Enter a Diagnostic Trouble Code (DTC) to continue...</Subtitle>
			<SearchBox doSearch={doSearch} />
			<ResultsContainer>
				<SearchResult errorCode={errorCode} />
			</ResultsContainer>
		</Wrapper>
	 );
}
 
export default Search;