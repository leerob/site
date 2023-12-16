import clsx from 'clsx';
import { getWakaStats } from '@/app/lib/wakatime';

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

export async function WakaStats() {
  const { languages, totalHours } = await getWakaStats();
  const datum = languages.sort((a, b) => b.percent - a.percent).slice(0, 3);

  const stackedBarComments = datum.map(
    ({ name: lang, text, hours, minutes }, index) => (
      <div key={index}>
        <span
          className={clsx(
            WAKA_STATS_COLORS[index].textColor,
            'text-xs md:text-sm'
          )}
        >
          {lang}
        </span>
        <span className="  text-gray-200 text-xs md:text-sm">
          {` • ${hours}h ${minutes}m`}
        </span>
      </div>
    )
  );
  if (totalHours < 10 || !languages) return null;
  return (
    <>
      <h2 className="text-xl md:text-2xl mb-4 mt-10 tracking-tight  text-gray-200 font-normal">
        Some stats:
      </h2>
      {stackedBarComments ? (
        <div className="flex-col w-full min-w-2xl">
          <div className="flex flex-row space-x-1">
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
            </svg>
          </div>{' '}
          <div className="flex flex-col md:flex-row mt-2 md:space-x-2">
            {stackedBarComments}
          </div>
          <p className="  text-gray-400 text-xs mt-2">
            My last week coding stats taken from a{' '}
            <a
              className="  text-gray-300  font-medium link-underline link-underline-gradient"
              href="https://wakatime.com/@svirins"
            >
              WakaTime
            </a>
          </p>
        </div>
      ) : (
        <p>Not eno</p>
      )}
    </>
  );
}
