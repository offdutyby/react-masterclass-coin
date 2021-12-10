import { useQuery } from 'react-query';
import { fetchCoinPriceInfo } from '../api';
import PriceCardBox from '../components/PriceCardBox';

interface ChartProps {
	coinName: string;
}

function Price({ coinName }: ChartProps) {
	const { data } = useQuery(['priceQuery', coinName], () => fetchCoinPriceInfo(coinName), {
		refetchInterval: 10000,
	});
	return (
		<div>
			<PriceCardBox desc={`$ ${data?.quotes?.USD.price}`} title="Price" />
			<PriceCardBox desc={`${data?.quotes?.USD.market_cap_change_24h} %`} title="Max Change rate in last 24h:" />
			<PriceCardBox desc={`${data?.quotes?.USD.percent_change_30m} %`} title="Change rate (last 30 Minutes):" />
			<PriceCardBox desc={`${data?.quotes?.USD.percent_change_1h} %`} title="Change rate (last 1 hours):" />
			<PriceCardBox desc={`${data?.quotes?.USD.percent_change_12h} %`} title="Change rate (last 12 hours):" />
			<PriceCardBox desc={`${data?.quotes?.USD.percent_change_24h} %`} title="Change rate (last 24 hours):" />
		</div>
	);
}

export default Price;

// price, max24, change30m, change1Hour, change12Hour, change24Hour
