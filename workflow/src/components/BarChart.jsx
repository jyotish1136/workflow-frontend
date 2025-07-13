import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
const uData = [40, 30, 20, 27, 18, 23, 34, 20, 27, 18, 23, 34];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BarChart = () => {
  return (
    <ChartContainer
      width={500}
      height={300}
      series={[{ data: uData, label: "uv", type: "bar" }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
    >
      <BarPlot />
    </ChartContainer>
  );
};

export default BarChart;
