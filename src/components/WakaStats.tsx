import cn from 'classnames';

import { IWakaStats } from '@/typings';

const HEIGHT = 20;
const WIDTH = 800;

const WAKA_STATS_COLORS = [
  {
    barColor: '#2563EB',
    textColor: 'text-wakatime-blue'
  },
  {
    barColor: '#D97706',
    textColor: 'text-wakatime-amber'
  },
  {
    barColor: '#A21CAF',
    textColor: 'text-wakatime-fuchsia'
  },
  {
    barColor: '#4338CA',
    textColor: 'text-wakatime-indigo'
  }
];

const Bar = ({
  color,
  width,
  x
}: {
  color: string;
  width: number;
  x: number;
}) => (
  <g fill={color}>
    <rect width={width} height="50" x={x}></rect>
  </g>
);

export default function WakaStats({ stats }: IWakaStats) {
  const datum = stats.sort((a, b) => b.percent - a.percent).slice(0, 4);
  const stackedBarComments = datum.map(({ name: lang, text }, index) => (
    <div key={index}>
      <span className={cn(WAKA_STATS_COLORS[index].textColor, 'text-xs ')}>
        {lang}
      </span>
      <span className=" text-gray-800 dark:text-gray-200 text-xs">
        {` • ${text}`}
      </span>
    </div>
  ));
  return (
    <div className="flex-col w-full min-w-2xl">
      <div className="flex">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} height="20" width={'100%'}>
          <title id="title">A bar chart showing information</title>
          <desc id="desc">Dzmitry Svirin top 4 programming languages/</desc>
          <Bar
            color={WAKA_STATS_COLORS[0].barColor}
            width={(datum[0].percent / 100) * WIDTH}
            x={0}
          />
          <Bar
            color={WAKA_STATS_COLORS[1].barColor}
            width={(datum[1].percent / 100) * WIDTH}
            x={(datum[0].percent / 100) * WIDTH}
          />
          <Bar
            color={WAKA_STATS_COLORS[2].barColor}
            width={(datum[2].percent / 100) * WIDTH}
            x={
              (datum[0].percent / 100) * WIDTH +
              (datum[1].percent / 100) * WIDTH
            }
          />
          <Bar
            color={WAKA_STATS_COLORS[3].barColor}
            width={(datum[3].percent / 100) * WIDTH}
            x={
              (datum[0].percent / 100) * WIDTH +
              (datum[1].percent / 100) * WIDTH +
              (datum[2].percent / 100) * WIDTH
            }
          />
        </svg>
      </div>
      <div className="flex flex-wrap  space-x-2  mt-2">
        {stackedBarComments}
      </div>
      <p className=" text-gray-700 dark:text-gray-400 text-xs mt-1">
        My last week coding stats taken from a{' '}
        <a
          className=" text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient"
          href="https://wakatime.com/@svirins"
        >
          WakaTime
        </a>
      </p>
    </div>
  );
}
