import { DefaultBodyType, rest } from "msw";

export const handlers = [
  rest.get<DefaultBodyType>(
    "https://bayut.p.rapidapi.com/auto-complete",
    (req, res, ctx) => {
      const query = req.url.searchParams.get("query");
      if (query === "") {
        return res(
          ctx.json({
            hits: [],
          })
        );
      } else if (query?.toLowerCase() === "error") {
        return res(ctx.status(400));
      } else {
        return res(
          ctx.delay(500),
          ctx.json({
            hits: [
              {
                id: 3,
                name: "Abu Dhabi",
                name_l1: "أبوظبي",
                externalID: "6020",
                slug: "/abu-dhabi",
                slug_l1: "/abu-dhabi",
                _geoloc: {
                  lat: 24.47620010376,
                  lng: 54.365898132324,
                },
                geography: {
                  lat: 24.47620010376,
                  lng: 54.365898132324,
                },
                level: 1,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                ],
                adCount: 24984,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "6020",
                roles: null,
                objectID: "3",
                _highlightResult: {
                  name: {
                    value: "<em>Abu</em> <em>Dhabi</em>",
                    matchLevel: "full",
                    fullyHighlighted: true,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "6020",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 399,
                name: "yousef",
                name_l1: "شمس أبوظبي",
                externalID: "7766",
                slug: "/abu-dhabi/al-reem-island/shams-abu-dhabi",
                slug_l1: "/abu-dhabi/al-reem-island/shams-abu-dhabi",
                _geoloc: {
                  lat: 24.50685,
                  lng: 54.407687,
                },
                geography: {
                  lat: 24.50685,
                  lng: 54.407687,
                },
                level: 3,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 394,
                    level: 2,
                    externalID: "6232",
                    name: "Al Reem Island",
                    name_l1: "جزيرة الريم",
                    slug: "/abu-dhabi/al-reem-island",
                    slug_l1: "/abu-dhabi/al-reem-island",
                  },
                  {
                    id: 399,
                    level: 3,
                    externalID: "7766",
                    name: "Shams Abu Dhabi",
                    name_l1: "شمس أبوظبي",
                    slug: "/abu-dhabi/al-reem-island/shams-abu-dhabi",
                    slug_l1: "/abu-dhabi/al-reem-island/shams-abu-dhabi",
                  },
                ],
                adCount: 1548,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "7766",
                roles: null,
                objectID: "399",
                _highlightResult: {
                  name: {
                    value: "Shams <em>Abu</em> <em>Dhabi</em>",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "7766",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6232",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-reem-island",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "7766",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-reem-island/shams-<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 3490,
                name: "Najmat Abu Dhabi",
                name_l1: "نجمة ابوظبي",
                externalID: "6698",
                slug: "/abu-dhabi/al-reem-island/najmat-abu-dhabi",
                slug_l1: "/abu-dhabi/al-reem-island/najmat-abu-dhabi",
                _geoloc: {
                  lat: 24.490175,
                  lng: 54.408835,
                },
                geography: {
                  lat: 24.490175,
                  lng: 54.408835,
                },
                level: 3,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 394,
                    level: 2,
                    externalID: "6232",
                    name: "Al Reem Island",
                    name_l1: "جزيرة الريم",
                    slug: "/abu-dhabi/al-reem-island",
                    slug_l1: "/abu-dhabi/al-reem-island",
                  },
                  {
                    id: 3490,
                    level: 3,
                    externalID: "6698",
                    name: "Najmat Abu Dhabi",
                    name_l1: "نجمة ابوظبي",
                    slug: "/abu-dhabi/al-reem-island/najmat-abu-dhabi",
                    slug_l1: "/abu-dhabi/al-reem-island/najmat-abu-dhabi",
                  },
                ],
                adCount: 336,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "6698",
                roles: null,
                objectID: "3490",
                _highlightResult: {
                  name: {
                    value: "Najmat <em>Abu</em> <em>Dhabi</em>",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "6698",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6232",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-reem-island",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6698",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-reem-island/najmat-<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 458,
                name: "Danet Abu Dhabi",
                name_l1: "دانة أبوظبي",
                externalID: "6858",
                slug: "/abu-dhabi/danet-abu-dhabi",
                slug_l1: "/abu-dhabi/danet-abu-dhabi",
                _geoloc: {
                  lat: 24.430076,
                  lng: 54.435232,
                },
                geography: {
                  lat: 24.430076,
                  lng: 54.435232,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 458,
                    level: 2,
                    externalID: "6858",
                    name: "Danet Abu Dhabi",
                    name_l1: "دانة أبوظبي",
                    slug: "/abu-dhabi/danet-abu-dhabi",
                    slug_l1: "/abu-dhabi/danet-abu-dhabi",
                  },
                ],
                adCount: 190,
                aliases: ["Danat Abu Dhabi"],
                type: null,
                hasBuilding: false,
                trackID: "6858",
                roles: null,
                objectID: "458",
                _highlightResult: {
                  name: {
                    value: "Danet <em>Abu</em> <em>Dhabi</em>",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "6858",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6858",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/danet-<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Danat <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                  ],
                },
              },
              {
                id: 4995,
                name: "Rawdhat Abu Dhabi",
                name_l1: "روضة أبوظبي",
                externalID: "9771",
                slug: "/abu-dhabi/rawdhat-abu-dhabi",
                slug_l1: "/abu-dhabi/rawdhat-abu-dhabi",
                _geoloc: {
                  lat: 24.419551,
                  lng: 54.464542,
                },
                geography: {
                  lat: 24.419551,
                  lng: 54.464542,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 4995,
                    level: 2,
                    externalID: "9771",
                    name: "Rawdhat Abu Dhabi",
                    name_l1: "روضة أبوظبي",
                    slug: "/abu-dhabi/rawdhat-abu-dhabi",
                    slug_l1: "/abu-dhabi/rawdhat-abu-dhabi",
                  },
                ],
                adCount: 172,
                aliases: [
                  "Rawdhat",
                  "Al Rawdhat Abu Dhabi",
                  "Rowdhat Abu Dhabi",
                ],
                type: null,
                hasBuilding: false,
                trackID: "9771",
                roles: null,
                objectID: "4995",
                _highlightResult: {
                  name: {
                    value: "Rawdhat <em>Abu</em> <em>Dhabi</em>",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "9771",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "9771",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/rawdhat-<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Rawdhat",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                    {
                      value: "Al Rawdhat <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                    {
                      value: "Rowdhat <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                  ],
                },
              },
              {
                id: 4982,
                name: "Abu Dhabi Gate City (Officers City)",
                name_l1: "مدينة بوابة أبوظبي (اوفيسرز سيتي)",
                externalID: "7137",
                slug: "/abu-dhabi/abu-dhabi-gate-city-officers-city",
                slug_l1: "/abu-dhabi/abu-dhabi-gate-city-officers-city",
                _geoloc: {
                  lat: 24.393264,
                  lng: 54.513441,
                },
                geography: {
                  lat: 24.393264,
                  lng: 54.513441,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 4982,
                    level: 2,
                    externalID: "7137",
                    name: "Abu Dhabi Gate City (Officers City)",
                    name_l1: "مدينة بوابة أبوظبي (اوفيسرز سيتي)",
                    slug: "/abu-dhabi/abu-dhabi-gate-city-officers-city",
                    slug_l1: "/abu-dhabi/abu-dhabi-gate-city-officers-city",
                  },
                ],
                adCount: 76,
                aliases: ["Gate City Abu Dhabi", "Officers City"],
                type: null,
                hasBuilding: false,
                trackID: "7137",
                roles: null,
                objectID: "4982",
                _highlightResult: {
                  name: {
                    value:
                      "<em>Abu</em> <em>Dhabi</em> Gate City (Officers City)",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "7137",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "7137",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/<em>abu</em>-<em>dhabi</em>-gate-city-officers-city",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Gate City <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                    {
                      value: "Officers City",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                  ],
                },
              },
              {
                id: 946,
                name: "ICAD - Industrial City Abu Dhabi",
                name_l1: "المدينة الصناعية في أبوظبي",
                externalID: "9714",
                slug: "/abu-dhabi/mussafah/icad--industrial-city-abu-dhabi",
                slug_l1: "/abu-dhabi/mussafah/icad--industrial-city-abu-dhabi",
                _geoloc: {
                  lat: 24.349534,
                  lng: 54.4999,
                },
                geography: {
                  lat: 24.349534,
                  lng: 54.4999,
                },
                level: 3,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 945,
                    level: 2,
                    externalID: "6227",
                    name: "Mussafah",
                    name_l1: "مصفح",
                    slug: "/abu-dhabi/mussafah",
                    slug_l1: "/abu-dhabi/mussafah",
                  },
                  {
                    id: 946,
                    level: 3,
                    externalID: "9714",
                    name: "ICAD - Industrial City Abu Dhabi",
                    name_l1: "المدينة الصناعية في أبوظبي",
                    slug: "/abu-dhabi/mussafah/icad--industrial-city-abu-dhabi",
                    slug_l1:
                      "/abu-dhabi/mussafah/icad--industrial-city-abu-dhabi",
                  },
                ],
                adCount: 64,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "9714",
                roles: null,
                objectID: "946",
                _highlightResult: {
                  name: {
                    value: "ICAD - Industrial City <em>Abu</em> <em>Dhabi</em>",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "9714",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6227",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/mussafah",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "9714",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/mussafah/icad--industrial-city-<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 15948,
                name: "Abu Dhabi National Exhibition Centre ADNEC",
                name_l1: "مركز أبو ظبي الوطني للمعارض",
                externalID: "12114",
                slug: "/abu-dhabi/capital-centre/abu-dhabi-national-exhibition-centre-adnec",
                slug_l1:
                  "/abu-dhabi/capital-centre/abu-dhabi-national-exhibition-centre-adnec",
                _geoloc: {
                  lat: 24.419066,
                  lng: 54.436988,
                },
                geography: {
                  lat: 24.419066,
                  lng: 54.436988,
                },
                level: 3,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 4998,
                    level: 2,
                    externalID: "8101",
                    name: "Capital Centre",
                    name_l1: "كابيتال سنتر",
                    slug: "/abu-dhabi/capital-centre",
                    slug_l1: "/abu-dhabi/capital-centre",
                  },
                  {
                    id: 15948,
                    level: 3,
                    externalID: "12114",
                    name: "Abu Dhabi National Exhibition Centre ADNEC",
                    name_l1: "مركز أبو ظبي الوطني للمعارض",
                    slug: "/abu-dhabi/capital-centre/abu-dhabi-national-exhibition-centre-adnec",
                    slug_l1:
                      "/abu-dhabi/capital-centre/abu-dhabi-national-exhibition-centre-adnec",
                  },
                ],
                adCount: 30,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "12114",
                roles: null,
                objectID: "15948",
                _highlightResult: {
                  name: {
                    value:
                      "<em>Abu</em> <em>Dhabi</em> National Exhibition Centre ADNEC",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "12114",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "8101",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/capital-centre",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "12114",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/capital-centre/<em>abu</em>-<em>dhabi</em>-national-exhibition-centre-adnec",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 502,
                name: "Hills Abu Dhabi",
                name_l1: "تلال أبوظبي",
                externalID: "7875",
                slug: "/abu-dhabi/al-maqtaa/hills-abu-dhabi",
                slug_l1: "/abu-dhabi/al-maqtaa/hills-abu-dhabi",
                _geoloc: {
                  lat: 24.4054575,
                  lng: 54.467597,
                },
                geography: {
                  lat: 24.4054575,
                  lng: 54.467597,
                },
                level: 3,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 501,
                    level: 2,
                    externalID: "6208",
                    name: "Al Maqtaa",
                    name_l1: "المقطع",
                    slug: "/abu-dhabi/al-maqtaa",
                    slug_l1: "/abu-dhabi/al-maqtaa",
                  },
                  {
                    id: 502,
                    level: 3,
                    externalID: "7875",
                    name: "Hills Abu Dhabi",
                    name_l1: "تلال أبوظبي",
                    slug: "/abu-dhabi/al-maqtaa/hills-abu-dhabi",
                    slug_l1: "/abu-dhabi/al-maqtaa/hills-abu-dhabi",
                  },
                ],
                adCount: 21,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "7875",
                roles: null,
                objectID: "502",
                _highlightResult: {
                  name: {
                    value: "Hills <em>Abu</em> <em>Dhabi</em>",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "7875",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6208",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-maqtaa",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "7875",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-maqtaa/hills-<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 17784,
                name: "Dusit Thani Abu Dhabi",
                name_l1: "فندق دوسيت تاني ابوظبي",
                externalID: "13556",
                slug: "/abu-dhabi/al-muroor/muroor-road/dusit-thani-abu-dhabi",
                slug_l1:
                  "/abu-dhabi/al-muroor/muroor-road/dusit-thani-abu-dhabi",
                _geoloc: {
                  lat: 24.455044,
                  lng: 54.39471,
                },
                geography: {
                  lat: 24.455044,
                  lng: 54.39471,
                },
                level: 4,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 468,
                    level: 2,
                    externalID: "7464",
                    name: "Al Muroor",
                    name_l1: "المرور",
                    slug: "/abu-dhabi/al-muroor",
                    slug_l1: "/abu-dhabi/al-muroor",
                  },
                  {
                    id: 2220,
                    level: 3,
                    externalID: "7674",
                    name: "Muroor Road",
                    name_l1: "شارع المرور",
                    slug: "/abu-dhabi/al-muroor/muroor-road",
                    slug_l1: "/abu-dhabi/al-muroor/muroor-road",
                  },
                  {
                    id: 17784,
                    level: 4,
                    externalID: "13556",
                    name: "Dusit Thani Abu Dhabi",
                    name_l1: "فندق دوسيت تاني ابوظبي",
                    slug: "/abu-dhabi/al-muroor/muroor-road/dusit-thani-abu-dhabi",
                    slug_l1:
                      "/abu-dhabi/al-muroor/muroor-road/dusit-thani-abu-dhabi",
                  },
                ],
                adCount: 10,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "13556",
                roles: null,
                objectID: "17784",
                _highlightResult: {
                  name: {
                    value: "Dusit Thani <em>Abu</em> <em>Dhabi</em>",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "13556",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "7464",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-muroor",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "7674",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-muroor/muroor-road",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "13556",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-muroor/muroor-road/dusit-thani-<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 75651,
                name: "Abu Dhabi Plaza Tower",
                name_l1: "برج أبو ظبي بلازا",
                externalID: "15160",
                slug: "/abu-dhabi/al-markaziya/abu-dhabi-plaza-tower",
                slug_l1: "/abu-dhabi/al-markaziya/abu-dhabi-plaza-tower",
                _geoloc: {
                  lat: 24.493285875043,
                  lng: 54.366789599358,
                },
                geography: {
                  lat: 24.493285875043,
                  lng: 54.366789599358,
                },
                level: 3,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 419,
                    level: 2,
                    externalID: "6209",
                    name: "Al Markaziya",
                    name_l1: "المركزية",
                    slug: "/abu-dhabi/al-markaziya",
                    slug_l1: "/abu-dhabi/al-markaziya",
                  },
                  {
                    id: 75651,
                    level: 3,
                    externalID: "15160",
                    name: "Abu Dhabi Plaza Tower",
                    name_l1: "برج أبو ظبي بلازا",
                    slug: "/abu-dhabi/al-markaziya/abu-dhabi-plaza-tower",
                    slug_l1: "/abu-dhabi/al-markaziya/abu-dhabi-plaza-tower",
                  },
                ],
                adCount: 6,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "15160",
                roles: null,
                objectID: "75651",
                _highlightResult: {
                  name: {
                    value: "<em>Abu</em> <em>Dhabi</em> Plaza Tower",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "15160",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6209",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-markaziya",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "15160",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-markaziya/<em>abu</em>-<em>dhabi</em>-plaza-tower",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 17915,
                name: "Abu Dhabi Global Market (ADGM)",
                name_l1: "سوق أبوظبي العالمي (ADGM)",
                externalID: "13645",
                slug: "/abu-dhabi/al-maryah-island/sowwah-square/abu-dhabi-global-market-adgm",
                slug_l1:
                  "/abu-dhabi/al-maryah-island/sowwah-square/abu-dhabi-global-market-adgm",
                _geoloc: {
                  lat: 24.501182927893,
                  lng: 54.388620507114,
                },
                geography: {
                  lat: 24.501182927893,
                  lng: 54.388620507114,
                },
                level: 4,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 2161,
                    level: 2,
                    externalID: "8886",
                    name: "Al Maryah Island",
                    name_l1: "جزيرة المارية",
                    slug: "/abu-dhabi/al-maryah-island",
                    slug_l1: "/abu-dhabi/al-maryah-island",
                  },
                  {
                    id: 5030,
                    level: 3,
                    externalID: "7736",
                    name: "Sowwah Square",
                    name_l1: "مربعة الصوة",
                    slug: "/abu-dhabi/al-maryah-island/sowwah-square",
                    slug_l1: "/abu-dhabi/al-maryah-island/sowwah-square",
                  },
                  {
                    id: 17915,
                    level: 4,
                    externalID: "13645",
                    name: "Abu Dhabi Global Market (ADGM)",
                    name_l1: "سوق أبوظبي العالمي (ADGM)",
                    slug: "/abu-dhabi/al-maryah-island/sowwah-square/abu-dhabi-global-market-adgm",
                    slug_l1:
                      "/abu-dhabi/al-maryah-island/sowwah-square/abu-dhabi-global-market-adgm",
                  },
                ],
                adCount: 2,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "13645",
                roles: null,
                objectID: "17915",
                _highlightResult: {
                  name: {
                    value: "<em>Abu</em> <em>Dhabi</em> Global Market (ADGM)",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "13645",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "8886",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-maryah-island",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "7736",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-maryah-island/sowwah-square",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "13645",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-maryah-island/sowwah-square/<em>abu</em>-<em>dhabi</em>-global-market-adgm",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 5027,
                name: "Rosewood Abu Dhabi",
                name_l1: "روزوود أبوظبي",
                externalID: "9839",
                slug: "/abu-dhabi/al-maryah-island/rosewood-abu-dhabi",
                slug_l1: "/abu-dhabi/al-maryah-island/rosewood-abu-dhabi",
                _geoloc: {
                  lat: 24.499517,
                  lng: 54.387695,
                },
                geography: {
                  lat: 24.499517,
                  lng: 54.387695,
                },
                level: 3,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 2161,
                    level: 2,
                    externalID: "8886",
                    name: "Al Maryah Island",
                    name_l1: "جزيرة المارية",
                    slug: "/abu-dhabi/al-maryah-island",
                    slug_l1: "/abu-dhabi/al-maryah-island",
                  },
                  {
                    id: 5027,
                    level: 3,
                    externalID: "9839",
                    name: "Rosewood Abu Dhabi",
                    name_l1: "روزوود أبوظبي",
                    slug: "/abu-dhabi/al-maryah-island/rosewood-abu-dhabi",
                    slug_l1: "/abu-dhabi/al-maryah-island/rosewood-abu-dhabi",
                  },
                ],
                adCount: 2,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "9839",
                roles: null,
                objectID: "5027",
                _highlightResult: {
                  name: {
                    value: "Rosewood <em>Abu</em> <em>Dhabi</em>",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "9839",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "8886",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-maryah-island",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "9839",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-maryah-island/rosewood-<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 5630,
                name: "Abu Dhabi Creek Business Resort",
                name_l1: "منتجع الخور التجاري أبوظبي",
                externalID: "6930",
                slug: "/abu-dhabi/al-maqtaa/abu-dhabi-creek-business-resort",
                slug_l1: "/abu-dhabi/al-maqtaa/abu-dhabi-creek-business-resort",
                _geoloc: {
                  lat: 24.409834415411,
                  lng: 54.48205947876,
                },
                geography: {
                  lat: 24.409834415411,
                  lng: 54.48205947876,
                },
                level: 3,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 501,
                    level: 2,
                    externalID: "6208",
                    name: "Al Maqtaa",
                    name_l1: "المقطع",
                    slug: "/abu-dhabi/al-maqtaa",
                    slug_l1: "/abu-dhabi/al-maqtaa",
                  },
                  {
                    id: 5630,
                    level: 3,
                    externalID: "6930",
                    name: "Abu Dhabi Creek Business Resort",
                    name_l1: "منتجع الخور التجاري أبوظبي",
                    slug: "/abu-dhabi/al-maqtaa/abu-dhabi-creek-business-resort",
                    slug_l1:
                      "/abu-dhabi/al-maqtaa/abu-dhabi-creek-business-resort",
                  },
                ],
                adCount: 0,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "6930",
                roles: null,
                objectID: "5630",
                _highlightResult: {
                  name: {
                    value: "<em>Abu</em> <em>Dhabi</em> Creek Business Resort",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "6930",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6208",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-maqtaa",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6930",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-maqtaa/<em>abu</em>-<em>dhabi</em>-creek-business-resort",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 2070,
                name: "Abu Dhabi Trade Towers",
                name_l1: "أبراج أبوظبي التجارية",
                externalID: "9782",
                slug: "/abu-dhabi/tourist-club-area-tca/abu-dhabi-trade-towers",
                slug_l1:
                  "/abu-dhabi/tourist-club-area-tca/abu-dhabi-trade-towers",
                _geoloc: {
                  lat: 24.491416,
                  lng: 54.379596,
                },
                geography: {
                  lat: 24.491416,
                  lng: 54.379596,
                },
                level: 3,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 1608,
                    level: 2,
                    externalID: "7192",
                    name: "Tourist Club Area (TCA)",
                    name_l1: "منطقة النادي السياحي",
                    slug: "/abu-dhabi/tourist-club-area-tca",
                    slug_l1: "/abu-dhabi/tourist-club-area-tca",
                  },
                  {
                    id: 2070,
                    level: 3,
                    externalID: "9782",
                    name: "Abu Dhabi Trade Towers",
                    name_l1: "أبراج أبوظبي التجارية",
                    slug: "/abu-dhabi/tourist-club-area-tca/abu-dhabi-trade-towers",
                    slug_l1:
                      "/abu-dhabi/tourist-club-area-tca/abu-dhabi-trade-towers",
                  },
                ],
                adCount: 0,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "9782",
                roles: null,
                objectID: "2070",
                _highlightResult: {
                  name: {
                    value: "<em>Abu</em> <em>Dhabi</em> Trade Towers",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["abu", "dhabi"],
                  },
                  externalID: {
                    value: "9782",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "7192",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/tourist-club-area-tca",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "9782",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/tourist-club-area-tca/<em>abu</em>-<em>dhabi</em>-trade-towers",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
              {
                id: 410,
                name: "Al Khalidiyah",
                name_l1: "الخالدية",
                externalID: "6204",
                slug: "/abu-dhabi/al-khalidiyah",
                slug_l1: "/abu-dhabi/al-khalidiyah",
                _geoloc: {
                  lat: 24.469494,
                  lng: 54.348063,
                },
                geography: {
                  lat: 24.469494,
                  lng: 54.348063,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 410,
                    level: 2,
                    externalID: "6204",
                    name: "Al Khalidiyah",
                    name_l1: "الخالدية",
                    slug: "/abu-dhabi/al-khalidiyah",
                    slug_l1: "/abu-dhabi/al-khalidiyah",
                  },
                ],
                adCount: 651,
                aliases: [
                  "Khalidiya",
                  "Al Khalidiya",
                  "Khalidiyah",
                  "Al Khalidyah",
                  "Khalidia Abu Dhabi",
                  "Khalidiah",
                ],
                type: null,
                hasBuilding: false,
                trackID: "6204",
                roles: null,
                objectID: "410",
                _highlightResult: {
                  name: {
                    value: "Al Khalidiyah",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  externalID: {
                    value: "6204",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6204",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-khalidiyah",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Khalidiya",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                    {
                      value: "Al Khalidiya",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                    {
                      value: "Khalidiyah",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                    {
                      value: "Al Khalidyah",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                    {
                      value: "Khalidia <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                    {
                      value: "Khalidiah",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                  ],
                },
              },
              {
                id: 1608,
                name: "Tourist Club Area (TCA)",
                name_l1: "منطقة النادي السياحي",
                externalID: "7192",
                slug: "/abu-dhabi/tourist-club-area-tca",
                slug_l1: "/abu-dhabi/tourist-club-area-tca",
                _geoloc: {
                  lat: 24.496931533357,
                  lng: 54.375951290131,
                },
                geography: {
                  lat: 24.496931533357,
                  lng: 54.375951290131,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 1608,
                    level: 2,
                    externalID: "7192",
                    name: "Tourist Club Area (TCA)",
                    name_l1: "منطقة النادي السياحي",
                    slug: "/abu-dhabi/tourist-club-area-tca",
                    slug_l1: "/abu-dhabi/tourist-club-area-tca",
                  },
                ],
                adCount: 380,
                aliases: ["Tourist Club Area Abu Dhabi", "TCA"],
                type: null,
                hasBuilding: false,
                trackID: "7192",
                roles: null,
                objectID: "1608",
                _highlightResult: {
                  name: {
                    value: "Tourist Club Area (TCA)",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  externalID: {
                    value: "7192",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "7192",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/tourist-club-area-tca",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Tourist Club Area <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                    {
                      value: "TCA",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                  ],
                },
              },
              {
                id: 424,
                name: "Al Raha Golf Gardens",
                name_l1: "حدائق الجولف في الراحة",
                externalID: "6021",
                slug: "/abu-dhabi/al-raha-golf-gardens",
                slug_l1: "/abu-dhabi/al-raha-golf-gardens",
                _geoloc: {
                  lat: 24.42140007019,
                  lng: 54.530101776123,
                },
                geography: {
                  lat: 24.42140007019,
                  lng: 54.530101776123,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 424,
                    level: 2,
                    externalID: "6021",
                    name: "Al Raha Golf Gardens",
                    name_l1: "حدائق الجولف في الراحة",
                    slug: "/abu-dhabi/al-raha-golf-gardens",
                    slug_l1: "/abu-dhabi/al-raha-golf-gardens",
                  },
                ],
                adCount: 83,
                aliases: ["Golf Gardens Abu Dhabi", "Golf Gardens"],
                type: null,
                hasBuilding: false,
                trackID: "6021",
                roles: null,
                objectID: "424",
                _highlightResult: {
                  name: {
                    value: "Al Raha Golf Gardens",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  externalID: {
                    value: "6021",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6021",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/al-raha-golf-gardens",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Golf Gardens <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                    {
                      value: "Golf Gardens",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                  ],
                },
              },
              {
                id: 2047,
                name: "Al Karamah",
                name_l1: "الكرامة",
                externalID: "6203",
                slug: "/abu-dhabi/al-karamah",
                slug_l1: "/abu-dhabi/al-karamah",
                _geoloc: {
                  lat: 24.464500427246,
                  lng: 54.373401641846,
                },
                geography: {
                  lat: 24.464500427246,
                  lng: 54.373401641846,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 2047,
                    level: 2,
                    externalID: "6203",
                    name: "Al Karamah",
                    name_l1: "الكرامة",
                    slug: "/abu-dhabi/al-karamah",
                    slug_l1: "/abu-dhabi/al-karamah",
                  },
                ],
                adCount: 78,
                aliases: ["Al Karama Abu Dhabi", "Karama Abu Dhabi"],
                type: null,
                hasBuilding: false,
                trackID: "6203",
                roles: null,
                objectID: "2047",
                _highlightResult: {
                  name: {
                    value: "Al Karamah",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  externalID: {
                    value: "6203",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6203",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-karamah",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Al Karama <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                    {
                      value: "Karama <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                  ],
                },
              },
              {
                id: 4981,
                name: "Sheikh Khalifa Bin Zayed Street",
                name_l1: "شارع الشيخ خليفة بن زايد",
                externalID: "6231",
                slug: "/abu-dhabi/sheikh-khalifa-bin-zayed-street",
                slug_l1: "/abu-dhabi/sheikh-khalifa-bin-zayed-street",
                _geoloc: {
                  lat: 24.494829900182,
                  lng: 54.365228711892,
                },
                geography: {
                  lat: 24.494829900182,
                  lng: 54.365228711892,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 4981,
                    level: 2,
                    externalID: "6231",
                    name: "Sheikh Khalifa Bin Zayed Street",
                    name_l1: "شارع الشيخ خليفة بن زايد",
                    slug: "/abu-dhabi/sheikh-khalifa-bin-zayed-street",
                    slug_l1: "/abu-dhabi/sheikh-khalifa-bin-zayed-street",
                  },
                ],
                adCount: 72,
                aliases: [
                  "Khalifa Street Abu Dhabi",
                  "Sheikh Khalifa Street Abu Dhabi",
                  "Khalifa bin Zayed the First",
                ],
                type: null,
                hasBuilding: false,
                trackID: "6231",
                roles: null,
                objectID: "4981",
                _highlightResult: {
                  name: {
                    value: "Sheikh Khalifa Bin Zayed Street",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  externalID: {
                    value: "6231",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6231",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/sheikh-khalifa-bin-zayed-street",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Khalifa Street <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                    {
                      value:
                        "Sheikh Khalifa Street <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                    {
                      value: "Khalifa bin Zayed the First",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                  ],
                },
              },
              {
                id: 4980,
                name: "Sheikh Rashid Bin Saeed Street",
                name_l1: "شارع الشيخ راشد بن سعيد",
                externalID: "7572",
                slug: "/abu-dhabi/sheikh-rashid-bin-saeed-street",
                slug_l1: "/abu-dhabi/sheikh-rashid-bin-saeed-street",
                _geoloc: {
                  lat: 24.42991955641,
                  lng: 54.420454502106,
                },
                geography: {
                  lat: 24.42991955641,
                  lng: 54.420454502106,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 4980,
                    level: 2,
                    externalID: "7572",
                    name: "Sheikh Rashid Bin Saeed Street",
                    name_l1: "شارع الشيخ راشد بن سعيد",
                    slug: "/abu-dhabi/sheikh-rashid-bin-saeed-street",
                    slug_l1: "/abu-dhabi/sheikh-rashid-bin-saeed-street",
                  },
                ],
                adCount: 10,
                aliases: ["Sheikh Rashid Street Abu Dhabi"],
                type: null,
                hasBuilding: false,
                trackID: "7572",
                roles: null,
                objectID: "4980",
                _highlightResult: {
                  name: {
                    value: "Sheikh Rashid Bin Saeed Street",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  externalID: {
                    value: "7572",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "7572",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value:
                          "/<em>abu</em>-<em>dhabi</em>/sheikh-rashid-bin-saeed-street",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Sheikh Rashid Street <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                  ],
                },
              },
              {
                id: 5443,
                name: "KIZAD",
                name_l1: "منطقة خليفة الصناعية أبوظبي",
                externalID: "8913",
                slug: "/abu-dhabi/kizad",
                slug_l1: "/abu-dhabi/kizad",
                _geoloc: {
                  lat: 24.742842,
                  lng: 54.729843,
                },
                geography: {
                  lat: 24.742842,
                  lng: 54.729843,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 5443,
                    level: 2,
                    externalID: "8913",
                    name: "KIZAD",
                    name_l1: "منطقة خليفة الصناعية أبوظبي",
                    slug: "/abu-dhabi/kizad",
                    slug_l1: "/abu-dhabi/kizad",
                  },
                ],
                adCount: 8,
                aliases: [
                  "Khalifa Industrial Zone",
                  "Khalifa Industrial Zone Abu Dhabi",
                ],
                type: null,
                hasBuilding: false,
                trackID: "8913",
                roles: null,
                objectID: "5443",
                _highlightResult: {
                  name: {
                    value: "KIZAD",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  externalID: {
                    value: "8913",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "8913",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/kizad",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Khalifa Industrial Zone",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                    {
                      value:
                        "Khalifa Industrial Zone <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                  ],
                },
              },
              {
                id: 2045,
                name: "Diplomatic Area",
                name_l1: "حي السفارات",
                externalID: "8100",
                slug: "/abu-dhabi/diplomatic-area",
                slug_l1: "/abu-dhabi/diplomatic-area",
                _geoloc: {
                  lat: 24.423706790103,
                  lng: 54.436247348785,
                },
                geography: {
                  lat: 24.423706790103,
                  lng: 54.436247348785,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 2045,
                    level: 2,
                    externalID: "8100",
                    name: "Diplomatic Area",
                    name_l1: "حي السفارات",
                    slug: "/abu-dhabi/diplomatic-area",
                    slug_l1: "/abu-dhabi/diplomatic-area",
                  },
                ],
                adCount: 2,
                aliases: [
                  "Embassy Area Abu Dhabi",
                  "Diplomatic Quarter",
                  "Embassy District Abu Dhabi",
                  "Embassies District",
                ],
                type: null,
                hasBuilding: false,
                trackID: "8100",
                roles: null,
                objectID: "2045",
                _highlightResult: {
                  name: {
                    value: "Diplomatic Area",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  externalID: {
                    value: "8100",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "8100",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/diplomatic-area",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Embassy Area <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                    {
                      value: "Diplomatic Quarter",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                    {
                      value: "Embassy District <em>Abu</em> <em>Dhabi</em>",
                      matchLevel: "full",
                      fullyHighlighted: false,
                      matchedWords: ["abu", "dhabi"],
                    },
                    {
                      value: "Embassies District",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                  ],
                },
              },
              {
                id: 394,
                name: "Al Reem Island",
                name_l1: "جزيرة الريم",
                externalID: "6232",
                slug: "/abu-dhabi/al-reem-island",
                slug_l1: "/abu-dhabi/al-reem-island",
                _geoloc: {
                  lat: 24.494178,
                  lng: 54.406843,
                },
                geography: {
                  lat: 24.494178,
                  lng: 54.406843,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 394,
                    level: 2,
                    externalID: "6232",
                    name: "Al Reem Island",
                    name_l1: "جزيرة الريم",
                    slug: "/abu-dhabi/al-reem-island",
                    slug_l1: "/abu-dhabi/al-reem-island",
                  },
                ],
                adCount: 4678,
                aliases: ["Reem Island"],
                type: null,
                hasBuilding: false,
                trackID: "6232",
                roles: null,
                objectID: "394",
                _highlightResult: {
                  name: {
                    value: "Al Reem Island",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  externalID: {
                    value: "6232",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6232",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/al-reem-island",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                  aliases: [
                    {
                      value: "Reem Island",
                      matchLevel: "none",
                      matchedWords: [],
                    },
                  ],
                },
              },
              {
                id: 62,
                name: "Yas Island",
                name_l1: "جزيرة ياس",
                externalID: "6031",
                slug: "/abu-dhabi/yas-island",
                slug_l1: "/abu-dhabi/yas-island",
                _geoloc: {
                  lat: 24.497303,
                  lng: 54.60391,
                },
                geography: {
                  lat: 24.497303,
                  lng: 54.60391,
                },
                level: 2,
                hierarchy: [
                  {
                    id: 1,
                    level: 0,
                    externalID: "5001",
                    name: "UAE",
                    name_l1: "الإمارات",
                    slug: "/uae",
                    slug_l1: "/uae",
                  },
                  {
                    id: 3,
                    level: 1,
                    externalID: "6020",
                    name: "Abu Dhabi",
                    name_l1: "أبوظبي",
                    slug: "/abu-dhabi",
                    slug_l1: "/abu-dhabi",
                  },
                  {
                    id: 62,
                    level: 2,
                    externalID: "6031",
                    name: "Yas Island",
                    name_l1: "جزيرة ياس",
                    slug: "/abu-dhabi/yas-island",
                    slug_l1: "/abu-dhabi/yas-island",
                  },
                ],
                adCount: 2747,
                aliases: [],
                type: null,
                hasBuilding: false,
                trackID: "6031",
                roles: null,
                objectID: "62",
                _highlightResult: {
                  name: {
                    value: "Yas Island",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  externalID: {
                    value: "6031",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  hierarchy: [
                    {
                      externalID: {
                        value: "5001",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/uae",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                    },
                    {
                      externalID: {
                        value: "6020",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>",
                        matchLevel: "full",
                        fullyHighlighted: true,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                    {
                      externalID: {
                        value: "6031",
                        matchLevel: "none",
                        matchedWords: [],
                      },
                      slug: {
                        value: "/<em>abu</em>-<em>dhabi</em>/yas-island",
                        matchLevel: "full",
                        fullyHighlighted: false,
                        matchedWords: ["abu", "dhabi"],
                      },
                    },
                  ],
                },
              },
            ],
            nbHits: 978,
            page: 0,
            nbPages: 40,
            hitsPerPage: 25,
            exhaustiveNbHits: true,
            exhaustiveTypo: true,
            query: "abu dhabi",
            params: "filters=level > 0&hitsPerPage=25&page=0&query=abu%20dhabi",
            processingTimeMS: 2,
          })
        );
      }
    }
  ),
];
