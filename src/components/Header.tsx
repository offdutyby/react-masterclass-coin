import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toggleStateAtom } from '../atom';

function Header({ history }: any) {
	const [toggleState, setToggleState] = useRecoilState(toggleStateAtom);

	const toggleAction = (): void => {
		setToggleState(toggleState === 'dark' ? 'light' : 'dark');
	};

	const backAction = (): void => {
		history.push('/');
	};
	return (
		<Container>
			<BackBtn onClick={backAction}>{'<< 뒤로가기'}</BackBtn>
			<ToggleBtn onClick={toggleAction}>{toggleState === 'dark' ? 'Light 모드로' : 'Dark 모드로'}</ToggleBtn>
		</Container>
	);
}
export default Header;
const Container = styled.section`
	display: flex;
	justify-content: space-between;
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`;

const BackBtn = styled.div`
	cursor: pointer;
`;

const ToggleBtn = styled.div`
	cursor: pointer;
`;
