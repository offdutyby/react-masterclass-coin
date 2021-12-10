import { atom } from 'recoil';

export const toggleStateAtom = atom({
	key: 'toggleStateAtom',
	default: 'dark',
});
