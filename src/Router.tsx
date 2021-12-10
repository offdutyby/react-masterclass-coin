import { HashRouter, Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';

const Router = () => {
	return (
		<HashRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/:coinId" element={<Coin />}></Route>
				<Route path={'/'} element={<Coins />}></Route>
			</Routes>
		</HashRouter>
	);
};

export default Router;
