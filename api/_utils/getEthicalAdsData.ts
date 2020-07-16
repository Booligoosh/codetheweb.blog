import fetch from "isomorphic-fetch";

export default async () => {
  // By default, this endpoint fetches data for the last 30 days.
  const response = await fetch(
    "https://server.ethicalads.io/api/v1/publishers/codetheweb/report/",
    {
      headers: {
        Authorization: `Token ${process.env.ETHICAL_ADS_TOKEN}`
      }
    }
  ).then(r => r.json());

  return {
    last30DaysAdRevenue: Number((response.total.revenue_share || 0).toFixed(2))
  };
};
