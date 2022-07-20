import { IWakaLangStats } from '@/typings';
import styles from '@/styles/waka-stats.module.css';

const HEIGHT = 50;
const WIDTH = 500;
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
  height: number;
  width: number;
}) => (
  <svg viewBox={`0 0 ${WIDTH} 50`} height={HEIGHT} width={'100%'}>
    <title id="title">A bar chart showing information</title>
    <desc id="desc">Dzmitry Svirin top 3 programming languages/</desc>
    {children}
  </svg>
);

const Bar = ({
  text,
  color,
  width,
  x
}: {
  text: string;
  color: string;
  width: number;
  x: number;
}) => (
  <g className={styles.bar} fill={color}>
    <rect width={width} height={HEIGHT} x={x} y={HEIGHT}></rect>
    {/* <text
      x={String(BASE * Math.floor(value / 10) + 10)}
      y={String(BASE * index + 10)}
      dy=".35em"
    >{`${lang} - ${text}`}</text> */}
  </g>
);

export default function WakaStats({ stats }: { stats: IWakaLangStats[] }) {
  const datum = stats.sort((a, b) => b.percent - a.percent).slice(0, 3);
  return (
    <Chart width={WIDTH} height={HEIGHT}>
      <Bar
        text={String(datum[0].hours)}
        color={WAKA_STATS_COLORS[0]}
        width={(datum[0].percent / 100) * WIDTH}
        x={(datum[0].percent / 100) * WIDTH}
      />
      <Bar
        text={String(datum[1].hours)}
        color={WAKA_STATS_COLORS[1]}
        width={(datum[1].percent / 100) * WIDTH}
        x={(datum[1].percent / 100) * WIDTH}
      />
      <Bar
        text={String(datum[2].hours)}
        color={WAKA_STATS_COLORS[2]}
        width={(datum[2].percent / 100) * WIDTH}
        x={(datum[2].percent / 100) * WIDTH}
      />
    </Chart>
  );
}
