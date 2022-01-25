import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Result = styled.div`
	width: 100%;
	background-color: white;
	z-index: 1000;
	padding: 40px;
	margin-top: 25px;
	box-shadow: ${({ theme }) => theme.shadows.searchElements};
	border-radius: ${({ theme }) => theme.radii.xl};
`;

const Heading = styled.h1`
	font-size: ${({ theme }) => theme.fontSizes.ml};
	color: ${({ theme }) => theme.colors.typography};
	font-family: ${({ theme }) => theme.fonts.bold};
`;

const Description = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.m};
	color: ${({ theme }) => theme.colors.typography};
	font-family: ${({ theme }) => theme.fonts.regular};
	margin-top: 24px;
`;

const LinkContainer = styled.div`
	width: 100%,
`;

const Link = styled.a`
	color: blue;
	text-align: right;
`;

const P = styled.p`
	line-height: 35px;
	text-align: right;
	margin-bottom: -15px;
	padding-bottom: 0px;
`;

const SearchResult = ({ errorCode }) => {

	return ( 
		<Wrapper>
			{ errorCode.toLowerCase() === "trans-500197-3" && (
				<Result>
				<Heading>TRANS-500197-3</Heading>
				<Description>Fault with the range 2/range 4 solenoid valve</Description>
				{/* <LinkContainer>
					<P><Link target="_blank" href="http://ldgs-agcommc-we-dev.azurewebsites.net/concept/D016794/VKKMX999EKB123456/8S/8S.225%20Dyna7%20(Q1E)/2019-15-12/MF%208S.225%20Dyna%207/486239">More...</Link></P>
				</LinkContainer> */}
			</Result>
			) }
		</Wrapper>
	 );
}
 
export default SearchResult;