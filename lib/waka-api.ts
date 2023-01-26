import { WAKATIME_API_ENDPOINT } from 'config';
interface IWakaLanguageStats {
  dexportecimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  total_seconds: bigint;
}

interface IWakaAPIResponse {
  languages: IWakaLanguageStats[];
  totalHours: number;
}

export default async function getWakaStats(): Promise<IWakaAPIResponse> {
  const response = await fetch(WAKATIME_API_ENDPOINT, {
    next: { revalidate: 86400 }
  });
  const { data } = await response.json();
  let totalHours = 0;
  for (const element of data.languages) {
    totalHours += element.minutes;
  }
  return { languages: data.languages, totalHours: totalHours };
}
