export interface IWakaApiResponse {
  dexportecimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  total_seconds: bigint;
}

export const getWakaStats = async () => {
  // TODO: Check fecth return for errors and
  const response = await fetch(process.env.WAKATIME_API_ENDPOINT!, {
    next: { revalidate: 86400 }
  });
  const { data } = await response.json();
  let totalHours = 0;
  for (const element of data.languages) {
    totalHours += element.minutes;
  }
  return {
    languages: data.languages as IWakaApiResponse[],
    totalHours: totalHours
  };
};
