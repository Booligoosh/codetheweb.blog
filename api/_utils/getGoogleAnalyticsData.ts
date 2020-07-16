import { google } from "googleapis";

export default async () => {
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/analytics.readonly"]
  );

  const analyticsreporting = google.analyticsreporting({
    version: "v4"
  });

  const { data } = await analyticsreporting.reports.batchGet({
    auth: jwt,
    requestBody: {
      reportRequests: [
        {
          dateRanges: [
            {
              startDate: "2017-10-01",
              endDate: "2100-01-01"
            }
          ],
          viewId: "161493912",
          metrics: [
            {
              expression: "ga:users"
            },
            {
              expression: "ga:pageviews"
            }
          ]
        }
      ]
    }
  });

  const report = data.reports[0];
  const totals = report.data.totals[0];
  const [allTimeUsers, allTimePageViews] = totals.values.map(n => Number(n));

  return { allTimeUsers, allTimePageViews };
};
