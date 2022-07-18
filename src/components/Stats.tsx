import { IWakaLangStats } from '@/typings';
import { PieChart } from 'react-minimal-pie-chart';

const WAKA_STATS_COLORS = [
  '#00bcd4',
  '#ff9800',
  '#9c27b0',
  '#009688',
  '#ff5722',
  '#795548'
];

export default function WakaStats({ stats }: { stats: IWakaLangStats[] }) {
  // first 5 languages, with colors
  const datum = stats
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 5)
    .map((lang, i) => ({
      color: WAKA_STATS_COLORS[i],
      title: `${lang.decimal} | ${lang.name}`,
      value: lang.percent,
      key: i
    }));
  console.log();
  return (
    <PieChart
      animationDuration={500}
      animationEasing="ease-out"
      center={[150, 150]}
      data={datum}
      label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
      labelPosition={50}
      lengthAngle={360}
      lineWidth={35}
      paddingAngle={0}
      startAngle={0}
      radius={150}
      viewBoxSize={[300, 300]}
    />
  );
}
