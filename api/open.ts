import { NowRequest, NowResponse } from "@now/node";
import getGoogleAnalyticsData from "./_utils/getGoogleAnalyticsData";
import getEthicalAdsData from "./_utils/getEthicalAdsData";

export default async (req: NowRequest, res: NowResponse) => {
  const [googleAnalyticsData, ethicalAdsData] = await Promise.all([
    getGoogleAnalyticsData(),
    getEthicalAdsData()
  ]);

  // Always update browser cache, update Zeit cache every 24 hours
  res.setHeader(
    "Cache-Control",
    "max-age=0, s-maxage=1, stale-while-revalidate"
  );
  res.json({ ...googleAnalyticsData, ...ethicalAdsData });
};
