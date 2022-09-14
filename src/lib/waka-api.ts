import { WAKATIME_API_ENDPOINT } from '@/config';

export const getWakaStats = async () => {
  const response = await fetch(WAKATIME_API_ENDPOINT);
  const { data } = await response.json();
  let totalHours = 0;
  for (const element of data.languages) {
    totalHours += element.minutes;
  }
  return { languages: data.languages, totalHours: totalHours };
};
