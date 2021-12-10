import { HashRouter, Route, Switch } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';

const Router = () => {
	return (
		<HashRouter basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route path="/:coinId" component={Coin}></Route>
				<Route path="/" component={Coins}></Route>
			</Switch>
		</HashRouter>
	);
};

export default Router;
