import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-image: url('../images/background.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	padding-top: 90px;
`;

const Logo = styled.img`
	position: fixed;
	right: 0px;
	top: 30px;
`;

const Page = ({ children }) => {
	return ( 
		<Wrapper>
			{/* <Logo src={'images/logo.svg'} /> */}
			{children}
		</Wrapper>
	 );
}
 
export default Page;