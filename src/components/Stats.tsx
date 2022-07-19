import { IWakaLangStats } from '@/typings';
import { PieChart } from 'react-minimal-pie-chart';

const WAKA_STATS_COLORS = ['#CA00FF', '#1CAF00', '#F7DF1E'];

export default function WakaStats({ stats }: { stats: IWakaLangStats[] }) {
  // first 3 languages, with colors
  const datum = stats
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 3)
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
      labelPosition={85}
      lengthAngle={360}
      lineWidth={30}
      paddingAngle={0}
      startAngle={0}
      radius={150}
      viewBoxSize={[300, 300]}
    />
  );
}
