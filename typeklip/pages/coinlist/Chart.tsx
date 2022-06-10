import { useQuery } from "react-query";
import { fetchCoinHistory } from "../../apis/api";
import { useOutletContext } from 'react-router-dom';
interface ChartProps {
  coinId: string;
}
function Chart() {
  const {coinId} = useOutletContext<ChartProps>()
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart</h1>;
}
export default Chart;