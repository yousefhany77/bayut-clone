// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json([
    {
      id: 2,
      name: "Dubai",
      name_l1: "دبي",
      externalID: "5002",
      slug: "/dubai",
      slug_l1: "/dubai",
      _geoloc: { lat: 25.019236839506, lng: 55.339426111111 },
      geography: { lat: 25.019236839506, lng: 55.339426111111 },
      level: 1,
      hierarchy: [[Object], [Object]],
      adCount: 134448,
      aliases: [],
      type: null,
      hasBuilding: false,
      trackID: "5002",
      roles: null,
      completionStatus: "both",
      objectID: "2",
      _highlightResult: {
        name: [Object],
        externalID: [Object],
        hierarchy: [Array],
      },
    },
  ]);
}
