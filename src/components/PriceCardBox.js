import React from 'react';
import styled from 'styled-components';

export default function PriceCardBox({ title, desc }) {
	return (
		<Container>
			<Title>{title}</Title>
			<Desc desc={desc}>{desc}</Desc>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${(props) => props.theme.textColor};
	width: 100%;
	height: 40px;
	margin-bottom: 10px;
	border-radius: 20px;
	padding: 10px;
	align-items: center;
`;
const Title = styled.div`
	color: ${(props) => props.theme.bgColor};
	font-weight: bold;
`;
const Desc = styled.div`
	color: ${(props) => props.theme.bgColor};
	font-weight: 500;
`;
