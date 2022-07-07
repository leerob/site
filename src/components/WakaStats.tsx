import { IWakaLangStats } from '@/typings/types';
import styles from '@/styles/waka-stats.module.css';

const WIDTH = 350;
const BASE = 19;
const SLICE = 5;
const WAKA_STATS_COLORS = [
  '#00bcd4',
  '#ff9800',
  '#9c27b0',
  '#009688',
  '#ff5722',
  '#795548'
];

const Chart = ({
  children,
  height,
  width
}: {
  children: React.ReactNode;
  height: string;
  width: string;
}) => (
  <svg viewBox={`0 0 ${width} ${height}`} height={height} width={width}>
    <title id="title">A bar chart showing information</title>
    <desc id="desc">Dzmitry Sviryn top 5 programming languages/</desc>
    {children}
  </svg>
);

const Bar = ({
  index,
  lang,
  text,
  value
}: {
  index: number;
  lang: string;
  text: string;
  value: number;
}) => (
  <g className={styles.bar} fill={WAKA_STATS_COLORS[index]}>
    <rect
      width={String(BASE * Math.floor(value / 10))}
      height={String(BASE)}
      y={String(BASE * index)}
    ></rect>
    <text
      x={String(BASE * Math.floor(value / 10) + 10)}
      y={String(BASE * index + 10)}
      dy=".35em"
    >{`${lang} - ${text}`}</text>
  </g>
);

export default function WakaStats({ stats }: { stats: IWakaLangStats[] }) {
  const topFiveStatsSorted = stats
    .sort((a, b) => b.percent - a.percent)
    .slice(0, SLICE);
  return (
    <Chart height={String((BASE + 1) * SLICE - 1)} width={String(WIDTH)}>
      {topFiveStatsSorted.map((datum, index) => (
        <Bar
          key={datum.name}
          index={index}
          lang={datum.name}
          text={datum.text}
          value={datum.percent}
        />
      ))}
    </Chart>
  );
}
