"use client";

import { createClassFromSpec } from "react-vega";

export default createClassFromSpec({
  mode: "vega-lite",
  spec: {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    background: "transparent",
    title: "Audi Q7 Prices",
    config: { customFormatTypes: true, scale: { round: false } },
    description:
      "Plot of car prices over time with polynomial regression and mean +/- 1 stdev overlaid.",
    // "container" should make it responsive (https://vega.github.io/vega-lite/examples/bar_size_responsive.html), but doesn't seem to work
    width: "container",
    height: 500,
    data: {
      name: "table",
      values: [
        {
          date: "2022-05-04",
          price: 30194,
          modelYear: 2018
        },
        {
          date: "2020-12-10",
          price: 18211,
          modelYear: 2020
        },
        {
          date: "2020-07-18",
          price: 20132,
          modelYear: 2018
        },
        {
          date: "2020-05-29",
          price: 17775,
          modelYear: 2017
        },
        {
          date: "2021-02-10",
          price: 24571,
          modelYear: 2019
        },
        {
          date: "2019-02-10",
          price: 20710,
          modelYear: 2019
        },
        {
          date: "2021-08-07",
          price: 27230,
          modelYear: 2019
        },
        {
          date: "2021-07-27",
          price: 24274,
          modelYear: 2019
        },
        {
          date: "2020-01-23",
          price: 26527,
          modelYear: 2018
        },
        {
          date: "2023-08-21",
          price: 26901,
          modelYear: 2019
        },
        {
          date: "2021-02-11",
          price: 31645,
          modelYear: 2020
        },
        {
          date: "2020-07-18",
          price: 27806,
          modelYear: 2017
        },
        {
          date: "2020-01-24",
          price: 19246,
          modelYear: 2017
        },
        {
          date: "2023-05-09",
          price: 22257,
          modelYear: 2020
        },
        {
          date: "2023-11-23",
          price: 20775,
          modelYear: 2017
        },
        {
          date: "2023-11-27",
          price: 22270,
          modelYear: 2016
        },
        {
          date: "2022-05-31",
          price: 22903,
          modelYear: 2020
        },
        {
          date: "2019-10-03",
          price: 24168,
          modelYear: 2020
        },
        {
          date: "2020-07-24",
          price: 11181,
          modelYear: 2020
        },
        {
          date: "2020-04-25",
          price: 25517,
          modelYear: 2018
        },
        {
          date: "2022-05-22",
          price: 14752,
          modelYear: 2020
        },
        {
          date: "2019-07-02",
          price: 12665,
          modelYear: 2015
        },
        {
          date: "2019-08-04",
          price: 17428,
          modelYear: 2015
        },
        {
          date: "2020-03-25",
          price: 12514,
          modelYear: 2015
        },
        {
          date: "2022-04-30",
          price: 24041,
          modelYear: 2019
        },
        {
          date: "2020-03-15",
          price: 28205,
          modelYear: 2019
        },
        {
          date: "2021-08-31",
          price: 15455,
          modelYear: 2015
        },
        {
          date: "2022-09-29",
          price: 24012,
          modelYear: 2020
        },
        {
          date: "2023-06-27",
          price: 23018,
          modelYear: 2020
        },
        {
          date: "2022-04-28",
          price: 24215,
          modelYear: 2017
        },
        {
          date: "2019-08-26",
          price: 17829,
          modelYear: 2019
        },
        {
          date: "2022-02-07",
          price: 28668,
          modelYear: 2020
        },
        {
          date: "2020-04-24",
          price: 26466,
          modelYear: 2015
        },
        {
          date: "2020-11-08",
          price: 22611,
          modelYear: 2018
        },
        {
          date: "2019-08-12",
          price: 24854,
          modelYear: 2018
        },
        {
          date: "2020-04-20",
          price: 26017,
          modelYear: 2020
        },
        {
          date: "2019-10-22",
          price: 23509,
          modelYear: 2017
        },
        {
          date: "2023-06-22",
          price: 12743,
          modelYear: 2017
        },
        {
          date: "2019-08-17",
          price: 15058,
          modelYear: 2019
        },
        {
          date: "2022-12-06",
          price: 22726,
          modelYear: 2019
        },
        {
          date: "2019-08-04",
          price: 19075,
          modelYear: 2020
        },
        {
          date: "2022-04-12",
          price: 24708,
          modelYear: 2020
        },
        {
          date: "2023-12-10",
          price: 30989,
          modelYear: 2016
        },
        {
          date: "2019-10-09",
          price: 24197,
          modelYear: 2016
        },
        {
          date: "2022-08-02",
          price: 24974,
          modelYear: 2020
        },
        {
          date: "2023-05-19",
          price: 17136,
          modelYear: 2020
        },
        {
          date: "2023-12-06",
          price: 17699,
          modelYear: 2015
        },
        {
          date: "2020-09-08",
          price: 20545,
          modelYear: 2019
        },
        {
          date: "2019-12-10",
          price: 15213,
          modelYear: 2016
        },
        {
          date: "2020-06-09",
          price: 29659,
          modelYear: 2020
        },
        {
          date: "2022-08-25",
          price: 30896,
          modelYear: 2016
        },
        {
          date: "2021-11-15",
          price: 31333,
          modelYear: 2020
        },
        {
          date: "2020-07-21",
          price: 13176,
          modelYear: 2015
        },
        {
          date: "2021-01-17",
          price: 14784,
          modelYear: 2017
        },
        {
          date: "2020-09-01",
          price: 17228,
          modelYear: 2016
        },
        {
          date: "2021-07-25",
          price: 22210,
          modelYear: 2018
        },
        {
          date: "2020-12-15",
          price: 17446,
          modelYear: 2015
        },
        {
          date: "2021-11-05",
          price: 19208,
          modelYear: 2020
        },
        {
          date: "2022-10-11",
          price: 27289,
          modelYear: 2020
        },
        {
          date: "2023-09-30",
          price: 25847,
          modelYear: 2017
        },
        {
          date: "2020-02-19",
          price: 19881,
          modelYear: 2020
        },
        {
          date: "2020-02-10",
          price: 15068,
          modelYear: 2016
        },
        {
          date: "2023-06-28",
          price: 16767,
          modelYear: 2015
        },
        {
          date: "2020-07-08",
          price: 26559,
          modelYear: 2018
        },
        {
          date: "2021-08-27",
          price: 24405,
          modelYear: 2017
        },
        {
          date: "2019-07-06",
          price: 13255,
          modelYear: 2015
        },
        {
          date: "2021-08-05",
          price: 29488,
          modelYear: 2020
        },
        {
          date: "2021-10-05",
          price: 21604,
          modelYear: 2019
        },
        {
          date: "2021-11-15",
          price: 29670,
          modelYear: 2018
        },
        {
          date: "2019-07-09",
          price: 18882,
          modelYear: 2020
        },
        {
          date: "2023-04-14",
          price: 26504,
          modelYear: 2019
        },
        {
          date: "2019-02-19",
          price: 16392,
          modelYear: 2015
        },
        {
          date: "2019-04-30",
          price: 25685,
          modelYear: 2020
        },
        {
          date: "2023-09-22",
          price: 20372,
          modelYear: 2015
        },
        {
          date: "2021-02-23",
          price: 31796,
          modelYear: 2020
        },
        {
          date: "2021-05-09",
          price: 25713,
          modelYear: 2020
        },
        {
          date: "2019-02-06",
          price: 23655,
          modelYear: 2019
        },
        {
          date: "2021-07-04",
          price: 28189,
          modelYear: 2016
        },
        {
          date: "2020-01-11",
          price: 15149,
          modelYear: 2020
        },
        {
          date: "2021-11-22",
          price: 24309,
          modelYear: 2019
        },
        {
          date: "2021-10-02",
          price: 21326,
          modelYear: 2017
        },
        {
          date: "2023-04-17",
          price: 29368,
          modelYear: 2019
        },
        {
          date: "2022-11-04",
          price: 26449,
          modelYear: 2019
        },
        {
          date: "2023-06-17",
          price: 22719,
          modelYear: 2018
        },
        {
          date: "2021-05-19",
          price: 21248,
          modelYear: 2019
        },
        {
          date: "2020-02-14",
          price: 26638,
          modelYear: 2019
        },
        {
          date: "2022-12-12",
          price: 28417,
          modelYear: 2019
        },
        {
          date: "2019-07-29",
          price: 23369,
          modelYear: 2016
        },
        {
          date: "2019-09-10",
          price: 21694,
          modelYear: 2020
        },
        {
          date: "2023-10-16",
          price: 28623,
          modelYear: 2020
        },
        {
          date: "2019-02-07",
          price: 21717,
          modelYear: 2018
        },
        {
          date: "2022-11-07",
          price: 31550,
          modelYear: 2018
        },
        {
          date: "2021-12-29",
          price: 16388,
          modelYear: 2017
        },
        {
          date: "2020-07-21",
          price: 21831,
          modelYear: 2016
        },
        {
          date: "2021-10-11",
          price: 29540,
          modelYear: 2017
        },
        {
          date: "2021-09-30",
          price: 15423,
          modelYear: 2019
        },
        {
          date: "2023-05-15",
          price: 30566,
          modelYear: 2020
        },
        {
          date: "2019-04-03",
          price: 24733,
          modelYear: 2019
        },
        {
          date: "2021-12-15",
          price: 29736,
          modelYear: 2017
        },
        {
          date: "2023-01-11",
          price: 27777,
          modelYear: 2020
        },
        {
          date: "2023-03-28",
          price: 29348,
          modelYear: 2017
        },
        {
          date: "2022-09-03",
          price: 20893,
          modelYear: 2018
        },
        {
          date: "2021-10-04",
          price: 27365,
          modelYear: 2016
        },
        {
          date: "2021-04-08",
          price: 21902,
          modelYear: 2020
        },
        {
          date: "2021-10-26",
          price: 16304,
          modelYear: 2015
        },
        {
          date: "2019-03-22",
          price: 23419,
          modelYear: 2020
        },
        {
          date: "2022-12-28",
          price: 26684,
          modelYear: 2020
        },
        {
          date: "2021-02-02",
          price: 24643,
          modelYear: 2020
        },
        {
          date: "2023-12-27",
          price: 21450,
          modelYear: 2019
        },
        {
          date: "2020-08-04",
          price: 21039,
          modelYear: 2020
        },
        {
          date: "2020-08-17",
          price: 14939,
          modelYear: 2018
        },
        {
          date: "2021-01-11",
          price: 14470,
          modelYear: 2016
        },
        {
          date: "2020-07-03",
          price: 27594,
          modelYear: 2020
        },
        {
          date: "2022-12-08",
          price: 23051,
          modelYear: 2016
        },
        {
          date: "2021-03-19",
          price: 32420,
          modelYear: 2017
        },
        {
          date: "2021-05-02",
          price: 17618,
          modelYear: 2019
        },
        {
          date: "2023-12-06",
          price: 24019,
          modelYear: 2017
        },
        {
          date: "2019-04-04",
          price: 12372,
          modelYear: 2019
        },
        {
          date: "2021-09-20",
          price: 22672,
          modelYear: 2017
        },
        {
          date: "2023-07-20",
          price: 26851,
          modelYear: 2018
        },
        {
          date: "2019-01-07",
          price: 15771,
          modelYear: 2015
        },
        {
          date: "2023-10-14",
          price: 28919,
          modelYear: 2019
        },
        {
          date: "2023-12-10",
          price: 28882,
          modelYear: 2018
        },
        {
          date: "2023-05-14",
          price: 21553,
          modelYear: 2020
        },
        {
          date: "2020-03-01",
          price: 12888,
          modelYear: 2017
        },
        {
          date: "2022-11-08",
          price: 20209,
          modelYear: 2016
        },
        {
          date: "2020-11-26",
          price: 16671,
          modelYear: 2017
        },
        {
          date: "2021-07-29",
          price: 32448,
          modelYear: 2020
        },
        {
          date: "2021-07-13",
          price: 16956,
          modelYear: 2015
        },
        {
          date: "2023-11-08",
          price: 28891,
          modelYear: 2020
        },
        {
          date: "2022-07-02",
          price: 30783,
          modelYear: 2020
        },
        {
          date: "2020-04-13",
          price: 22051,
          modelYear: 2018
        },
        {
          date: "2022-08-16",
          price: 23465,
          modelYear: 2020
        },
        {
          date: "2019-10-03",
          price: 16112,
          modelYear: 2015
        },
        {
          date: "2020-06-17",
          price: 26874,
          modelYear: 2020
        },
        {
          date: "2021-08-22",
          price: 30674,
          modelYear: 2018
        },
        {
          date: "2021-04-17",
          price: 26544,
          modelYear: 2018
        },
        {
          date: "2022-01-07",
          price: 28329,
          modelYear: 2019
        },
        {
          date: "2020-03-01",
          price: 29378,
          modelYear: 2017
        },
        {
          date: "2022-07-01",
          price: 24933,
          modelYear: 2020
        },
        {
          date: "2021-12-05",
          price: 26189,
          modelYear: 2017
        },
        {
          date: "2023-12-04",
          price: 29738,
          modelYear: 2017
        },
        {
          date: "2021-05-20",
          price: 32393,
          modelYear: 2019
        },
        {
          date: "2020-02-08",
          price: 25668,
          modelYear: 2018
        },
        {
          date: "2020-12-09",
          price: 20944,
          modelYear: 2016
        },
        {
          date: "2019-09-29",
          price: 18593,
          modelYear: 2016
        },
        {
          date: "2019-11-12",
          price: 19558,
          modelYear: 2019
        },
        {
          date: "2021-05-25",
          price: 17971,
          modelYear: 2018
        },
        {
          date: "2021-12-27",
          price: 28812,
          modelYear: 2017
        },
        {
          date: "2019-11-17",
          price: 21127,
          modelYear: 2020
        },
        {
          date: "2023-05-19",
          price: 27798,
          modelYear: 2016
        },
        {
          date: "2022-12-06",
          price: 25064,
          modelYear: 2020
        },
        {
          date: "2020-04-28",
          price: 15179,
          modelYear: 2020
        },
        {
          date: "2022-08-01",
          price: 15737,
          modelYear: 2017
        },
        {
          date: "2019-06-15",
          price: 23579,
          modelYear: 2018
        },
        {
          date: "2022-10-11",
          price: 31449,
          modelYear: 2019
        },
        {
          date: "2022-05-01",
          price: 27076,
          modelYear: 2019
        },
        {
          date: "2021-11-30",
          price: 29469,
          modelYear: 2018
        },
        {
          date: "2019-04-05",
          price: 18868,
          modelYear: 2019
        },
        {
          date: "2021-11-01",
          price: 27149,
          modelYear: 2018
        },
        {
          date: "2020-06-23",
          price: 14180,
          modelYear: 2016
        },
        {
          date: "2021-08-01",
          price: 22856,
          modelYear: 2020
        },
        {
          date: "2022-02-18",
          price: 23732,
          modelYear: 2020
        },
        {
          date: "2023-02-25",
          price: 22796,
          modelYear: 2018
        },
        {
          date: "2023-10-26",
          price: 19080,
          modelYear: 2020
        },
        {
          date: "2023-06-20",
          price: 29704,
          modelYear: 2016
        },
        {
          date: "2022-08-01",
          price: 12658,
          modelYear: 2015
        },
        {
          date: "2022-08-28",
          price: 31429,
          modelYear: 2015
        },
        {
          date: "2023-11-06",
          price: 13072,
          modelYear: 2015
        },
        {
          date: "2020-04-06",
          price: 28871,
          modelYear: 2017
        },
        {
          date: "2023-01-08",
          price: 18589,
          modelYear: 2015
        },
        {
          date: "2021-02-28",
          price: 28677,
          modelYear: 2020
        },
        {
          date: "2023-05-10",
          price: 28318,
          modelYear: 2016
        },
        {
          date: "2021-08-24",
          price: 19826,
          modelYear: 2018
        },
        {
          date: "2022-05-24",
          price: 16040,
          modelYear: 2015
        },
        {
          date: "2020-10-12",
          price: 26333,
          modelYear: 2019
        },
        {
          date: "2020-03-10",
          price: 12891,
          modelYear: 2015
        },
        {
          date: "2021-06-16",
          price: 19934,
          modelYear: 2019
        },
        {
          date: "2022-02-18",
          price: 29004,
          modelYear: 2019
        },
        {
          date: "2019-06-10",
          price: 27805,
          modelYear: 2019
        },
        {
          date: "2022-06-18",
          price: 18990,
          modelYear: 2019
        },
        {
          date: "2020-01-10",
          price: 25854,
          modelYear: 2018
        },
        {
          date: "2022-04-15",
          price: 25306,
          modelYear: 2019
        },
        {
          date: "2021-10-12",
          price: 24948,
          modelYear: 2018
        },
        {
          date: "2020-08-24",
          price: 13267,
          modelYear: 2016
        },
        {
          date: "2021-09-10",
          price: 20817,
          modelYear: 2016
        },
        {
          date: "2020-04-25",
          price: 22534,
          modelYear: 2020
        },
        {
          date: "2023-12-22",
          price: 16473,
          modelYear: 2016
        },
        {
          date: "2021-08-11",
          price: 28930,
          modelYear: 2020
        },
        {
          date: "2020-07-28",
          price: 20981,
          modelYear: 2020
        },
        {
          date: "2019-02-10",
          price: 25308,
          modelYear: 2017
        },
        {
          date: "2022-11-22",
          price: 27056,
          modelYear: 2019
        },
        {
          date: "2020-12-06",
          price: 11796,
          modelYear: 2019
        },
        {
          date: "2023-12-08",
          price: 25536,
          modelYear: 2017
        },
        {
          date: "2020-12-01",
          price: 27260,
          modelYear: 2020
        },
        {
          date: "2020-09-18",
          price: 23064,
          modelYear: 2020
        },
        {
          date: "2021-08-15",
          price: 25900,
          modelYear: 2018
        },
        {
          date: "2023-02-05",
          price: 17227,
          modelYear: 2018
        },
        {
          date: "2021-11-11",
          price: 29061,
          modelYear: 2017
        },
        {
          date: "2023-09-15",
          price: 28955,
          modelYear: 2019
        },
        {
          date: "2020-10-12",
          price: 12099,
          modelYear: 2019
        },
        {
          date: "2022-10-29",
          price: 22418,
          modelYear: 2020
        },
        {
          date: "2019-06-28",
          price: 20047,
          modelYear: 2018
        },
        {
          date: "2021-06-30",
          price: 30224,
          modelYear: 2019
        },
        {
          date: "2023-02-05",
          price: 14618,
          modelYear: 2020
        },
        {
          date: "2022-08-05",
          price: 26117,
          modelYear: 2020
        },
        {
          date: "2020-03-05",
          price: 27495,
          modelYear: 2020
        },
        {
          date: "2021-09-22",
          price: 25976,
          modelYear: 2018
        },
        {
          date: "2021-08-16",
          price: 26464,
          modelYear: 2020
        },
        {
          date: "2022-10-18",
          price: 29871,
          modelYear: 2020
        },
        {
          date: "2019-12-21",
          price: 14161,
          modelYear: 2015
        },
        {
          date: "2021-11-15",
          price: 15167,
          modelYear: 2017
        },
        {
          date: "2022-05-26",
          price: 16599,
          modelYear: 2020
        },
        {
          date: "2019-06-07",
          price: 18884,
          modelYear: 2018
        },
        {
          date: "2020-11-02",
          price: 25370,
          modelYear: 2016
        },
        {
          date: "2023-10-26",
          price: 19789,
          modelYear: 2020
        },
        {
          date: "2020-02-22",
          price: 19271,
          modelYear: 2019
        },
        {
          date: "2022-04-10",
          price: 23236,
          modelYear: 2020
        },
        {
          date: "2020-10-21",
          price: 28584,
          modelYear: 2017
        },
        {
          date: "2021-12-17",
          price: 21580,
          modelYear: 2018
        },
        {
          date: "2020-12-08",
          price: 20988,
          modelYear: 2020
        },
        {
          date: "2022-10-20",
          price: 19971,
          modelYear: 2019
        },
        {
          date: "2020-04-15",
          price: 21099,
          modelYear: 2016
        },
        {
          date: "2023-08-06",
          price: 16601,
          modelYear: 2019
        },
        {
          date: "2023-11-03",
          price: 20884,
          modelYear: 2020
        },
        {
          date: "2019-01-10",
          price: 16820,
          modelYear: 2016
        },
        {
          date: "2021-02-25",
          price: 16939,
          modelYear: 2019
        },
        {
          date: "2021-05-08",
          price: 15053,
          modelYear: 2015
        },
        {
          date: "2020-05-23",
          price: 25764,
          modelYear: 2019
        },
        {
          date: "2023-05-04",
          price: 21527,
          modelYear: 2018
        },
        {
          date: "2020-02-07",
          price: 18138,
          modelYear: 2020
        },
        {
          date: "2021-06-11",
          price: 27674,
          modelYear: 2020
        },
        {
          date: "2020-02-12",
          price: 28093,
          modelYear: 2020
        },
        {
          date: "2022-04-03",
          price: 30252,
          modelYear: 2015
        },
        {
          date: "2020-08-03",
          price: 18382,
          modelYear: 2017
        },
        {
          date: "2019-01-19",
          price: 16899,
          modelYear: 2017
        },
        {
          date: "2023-08-23",
          price: 18373,
          modelYear: 2020
        },
        {
          date: "2019-11-28",
          price: 13991,
          modelYear: 2015
        },
        {
          date: "2022-12-26",
          price: 29727,
          modelYear: 2017
        },
        {
          date: "2019-03-14",
          price: 22624,
          modelYear: 2018
        },
        {
          date: "2019-06-17",
          price: 16172,
          modelYear: 2018
        },
        {
          date: "2019-10-12",
          price: 14739,
          modelYear: 2016
        },
        {
          date: "2021-05-21",
          price: 19339,
          modelYear: 2020
        },
        {
          date: "2023-01-05",
          price: 27989,
          modelYear: 2020
        },
        {
          date: "2019-08-10",
          price: 24286,
          modelYear: 2018
        },
        {
          date: "2020-02-02",
          price: 12623,
          modelYear: 2015
        },
        {
          date: "2019-07-01",
          price: 25165,
          modelYear: 2019
        },
        {
          date: "2021-10-03",
          price: 24589,
          modelYear: 2016
        },
        {
          date: "2023-11-01",
          price: 26226,
          modelYear: 2018
        },
        {
          date: "2022-09-17",
          price: 30081,
          modelYear: 2019
        },
        {
          date: "2020-02-26",
          price: 28320,
          modelYear: 2019
        },
        {
          date: "2023-09-21",
          price: 19034,
          modelYear: 2019
        },
        {
          date: "2021-08-03",
          price: 25719,
          modelYear: 2018
        },
        {
          date: "2019-02-18",
          price: 26242,
          modelYear: 2020
        },
        {
          date: "2021-10-29",
          price: 19917,
          modelYear: 2019
        },
        {
          date: "2023-12-06",
          price: 25167,
          modelYear: 2020
        },
        {
          date: "2021-07-01",
          price: 20215,
          modelYear: 2020
        },
        {
          date: "2023-10-09",
          price: 22209,
          modelYear: 2017
        },
        {
          date: "2020-02-28",
          price: 12873,
          modelYear: 2016
        },
        {
          date: "2019-02-17",
          price: 27656,
          modelYear: 2017
        },
        {
          date: "2020-07-07",
          price: 24829,
          modelYear: 2020
        },
        {
          date: "2019-02-03",
          price: 25675,
          modelYear: 2016
        },
        {
          date: "2019-03-04",
          price: 19771,
          modelYear: 2020
        },
        {
          date: "2020-05-16",
          price: 21870,
          modelYear: 2019
        },
        {
          date: "2023-09-01",
          price: 19419,
          modelYear: 2016
        },
        {
          date: "2019-03-08",
          price: 19620,
          modelYear: 2020
        },
        {
          date: "2023-12-27",
          price: 28594,
          modelYear: 2020
        },
        {
          date: "2020-12-30",
          price: 10934,
          modelYear: 2017
        },
        {
          date: "2021-08-24",
          price: 22199,
          modelYear: 2019
        },
        {
          date: "2020-01-19",
          price: 19244,
          modelYear: 2015
        },
        {
          date: "2023-12-07",
          price: 14302,
          modelYear: 2015
        },
        {
          date: "2019-07-05",
          price: 27816,
          modelYear: 2017
        },
        {
          date: "2019-01-30",
          price: 25495,
          modelYear: 2019
        },
        {
          date: "2019-03-07",
          price: 24101,
          modelYear: 2018
        },
        {
          date: "2019-02-23",
          price: 26710,
          modelYear: 2019
        },
        {
          date: "2022-03-26",
          price: 23168,
          modelYear: 2020
        },
        {
          date: "2020-12-30",
          price: 13502,
          modelYear: 2016
        },
        {
          date: "2021-11-03",
          price: 31341,
          modelYear: 2019
        },
        {
          date: "2020-11-18",
          price: 18865,
          modelYear: 2016
        },
        {
          date: "2019-04-19",
          price: 9031,
          modelYear: 2019
        },
        {
          date: "2021-01-22",
          price: 29918,
          modelYear: 2019
        },
        {
          date: "2023-09-19",
          price: 28931,
          modelYear: 2019
        },
        {
          date: "2021-02-21",
          price: 29152,
          modelYear: 2016
        },
        {
          date: "2020-03-08",
          price: 14067,
          modelYear: 2015
        },
        {
          date: "2020-10-02",
          price: 25341,
          modelYear: 2018
        },
        {
          date: "2022-08-18",
          price: 29145,
          modelYear: 2018
        },
        {
          date: "2023-04-30",
          price: 28833,
          modelYear: 2019
        },
        {
          date: "2020-06-07",
          price: 25169,
          modelYear: 2020
        },
        {
          date: "2021-09-06",
          price: 23466,
          modelYear: 2019
        },
        {
          date: "2023-12-23",
          price: 26197,
          modelYear: 2019
        },
        {
          date: "2020-01-19",
          price: 29401,
          modelYear: 2020
        },
        {
          date: "2019-06-17",
          price: 20046,
          modelYear: 2020
        },
        {
          date: "2021-03-27",
          price: 25286,
          modelYear: 2017
        },
        {
          date: "2020-10-03",
          price: 24649,
          modelYear: 2020
        },
        {
          date: "2023-10-16",
          price: 27550,
          modelYear: 2019
        },
        {
          date: "2022-04-03",
          price: 31414,
          modelYear: 2017
        },
        {
          date: "2021-05-07",
          price: 31724,
          modelYear: 2018
        },
        {
          date: "2019-06-14",
          price: 15672,
          modelYear: 2015
        },
        {
          date: "2019-09-02",
          price: 16731,
          modelYear: 2016
        },
        {
          date: "2023-01-30",
          price: 22321,
          modelYear: 2020
        },
        {
          date: "2021-04-18",
          price: 27934,
          modelYear: 2018
        },
        {
          date: "2023-02-24",
          price: 23000,
          modelYear: 2020
        },
        {
          date: "2023-01-05",
          price: 26326,
          modelYear: 2020
        },
        {
          date: "2019-08-20",
          price: 17308,
          modelYear: 2016
        },
        {
          date: "2022-10-25",
          price: 21632,
          modelYear: 2020
        },
        {
          date: "2021-01-01",
          price: 26244,
          modelYear: 2018
        },
        {
          date: "2021-12-14",
          price: 25869,
          modelYear: 2020
        },
        {
          date: "2022-05-24",
          price: 31190,
          modelYear: 2017
        },
        {
          date: "2020-02-17",
          price: 21196,
          modelYear: 2019
        },
        {
          date: "2023-11-11",
          price: 28795,
          modelYear: 2020
        },
        {
          date: "2022-09-01",
          price: 22878,
          modelYear: 2020
        },
        {
          date: "2020-02-06",
          price: 25565,
          modelYear: 2019
        },
        {
          date: "2019-11-05",
          price: 12819,
          modelYear: 2019
        },
        {
          date: "2023-05-12",
          price: 15919,
          modelYear: 2019
        },
        {
          date: "2022-08-23",
          price: 21522,
          modelYear: 2020
        },
        {
          date: "2021-09-13",
          price: 24874,
          modelYear: 2019
        },
        {
          date: "2022-09-08",
          price: 25977,
          modelYear: 2018
        },
        {
          date: "2019-11-27",
          price: 22136,
          modelYear: 2020
        },
        {
          date: "2021-10-23",
          price: 19763,
          modelYear: 2020
        },
        {
          date: "2020-10-24",
          price: 20497,
          modelYear: 2019
        },
        {
          date: "2021-03-05",
          price: 27836,
          modelYear: 2019
        },
        {
          date: "2019-09-09",
          price: 11190,
          modelYear: 2016
        },
        {
          date: "2023-06-18",
          price: 18799,
          modelYear: 2019
        },
        {
          date: "2020-12-05",
          price: 18103,
          modelYear: 2019
        },
        {
          date: "2021-06-07",
          price: 24103,
          modelYear: 2018
        },
        {
          date: "2019-10-25",
          price: 25135,
          modelYear: 2019
        },
        {
          date: "2019-08-20",
          price: 23215,
          modelYear: 2019
        },
        {
          date: "2022-01-12",
          price: 19553,
          modelYear: 2020
        },
        {
          date: "2020-10-12",
          price: 18477,
          modelYear: 2018
        },
        {
          date: "2021-03-14",
          price: 26135,
          modelYear: 2020
        },
        {
          date: "2020-10-26",
          price: 20609,
          modelYear: 2019
        },
        {
          date: "2020-01-20",
          price: 22158,
          modelYear: 2020
        },
        {
          date: "2020-09-30",
          price: 16813,
          modelYear: 2018
        },
        {
          date: "2022-06-04",
          price: 24721,
          modelYear: 2020
        },
        {
          date: "2019-07-25",
          price: 25445,
          modelYear: 2019
        },
        {
          date: "2022-08-24",
          price: 16958,
          modelYear: 2020
        },
        {
          date: "2019-11-15",
          price: 14287,
          modelYear: 2015
        },
        {
          date: "2019-06-21",
          price: 26875,
          modelYear: 2019
        },
        {
          date: "2021-08-10",
          price: 22463,
          modelYear: 2019
        },
        {
          date: "2020-06-21",
          price: 20909,
          modelYear: 2019
        },
        {
          date: "2022-04-10",
          price: 27297,
          modelYear: 2020
        },
        {
          date: "2023-10-01",
          price: 21607,
          modelYear: 2018
        },
        {
          date: "2021-12-12",
          price: 27754,
          modelYear: 2015
        },
        {
          date: "2023-05-22",
          price: 20242,
          modelYear: 2017
        },
        {
          date: "2023-03-23",
          price: 24314,
          modelYear: 2020
        },
        {
          date: "2019-08-06",
          price: 21282,
          modelYear: 2020
        },
        {
          date: "2022-04-13",
          price: 27338,
          modelYear: 2018
        },
        {
          date: "2022-08-25",
          price: 24171,
          modelYear: 2018
        },
        {
          date: "2021-11-16",
          price: 31763,
          modelYear: 2018
        },
        {
          date: "2023-08-27",
          price: 14242,
          modelYear: 2018
        },
        {
          date: "2020-10-17",
          price: 16968,
          modelYear: 2020
        },
        {
          date: "2023-05-29",
          price: 25056,
          modelYear: 2017
        },
        {
          date: "2021-11-30",
          price: 29268,
          modelYear: 2017
        },
        {
          date: "2023-05-03",
          price: 26670,
          modelYear: 2016
        },
        {
          date: "2021-05-02",
          price: 29081,
          modelYear: 2017
        },
        {
          date: "2021-07-23",
          price: 18499,
          modelYear: 2016
        },
        {
          date: "2019-09-02",
          price: 24529,
          modelYear: 2020
        },
        {
          date: "2021-06-05",
          price: 21134,
          modelYear: 2017
        },
        {
          date: "2022-05-07",
          price: 21193,
          modelYear: 2020
        },
        {
          date: "2020-01-17",
          price: 21674,
          modelYear: 2018
        },
        {
          date: "2020-08-01",
          price: 26142,
          modelYear: 2020
        },
        {
          date: "2022-12-17",
          price: 24979,
          modelYear: 2016
        },
        {
          date: "2020-11-15",
          price: 13395,
          modelYear: 2016
        },
        {
          date: "2020-02-08",
          price: 23043,
          modelYear: 2018
        },
        {
          date: "2023-02-19",
          price: 26531,
          modelYear: 2019
        },
        {
          date: "2020-11-09",
          price: 26545,
          modelYear: 2020
        },
        {
          date: "2022-05-21",
          price: 23991,
          modelYear: 2016
        },
        {
          date: "2020-08-16",
          price: 29376,
          modelYear: 2019
        },
        {
          date: "2021-05-22",
          price: 31176,
          modelYear: 2019
        },
        {
          date: "2023-07-02",
          price: 25712,
          modelYear: 2015
        },
        {
          date: "2019-01-04",
          price: 27378,
          modelYear: 2018
        },
        {
          date: "2021-12-11",
          price: 16147,
          modelYear: 2018
        },
        {
          date: "2020-02-20",
          price: 26682,
          modelYear: 2020
        },
        {
          date: "2019-02-10",
          price: 16317,
          modelYear: 2016
        },
        {
          date: "2020-01-21",
          price: 18483,
          modelYear: 2019
        },
        {
          date: "2019-01-28",
          price: 22844,
          modelYear: 2018
        },
        {
          date: "2022-03-11",
          price: 25258,
          modelYear: 2020
        },
        {
          date: "2022-12-29",
          price: 26823,
          modelYear: 2018
        },
        {
          date: "2022-07-08",
          price: 16492,
          modelYear: 2020
        },
        {
          date: "2019-03-03",
          price: 18287,
          modelYear: 2020
        },
        {
          date: "2023-05-24",
          price: 26378,
          modelYear: 2016
        },
        {
          date: "2022-09-27",
          price: 18322,
          modelYear: 2018
        },
        {
          date: "2021-02-09",
          price: 30798,
          modelYear: 2017
        },
        {
          date: "2022-06-09",
          price: 18855,
          modelYear: 2020
        },
        {
          date: "2022-07-08",
          price: 30574,
          modelYear: 2019
        },
        {
          date: "2022-01-03",
          price: 30230,
          modelYear: 2016
        },
        {
          date: "2021-05-28",
          price: 25783,
          modelYear: 2019
        },
        {
          date: "2019-01-15",
          price: 20215,
          modelYear: 2018
        },
        {
          date: "2019-01-09",
          price: 25299,
          modelYear: 2018
        },
        {
          date: "2019-06-06",
          price: 26961,
          modelYear: 2015
        },
        {
          date: "2020-06-02",
          price: 15393,
          modelYear: 2016
        },
        {
          date: "2020-01-26",
          price: 23281,
          modelYear: 2017
        },
        {
          date: "2021-03-12",
          price: 27040,
          modelYear: 2019
        },
        {
          date: "2021-11-30",
          price: 19788,
          modelYear: 2019
        },
        {
          date: "2020-06-05",
          price: 21175,
          modelYear: 2016
        },
        {
          date: "2021-12-10",
          price: 13151,
          modelYear: 2016
        },
        {
          date: "2021-07-13",
          price: 26573,
          modelYear: 2020
        },
        {
          date: "2022-12-03",
          price: 23536,
          modelYear: 2020
        },
        {
          date: "2020-09-19",
          price: 21554,
          modelYear: 2020
        },
        {
          date: "2020-11-23",
          price: 28276,
          modelYear: 2020
        },
        {
          date: "2020-11-22",
          price: 20210,
          modelYear: 2020
        },
        {
          date: "2019-07-25",
          price: 15632,
          modelYear: 2016
        },
        {
          date: "2019-01-09",
          price: 25258,
          modelYear: 2016
        },
        {
          date: "2023-02-02",
          price: 20138,
          modelYear: 2018
        },
        {
          date: "2019-09-22",
          price: 21859,
          modelYear: 2016
        },
        {
          date: "2023-05-15",
          price: 21966,
          modelYear: 2020
        },
        {
          date: "2019-01-24",
          price: 24190,
          modelYear: 2020
        },
        {
          date: "2023-02-21",
          price: 30747,
          modelYear: 2020
        },
        {
          date: "2019-12-07",
          price: 20480,
          modelYear: 2020
        },
        {
          date: "2019-09-18",
          price: 14935,
          modelYear: 2018
        },
        {
          date: "2019-11-02",
          price: 11367,
          modelYear: 2017
        },
        {
          date: "2020-07-20",
          price: 18210,
          modelYear: 2016
        },
        {
          date: "2022-03-13",
          price: 15995,
          modelYear: 2017
        },
        {
          date: "2021-11-29",
          price: 28879,
          modelYear: 2018
        },
        {
          date: "2019-05-08",
          price: 13077,
          modelYear: 2019
        },
        {
          date: "2020-09-10",
          price: 22933,
          modelYear: 2017
        },
        {
          date: "2021-08-14",
          price: 21609,
          modelYear: 2017
        },
        {
          date: "2023-07-29",
          price: 14252,
          modelYear: 2015
        },
        {
          date: "2022-02-06",
          price: 12901,
          modelYear: 2020
        },
        {
          date: "2022-12-15",
          price: 29058,
          modelYear: 2018
        },
        {
          date: "2020-02-04",
          price: 27954,
          modelYear: 2017
        },
        {
          date: "2021-09-02",
          price: 22014,
          modelYear: 2018
        },
        {
          date: "2020-06-26",
          price: 22940,
          modelYear: 2020
        },
        {
          date: "2022-03-13",
          price: 20293,
          modelYear: 2020
        },
        {
          date: "2021-09-09",
          price: 32469,
          modelYear: 2020
        },
        {
          date: "2022-03-05",
          price: 27253,
          modelYear: 2020
        },
        {
          date: "2023-02-23",
          price: 28165,
          modelYear: 2019
        },
        {
          date: "2023-07-15",
          price: 26342,
          modelYear: 2018
        },
        {
          date: "2023-02-24",
          price: 14001,
          modelYear: 2018
        },
        {
          date: "2021-09-08",
          price: 24178,
          modelYear: 2019
        },
        {
          date: "2022-02-19",
          price: 29605,
          modelYear: 2019
        },
        {
          date: "2023-09-14",
          price: 20442,
          modelYear: 2020
        },
        {
          date: "2021-05-08",
          price: 23320,
          modelYear: 2020
        },
        {
          date: "2022-09-27",
          price: 26638,
          modelYear: 2020
        },
        {
          date: "2020-04-14",
          price: 24088,
          modelYear: 2019
        },
        {
          date: "2019-06-20",
          price: 26621,
          modelYear: 2017
        },
        {
          date: "2022-11-25",
          price: 22364,
          modelYear: 2019
        },
        {
          date: "2022-05-21",
          price: 28354,
          modelYear: 2017
        },
        {
          date: "2022-04-26",
          price: 25327,
          modelYear: 2019
        },
        {
          date: "2023-08-04",
          price: 11695,
          modelYear: 2016
        },
        {
          date: "2022-06-27",
          price: 27239,
          modelYear: 2019
        },
        {
          date: "2022-01-15",
          price: 28619,
          modelYear: 2019
        },
        {
          date: "2021-05-15",
          price: 17062,
          modelYear: 2015
        },
        {
          date: "2020-10-21",
          price: 26663,
          modelYear: 2020
        },
        {
          date: "2019-09-30",
          price: 24575,
          modelYear: 2017
        },
        {
          date: "2021-09-12",
          price: 29682,
          modelYear: 2020
        },
        {
          date: "2023-10-15",
          price: 22538,
          modelYear: 2016
        },
        {
          date: "2019-08-23",
          price: 12452,
          modelYear: 2016
        },
        {
          date: "2020-06-08",
          price: 14360,
          modelYear: 2019
        },
        {
          date: "2022-08-09",
          price: 19480,
          modelYear: 2018
        },
        {
          date: "2022-03-16",
          price: 24643,
          modelYear: 2019
        },
        {
          date: "2019-02-01",
          price: 19275,
          modelYear: 2017
        },
        {
          date: "2019-08-10",
          price: 21515,
          modelYear: 2015
        },
        {
          date: "2020-03-04",
          price: 26634,
          modelYear: 2016
        },
        {
          date: "2022-10-29",
          price: 17935,
          modelYear: 2016
        },
        {
          date: "2020-03-16",
          price: 18044,
          modelYear: 2020
        },
        {
          date: "2020-09-29",
          price: 13990,
          modelYear: 2016
        },
        {
          date: "2023-03-18",
          price: 21733,
          modelYear: 2018
        },
        {
          date: "2022-03-28",
          price: 20281,
          modelYear: 2018
        },
        {
          date: "2021-12-15",
          price: 25612,
          modelYear: 2018
        },
        {
          date: "2022-02-17",
          price: 30589,
          modelYear: 2018
        },
        {
          date: "2023-03-24",
          price: 13834,
          modelYear: 2017
        },
        {
          date: "2020-10-11",
          price: 25218,
          modelYear: 2019
        },
        {
          date: "2023-10-07",
          price: 17552,
          modelYear: 2015
        },
        {
          date: "2021-08-21",
          price: 29861,
          modelYear: 2015
        },
        {
          date: "2023-07-13",
          price: 15638,
          modelYear: 2020
        },
        {
          date: "2020-03-05",
          price: 28841,
          modelYear: 2019
        },
        {
          date: "2022-09-11",
          price: 24445,
          modelYear: 2019
        },
        {
          date: "2023-01-31",
          price: 25785,
          modelYear: 2019
        },
        {
          date: "2020-12-24",
          price: 21557,
          modelYear: 2017
        },
        {
          date: "2019-06-17",
          price: 14795,
          modelYear: 2015
        },
        {
          date: "2021-05-11",
          price: 23222,
          modelYear: 2020
        },
        {
          date: "2023-01-01",
          price: 22801,
          modelYear: 2017
        },
        {
          date: "2019-08-28",
          price: 27844,
          modelYear: 2020
        },
        {
          date: "2022-06-13",
          price: 27507,
          modelYear: 2018
        },
        {
          date: "2021-11-23",
          price: 19253,
          modelYear: 2020
        },
        {
          date: "2020-09-23",
          price: 27684,
          modelYear: 2019
        },
        {
          date: "2021-10-30",
          price: 24464,
          modelYear: 2016
        },
        {
          date: "2019-10-18",
          price: 25512,
          modelYear: 2020
        },
        {
          date: "2022-06-20",
          price: 20485,
          modelYear: 2016
        },
        {
          date: "2022-03-05",
          price: 27549,
          modelYear: 2017
        },
        {
          date: "2022-01-13",
          price: 28272,
          modelYear: 2016
        },
        {
          date: "2019-08-06",
          price: 23492,
          modelYear: 2020
        },
        {
          date: "2021-10-29",
          price: 29517,
          modelYear: 2018
        },
        {
          date: "2019-02-03",
          price: 12214,
          modelYear: 2016
        },
        {
          date: "2021-12-31",
          price: 14227,
          modelYear: 2018
        },
        {
          date: "2021-05-29",
          price: 21730,
          modelYear: 2019
        },
        {
          date: "2020-11-01",
          price: 14425,
          modelYear: 2020
        },
        {
          date: "2021-03-08",
          price: 23622,
          modelYear: 2015
        },
        {
          date: "2022-04-16",
          price: 23065,
          modelYear: 2020
        },
        {
          date: "2023-01-06",
          price: 21966,
          modelYear: 2019
        },
        {
          date: "2021-09-16",
          price: 22857,
          modelYear: 2020
        },
        {
          date: "2020-11-30",
          price: 13044,
          modelYear: 2015
        },
        {
          date: "2019-12-30",
          price: 25229,
          modelYear: 2018
        },
        {
          date: "2019-06-01",
          price: 25828,
          modelYear: 2018
        },
        {
          date: "2020-05-30",
          price: 14925,
          modelYear: 2015
        },
        {
          date: "2022-04-22",
          price: 29070,
          modelYear: 2020
        },
        {
          date: "2022-08-13",
          price: 28063,
          modelYear: 2019
        },
        {
          date: "2019-04-05",
          price: 23947,
          modelYear: 2016
        },
        {
          date: "2023-11-25",
          price: 21023,
          modelYear: 2019
        },
        {
          date: "2019-08-22",
          price: 20992,
          modelYear: 2018
        },
        {
          date: "2022-06-14",
          price: 22487,
          modelYear: 2016
        },
        {
          date: "2020-12-04",
          price: 12015,
          modelYear: 2020
        },
        {
          date: "2021-02-22",
          price: 23746,
          modelYear: 2017
        },
        {
          date: "2021-12-24",
          price: 26636,
          modelYear: 2017
        },
        {
          date: "2022-02-15",
          price: 25719,
          modelYear: 2020
        },
        {
          date: "2022-01-22",
          price: 23876,
          modelYear: 2019
        },
        {
          date: "2022-12-30",
          price: 26733,
          modelYear: 2018
        },
        {
          date: "2021-08-15",
          price: 24285,
          modelYear: 2020
        },
        {
          date: "2022-07-16",
          price: 16951,
          modelYear: 2015
        },
        {
          date: "2023-05-07",
          price: 13583,
          modelYear: 2017
        },
        {
          date: "2021-06-09",
          price: 20621,
          modelYear: 2017
        },
        {
          date: "2019-10-03",
          price: 14488,
          modelYear: 2018
        },
        {
          date: "2019-09-12",
          price: 24359,
          modelYear: 2015
        },
        {
          date: "2021-06-08",
          price: 25626,
          modelYear: 2020
        },
        {
          date: "2020-06-18",
          price: 26864,
          modelYear: 2017
        },
        {
          date: "2020-08-07",
          price: 25514,
          modelYear: 2018
        },
        {
          date: "2023-02-13",
          price: 29436,
          modelYear: 2019
        },
        {
          date: "2023-07-29",
          price: 15290,
          modelYear: 2017
        },
        {
          date: "2023-06-24",
          price: 16772,
          modelYear: 2015
        },
        {
          date: "2023-05-20",
          price: 29495,
          modelYear: 2017
        },
        {
          date: "2020-03-11",
          price: 29172,
          modelYear: 2018
        },
        {
          date: "2021-05-04",
          price: 26784,
          modelYear: 2019
        },
        {
          date: "2023-12-21",
          price: 30005,
          modelYear: 2020
        },
        {
          date: "2022-12-09",
          price: 21460,
          modelYear: 2020
        },
        {
          date: "2020-10-22",
          price: 13652,
          modelYear: 2019
        },
        {
          date: "2019-09-30",
          price: 16099,
          modelYear: 2016
        },
        {
          date: "2023-09-09",
          price: 25886,
          modelYear: 2019
        },
        {
          date: "2020-01-27",
          price: 19058,
          modelYear: 2019
        },
        {
          date: "2022-08-14",
          price: 30419,
          modelYear: 2019
        },
        {
          date: "2022-03-30",
          price: 16673,
          modelYear: 2019
        },
        {
          date: "2020-05-31",
          price: 21819,
          modelYear: 2016
        },
        {
          date: "2020-04-11",
          price: 22283,
          modelYear: 2018
        },
        {
          date: "2023-05-29",
          price: 13252,
          modelYear: 2016
        },
        {
          date: "2020-04-11",
          price: 24482,
          modelYear: 2017
        },
        {
          date: "2019-12-23",
          price: 11399,
          modelYear: 2015
        },
        {
          date: "2021-04-08",
          price: 31869,
          modelYear: 2018
        },
        {
          date: "2022-07-02",
          price: 24860,
          modelYear: 2018
        },
        {
          date: "2023-04-23",
          price: 20507,
          modelYear: 2017
        },
        {
          date: "2021-08-10",
          price: 28419,
          modelYear: 2017
        },
        {
          date: "2022-11-09",
          price: 25653,
          modelYear: 2019
        },
        {
          date: "2020-12-06",
          price: 15660,
          modelYear: 2015
        },
        {
          date: "2020-03-12",
          price: 25751,
          modelYear: 2020
        },
        {
          date: "2020-03-21",
          price: 12708,
          modelYear: 2015
        },
        {
          date: "2019-06-07",
          price: 24615,
          modelYear: 2019
        },
        {
          date: "2019-03-03",
          price: 8297,
          modelYear: 2015
        },
        {
          date: "2019-01-13",
          price: 10485,
          modelYear: 2019
        },
        {
          date: "2021-03-23",
          price: 22720,
          modelYear: 2020
        },
        {
          date: "2021-01-12",
          price: 31109,
          modelYear: 2020
        },
        {
          date: "2023-01-30",
          price: 29499,
          modelYear: 2019
        },
        {
          date: "2022-04-06",
          price: 25289,
          modelYear: 2019
        },
        {
          date: "2022-12-30",
          price: 23381,
          modelYear: 2020
        },
        {
          date: "2020-01-22",
          price: 21088,
          modelYear: 2019
        },
        {
          date: "2019-06-15",
          price: 11555,
          modelYear: 2017
        },
        {
          date: "2021-05-26",
          price: 31483,
          modelYear: 2019
        },
        {
          date: "2023-12-14",
          price: 23477,
          modelYear: 2016
        },
        {
          date: "2020-04-27",
          price: 15560,
          modelYear: 2015
        },
        {
          date: "2022-05-29",
          price: 18465,
          modelYear: 2020
        },
        {
          date: "2021-10-10",
          price: 25478,
          modelYear: 2020
        },
        {
          date: "2020-01-17",
          price: 23906,
          modelYear: 2019
        },
        {
          date: "2019-10-22",
          price: 16061,
          modelYear: 2019
        },
        {
          date: "2019-11-24",
          price: 25956,
          modelYear: 2020
        },
        {
          date: "2023-08-25",
          price: 16904,
          modelYear: 2017
        },
        {
          date: "2019-06-08",
          price: 8223,
          modelYear: 2015
        },
        {
          date: "2021-02-04",
          price: 14409,
          modelYear: 2018
        },
        {
          date: "2022-04-26",
          price: 20908,
          modelYear: 2019
        },
        {
          date: "2023-05-01",
          price: 27172,
          modelYear: 2018
        },
        {
          date: "2023-12-05",
          price: 30768,
          modelYear: 2020
        },
        {
          date: "2021-03-28",
          price: 24648,
          modelYear: 2017
        },
        {
          date: "2020-08-02",
          price: 15817,
          modelYear: 2019
        },
        {
          date: "2023-10-22",
          price: 24044,
          modelYear: 2019
        },
        {
          date: "2019-04-25",
          price: 22192,
          modelYear: 2018
        },
        {
          date: "2023-10-01",
          price: 20983,
          modelYear: 2020
        },
        {
          date: "2020-03-08",
          price: 28971,
          modelYear: 2015
        },
        {
          date: "2019-01-06",
          price: 13214,
          modelYear: 2015
        },
        {
          date: "2019-08-20",
          price: 16423,
          modelYear: 2015
        },
        {
          date: "2019-03-21",
          price: 17397,
          modelYear: 2015
        },
        {
          date: "2023-07-30",
          price: 25016,
          modelYear: 2018
        },
        {
          date: "2023-09-19",
          price: 28594,
          modelYear: 2019
        },
        {
          date: "2021-04-05",
          price: 26002,
          modelYear: 2017
        },
        {
          date: "2022-09-14",
          price: 25180,
          modelYear: 2020
        },
        {
          date: "2020-12-26",
          price: 14940,
          modelYear: 2015
        },
        {
          date: "2020-02-05",
          price: 26923,
          modelYear: 2020
        },
        {
          date: "2020-07-04",
          price: 27346,
          modelYear: 2017
        },
        {
          date: "2019-11-15",
          price: 20568,
          modelYear: 2020
        },
        {
          date: "2020-05-03",
          price: 24518,
          modelYear: 2020
        },
        {
          date: "2021-03-09",
          price: 21302,
          modelYear: 2019
        },
        {
          date: "2020-08-10",
          price: 28317,
          modelYear: 2020
        },
        {
          date: "2022-12-28",
          price: 19726,
          modelYear: 2018
        },
        {
          date: "2020-10-07",
          price: 26407,
          modelYear: 2019
        },
        {
          date: "2020-08-11",
          price: 17772,
          modelYear: 2019
        },
        {
          date: "2019-02-18",
          price: 16846,
          modelYear: 2017
        },
        {
          date: "2019-08-04",
          price: 15116,
          modelYear: 2015
        },
        {
          date: "2022-04-04",
          price: 17683,
          modelYear: 2018
        },
        {
          date: "2022-01-25",
          price: 22379,
          modelYear: 2020
        },
        {
          date: "2019-07-03",
          price: 19037,
          modelYear: 2017
        },
        {
          date: "2021-10-10",
          price: 20679,
          modelYear: 2016
        },
        {
          date: "2023-10-09",
          price: 25200,
          modelYear: 2018
        },
        {
          date: "2020-04-23",
          price: 28641,
          modelYear: 2020
        },
        {
          date: "2019-06-08",
          price: 19296,
          modelYear: 2016
        },
        {
          date: "2023-08-06",
          price: 30988,
          modelYear: 2016
        },
        {
          date: "2022-07-21",
          price: 13434,
          modelYear: 2016
        },
        {
          date: "2023-09-06",
          price: 22763,
          modelYear: 2017
        },
        {
          date: "2020-12-09",
          price: 13033,
          modelYear: 2016
        },
        {
          date: "2022-02-05",
          price: 11820,
          modelYear: 2018
        },
        {
          date: "2023-12-18",
          price: 25868,
          modelYear: 2018
        },
        {
          date: "2022-07-06",
          price: 30007,
          modelYear: 2020
        },
        {
          date: "2021-05-12",
          price: 15122,
          modelYear: 2015
        },
        {
          date: "2023-06-27",
          price: 15693,
          modelYear: 2017
        },
        {
          date: "2019-01-18",
          price: 25887,
          modelYear: 2017
        },
        {
          date: "2022-08-16",
          price: 30651,
          modelYear: 2020
        },
        {
          date: "2021-10-04",
          price: 15810,
          modelYear: 2016
        },
        {
          date: "2020-09-24",
          price: 16518,
          modelYear: 2016
        },
        {
          date: "2022-06-26",
          price: 31162,
          modelYear: 2018
        },
        {
          date: "2022-04-16",
          price: 21155,
          modelYear: 2018
        },
        {
          date: "2019-09-27",
          price: 27508,
          modelYear: 2020
        },
        {
          date: "2019-06-25",
          price: 9663,
          modelYear: 2015
        },
        {
          date: "2021-01-25",
          price: 26682,
          modelYear: 2020
        },
        {
          date: "2021-04-25",
          price: 28171,
          modelYear: 2017
        },
        {
          date: "2021-05-25",
          price: 22599,
          modelYear: 2020
        },
        {
          date: "2022-07-16",
          price: 19580,
          modelYear: 2016
        },
        {
          date: "2019-12-28",
          price: 12308,
          modelYear: 2018
        },
        {
          date: "2020-10-09",
          price: 12659,
          modelYear: 2019
        },
        {
          date: "2020-04-16",
          price: 25831,
          modelYear: 2020
        },
        {
          date: "2019-09-12",
          price: 15327,
          modelYear: 2017
        },
        {
          date: "2020-09-30",
          price: 20735,
          modelYear: 2019
        },
        {
          date: "2019-12-19",
          price: 20960,
          modelYear: 2019
        },
        {
          date: "2022-08-24",
          price: 21399,
          modelYear: 2019
        },
        {
          date: "2022-01-01",
          price: 30381,
          modelYear: 2016
        },
        {
          date: "2023-04-07",
          price: 21895,
          modelYear: 2020
        },
        {
          date: "2020-08-20",
          price: 17965,
          modelYear: 2015
        },
        {
          date: "2021-06-19",
          price: 32319,
          modelYear: 2018
        },
        {
          date: "2020-05-19",
          price: 18299,
          modelYear: 2020
        },
        {
          date: "2019-04-15",
          price: 22203,
          modelYear: 2020
        },
        {
          date: "2020-11-19",
          price: 29772,
          modelYear: 2019
        },
        {
          date: "2022-09-04",
          price: 18400,
          modelYear: 2017
        },
        {
          date: "2020-04-26",
          price: 25502,
          modelYear: 2018
        },
        {
          date: "2023-10-14",
          price: 24177,
          modelYear: 2019
        },
        {
          date: "2020-11-06",
          price: 19299,
          modelYear: 2016
        },
        {
          date: "2019-03-25",
          price: 21770,
          modelYear: 2018
        },
        {
          date: "2021-11-16",
          price: 18561,
          modelYear: 2017
        },
        {
          date: "2022-08-09",
          price: 27819,
          modelYear: 2020
        },
        {
          date: "2020-11-08",
          price: 12725,
          modelYear: 2016
        },
        {
          date: "2023-06-10",
          price: 29879,
          modelYear: 2020
        },
        {
          date: "2021-07-18",
          price: 30812,
          modelYear: 2020
        },
        {
          date: "2023-07-13",
          price: 20249,
          modelYear: 2020
        },
        {
          date: "2023-07-16",
          price: 18606,
          modelYear: 2018
        },
        {
          date: "2019-10-21",
          price: 16265,
          modelYear: 2016
        },
        {
          date: "2020-08-08",
          price: 18237,
          modelYear: 2020
        },
        {
          date: "2023-12-04",
          price: 29231,
          modelYear: 2020
        },
        {
          date: "2021-10-03",
          price: 28242,
          modelYear: 2018
        },
        {
          date: "2021-07-09",
          price: 31434,
          modelYear: 2020
        },
        {
          date: "2022-09-27",
          price: 18985,
          modelYear: 2020
        },
        {
          date: "2019-09-03",
          price: 17992,
          modelYear: 2017
        },
        {
          date: "2020-10-20",
          price: 29589,
          modelYear: 2016
        },
        {
          date: "2021-08-23",
          price: 20953,
          modelYear: 2019
        },
        {
          date: "2020-12-20",
          price: 29573,
          modelYear: 2019
        },
        {
          date: "2019-03-09",
          price: 26883,
          modelYear: 2017
        },
        {
          date: "2021-05-09",
          price: 23368,
          modelYear: 2018
        },
        {
          date: "2020-11-24",
          price: 13355,
          modelYear: 2015
        },
        {
          date: "2020-08-10",
          price: 11715,
          modelYear: 2018
        },
        {
          date: "2022-05-14",
          price: 26373,
          modelYear: 2016
        },
        {
          date: "2021-05-19",
          price: 13821,
          modelYear: 2015
        },
        {
          date: "2022-05-27",
          price: 15035,
          modelYear: 2018
        },
        {
          date: "2019-04-01",
          price: 19835,
          modelYear: 2019
        },
        {
          date: "2019-05-28",
          price: 15692,
          modelYear: 2017
        },
        {
          date: "2019-01-01",
          price: 15013,
          modelYear: 2016
        },
        {
          date: "2019-10-30",
          price: 18211,
          modelYear: 2018
        },
        {
          date: "2019-07-11",
          price: 19829,
          modelYear: 2019
        },
        {
          date: "2021-09-07",
          price: 26906,
          modelYear: 2020
        },
        {
          date: "2019-03-13",
          price: 24198,
          modelYear: 2017
        },
        {
          date: "2023-11-06",
          price: 27369,
          modelYear: 2020
        },
        {
          date: "2022-10-15",
          price: 19585,
          modelYear: 2020
        },
        {
          date: "2023-06-23",
          price: 12342,
          modelYear: 2017
        },
        {
          date: "2020-07-24",
          price: 27446,
          modelYear: 2018
        },
        {
          date: "2021-11-22",
          price: 20995,
          modelYear: 2019
        },
        {
          date: "2022-11-21",
          price: 21796,
          modelYear: 2020
        },
        {
          date: "2023-11-06",
          price: 20306,
          modelYear: 2019
        },
        {
          date: "2019-10-12",
          price: 13955,
          modelYear: 2018
        },
        {
          date: "2021-08-15",
          price: 27315,
          modelYear: 2019
        },
        {
          date: "2022-02-12",
          price: 12694,
          modelYear: 2015
        },
        {
          date: "2020-11-22",
          price: 21830,
          modelYear: 2020
        },
        {
          date: "2021-11-04",
          price: 31833,
          modelYear: 2018
        },
        {
          date: "2021-05-17",
          price: 18587,
          modelYear: 2019
        },
        {
          date: "2022-02-20",
          price: 20818,
          modelYear: 2018
        },
        {
          date: "2023-08-01",
          price: 23520,
          modelYear: 2019
        },
        {
          date: "2021-02-24",
          price: 23674,
          modelYear: 2018
        },
        {
          date: "2021-05-29",
          price: 27850,
          modelYear: 2019
        },
        {
          date: "2021-01-17",
          price: 25521,
          modelYear: 2020
        },
        {
          date: "2021-03-28",
          price: 32134,
          modelYear: 2019
        },
        {
          date: "2022-01-03",
          price: 17010,
          modelYear: 2019
        },
        {
          date: "2021-07-30",
          price: 26755,
          modelYear: 2020
        },
        {
          date: "2023-12-31",
          price: 26933,
          modelYear: 2020
        },
        {
          date: "2023-02-17",
          price: 29777,
          modelYear: 2019
        },
        {
          date: "2021-05-16",
          price: 31452,
          modelYear: 2020
        },
        {
          date: "2023-08-02",
          price: 16332,
          modelYear: 2018
        },
        {
          date: "2020-05-23",
          price: 26185,
          modelYear: 2020
        },
        {
          date: "2021-11-27",
          price: 20379,
          modelYear: 2020
        },
        {
          date: "2021-07-10",
          price: 26362,
          modelYear: 2020
        },
        {
          date: "2019-07-28",
          price: 27162,
          modelYear: 2019
        },
        {
          date: "2020-08-19",
          price: 25553,
          modelYear: 2020
        },
        {
          date: "2019-08-22",
          price: 22581,
          modelYear: 2018
        },
        {
          date: "2023-05-18",
          price: 30481,
          modelYear: 2017
        },
        {
          date: "2020-08-15",
          price: 25536,
          modelYear: 2017
        },
        {
          date: "2023-07-02",
          price: 29051,
          modelYear: 2020
        },
        {
          date: "2023-02-10",
          price: 19723,
          modelYear: 2018
        },
        {
          date: "2023-07-14",
          price: 25383,
          modelYear: 2017
        },
        {
          date: "2023-03-17",
          price: 15840,
          modelYear: 2018
        },
        {
          date: "2022-09-03",
          price: 14132,
          modelYear: 2015
        },
        {
          date: "2021-11-27",
          price: 21481,
          modelYear: 2017
        },
        {
          date: "2022-02-16",
          price: 26786,
          modelYear: 2020
        },
        {
          date: "2022-10-02",
          price: 18051,
          modelYear: 2020
        },
        {
          date: "2020-06-14",
          price: 21934,
          modelYear: 2019
        },
        {
          date: "2022-11-30",
          price: 19887,
          modelYear: 2018
        },
        {
          date: "2023-10-18",
          price: 28166,
          modelYear: 2018
        },
        {
          date: "2019-03-26",
          price: 15942,
          modelYear: 2017
        },
        {
          date: "2020-09-04",
          price: 23117,
          modelYear: 2017
        },
        {
          date: "2022-06-12",
          price: 30868,
          modelYear: 2018
        },
        {
          date: "2020-04-27",
          price: 28260,
          modelYear: 2018
        },
        {
          date: "2021-05-20",
          price: 25806,
          modelYear: 2019
        },
        {
          date: "2023-12-08",
          price: 20800,
          modelYear: 2020
        },
        {
          date: "2019-04-01",
          price: 11153,
          modelYear: 2016
        },
        {
          date: "2022-06-14",
          price: 16193,
          modelYear: 2015
        },
        {
          date: "2022-11-02",
          price: 26342,
          modelYear: 2015
        },
        {
          date: "2019-05-09",
          price: 17314,
          modelYear: 2015
        },
        {
          date: "2022-10-06",
          price: 24502,
          modelYear: 2019
        },
        {
          date: "2021-04-06",
          price: 21474,
          modelYear: 2019
        },
        {
          date: "2020-10-05",
          price: 28487,
          modelYear: 2019
        },
        {
          date: "2021-02-08",
          price: 30216,
          modelYear: 2020
        },
        {
          date: "2023-08-08",
          price: 29685,
          modelYear: 2017
        },
        {
          date: "2020-01-22",
          price: 23334,
          modelYear: 2016
        },
        {
          date: "2023-01-14",
          price: 28685,
          modelYear: 2015
        },
        {
          date: "2020-04-12",
          price: 15324,
          modelYear: 2018
        },
        {
          date: "2020-11-28",
          price: 21558,
          modelYear: 2018
        },
        {
          date: "2021-12-01",
          price: 26606,
          modelYear: 2020
        },
        {
          date: "2020-03-26",
          price: 27754,
          modelYear: 2016
        },
        {
          date: "2021-01-21",
          price: 16403,
          modelYear: 2015
        },
        {
          date: "2021-01-07",
          price: 26523,
          modelYear: 2020
        },
        {
          date: "2021-04-08",
          price: 24404,
          modelYear: 2018
        },
        {
          date: "2020-04-07",
          price: 19448,
          modelYear: 2020
        },
        {
          date: "2023-05-14",
          price: 29153,
          modelYear: 2018
        },
        {
          date: "2021-03-24",
          price: 30860,
          modelYear: 2019
        },
        {
          date: "2021-03-31",
          price: 23703,
          modelYear: 2020
        },
        {
          date: "2022-10-28",
          price: 15601,
          modelYear: 2019
        },
        {
          date: "2019-08-22",
          price: 23134,
          modelYear: 2017
        },
        {
          date: "2022-10-10",
          price: 23731,
          modelYear: 2015
        },
        {
          date: "2022-02-25",
          price: 13614,
          modelYear: 2020
        },
        {
          date: "2023-01-15",
          price: 25145,
          modelYear: 2019
        },
        {
          date: "2021-11-05",
          price: 23907,
          modelYear: 2020
        },
        {
          date: "2021-12-16",
          price: 15965,
          modelYear: 2016
        },
        {
          date: "2021-12-19",
          price: 23014,
          modelYear: 2018
        },
        {
          date: "2020-08-05",
          price: 24698,
          modelYear: 2018
        },
        {
          date: "2019-12-03",
          price: 19133,
          modelYear: 2020
        },
        {
          date: "2023-08-14",
          price: 16176,
          modelYear: 2018
        },
        {
          date: "2021-01-24",
          price: 20614,
          modelYear: 2019
        },
        {
          date: "2023-01-17",
          price: 30378,
          modelYear: 2019
        },
        {
          date: "2020-10-23",
          price: 23556,
          modelYear: 2018
        },
        {
          date: "2023-06-05",
          price: 30632,
          modelYear: 2020
        },
        {
          date: "2020-12-30",
          price: 21074,
          modelYear: 2018
        },
        {
          date: "2020-11-02",
          price: 23586,
          modelYear: 2020
        },
        {
          date: "2019-04-30",
          price: 13777,
          modelYear: 2017
        },
        {
          date: "2020-04-04",
          price: 27847,
          modelYear: 2020
        },
        {
          date: "2021-10-28",
          price: 32478,
          modelYear: 2018
        },
        {
          date: "2020-06-22",
          price: 26315,
          modelYear: 2015
        },
        {
          date: "2019-09-03",
          price: 24752,
          modelYear: 2020
        },
        {
          date: "2023-04-01",
          price: 17969,
          modelYear: 2015
        },
        {
          date: "2021-04-24",
          price: 31990,
          modelYear: 2019
        },
        {
          date: "2021-11-08",
          price: 27305,
          modelYear: 2017
        },
        {
          date: "2019-03-18",
          price: 12181,
          modelYear: 2020
        },
        {
          date: "2019-05-06",
          price: 15286,
          modelYear: 2018
        },
        {
          date: "2019-12-04",
          price: 27328,
          modelYear: 2020
        },
        {
          date: "2019-04-23",
          price: 27431,
          modelYear: 2019
        },
        {
          date: "2021-10-03",
          price: 30502,
          modelYear: 2020
        },
        {
          date: "2019-10-26",
          price: 19338,
          modelYear: 2020
        },
        {
          date: "2022-03-23",
          price: 28487,
          modelYear: 2019
        },
        {
          date: "2021-06-23",
          price: 19033,
          modelYear: 2015
        },
        {
          date: "2020-10-20",
          price: 21863,
          modelYear: 2016
        },
        {
          date: "2021-11-21",
          price: 24113,
          modelYear: 2018
        },
        {
          date: "2019-03-24",
          price: 24822,
          modelYear: 2018
        },
        {
          date: "2020-03-03",
          price: 24538,
          modelYear: 2020
        },
        {
          date: "2020-11-02",
          price: 19139,
          modelYear: 2018
        },
        {
          date: "2022-07-12",
          price: 29478,
          modelYear: 2017
        },
        {
          date: "2023-10-23",
          price: 26847,
          modelYear: 2019
        },
        {
          date: "2020-05-01",
          price: 18422,
          modelYear: 2020
        },
        {
          date: "2023-10-22",
          price: 20131,
          modelYear: 2017
        },
        {
          date: "2022-03-27",
          price: 18930,
          modelYear: 2019
        },
        {
          date: "2022-07-14",
          price: 14242,
          modelYear: 2017
        },
        {
          date: "2020-11-11",
          price: 20572,
          modelYear: 2018
        },
        {
          date: "2019-10-28",
          price: 16780,
          modelYear: 2015
        },
        {
          date: "2022-02-24",
          price: 19122,
          modelYear: 2017
        },
        {
          date: "2023-04-03",
          price: 28937,
          modelYear: 2019
        },
        {
          date: "2019-08-28",
          price: 25639,
          modelYear: 2019
        },
        {
          date: "2019-12-01",
          price: 13094,
          modelYear: 2015
        },
        {
          date: "2022-08-07",
          price: 26906,
          modelYear: 2020
        },
        {
          date: "2020-02-06",
          price: 14283,
          modelYear: 2018
        },
        {
          date: "2021-12-03",
          price: 31782,
          modelYear: 2020
        },
        {
          date: "2022-12-12",
          price: 12632,
          modelYear: 2016
        },
        {
          date: "2021-10-05",
          price: 26889,
          modelYear: 2018
        },
        {
          date: "2021-05-14",
          price: 22322,
          modelYear: 2018
        },
        {
          date: "2019-08-20",
          price: 19357,
          modelYear: 2020
        },
        {
          date: "2020-07-06",
          price: 18706,
          modelYear: 2016
        },
        {
          date: "2021-10-06",
          price: 24762,
          modelYear: 2018
        },
        {
          date: "2020-11-03",
          price: 14134,
          modelYear: 2016
        },
        {
          date: "2019-12-17",
          price: 15316,
          modelYear: 2019
        },
        {
          date: "2020-04-13",
          price: 23463,
          modelYear: 2020
        },
        {
          date: "2020-03-29",
          price: 20674,
          modelYear: 2019
        },
        {
          date: "2020-12-11",
          price: 20466,
          modelYear: 2020
        },
        {
          date: "2021-08-28",
          price: 32420,
          modelYear: 2018
        },
        {
          date: "2022-04-15",
          price: 17422,
          modelYear: 2015
        },
        {
          date: "2022-08-22",
          price: 24824,
          modelYear: 2020
        },
        {
          date: "2019-01-30",
          price: 10599,
          modelYear: 2016
        },
        {
          date: "2020-05-11",
          price: 13978,
          modelYear: 2019
        },
        {
          date: "2020-05-12",
          price: 22446,
          modelYear: 2019
        },
        {
          date: "2023-11-30",
          price: 15882,
          modelYear: 2017
        },
        {
          date: "2019-10-20",
          price: 19989,
          modelYear: 2017
        },
        {
          date: "2019-03-12",
          price: 12637,
          modelYear: 2016
        },
        {
          date: "2020-02-17",
          price: 19479,
          modelYear: 2016
        },
        {
          date: "2021-03-30",
          price: 15599,
          modelYear: 2020
        },
        {
          date: "2019-03-15",
          price: 20314,
          modelYear: 2019
        },
        {
          date: "2020-08-30",
          price: 20997,
          modelYear: 2019
        },
        {
          date: "2020-03-19",
          price: 27914,
          modelYear: 2017
        },
        {
          date: "2022-12-31",
          price: 24205,
          modelYear: 2020
        },
        {
          date: "2022-04-28",
          price: 24975,
          modelYear: 2018
        },
        {
          date: "2022-01-06",
          price: 26796,
          modelYear: 2017
        },
        {
          date: "2019-01-07",
          price: 15154,
          modelYear: 2020
        },
        {
          date: "2022-02-24",
          price: 19167,
          modelYear: 2017
        },
        {
          date: "2020-07-12",
          price: 16690,
          modelYear: 2015
        },
        {
          date: "2022-03-19",
          price: 13184,
          modelYear: 2015
        },
        {
          date: "2021-06-10",
          price: 21869,
          modelYear: 2016
        },
        {
          date: "2019-12-14",
          price: 24521,
          modelYear: 2020
        },
        {
          date: "2021-02-03",
          price: 31239,
          modelYear: 2019
        },
        {
          date: "2022-05-27",
          price: 23366,
          modelYear: 2018
        },
        {
          date: "2020-05-16",
          price: 26631,
          modelYear: 2020
        },
        {
          date: "2022-05-06",
          price: 14160,
          modelYear: 2015
        },
        {
          date: "2020-05-19",
          price: 24909,
          modelYear: 2020
        },
        {
          date: "2020-11-05",
          price: 11404,
          modelYear: 2015
        },
        {
          date: "2022-05-23",
          price: 31292,
          modelYear: 2017
        },
        {
          date: "2021-05-25",
          price: 25673,
          modelYear: 2017
        },
        {
          date: "2020-05-25",
          price: 20820,
          modelYear: 2020
        },
        {
          date: "2022-11-06",
          price: 23853,
          modelYear: 2019
        },
        {
          date: "2020-04-07",
          price: 29070,
          modelYear: 2020
        },
        {
          date: "2021-06-19",
          price: 32372,
          modelYear: 2020
        },
        {
          date: "2022-12-20",
          price: 27401,
          modelYear: 2020
        },
        {
          date: "2022-09-11",
          price: 12889,
          modelYear: 2017
        },
        {
          date: "2023-11-24",
          price: 15781,
          modelYear: 2015
        },
        {
          date: "2022-08-21",
          price: 17801,
          modelYear: 2019
        },
        {
          date: "2022-11-27",
          price: 25807,
          modelYear: 2019
        },
        {
          date: "2022-12-03",
          price: 15511,
          modelYear: 2018
        },
        {
          date: "2023-09-09",
          price: 19232,
          modelYear: 2016
        },
        {
          date: "2019-10-28",
          price: 15341,
          modelYear: 2017
        },
        {
          date: "2019-03-07",
          price: 17368,
          modelYear: 2019
        },
        {
          date: "2019-06-12",
          price: 25886,
          modelYear: 2020
        },
        {
          date: "2021-03-27",
          price: 16617,
          modelYear: 2016
        },
        {
          date: "2019-09-13",
          price: 16926,
          modelYear: 2016
        },
        {
          date: "2021-04-21",
          price: 22421,
          modelYear: 2018
        },
        {
          date: "2023-11-10",
          price: 24341,
          modelYear: 2017
        },
        {
          date: "2021-12-30",
          price: 21931,
          modelYear: 2019
        },
        {
          date: "2020-02-14",
          price: 22681,
          modelYear: 2017
        },
        {
          date: "2022-08-22",
          price: 13929,
          modelYear: 2015
        },
        {
          date: "2019-10-02",
          price: 23846,
          modelYear: 2016
        },
        {
          date: "2022-02-17",
          price: 23027,
          modelYear: 2017
        },
        {
          date: "2022-07-09",
          price: 31364,
          modelYear: 2019
        },
        {
          date: "2019-08-05",
          price: 20447,
          modelYear: 2018
        },
        {
          date: "2019-01-31",
          price: 26565,
          modelYear: 2018
        },
        {
          date: "2021-08-09",
          price: 31681,
          modelYear: 2020
        },
        {
          date: "2020-05-12",
          price: 16235,
          modelYear: 2015
        },
        {
          date: "2021-12-11",
          price: 24910,
          modelYear: 2020
        },
        {
          date: "2020-03-30",
          price: 24771,
          modelYear: 2019
        },
        {
          date: "2023-08-13",
          price: 24923,
          modelYear: 2016
        },
        {
          date: "2023-09-13",
          price: 18439,
          modelYear: 2017
        },
        {
          date: "2022-01-29",
          price: 27529,
          modelYear: 2019
        },
        {
          date: "2021-07-23",
          price: 26932,
          modelYear: 2020
        },
        {
          date: "2020-07-04",
          price: 18016,
          modelYear: 2019
        },
        {
          date: "2022-08-12",
          price: 19056,
          modelYear: 2020
        },
        {
          date: "2023-02-28",
          price: 27080,
          modelYear: 2020
        },
        {
          date: "2020-05-31",
          price: 24972,
          modelYear: 2018
        },
        {
          date: "2022-10-13",
          price: 29801,
          modelYear: 2019
        },
        {
          date: "2020-09-24",
          price: 28454,
          modelYear: 2018
        },
        {
          date: "2021-10-31",
          price: 23122,
          modelYear: 2016
        },
        {
          date: "2019-04-28",
          price: 17697,
          modelYear: 2019
        },
        {
          date: "2019-07-03",
          price: 17092,
          modelYear: 2019
        },
        {
          date: "2019-08-07",
          price: 21143,
          modelYear: 2018
        },
        {
          date: "2022-04-12",
          price: 21220,
          modelYear: 2020
        },
        {
          date: "2020-03-01",
          price: 26184,
          modelYear: 2019
        },
        {
          date: "2023-03-01",
          price: 31191,
          modelYear: 2019
        },
        {
          date: "2023-04-16",
          price: 28931,
          modelYear: 2019
        },
        {
          date: "2021-01-08",
          price: 27234,
          modelYear: 2018
        },
        {
          date: "2019-07-05",
          price: 25309,
          modelYear: 2020
        },
        {
          date: "2020-02-20",
          price: 19347,
          modelYear: 2016
        },
        {
          date: "2022-01-18",
          price: 27536,
          modelYear: 2020
        },
        {
          date: "2021-02-22",
          price: 26907,
          modelYear: 2017
        },
        {
          date: "2022-01-04",
          price: 23385,
          modelYear: 2017
        },
        {
          date: "2019-10-20",
          price: 23637,
          modelYear: 2018
        },
        {
          date: "2022-12-06",
          price: 14696,
          modelYear: 2015
        },
        {
          date: "2022-03-22",
          price: 16903,
          modelYear: 2020
        },
        {
          date: "2022-10-26",
          price: 16658,
          modelYear: 2017
        },
        {
          date: "2021-03-23",
          price: 29928,
          modelYear: 2020
        },
        {
          date: "2019-06-14",
          price: 14348,
          modelYear: 2017
        },
        {
          date: "2023-04-13",
          price: 14081,
          modelYear: 2018
        },
        {
          date: "2019-09-04",
          price: 18545,
          modelYear: 2017
        },
        {
          date: "2021-06-07",
          price: 27293,
          modelYear: 2018
        },
        {
          date: "2019-10-06",
          price: 16731,
          modelYear: 2015
        },
        {
          date: "2021-02-09",
          price: 29363,
          modelYear: 2020
        },
        {
          date: "2020-10-27",
          price: 23148,
          modelYear: 2019
        },
        {
          date: "2019-05-16",
          price: 15721,
          modelYear: 2015
        },
        {
          date: "2019-05-25",
          price: 12529,
          modelYear: 2018
        },
        {
          date: "2019-05-31",
          price: 14456,
          modelYear: 2015
        },
        {
          date: "2020-05-27",
          price: 11692,
          modelYear: 2016
        },
        {
          date: "2022-04-25",
          price: 30722,
          modelYear: 2018
        },
        {
          date: "2023-04-25",
          price: 25848,
          modelYear: 2018
        },
        {
          date: "2023-02-12",
          price: 29494,
          modelYear: 2019
        },
        {
          date: "2021-03-16",
          price: 28488,
          modelYear: 2019
        },
        {
          date: "2020-11-18",
          price: 17339,
          modelYear: 2018
        },
        {
          date: "2021-11-04",
          price: 23932,
          modelYear: 2018
        },
        {
          date: "2021-10-20",
          price: 25483,
          modelYear: 2018
        },
        {
          date: "2023-07-19",
          price: 18583,
          modelYear: 2017
        },
        {
          date: "2019-05-07",
          price: 9452,
          modelYear: 2018
        },
        {
          date: "2022-11-26",
          price: 23708,
          modelYear: 2020
        },
        {
          date: "2021-12-17",
          price: 27654,
          modelYear: 2019
        },
        {
          date: "2020-03-15",
          price: 27648,
          modelYear: 2017
        },
        {
          date: "2019-02-23",
          price: 26447,
          modelYear: 2020
        },
        {
          date: "2019-08-10",
          price: 20968,
          modelYear: 2019
        },
        {
          date: "2022-09-09",
          price: 13153,
          modelYear: 2018
        },
        {
          date: "2021-05-13",
          price: 26506,
          modelYear: 2019
        },
        {
          date: "2020-04-14",
          price: 28772,
          modelYear: 2018
        },
        {
          date: "2019-11-03",
          price: 25169,
          modelYear: 2020
        },
        {
          date: "2020-07-31",
          price: 26940,
          modelYear: 2018
        },
        {
          date: "2020-02-29",
          price: 25956,
          modelYear: 2019
        },
        {
          date: "2020-07-01",
          price: 24353,
          modelYear: 2017
        },
        {
          date: "2021-06-21",
          price: 24913,
          modelYear: 2018
        },
        {
          date: "2023-01-25",
          price: 17979,
          modelYear: 2020
        },
        {
          date: "2019-07-30",
          price: 11136,
          modelYear: 2018
        },
        {
          date: "2020-08-30",
          price: 29584,
          modelYear: 2015
        },
        {
          date: "2019-11-17",
          price: 26580,
          modelYear: 2017
        },
        {
          date: "2021-12-29",
          price: 31194,
          modelYear: 2017
        },
        {
          date: "2019-03-09",
          price: 15411,
          modelYear: 2016
        },
        {
          date: "2022-02-16",
          price: 21016,
          modelYear: 2018
        },
        {
          date: "2023-11-12",
          price: 30722,
          modelYear: 2020
        },
        {
          date: "2022-05-03",
          price: 19996,
          modelYear: 2016
        },
        {
          date: "2023-08-16",
          price: 26978,
          modelYear: 2017
        },
        {
          date: "2023-11-06",
          price: 25155,
          modelYear: 2020
        },
        {
          date: "2023-05-26",
          price: 16760,
          modelYear: 2015
        },
        {
          date: "2023-03-29",
          price: 16890,
          modelYear: 2015
        },
        {
          date: "2021-12-04",
          price: 24750,
          modelYear: 2020
        },
        {
          date: "2023-08-20",
          price: 30250,
          modelYear: 2017
        },
        {
          date: "2022-06-21",
          price: 28990,
          modelYear: 2020
        },
        {
          date: "2022-06-06",
          price: 24941,
          modelYear: 2019
        },
        {
          date: "2023-05-29",
          price: 26960,
          modelYear: 2015
        },
        {
          date: "2020-02-09",
          price: 16317,
          modelYear: 2015
        },
        {
          date: "2019-04-19",
          price: 15215,
          modelYear: 2015
        },
        {
          date: "2020-12-17",
          price: 11449,
          modelYear: 2016
        },
        {
          date: "2021-10-03",
          price: 18593,
          modelYear: 2018
        },
        {
          date: "2019-12-29",
          price: 23319,
          modelYear: 2019
        },
        {
          date: "2019-09-04",
          price: 22119,
          modelYear: 2016
        },
        {
          date: "2020-09-14",
          price: 25779,
          modelYear: 2016
        },
        {
          date: "2023-01-02",
          price: 19642,
          modelYear: 2018
        },
        {
          date: "2021-02-15",
          price: 30155,
          modelYear: 2020
        },
        {
          date: "2021-05-22",
          price: 30115,
          modelYear: 2020
        },
        {
          date: "2021-12-29",
          price: 20901,
          modelYear: 2020
        },
        {
          date: "2023-08-20",
          price: 11507,
          modelYear: 2017
        },
        {
          date: "2020-03-03",
          price: 17939,
          modelYear: 2019
        },
        {
          date: "2021-02-27",
          price: 20828,
          modelYear: 2016
        },
        {
          date: "2023-08-16",
          price: 24222,
          modelYear: 2020
        },
        {
          date: "2020-02-23",
          price: 10936,
          modelYear: 2016
        },
        {
          date: "2022-09-02",
          price: 24074,
          modelYear: 2020
        },
        {
          date: "2019-03-17",
          price: 13892,
          modelYear: 2020
        },
        {
          date: "2022-10-04",
          price: 31057,
          modelYear: 2020
        },
        {
          date: "2019-01-28",
          price: 26707,
          modelYear: 2016
        },
        {
          date: "2023-08-08",
          price: 28615,
          modelYear: 2019
        },
        {
          date: "2022-09-25",
          price: 25020,
          modelYear: 2020
        },
        {
          date: "2023-03-10",
          price: 26639,
          modelYear: 2018
        },
        {
          date: "2023-06-12",
          price: 14686,
          modelYear: 2015
        },
        {
          date: "2022-01-19",
          price: 18402,
          modelYear: 2019
        },
        {
          date: "2020-03-19",
          price: 22454,
          modelYear: 2020
        },
        {
          date: "2020-07-04",
          price: 17936,
          modelYear: 2016
        },
        {
          date: "2022-12-14",
          price: 26963,
          modelYear: 2017
        },
        {
          date: "2023-01-23",
          price: 12946,
          modelYear: 2016
        },
        {
          date: "2022-07-12",
          price: 12683,
          modelYear: 2019
        },
        {
          date: "2019-12-21",
          price: 18759,
          modelYear: 2017
        },
        {
          date: "2020-09-21",
          price: 18368,
          modelYear: 2020
        },
        {
          date: "2020-05-19",
          price: 16895,
          modelYear: 2017
        },
        {
          date: "2023-08-22",
          price: 26606,
          modelYear: 2017
        },
        {
          date: "2019-10-19",
          price: 20387,
          modelYear: 2017
        },
        {
          date: "2020-10-14",
          price: 14987,
          modelYear: 2015
        },
        {
          date: "2022-03-26",
          price: 16314,
          modelYear: 2020
        },
        {
          date: "2021-12-01",
          price: 24959,
          modelYear: 2017
        },
        {
          date: "2020-12-18",
          price: 18121,
          modelYear: 2016
        },
        {
          date: "2020-07-09",
          price: 25509,
          modelYear: 2020
        },
        {
          date: "2021-08-10",
          price: 16421,
          modelYear: 2020
        },
        {
          date: "2023-03-11",
          price: 27842,
          modelYear: 2020
        },
        {
          date: "2022-01-04",
          price: 22700,
          modelYear: 2020
        },
        {
          date: "2020-05-11",
          price: 20249,
          modelYear: 2017
        },
        {
          date: "2022-09-04",
          price: 26997,
          modelYear: 2020
        },
        {
          date: "2019-08-17",
          price: 9624,
          modelYear: 2015
        },
        {
          date: "2019-05-04",
          price: 22378,
          modelYear: 2017
        },
        {
          date: "2020-12-14",
          price: 13185,
          modelYear: 2017
        },
        {
          date: "2020-12-14",
          price: 23124,
          modelYear: 2018
        },
        {
          date: "2023-05-29",
          price: 23878,
          modelYear: 2019
        },
        {
          date: "2023-12-13",
          price: 23576,
          modelYear: 2018
        },
        {
          date: "2021-03-17",
          price: 32192,
          modelYear: 2018
        }
      ]
    },
    transform: [
      {
        window: [
          {
            op: "average",
            field: "price",
            as: "Mean Price (+- stddev)"
          }
        ],
        frame: [-30, 30]
      }
    ],
    layer: [
      {
        mark: {
          type: "point",
          filled: true,
          tooltip: true,
          size: 100,
          clip: true
        },
        encoding: {
          x: {
            field: "date",
            title: "Date",
            type: "temporal",
            axis: { title: "Date" },
            scale: { domain: ["2019-01-01", "2023-12-31"] }
          },
          y: {
            field: "price",
            title: "Price",
            type: "quantitative",
            scale: { domain: [7000, 33000] },
            axis: {
              title: "Price"
              //   format: "",
              //   formatType: "shortPriceFormat"
            }
          },
          color: {
            field: "modelYear",
            type: "nominal",
            title: "Model Year"
          },
          opacity: {
            condition: { param: "modelYear", value: 1 },
            value: 0.2
          }
        },
        params: [
          {
            name: "grid",
            select: "interval",
            bind: "scales"
          },
          {
            name: "modelYear",
            select: { type: "point", fields: ["modelYear"] },
            bind: "legend"
          }
        ]
      },
      {
        name: "Polynomial Regression",
        mark: {
          type: "line",
          strokeWidth: 4
        },
        transform: [
          {
            regression: "price",
            on: "date",
            method: "poly",
            order: 3
          }
        ],
        encoding: {
          x: {
            field: "date",
            type: "temporal"
          },
          y: {
            field: "price",
            type: "quantitative"
          },
          color: {
            datum: "Polynomial Regression"
          }
        }
      },
      //   {
      //     mark: {
      //       type: "line",
      //       interpolate: "natural"
      //     },
      //     encoding: {
      //       x: {
      //         field: "date",
      //         type: "temporal",
      //         axis: { title: "Date" }
      //       },
      //       y: {
      //         field: "Mean Price (+- stddev)",
      //         type: "quantitative",
      //         scale: { domain: [10000, 26000] },
      //         axis: { title: "Mean Price (+- stddev)" }
      //       }
      //     }
      //   },
      {
        mark: { type: "errorband", extent: "stdev", opacity: 0.4 },
        encoding: {
          y: {
            field: "Mean Price (+- stddev)",
            type: "quantitative",
            title: "Price"
          },
          tooltip: null,
          color: {
            datum: "Mean Price (+- stddev)"
          }
        }
      },
      {
        mark: {
          type: "rule",
          strokeWidth: 2
        },
        encoding: {
          y: {
            field: "Mean Price (+- stddev)",
            type: "quantitative",
            aggregate: "mean"
          },
          color: {
            datum: "Mean Price (+- stddev)"
          }
        }
      }
    ]
  }
});
