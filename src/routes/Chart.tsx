import ApexChart from 'react-apexcharts';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';

interface IHistorical {
	time_open: string;
	time_close: string;
	open: number;
	high: number;
	low: number;
	close: number;
	volume: number;
	market_cap: number;
}
interface ChartProps {
	coinId: string;
}
function Chart({ coinId }: ChartProps) {
	const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId), {
		refetchInterval: 10000,
	});
	return (
		<div>
			{isLoading ? (
				'Loading chart...'
			) : (
				<ApexChart
					type="candlestick"
					series={[
						{
							data: data?.map((price) => {
								const obj: any = {};
								obj.x = new Date(price.time_open);
								obj.y = [price.open, price.high, price.low, price.close];
								return obj;
							}),
						},
					]}
					options={{
						plotOptions: {
							candlestick: {
								colors: { upward: 'red', downward: 'blue' },
							},
						},
						chart: {
							type: 'candlestick',
							height: 350,
						},
						title: {
							text: 'CandleStick Chart',
							align: 'left',
							style: {
								color: 'red',
							},
						},
						xaxis: {
							type: 'datetime',
						},
						yaxis: {
							tooltip: {
								enabled: true,
							},
						},
					}}
				/>
			)}
		</div>
	);
}

export default Chart;
