const CITIES = [
    {
      "popularity": 1,
      "slug": "thailand/bangkok",
      "city": "Bangkok",
      "A2": "Krung Thep Maha Nakhon",
      "country": "Thailand",
      "lat": 13.75,
      "lng": 100.5167,
      "population": 17573000
    },
    {
      "popularity": 2,
      "slug": "argentina/buenos-aires",
      "city": "Buenos Aires",
      "A2": "Buenos Aires, Ciudad Autónoma de",
      "country": "Argentina",
      "lat": 34.5997,
      "lng": 58.3819,
      "population": 16216000
    },
    {
      "popularity": 3,
      "slug": "mexico/mexico-city",
      "city": "Mexico City",
      "A2": "Ciudad de México",
      "country": "Mexico",
      "lat": 19.4333,
      "lng": 99.1333,
      "population": 21505000
    },
    {
      "popularity": 5,
      "slug": "thailand/chiang-mai",
      "city": "Chiang Mai",
      "A2": "Chiang Mai",
      "country": "Thailand",
      "lat": 18.7889,
      "lng": 98.9833,
      "population": 132634
    },
    {
      "popularity": 6,
      "slug": "colombia/medellin",
      "city": "Medellin",
      "A2": "Antioquia",
      "country": "Colombia",
      "lat": 6.2447,
      "lng": 75.5748,
      "population": 2529403
    },
    {
      "popularity": 7,
      "slug": "romania/timisoara",
      "city": "Timisoara",
      "A2": "Timiş",
      "country": "Romania",
      "lat": 45.7597,
      "lng": 21.23,
      "population": 319279
    },
    {
      "popularity": 8,
      "slug": "malaysia/kuala-lumpur",
      "city": "Kuala Lumpur",
      "A2": "Kuala Lumpur",
      "country": "Malaysia",
      "lat": 3.1478,
      "lng": 101.6953,
      "population": 8639000
    },
    {
      "popularity": 9,
      "slug": "south-africa/cape-town",
      "city": "Cape Town",
      "A2": "Western Cape",
      "country": "South Africa",
      "lat": 33.925,
      "lng": 18.425,
      "population": 433688
    },
    {
      "popularity": 10,
      "slug": "portugal/portimao",
      "city": "Portimao",
      "A2": "Faro",
      "country": "Portugal",
      "lat": 37.1333,
      "lng": 8.5333,
      "population": 55614
    },
    {
      "popularity": 11,
      "slug": "portugal/lisbon",
      "city": "Lisbon",
      "A2": "Lisboa",
      "country": "Portugal",
      "lat": 38.708,
      "lng": 9.139,
      "population": 506654
    },
    {
      "popularity": 12,
      "slug": "thailand/ko-pha-ngan",
      "city": "Ko Pha Ngan",
      "A2": "Surat Thani",
      "country": "Thailand",
      "lat": 9.7176,
      "lng": 99.9949,
      "population": 7035
    },
    {
      "popularity": 13,
      "slug": "vietnam/da-nang",
      "city": "Da Nang",
      "A2": "Đà Nẵng",
      "country": "Vietnam",
      "lat": 16.0748,
      "lng": 108.224,
      "population": ""
    },
    {
      "popularity": 14,
      "slug": "portugal/porto",
      "city": "Porto",
      "A2": "Porto",
      "country": "Portugal",
      "lat": 41.1495,
      "lng": 8.6108,
      "population": 237591
    },
    {
      "popularity": 15,
      "slug": "nepal/kathmandu",
      "city": "Kathmandu",
      "A2": "Bāgmatī",
      "country": "Nepal",
      "lat": 27.7167,
      "lng": 85.3667,
      "population": 975453
    },
    {
      "popularity": 16,
      "slug": "vietnam/ho-chi-minh-city",
      "city": "Ho Chi Minh City",
      "A2": "Hồ Chí Minh",
      "country": "Vietnam",
      "lat": 10.8167,
      "lng": 106.6333,
      "population": 13954000
    },
    {
      "popularity": 17,
      "slug": "georgia/tbilisi",
      "city": "Tbilisi",
      "A2": "Tbilisi",
      "country": "Georgia",
      "lat": 41.7225,
      "lng": 44.7925,
      "population": 1118035
    },
    {
      "popularity": 18,
      "slug": "united-states/georgia/atlanta",
      "city": "Atlanta",
      "A2": "Georgia",
      "country": "United States",
      "lat": 33.7627,
      "lng": 84.4224,
      "population": 5449398
    },
    {
      "popularity": 19,
      "slug": "estonia/tallinn",
      "city": "Tallinn",
      "A2": "Harjumaa",
      "country": "Estonia",
      "lat": 59.4372,
      "lng": 24.745,
      "population": 438341
    },
    {
      "popularity": 20,
      "slug": "romania/brasov",
      "city": "Brasov",
      "A2": "Braşov",
      "country": "Romania",
      "lat": 45.65,
      "lng": 25.6,
      "population": 290743
    },
    {
      "popularity": 21,
      "slug": "germany/berlin",
      "city": "Berlin",
      "A2": "Berlin",
      "country": "Germany",
      "lat": 52.5167,
      "lng": 13.3833,
      "population": 3664088
    },
    {
      "popularity": 22,
      "slug": "united-states/texas/san-antonio",
      "city": "San Antonio",
      "A2": "Texas",
      "country": "United States",
      "lat": 29.4658,
      "lng": 98.5253,
      "population": 2049293
    },
    {
      "popularity": 23,
      "slug": "kenya/nairobi",
      "city": "Nairobi",
      "A2": "Nairobi City",
      "country": "Kenya",
      "lat": 1.2864,
      "lng": 36.8172,
      "population": 5545000
    },
    {
      "popularity": 24,
      "slug": "poland/warsaw",
      "city": "Warsaw",
      "A2": "Mazowieckie",
      "country": "Poland",
      "lat": 52.23,
      "lng": 21.0111,
      "population": 1790658
    },
    {
      "popularity": 25,
      "slug": "philippines/davao",
      "city": "Davao",
      "A2": "Davao",
      "country": "Philippines",
      "lat": 7.0667,
      "lng": 125.6,
      "population": 1776949
    },
    {
      "popularity": 26,
      "slug": "bulgaria/sofia",
      "city": "Sofia",
      "A2": "Sofia Grad",
      "country": "Bulgaria",
      "lat": 42.6979,
      "lng": 23.3217,
      "population": 1277411
    },
    {
      "popularity": 27,
      "slug": "indonesia/ubud",
      "city": "Ubud",
      "A2": "Bali",
      "country": "Indonesia",
      "lat": 8.5063,
      "lng": 115.2603,
      "population": 10873
    },
    {
      "popularity": 28,
      "slug": "brazil/rio-de-janeiro",
      "city": "Rio De Janeiro",
      "A2": "Rio de Janeiro",
      "country": "Brazil",
      "lat": 22.9083,
      "lng": 43.1964,
      "population": 12486000
    },
    {
      "popularity": 29,
      "slug": "lebanon/beirut",
      "city": "Beirut",
      "A2": "Beyrouth",
      "country": "Lebanon",
      "lat": 33.8869,
      "lng": 35.5131,
      "population": 361366
    },
    {
      "popularity": 30,
      "slug": "bulgaria/varna",
      "city": "Varna",
      "A2": "Varna",
      "country": "Bulgaria",
      "lat": 43.2114,
      "lng": 27.9111,
      "population": 347924
    },
    {
      "popularity": 31,
      "slug": "philippines/manila",
      "city": "Manila",
      "A2": "Manila",
      "country": "Philippines",
      "lat": 14.6,
      "lng": 120.9833,
      "population": 23971000
    },
    {
      "popularity": 32,
      "slug": "serbia/belgrade",
      "city": "Belgrade",
      "A2": "Beograd",
      "country": "Serbia",
      "lat": 44.8167,
      "lng": 20.4667,
      "population": 1378682
    },
    {
      "popularity": 33,
      "slug": "india/delhi",
      "city": "Delhi",
      "A2": "Delhi",
      "country": "India",
      "lat": 28.6667,
      "lng": 77.2167,
      "population": 31870000
    },
    {
      "popularity": 34,
      "slug": "peru/lima",
      "city": "Lima",
      "A2": "Lima",
      "country": "Peru",
      "lat": 12.06,
      "lng": 77.0375,
      "population": 8992000
    },
    {
      "popularity": 35,
      "slug": "germany/dresden",
      "city": "Dresden",
      "A2": "Saxony",
      "country": "Germany",
      "lat": 51.05,
      "lng": 13.74,
      "population": 554907
    },
    {
      "popularity": 36,
      "slug": "bulgaria/bansko",
      "city": "Bansko",
      "A2": "Blagoevgrad",
      "country": "Bulgaria",
      "lat": 41.8385,
      "lng": 23.4888,
      "population": 9032
    },
    {
      "popularity": 37,
      "slug": "india/hyderabad",
      "city": "Hyderabad",
      "A2": "Telangana",
      "country": "India",
      "lat": 17.3617,
      "lng": 78.4747,
      "population": 9840000
    },
    {
      "popularity": 38,
      "slug": "poland/gdansk",
      "city": "Gdansk",
      "A2": "Pomorskie",
      "country": "Poland",
      "lat": 54.3667,
      "lng": 18.6333,
      "population": 464254
    },
    {
      "popularity": 39,
      "slug": "ecuador/cuenca",
      "city": "Cuenca",
      "A2": "Azuay",
      "country": "Ecuador",
      "lat": 2.8974,
      "lng": 79.0045,
      "population": 329928
    },
    {
      "popularity": 40,
      "slug": "mexico/guadalajara",
      "city": "Guadalajara",
      "A2": "Jalisco",
      "country": "Mexico",
      "lat": 20.6767,
      "lng": 103.3475,
      "population": 5437000
    },
    {
      "popularity": 41,
      "slug": "turkey/istanbul",
      "city": "Istanbul",
      "A2": "İstanbul",
      "country": "Turkey",
      "lat": 41.01,
      "lng": 28.9603,
      "population": 15311000
    },
    {
      "popularity": 42,
      "slug": "poland/wroclaw",
      "city": "Wroclaw",
      "A2": "Dolnośląskie",
      "country": "Poland",
      "lat": 51.11,
      "lng": 17.0325,
      "population": 638586
    },
    {
      "popularity": 43,
      "slug": "bulgaria/plovdiv",
      "city": "Plovdiv",
      "A2": "Plovdiv",
      "country": "Bulgaria",
      "lat": 42.1421,
      "lng": 24.7415,
      "population": 366511
    },
    {
      "popularity": 44,
      "slug": "cambodia/siem-reap",
      "city": "Siem Reap",
      "A2": "Siem Reap",
      "country": "Cambodia",
      "lat": 13.3622,
      "lng": 103.8597,
      "population": 147866
    },
    {
      "popularity": 45,
      "slug": "vietnam/hoi-an",
      "city": "Hoi An",
      "A2": "Quảng Nam",
      "country": "Vietnam",
      "lat": 15.8777,
      "lng": 108.3327,
      "population": 121716
    },
    {
      "popularity": 46,
      "slug": "south-korea/seoul",
      "city": "Seoul",
      "A2": "Seoul",
      "country": "South Korea",
      "lat": 37.56,
      "lng": 126.99,
      "population": 22394000
    },
    {
      "popularity": 47,
      "slug": "romania/ploiesti",
      "city": "Ploiesti",
      "A2": "Prahova",
      "country": "Romania",
      "lat": 44.9386,
      "lng": 26.0225,
      "population": 209945
    },
    {
      "popularity": 48,
      "slug": "poland/krakow",
      "city": "Krakow",
      "A2": "Małopolskie",
      "country": "Poland",
      "lat": 50.0614,
      "lng": 19.9372,
      "population": 766739
    },
    {
      "popularity": 49,
      "slug": "ecuador/quito",
      "city": "Quito",
      "A2": "Pichincha",
      "country": "Ecuador",
      "lat": 0.22,
      "lng": 78.5125,
      "population": 2011388
    },
    {
      "popularity": 50,
      "slug": "germany/munich",
      "city": "Munich",
      "A2": "Bavaria",
      "country": "Germany",
      "lat": 48.1375,
      "lng": 11.575,
      "population": 1488202
    },
    {
      "popularity": 51,
      "slug": "croatia/zagreb",
      "city": "Zagreb",
      "A2": "Zagreb, Grad",
      "country": "Croatia",
      "lat": 45.8131,
      "lng": 15.9772,
      "population": 790017
    },
    {
      "popularity": 52,
      "slug": "romania/constanta",
      "city": "Constanta",
      "A2": "Constanţa",
      "country": "Romania",
      "lat": 44.1733,
      "lng": 28.6383,
      "population": 283872
    },
    {
      "popularity": 53,
      "slug": "colombia/puerto-escondido",
      "city": "Puerto Escondido",
      "A2": "Córdoba",
      "country": "Colombia",
      "lat": 9.0192,
      "lng": 76.2614,
      "population": 32745
    },
    {
      "popularity": 54,
      "slug": "mauritius/port-louis",
      "city": "Port Louis",
      "A2": "Port Louis",
      "country": "Mauritius",
      "lat": 20.1667,
      "lng": 57.5,
      "population": 149194
    },
    {
      "popularity": 55,
      "slug": "colombia/tenerife",
      "city": "Tenerife",
      "A2": "Magdalena",
      "country": "Colombia",
      "lat": 9.8989,
      "lng": 74.8589,
      "population": 14320
    },
    {
      "popularity": 56,
      "slug": "croatia/zadar",
      "city": "Zadar",
      "A2": "Zadarska Županija",
      "country": "Croatia",
      "lat": 44.1167,
      "lng": 15.2167,
      "population": 75082
    },
    {
      "popularity": 57,
      "slug": "hungary/budapest",
      "city": "Budapest",
      "A2": "Budapest",
      "country": "Hungary",
      "lat": 47.4983,
      "lng": 19.0408,
      "population": 1723836
    },
    {
      "popularity": 58,
      "slug": "vietnam/phu-quoc",
      "city": "Phu Quoc",
      "A2": "Kiến Giang",
      "country": "Vietnam",
      "lat": 10.2289,
      "lng": 103.9572,
      "population": 70000
    },
    {
      "popularity": 59,
      "slug": "slovenia/ljubljana",
      "city": "Ljubljana",
      "A2": "Ljubljana",
      "country": "Slovenia",
      "lat": 46.05,
      "lng": 14.5167,
      "population": 286745
    },
    {
      "popularity": 60,
      "slug": "united-states/texas/dallas",
      "city": "Dallas",
      "A2": "Texas",
      "country": "United States",
      "lat": 32.7936,
      "lng": 96.7662,
      "population": 5743938
    },
    {
      "popularity": 61,
      "slug": "cuba/havana",
      "city": "Havana",
      "A2": "La Habana",
      "country": "Cuba",
      "lat": 23.1367,
      "lng": 82.3589,
      "population": 2141652
    },
    {
      "popularity": 62,
      "slug": "australia/perth",
      "city": "Perth",
      "A2": "Western Australia",
      "country": "Australia",
      "lat": 31.9522,
      "lng": 115.8589,
      "population": 2039200
    },
    {
      "popularity": 63,
      "slug": "turkey/antalya",
      "city": "Antalya",
      "A2": "Antalya",
      "country": "Turkey",
      "lat": 36.9081,
      "lng": 30.6956,
      "population": 71833
    },
    {
      "popularity": 64,
      "slug": "nepal/pokhara",
      "city": "Pokhara",
      "A2": "Gandakī",
      "country": "Nepal",
      "lat": 28.2097,
      "lng": 83.9853,
      "population": 353841
    },
    {
      "popularity": 65,
      "slug": "portugal/braga",
      "city": "Braga",
      "A2": "Braga",
      "country": "Portugal",
      "lat": 41.5503,
      "lng": 8.42,
      "population": 181494
    },
    {
      "popularity": 66,
      "slug": "indonesia/jakarta",
      "city": "Jakarta",
      "A2": "Jakarta",
      "country": "Indonesia",
      "lat": 6.2146,
      "lng": 106.8451,
      "population": 35362000
    },
    {
      "popularity": 67,
      "slug": "india/agra",
      "city": "Agra",
      "A2": "Uttar Pradesh",
      "country": "India",
      "lat": 27.1724,
      "lng": 78.0131,
      "population": 1592000
    },
    {
      "popularity": 68,
      "slug": "mexico/cancun",
      "city": "Cancun",
      "A2": "Quintana Roo",
      "country": "Mexico",
      "lat": 21.1606,
      "lng": 86.8475,
      "population": 888797
    },
    {
      "popularity": 69,
      "slug": "united-states/texas/austin",
      "city": "Austin",
      "A2": "Texas",
      "country": "United States",
      "lat": 30.3004,
      "lng": 97.7522,
      "population": 1687311
    },
    {
      "popularity": 70,
      "slug": "south-africa/johannesburg",
      "city": "Johannesburg",
      "A2": "Gauteng",
      "country": "South Africa",
      "lat": 26.2044,
      "lng": 28.0416,
      "population": 4434827
    },
    {
      "popularity": 71,
      "slug": "morocco/taghazout",
      "city": "Taghazout",
      "A2": "Souss Massa",
      "country": "Morocco",
      "lat": 30.5456,
      "lng": 9.7097,
      "population": 5260
    },
    {
      "popularity": 72,
      "slug": "argentina/cordoba",
      "city": "Cordoba",
      "A2": "Córdoba",
      "country": "Argentina",
      "lat": 31.4167,
      "lng": 64.1833,
      "population": 1329604
    },
    {
      "popularity": 73,
      "slug": "macedonia/skopje",
      "city": "Skopje",
      "A2": "Skopje",
      "country": "Macedonia",
      "lat": 41.9833,
      "lng": 21.4333,
      "population": 640000
    },
    {
      "popularity": 74,
      "slug": "brazil/sao-paulo",
      "city": "Sao Paulo",
      "A2": "São Paulo",
      "country": "Brazil",
      "lat": 23.5504,
      "lng": 46.6339,
      "population": 22495000
    },
    {
      "popularity": 75,
      "slug": "serbia/novi-sad",
      "city": "Novi Sad",
      "A2": "Novi Sad",
      "country": "Serbia",
      "lat": 45.2644,
      "lng": 19.8317,
      "population": 380000
    },
    {
      "popularity": 76,
      "slug": "cambodia/phnom-penh",
      "city": "Phnom Penh",
      "A2": "Phnom Penh",
      "country": "Cambodia",
      "lat": 11.5696,
      "lng": 104.921,
      "population": 2129371
    },
    {
      "popularity": 77,
      "slug": "germany/leipzig",
      "city": "Leipzig",
      "A2": "Saxony",
      "country": "Germany",
      "lat": 51.3333,
      "lng": 12.3833,
      "population": 597215
    },
    {
      "popularity": 78,
      "slug": "romania/bucharest",
      "city": "Bucharest",
      "A2": "Bucureşti",
      "country": "Romania",
      "lat": 44.4,
      "lng": 26.0833,
      "population": 1883425
    },
    {
      "popularity": 79,
      "slug": "serbia/nis",
      "city": "Nis",
      "A2": "Niš",
      "country": "Serbia",
      "lat": 43.3192,
      "lng": 21.8961,
      "population": 183164
    },
    {
      "popularity": 80,
      "slug": "thailand/phuket",
      "city": "Phuket",
      "A2": "Phuket",
      "country": "Thailand",
      "lat": 7.8881,
      "lng": 98.3975,
      "population": 77610
    },
    {
      "popularity": 81,
      "slug": "united-states/florida/tampa",
      "city": "Tampa",
      "A2": "Florida",
      "country": "United States",
      "lat": 27.9942,
      "lng": 82.4451,
      "population": 2908063
    },
    {
      "popularity": 82,
      "slug": "czechia/brno",
      "city": "Brno",
      "A2": "Jihomoravský Kraj",
      "country": "Czechia",
      "lat": 49.1953,
      "lng": 16.6083,
      "population": 382405
    },
    {
      "popularity": 83,
      "slug": "mexico/oaxaca",
      "city": "Oaxaca",
      "A2": "Oaxaca",
      "country": "Mexico",
      "lat": 17.0606,
      "lng": 96.7253,
      "population": 300050
    },
    {
      "popularity": 84,
      "slug": "south-korea/busan",
      "city": "Busan",
      "A2": "Busan",
      "country": "South Korea",
      "lat": 35.1,
      "lng": 129.0403,
      "population": 3453198
    },
    {
      "popularity": 85,
      "slug": "poland/poznan",
      "city": "Poznan",
      "A2": "Wielkopolskie",
      "country": "Poland",
      "lat": 52.4083,
      "lng": 16.9336,
      "population": 533830
    },
    {
      "popularity": 86,
      "slug": "poland/szczecin",
      "city": "Szczecin",
      "A2": "Zachodniopomorskie",
      "country": "Poland",
      "lat": 53.4247,
      "lng": 14.5553,
      "population": 403833
    },
    {
      "popularity": 87,
      "slug": "united-states/utah/salt-lake-city",
      "city": "Salt Lake City",
      "A2": "Utah",
      "country": "United States",
      "lat": 40.7777,
      "lng": 111.9306,
      "population": 1098526
    },
    {
      "popularity": 88,
      "slug": "sri-lanka/colombo",
      "city": "Colombo",
      "A2": "Western",
      "country": "Sri Lanka",
      "lat": 6.9167,
      "lng": 79.8333,
      "population": 752993
    },
    {
      "popularity": 89,
      "slug": "brazil/florianopolis",
      "city": "Florianopolis",
      "A2": "Santa Catarina",
      "country": "Brazil",
      "lat": 27.5933,
      "lng": 48.553,
      "population": 477798
    },
    {
      "popularity": 90,
      "slug": "mexico/playa-del-carmen",
      "city": "Playa Del Carmen",
      "A2": "Quintana Roo",
      "country": "Mexico",
      "lat": 20.6275,
      "lng": 87.0811,
      "population": 304942
    },
    {
      "popularity": 91,
      "slug": "taiwan/kaohsiung",
      "city": "Kaohsiung",
      "A2": "Kaohsiung",
      "country": "Taiwan",
      "lat": 22.6167,
      "lng": 120.3,
      "population": 2773533
    },
    {
      "popularity": 92,
      "slug": "spain/barcelona",
      "city": "Barcelona",
      "A2": "Catalonia",
      "country": "Spain",
      "lat": 41.3825,
      "lng": 2.1769,
      "population": 4735000
    },
    {
      "popularity": 93,
      "slug": "thailand/krabi",
      "city": "Krabi",
      "A2": "Krabi",
      "country": "Thailand",
      "lat": 8.0592,
      "lng": 98.9189,
      "population": 30499
    },
    {
      "popularity": 94,
      "slug": "united-states/minnesota/minneapolis",
      "city": "Minneapolis",
      "A2": "Minnesota",
      "country": "United States",
      "lat": 44.9635,
      "lng": 93.2678,
      "population": 2977172
    },
    {
      "popularity": 95,
      "slug": "turkey/alanya",
      "city": "Alanya",
      "A2": "Antalya",
      "country": "Turkey",
      "lat": 36.5436,
      "lng": 31.9997,
      "population": 12436
    },
    {
      "popularity": 96,
      "slug": "united-states/new-york/new-york-city",
      "city": "New York City",
      "A2": "New York",
      "country": "United States",
      "lat": 40.6943,
      "lng": 73.9249,
      "population": 18713220
    },
    {
      "popularity": 97,
      "slug": "vietnam/hanoi",
      "city": "Hanoi",
      "A2": "Hà Nội",
      "country": "Vietnam",
      "lat": 21.0245,
      "lng": 105.8412,
      "population": 8246600
    },
    {
      "popularity": 98,
      "slug": "vietnam/nha-trang",
      "city": "Nha Trang",
      "A2": "Khánh Hòa",
      "country": "Vietnam",
      "lat": 12.2495,
      "lng": 109.1908,
      "population": 392279
    },
    {
      "popularity": 99,
      "slug": "mexico/queretaro",
      "city": "Queretaro",
      "A2": "Querétaro",
      "country": "Mexico",
      "lat": 20.5875,
      "lng": 100.3928,
      "population": 801940
    },
    {
      "popularity": 100,
      "slug": "sri-lanka/galle",
      "city": "Galle",
      "A2": "Southern",
      "country": "Sri Lanka",
      "lat": 6.0395,
      "lng": 80.2194,
      "population": 93118
    },
    {
      "popularity": 101,
      "slug": "china/guangzhou",
      "city": "Guangzhou",
      "A2": "Guangdong",
      "country": "China",
      "lat": 23.1288,
      "lng": 113.259,
      "population": 21489000
    },
    {
      "popularity": 102,
      "slug": "suriname/paramaribo",
      "city": "Paramaribo",
      "A2": "Paramaribo",
      "country": "Suriname",
      "lat": 5.8667,
      "lng": 55.1667,
      "population": 223757
    },
    {
      "popularity": 103,
      "slug": "united-states/arizona/tucson",
      "city": "Tucson",
      "A2": "Arizona",
      "country": "United States",
      "lat": 32.1545,
      "lng": 110.8782,
      "population": 888486
    },
    {
      "popularity": 104,
      "slug": "philippines/general-santos",
      "city": "General Santos",
      "A2": "General Santos",
      "country": "Philippines",
      "lat": 6.1167,
      "lng": 125.1667,
      "population": 697315
    },
    {
      "popularity": 105,
      "slug": "taiwan/tainan",
      "city": "Tainan",
      "A2": "Tainan",
      "country": "Taiwan",
      "lat": 22.9833,
      "lng": 120.1833,
      "population": 1883831
    },
    {
      "popularity": 106,
      "slug": "malaysia/kota-kinabalu",
      "city": "Kota Kinabalu",
      "A2": "Sabah",
      "country": "Malaysia",
      "lat": 5.975,
      "lng": 116.0725,
      "population": 452058
    },
    {
      "popularity": 107,
      "slug": "croatia/dubrovnik",
      "city": "Dubrovnik",
      "A2": "Dubrovačko Neretvanska Županija",
      "country": "Croatia",
      "lat": 42.6403,
      "lng": 18.1083,
      "population": 42615
    },
    {
      "popularity": 108,
      "slug": "morocco/marrakech",
      "city": "Marrakech",
      "A2": "Marrakech Safi",
      "country": "Morocco",
      "lat": 31.6295,
      "lng": 7.9811,
      "population": 928850
    },
    {
      "popularity": 109,
      "slug": "slovakia/bratislava",
      "city": "Bratislava",
      "A2": "Bratislavský",
      "country": "Slovakia",
      "lat": 48.1447,
      "lng": 17.1128,
      "population": 475503
    },
    {
      "popularity": 110,
      "slug": "united-kingdom/london",
      "city": "London",
      "A2": "London, City of",
      "country": "United Kingdom",
      "lat": 51.5072,
      "lng": 0.1275,
      "population": 11120000
    },
    {
      "popularity": 111,
      "slug": "australia/sydney",
      "city": "Sydney",
      "A2": "New South Wales",
      "country": "Australia",
      "lat": 33.865,
      "lng": 151.2094,
      "population": 4840600
    },
    {
      "popularity": 112,
      "slug": "thailand/nakhon-ratchasima",
      "city": "Nakhon Ratchasima",
      "A2": "Nakhon Ratchasima",
      "country": "Thailand",
      "lat": 14.9736,
      "lng": 102.0831,
      "population": 134440
    },
    {
      "popularity": 113,
      "slug": "portugal/aveiro",
      "city": "Aveiro",
      "A2": "Aveiro",
      "country": "Portugal",
      "lat": 40.6389,
      "lng": 8.6553,
      "population": 78450
    },
    {
      "popularity": 114,
      "slug": "canada/toronto",
      "city": "Toronto",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 43.7417,
      "lng": 79.3733,
      "population": 5429524
    },
    {
      "popularity": 115,
      "slug": "brazil/porto-alegre",
      "city": "Porto Alegre",
      "A2": "Rio Grande do Sul",
      "country": "Brazil",
      "lat": 30.0328,
      "lng": 51.23,
      "population": 1484941
    },
    {
      "popularity": 116,
      "slug": "greece/athens",
      "city": "Athens",
      "A2": "Attikí",
      "country": "Greece",
      "lat": 37.9842,
      "lng": 23.7281,
      "population": 664046
    },
    {
      "popularity": 117,
      "slug": "united-states/texas/beaumont",
      "city": "Beaumont",
      "A2": "Texas",
      "country": "United States",
      "lat": 30.0849,
      "lng": 94.1451,
      "population": 146091
    },
    {
      "popularity": 118,
      "slug": "united-states/arkansas/fayetteville",
      "city": "Fayetteville",
      "A2": "Arkansas",
      "country": "United States",
      "lat": 36.0713,
      "lng": 94.166,
      "population": 351246
    },
    {
      "popularity": 119,
      "slug": "south-africa/port-elizabeth",
      "city": "Port Elizabeth",
      "A2": "Eastern Cape",
      "country": "South Africa",
      "lat": 33.9581,
      "lng": 25.6,
      "population": 312392
    },
    {
      "popularity": 120,
      "slug": "singapore/singapore",
      "city": "Singapore",
      "A2": "Central Singapore",
      "country": "Singapore",
      "lat": 1.3,
      "lng": 103.8,
      "population": 5271000
    },
    {
      "popularity": 121,
      "slug": "australia/melbourne",
      "city": "Melbourne",
      "A2": "Victoria",
      "country": "Australia",
      "lat": 37.8136,
      "lng": 144.9631,
      "population": 4529500
    },
    {
      "popularity": 122,
      "slug": "armenia/yerevan",
      "city": "Yerevan",
      "A2": "Yerevan",
      "country": "Armenia",
      "lat": 40.1814,
      "lng": 44.5144,
      "population": 1075800
    },
    {
      "popularity": 123,
      "slug": "taiwan/taipei",
      "city": "Taipei",
      "A2": "Taipei",
      "country": "Taiwan",
      "lat": 25.0478,
      "lng": 121.5319,
      "population": 2684567
    },
    {
      "popularity": 124,
      "slug": "chile/santiago",
      "city": "Santiago",
      "A2": "Región Metropolitana",
      "country": "Chile",
      "lat": 33.45,
      "lng": 70.6667,
      "population": 7026000
    },
    {
      "popularity": 125,
      "slug": "sweden/stockholm",
      "city": "Stockholm",
      "A2": "Stockholm",
      "country": "Sweden",
      "lat": 59.3294,
      "lng": 18.0686,
      "population": 975819
    },
    {
      "popularity": 126,
      "slug": "malaysia/kuching",
      "city": "Kuching",
      "A2": "Sarawak",
      "country": "Malaysia",
      "lat": 1.5397,
      "lng": 110.3542,
      "population": 325132
    },
    {
      "popularity": 127,
      "slug": "new-zealand/auckland",
      "city": "Auckland",
      "A2": "Auckland",
      "country": "New Zealand",
      "lat": 36.85,
      "lng": 174.7833,
      "population": 1346091
    },
    {
      "popularity": 128,
      "slug": "latvia/riga",
      "city": "Riga",
      "A2": "Rīga",
      "country": "Latvia",
      "lat": 56.9475,
      "lng": 24.1069,
      "population": 614618
    },
    {
      "popularity": 129,
      "slug": "poland/lodz",
      "city": "Lodz",
      "A2": "Łódzkie",
      "country": "Poland",
      "lat": 51.7769,
      "lng": 19.4547,
      "population": 690422
    },
    {
      "popularity": 130,
      "slug": "indonesia/bandung",
      "city": "Bandung",
      "A2": "Jawa Barat",
      "country": "Indonesia",
      "lat": 6.95,
      "lng": 107.5667,
      "population": 2875673
    },
    {
      "popularity": 131,
      "slug": "zimbabwe/harare",
      "city": "Harare",
      "A2": "Harare",
      "country": "Zimbabwe",
      "lat": 17.8292,
      "lng": 31.0522,
      "population": 2150000
    },
    {
      "popularity": 132,
      "slug": "hong-kong/hong-kong",
      "city": "Hong Kong",
      "A2": 0,
      "country": "Hong Kong",
      "lat": 22.3069,
      "lng": 114.1831,
      "population": 7398000
    },
    {
      "popularity": 133,
      "slug": "croatia/rijeka",
      "city": "Rijeka",
      "A2": "Primorsko Goranska Županija",
      "country": "Croatia",
      "lat": 45.3272,
      "lng": 14.4411,
      "population": 128624
    },
    {
      "popularity": 134,
      "slug": "philippines/goa",
      "city": "Goa",
      "A2": "Camarines Sur",
      "country": "Philippines",
      "lat": 13.7,
      "lng": 123.5,
      "population": 71368
    },
    {
      "popularity": 135,
      "slug": "india/lucknow",
      "city": "Lucknow",
      "A2": "Uttar Pradesh",
      "country": "India",
      "lat": 26.847,
      "lng": 80.947,
      "population": 3382000
    },
    {
      "popularity": 136,
      "slug": "united-states/kentucky/louisville",
      "city": "Louisville",
      "A2": "Kentucky",
      "country": "United States",
      "lat": 38.1663,
      "lng": 85.6485,
      "population": 1005654
    },
    {
      "popularity": 137,
      "slug": "portugal/coimbra",
      "city": "Coimbra",
      "A2": "Coimbra",
      "country": "Portugal",
      "lat": 40.2111,
      "lng": 8.4289,
      "population": 143396
    },
    {
      "popularity": 138,
      "slug": "united-states/texas/brownsville",
      "city": "Brownsville",
      "A2": "Texas",
      "country": "United States",
      "lat": 25.998,
      "lng": 97.4565,
      "population": 227239
    },
    {
      "popularity": 139,
      "slug": "united-states/texas/lubbock",
      "city": "Lubbock",
      "A2": "Texas",
      "country": "United States",
      "lat": 33.5659,
      "lng": 101.8878,
      "population": 267648
    },
    {
      "popularity": 140,
      "slug": "mexico/merida",
      "city": "Merida",
      "A2": "Yucatán",
      "country": "Mexico",
      "lat": 20.97,
      "lng": 89.62,
      "population": 892363
    },
    {
      "popularity": 141,
      "slug": "portugal/faro",
      "city": "Faro",
      "A2": "Faro",
      "country": "Portugal",
      "lat": 37.0161,
      "lng": 7.935,
      "population": 64560
    },
    {
      "popularity": 142,
      "slug": "germany/hamburg",
      "city": "Hamburg",
      "A2": "Hamburg",
      "country": "Germany",
      "lat": 53.55,
      "lng": 10,
      "population": 1852478
    },
    {
      "popularity": 143,
      "slug": "bosnia-and-herzegovina/mostar",
      "city": "Mostar",
      "A2": "Bosnia and Herzegovina, Federation of",
      "country": "Bosnia And Herzegovina",
      "lat": 43.3494,
      "lng": 17.8125,
      "population": 163067
    },
    {
      "popularity": 144,
      "slug": "south-africa/pretoria",
      "city": "Pretoria",
      "A2": "Gauteng",
      "country": "South Africa",
      "lat": 25.7464,
      "lng": 28.1881,
      "population": 741651
    },
    {
      "popularity": 145,
      "slug": "canada/winnipeg",
      "city": "Winnipeg",
      "A2": "Manitoba",
      "country": "Canada",
      "lat": 49.8844,
      "lng": 97.1464,
      "population": 705244
    },
    {
      "popularity": 146,
      "slug": "india/jaipur",
      "city": "Jaipur",
      "A2": "Rājasthān",
      "country": "India",
      "lat": 26.9167,
      "lng": 75.8667,
      "population": 3073350
    },
    {
      "popularity": 147,
      "slug": "united-states/hawaii/honolulu",
      "city": "Honolulu",
      "A2": "Hawaii",
      "country": "United States",
      "lat": 21.3294,
      "lng": 157.846,
      "population": 820987
    },
    {
      "popularity": 148,
      "slug": "united-states/georgia/macon",
      "city": "Macon",
      "A2": "Georgia",
      "country": "United States",
      "lat": 32.8065,
      "lng": 83.6974,
      "population": 153159
    },
    {
      "popularity": 149,
      "slug": "canada/vancouver",
      "city": "Vancouver",
      "A2": "British Columbia",
      "country": "Canada",
      "lat": 49.25,
      "lng": 123.1,
      "population": 2264823
    },
    {
      "popularity": 150,
      "slug": "poland/lublin",
      "city": "Lublin",
      "A2": "Lubelskie",
      "country": "Poland",
      "lat": 51.2333,
      "lng": 22.5667,
      "population": 339850
    },
    {
      "popularity": 151,
      "slug": "croatia/split",
      "city": "Split",
      "A2": "Splitsko Dalmatinska Županija",
      "country": "Croatia",
      "lat": 43.51,
      "lng": 16.45,
      "population": 178102
    },
    {
      "popularity": 152,
      "slug": "sri-lanka/kandy",
      "city": "Kandy",
      "A2": "Central",
      "country": "Sri Lanka",
      "lat": 7.297,
      "lng": 80.6385,
      "population": 161000
    },
    {
      "popularity": 153,
      "slug": "indonesia/malang",
      "city": "Malang",
      "A2": "Jawa Timur",
      "country": "Indonesia",
      "lat": 7.98,
      "lng": 112.62,
      "population": 866118
    },
    {
      "popularity": 154,
      "slug": "united-states/ohio/columbus",
      "city": "Columbus",
      "A2": "Ohio",
      "country": "United States",
      "lat": 39.9862,
      "lng": 82.985,
      "population": 1562009
    },
    {
      "popularity": 155,
      "slug": "colombia/la-union",
      "city": "La Union",
      "A2": "Valle del Cauca",
      "country": "Colombia",
      "lat": 4.5331,
      "lng": 76.1006,
      "population": 40339
    },
    {
      "popularity": 156,
      "slug": "united-states/texas/conroe",
      "city": "Conroe",
      "A2": "Texas",
      "country": "United States",
      "lat": 30.3239,
      "lng": 95.4825,
      "population": 91079
    },
    {
      "popularity": 157,
      "slug": "kazakhstan/almaty",
      "city": "Almaty",
      "A2": "Almaty",
      "country": "Kazakhstan",
      "lat": 43.25,
      "lng": 76.9,
      "population": 1916822
    },
    {
      "popularity": 158,
      "slug": "colombia/cartagena",
      "city": "Cartagena",
      "A2": "Bolívar",
      "country": "Colombia",
      "lat": 10.4236,
      "lng": 75.5253,
      "population": 1036412
    },
    {
      "popularity": 159,
      "slug": "japan/kochi",
      "city": "Kochi",
      "A2": "Kōchi",
      "country": "Japan",
      "lat": 33.5589,
      "lng": 133.5314,
      "population": 325560
    },
    {
      "popularity": 160,
      "slug": "united-states/florida/gainesville",
      "city": "Gainesville",
      "A2": "Florida",
      "country": "United States",
      "lat": 29.6804,
      "lng": 82.3458,
      "population": 202335
    },
    {
      "popularity": 161,
      "slug": "turkey/adana",
      "city": "Adana",
      "A2": "Adana",
      "country": "Turkey",
      "lat": 37,
      "lng": 35.325,
      "population": 289919
    },
    {
      "popularity": 162,
      "slug": "new-zealand/christchurch",
      "city": "Christchurch",
      "A2": "Canterbury",
      "country": "New Zealand",
      "lat": 43.5309,
      "lng": 172.6365,
      "population": 383200
    },
    {
      "popularity": 163,
      "slug": "canada/grande-prairie",
      "city": "Grande Prairie",
      "A2": "Alberta",
      "country": "Canada",
      "lat": 55.1708,
      "lng": 118.7947,
      "population": 63166
    },
    {
      "popularity": 164,
      "slug": "united-states/virginia/roanoke",
      "city": "Roanoke",
      "A2": "Virginia",
      "country": "United States",
      "lat": 37.2785,
      "lng": 79.958,
      "population": 214674
    },
    {
      "popularity": 165,
      "slug": "albania/tirana",
      "city": "Tirana",
      "A2": "Tiranë",
      "country": "Albania",
      "lat": 41.33,
      "lng": 19.82,
      "population": 418495
    },
    {
      "popularity": 166,
      "slug": "uzbekistan/tashkent",
      "city": "Tashkent",
      "A2": "Toshkent",
      "country": "Uzbekistan",
      "lat": 41.3,
      "lng": 69.2667,
      "population": 2497900
    },
    {
      "popularity": 167,
      "slug": "denmark/copenhagen",
      "city": "Copenhagen",
      "A2": "Hovedstaden",
      "country": "Denmark",
      "lat": 55.6805,
      "lng": 12.5615,
      "population": 1085000
    },
    {
      "popularity": 168,
      "slug": "nigeria/lagos",
      "city": "Lagos",
      "A2": "Lagos",
      "country": "Nigeria",
      "lat": 6.45,
      "lng": 3.4,
      "population": 15487000
    },
    {
      "popularity": 169,
      "slug": "malaysia/johor-bahru",
      "city": "Johor Bahru",
      "A2": "Johor",
      "country": "Malaysia",
      "lat": 1.4556,
      "lng": 103.7611,
      "population": 497097
    },
    {
      "popularity": 170,
      "slug": "sri-lanka/matara",
      "city": "Matara",
      "A2": "Southern",
      "country": "Sri Lanka",
      "lat": 5.95,
      "lng": 80.5333,
      "population": 68244
    },
    {
      "popularity": 171,
      "slug": "canada/quebec-city",
      "city": "Quebec City",
      "A2": "Quebec",
      "country": "Canada",
      "lat": 46.8139,
      "lng": 71.2081,
      "population": 705103
    },
    {
      "popularity": 172,
      "slug": "netherlands/groningen",
      "city": "Groningen",
      "A2": "Groningen",
      "country": "Netherlands",
      "lat": 53.2167,
      "lng": 6.5667,
      "population": 201462
    },
    {
      "popularity": 173,
      "slug": "cyprus/paphos",
      "city": "Paphos",
      "A2": "Páfos",
      "country": "Cyprus",
      "lat": 34.7761,
      "lng": 32.4265,
      "population": 35961
    },
    {
      "popularity": 174,
      "slug": "united-arab-emirates/dubai",
      "city": "Dubai",
      "A2": "Dubayy",
      "country": "United Arab Emirates",
      "lat": 25.2697,
      "lng": 55.3094,
      "population": 2502715
    },
    {
      "popularity": 175,
      "slug": "romania/craiova",
      "city": "Craiova",
      "A2": "Dolj",
      "country": "Romania",
      "lat": 44.3333,
      "lng": 23.8167,
      "population": 269506
    },
    {
      "popularity": 176,
      "slug": "china/changzhou",
      "city": "Changzhou",
      "A2": "Jiangsu",
      "country": "China",
      "lat": 31.8122,
      "lng": 119.9692,
      "population": 5278121
    },
    {
      "popularity": 177,
      "slug": "india/madurai",
      "city": "Madurai",
      "A2": "Tamil Nādu",
      "country": "India",
      "lat": 9.9197,
      "lng": 78.1194,
      "population": 1561129
    },
    {
      "popularity": 178,
      "slug": "canada/calgary",
      "city": "Calgary",
      "A2": "Alberta",
      "country": "Canada",
      "lat": 51.05,
      "lng": 114.0667,
      "population": 1239220
    },
    {
      "popularity": 179,
      "slug": "brazil/fortaleza",
      "city": "Fortaleza",
      "A2": "Ceará",
      "country": "Brazil",
      "lat": 3.7275,
      "lng": 38.5275,
      "population": 2452185
    },
    {
      "popularity": 180,
      "slug": "united-states/ohio/cincinnati",
      "city": "Cincinnati",
      "A2": "Ohio",
      "country": "United States",
      "lat": 39.1413,
      "lng": 84.5061,
      "population": 1662691
    },
    {
      "popularity": 181,
      "slug": "vietnam/da-lat",
      "city": "Da Lat",
      "A2": "Lâm Đồng",
      "country": "Vietnam",
      "lat": 11.9359,
      "lng": 108.4429,
      "population": 0
    },
    {
      "popularity": 182,
      "slug": "united-states/indiana/kokomo",
      "city": "Kokomo",
      "A2": "Indiana",
      "country": "United States",
      "lat": 40.464,
      "lng": 86.1277,
      "population": 79351
    },
    {
      "popularity": 183,
      "slug": "indonesia/surabaya",
      "city": "Surabaya",
      "A2": "Jawa Timur",
      "country": "Indonesia",
      "lat": 7.2458,
      "lng": 112.7378,
      "population": 2885555
    },
    {
      "popularity": 184,
      "slug": "sweden/malmo",
      "city": "Malmo",
      "A2": "Skåne",
      "country": "Sweden",
      "lat": 55.5833,
      "lng": 13.0333,
      "population": 269349
    },
    {
      "popularity": 185,
      "slug": "moldova/chisinau",
      "city": "Chisinau",
      "A2": "Chişinău",
      "country": "Moldova",
      "lat": 47.0228,
      "lng": 28.8353,
      "population": 639000
    },
    {
      "popularity": 186,
      "slug": "united-states/iowa/waterloo",
      "city": "Waterloo",
      "A2": "Iowa",
      "country": "United States",
      "lat": 42.492,
      "lng": 92.3522,
      "population": 111631
    },
    {
      "popularity": 187,
      "slug": "united-states/texas/harlingen",
      "city": "Harlingen",
      "A2": "Texas",
      "country": "United States",
      "lat": 26.1917,
      "lng": 97.6976,
      "population": 136037
    },
    {
      "popularity": 188,
      "slug": "estonia/tartu",
      "city": "Tartu",
      "A2": "Tartumaa",
      "country": "Estonia",
      "lat": 58.38,
      "lng": 26.7225,
      "population": 91407
    },
    {
      "popularity": 189,
      "slug": "united-states/alabama/montgomery",
      "city": "Montgomery",
      "A2": "Alabama",
      "country": "United States",
      "lat": 32.3473,
      "lng": 86.2666,
      "population": 254634
    },
    {
      "popularity": 190,
      "slug": "united-states/new-york/buffalo",
      "city": "Buffalo",
      "A2": "New York",
      "country": "United States",
      "lat": 42.9016,
      "lng": 78.8487,
      "population": 914341
    },
    {
      "popularity": 191,
      "slug": "united-states/kansas/wichita",
      "city": "Wichita",
      "A2": "Kansas",
      "country": "United States",
      "lat": 37.6896,
      "lng": 97.3442,
      "population": 482249
    },
    {
      "popularity": 192,
      "slug": "india/ahmedabad",
      "city": "Ahmedabad",
      "A2": "Gujarāt",
      "country": "India",
      "lat": 23.03,
      "lng": 72.58,
      "population": 7717000
    },
    {
      "popularity": 193,
      "slug": "turkey/izmir",
      "city": "Izmir",
      "A2": "İzmir",
      "country": "Turkey",
      "lat": 38.4127,
      "lng": 27.1384,
      "population": 329052
    },
    {
      "popularity": 194,
      "slug": "united-states/utah/ogden",
      "city": "Ogden",
      "A2": "Utah",
      "country": "United States",
      "lat": 41.2278,
      "lng": 111.9682,
      "population": 578523
    },
    {
      "popularity": 195,
      "slug": "india/vadodara",
      "city": "Vadodara",
      "A2": "Gujarāt",
      "country": "India",
      "lat": 22.3,
      "lng": 73.2,
      "population": 2065771
    },
    {
      "popularity": 196,
      "slug": "colombia/bogota",
      "city": "Bogota",
      "A2": "Bogotá",
      "country": "Colombia",
      "lat": 4.6126,
      "lng": 74.0705,
      "population": 7743955
    },
    {
      "popularity": 197,
      "slug": "united-states/kentucky/bowling-green",
      "city": "Bowling Green",
      "A2": "Kentucky",
      "country": "United States",
      "lat": 36.9719,
      "lng": 86.4373,
      "population": 95135
    },
    {
      "popularity": 198,
      "slug": "new-zealand/wellington",
      "city": "Wellington",
      "A2": "Wellington",
      "country": "New Zealand",
      "lat": 41.2889,
      "lng": 174.7772,
      "population": 418500
    },
    {
      "popularity": 199,
      "slug": "indonesia/denpasar",
      "city": "Denpasar",
      "A2": "Bali",
      "country": "Indonesia",
      "lat": 8.6667,
      "lng": 115.2167,
      "population": 834881
    },
    {
      "popularity": 200,
      "slug": "united-states/new-york/syracuse",
      "city": "Syracuse",
      "A2": "New York",
      "country": "United States",
      "lat": 43.0409,
      "lng": 76.1438,
      "population": 404223
    },
    {
      "popularity": 201,
      "slug": "united-states/ohio/youngstown",
      "city": "Youngstown",
      "A2": "Ohio",
      "country": "United States",
      "lat": 41.0993,
      "lng": 80.6463,
      "population": 378732
    },
    {
      "popularity": 202,
      "slug": "thailand/ko-chang",
      "city": "Ko Chang",
      "A2": "Trat",
      "country": "Thailand",
      "lat": 12.1033,
      "lng": 102.3522,
      "population": 5445
    },
    {
      "popularity": 203,
      "slug": "paraguay/asuncion",
      "city": "Asuncion",
      "A2": "Asunción",
      "country": "Paraguay",
      "lat": 25.3,
      "lng": 57.6333,
      "population": 524190
    },
    {
      "popularity": 204,
      "slug": "south-korea/daegu",
      "city": "Daegu",
      "A2": "Daegu",
      "country": "South Korea",
      "lat": 35.8667,
      "lng": 128.6,
      "population": 2461002
    },
    {
      "popularity": 205,
      "slug": "united-states/nevada/las-vegas",
      "city": "Las Vegas",
      "A2": "Nevada",
      "country": "United States",
      "lat": 36.2333,
      "lng": 115.2654,
      "population": 2104198
    },
    {
      "popularity": 206,
      "slug": "spain/alicante",
      "city": "Alicante",
      "A2": "Valencia",
      "country": "Spain",
      "lat": 38.3453,
      "lng": 0.4831,
      "population": 337304
    },
    {
      "popularity": 207,
      "slug": "united-states/alabama/dothan",
      "city": "Dothan",
      "A2": "Alabama",
      "country": "United States",
      "lat": 31.2335,
      "lng": 85.4069,
      "population": 72396
    },
    {
      "popularity": 208,
      "slug": "bulgaria/burgas",
      "city": "Burgas",
      "A2": "Burgas",
      "country": "Bulgaria",
      "lat": 42.503,
      "lng": 27.4702,
      "population": 210720
    },
    {
      "popularity": 209,
      "slug": "united-states/arkansas/north-little-rock",
      "city": "North Little Rock",
      "A2": "Arkansas",
      "country": "United States",
      "lat": 34.7808,
      "lng": 92.2371,
      "population": 65903
    },
    {
      "popularity": 210,
      "slug": "malaysia/ipoh",
      "city": "Ipoh",
      "A2": "Perak",
      "country": "Malaysia",
      "lat": 4.6,
      "lng": 101.07,
      "population": 866772
    },
    {
      "popularity": 211,
      "slug": "zambia/livingstone",
      "city": "Livingstone",
      "A2": "Southern",
      "country": "Zambia",
      "lat": 17.85,
      "lng": 25.8667,
      "population": 136897
    },
    {
      "popularity": 212,
      "slug": "indonesia/pekanbaru",
      "city": "Pekanbaru",
      "A2": "Riau",
      "country": "Indonesia",
      "lat": 0.5333,
      "lng": 101.45,
      "population": 983356
    },
    {
      "popularity": 213,
      "slug": "poland/katowice",
      "city": "Katowice",
      "A2": "Śląskie",
      "country": "Poland",
      "lat": 50.25,
      "lng": 19,
      "population": 276499
    },
    {
      "popularity": 214,
      "slug": "united-states/texas/houston",
      "city": "Houston",
      "A2": "Texas",
      "country": "United States",
      "lat": 29.7863,
      "lng": 95.3889,
      "population": 5464251
    },
    {
      "popularity": 215,
      "slug": "vietnam/hue",
      "city": "Hue",
      "A2": "Thừa Thiên Huế",
      "country": "Vietnam",
      "lat": 16.4637,
      "lng": 107.5908,
      "population": 652572
    },
    {
      "popularity": 216,
      "slug": "indonesia/yogyakarta",
      "city": "Yogyakarta",
      "A2": "Yogyakarta",
      "country": "Indonesia",
      "lat": 7.8014,
      "lng": 110.3644,
      "population": 422732
    },
    {
      "popularity": 217,
      "slug": "fiji/suva",
      "city": "Suva",
      "A2": "Rewa",
      "country": "Fiji",
      "lat": 18.1333,
      "lng": 178.4333,
      "population": 88271
    },
    {
      "popularity": 218,
      "slug": "united-states/california/los-angeles",
      "city": "Los Angeles",
      "A2": "California",
      "country": "United States",
      "lat": 34.1139,
      "lng": 118.4068,
      "population": 12750807
    },
    {
      "popularity": 219,
      "slug": "japan/naha",
      "city": "Naha",
      "A2": "Okinawa",
      "country": "Japan",
      "lat": 26.2122,
      "lng": 127.6789,
      "population": 316048
    },
    {
      "popularity": 220,
      "slug": "indonesia/cirebon",
      "city": "Cirebon",
      "A2": "Jawa Barat",
      "country": "Indonesia",
      "lat": 6.7167,
      "lng": 108.5667,
      "population": 316126
    },
    {
      "popularity": 221,
      "slug": "indonesia/palembang",
      "city": "Palembang",
      "A2": "Sumatera Selatan",
      "country": "Indonesia",
      "lat": 2.9833,
      "lng": 104.7644,
      "population": 1535952
    },
    {
      "popularity": 222,
      "slug": "mexico/guanajuato",
      "city": "Guanajuato",
      "A2": "Guanajuato",
      "country": "Mexico",
      "lat": 21.0178,
      "lng": 101.2567,
      "population": 194500
    },
    {
      "popularity": 223,
      "slug": "japan/kota",
      "city": "Kota",
      "A2": "Aichi",
      "country": "Japan",
      "lat": 34.8647,
      "lng": 137.1656,
      "population": 42523
    },
    {
      "popularity": 224,
      "slug": "netherlands/amsterdam",
      "city": "Amsterdam",
      "A2": "Noord Holland",
      "country": "Netherlands",
      "lat": 52.3667,
      "lng": 4.8833,
      "population": 862965
    },
    {
      "popularity": 225,
      "slug": "turkey/ankara",
      "city": "Ankara",
      "A2": "Ankara",
      "country": "Turkey",
      "lat": 39.93,
      "lng": 32.85,
      "population": 77168
    },
    {
      "popularity": 226,
      "slug": "united-states/wisconsin/madison",
      "city": "Madison",
      "A2": "Wisconsin",
      "country": "United States",
      "lat": 43.0826,
      "lng": 89.3931,
      "population": 447245
    },
    {
      "popularity": 227,
      "slug": "united-states/texas/killeen",
      "city": "Killeen",
      "A2": "Texas",
      "country": "United States",
      "lat": 31.0754,
      "lng": 97.7296,
      "population": 258009
    },
    {
      "popularity": 228,
      "slug": "united-states/nebraska/lincoln",
      "city": "Lincoln",
      "A2": "Nebraska",
      "country": "United States",
      "lat": 40.809,
      "lng": 96.6788,
      "population": 289490
    },
    {
      "popularity": 229,
      "slug": "united-states/michigan/battle-creek",
      "city": "Battle Creek",
      "A2": "Michigan",
      "country": "United States",
      "lat": 42.2986,
      "lng": 85.2296,
      "population": 76514
    },
    {
      "popularity": 230,
      "slug": "egypt/luxor",
      "city": "Luxor",
      "A2": "Al Uqşur",
      "country": "Egypt",
      "lat": 25.6969,
      "lng": 32.6422,
      "population": 202232
    },
    {
      "popularity": 231,
      "slug": "finland/helsinki",
      "city": "Helsinki",
      "A2": "Uusimaa",
      "country": "Finland",
      "lat": 60.1756,
      "lng": 24.9342,
      "population": 642045
    },
    {
      "popularity": 232,
      "slug": "united-states/north-carolina/raleigh",
      "city": "Raleigh",
      "A2": "North Carolina",
      "country": "United States",
      "lat": 35.8325,
      "lng": 78.6435,
      "population": 1038738
    },
    {
      "popularity": 233,
      "slug": "united-states/massachusetts/boston",
      "city": "Boston",
      "A2": "Massachusetts",
      "country": "United States",
      "lat": 42.3188,
      "lng": 71.0846,
      "population": 4688346
    },
    {
      "popularity": 234,
      "slug": "united-states/iowa/davenport",
      "city": "Davenport",
      "A2": "Iowa",
      "country": "United States",
      "lat": 41.5563,
      "lng": 90.6052,
      "population": 285362
    },
    {
      "popularity": 235,
      "slug": "finland/tampere",
      "city": "Tampere",
      "A2": "Pirkanmaa",
      "country": "Finland",
      "lat": 61.4981,
      "lng": 23.76,
      "population": 225118
    },
    {
      "popularity": 236,
      "slug": "india/nagpur",
      "city": "Nagpur",
      "A2": "Mahārāshtra",
      "country": "India",
      "lat": 21.1539,
      "lng": 79.0831,
      "population": 2405665
    },
    {
      "popularity": 237,
      "slug": "united-states/texas/tyler",
      "city": "Tyler",
      "A2": "Texas",
      "country": "United States",
      "lat": 32.3184,
      "lng": 95.3062,
      "population": 143796
    },
    {
      "popularity": 238,
      "slug": "united-states/texas/port-arthur",
      "city": "Port Arthur",
      "A2": "Texas",
      "country": "United States",
      "lat": 29.8554,
      "lng": 93.9264,
      "population": 154468
    },
    {
      "popularity": 239,
      "slug": "india/ludhiana",
      "city": "Ludhiana",
      "A2": "Punjab",
      "country": "India",
      "lat": 30.9083,
      "lng": 75.8486,
      "population": 1618879
    },
    {
      "popularity": 240,
      "slug": "united-states/california/san-diego",
      "city": "San Diego",
      "A2": "California",
      "country": "United States",
      "lat": 32.8312,
      "lng": 117.1225,
      "population": 3220118
    },
    {
      "popularity": 241,
      "slug": "united-states/district-of-columbia/washington",
      "city": "Washington",
      "A2": "District of Columbia",
      "country": "United States",
      "lat": 38.9047,
      "lng": 77.0163,
      "population": 5379184
    },
    {
      "popularity": 242,
      "slug": "romania/iasi",
      "city": "Iasi",
      "A2": "Iaşi",
      "country": "Romania",
      "lat": 47.1622,
      "lng": 27.5889,
      "population": 290422
    },
    {
      "popularity": 243,
      "slug": "mexico/hermosillo",
      "city": "Hermosillo",
      "A2": "Sonora",
      "country": "Mexico",
      "lat": 29.0989,
      "lng": 110.9542,
      "population": 855563
    },
    {
      "popularity": 244,
      "slug": "india/patna",
      "city": "Patna",
      "A2": "Bihār",
      "country": "India",
      "lat": 25.61,
      "lng": 85.1414,
      "population": 1684222
    },
    {
      "popularity": 245,
      "slug": "indonesia/surakarta",
      "city": "Surakarta",
      "A2": "Jawa Tengah",
      "country": "Indonesia",
      "lat": 7.5667,
      "lng": 110.8167,
      "population": 552118
    },
    {
      "popularity": 246,
      "slug": "united-states/texas/longview",
      "city": "Longview",
      "A2": "Texas",
      "country": "United States",
      "lat": 32.5193,
      "lng": 94.7621,
      "population": 100330
    },
    {
      "popularity": 247,
      "slug": "canada/windsor",
      "city": "Windsor",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 42.2833,
      "lng": 83,
      "population": 276165
    },
    {
      "popularity": 248,
      "slug": "germany/aachen",
      "city": "Aachen",
      "A2": "North Rhine Westphalia",
      "country": "Germany",
      "lat": 50.7762,
      "lng": 6.0838,
      "population": 248960
    },
    {
      "popularity": 249,
      "slug": "united-states/virginia/richmond",
      "city": "Richmond",
      "A2": "Virginia",
      "country": "United States",
      "lat": 37.5295,
      "lng": 77.4756,
      "population": 1075798
    },
    {
      "popularity": 250,
      "slug": "united-states/arizona/yuma",
      "city": "Yuma",
      "A2": "Arizona",
      "country": "United States",
      "lat": 32.5992,
      "lng": 114.5488,
      "population": 142847
    },
    {
      "popularity": 251,
      "slug": "united-states/georgia/valdosta",
      "city": "Valdosta",
      "A2": "Georgia",
      "country": "United States",
      "lat": 30.8502,
      "lng": 83.2788,
      "population": 79820
    },
    {
      "popularity": 252,
      "slug": "brazil/natal",
      "city": "Natal",
      "A2": "Amazonas",
      "country": "Brazil",
      "lat": 6.9838,
      "lng": 60.2699,
      "population": 980588
    },
    {
      "popularity": 253,
      "slug": "south-africa/queenstown",
      "city": "Queenstown",
      "A2": "Eastern Cape",
      "country": "South Africa",
      "lat": 31.9,
      "lng": 26.8833,
      "population": 105309
    },
    {
      "popularity": 254,
      "slug": "united-states/oregon/portland",
      "city": "Portland",
      "A2": "Oregon",
      "country": "United States",
      "lat": 45.5372,
      "lng": 122.65,
      "population": 2074775
    },
    {
      "popularity": 255,
      "slug": "panama/panama-city",
      "city": "Panama City",
      "A2": "Panamá",
      "country": "Panama",
      "lat": 9,
      "lng": 79.5,
      "population": 880691
    },
    {
      "popularity": 256,
      "slug": "indonesia/semarang",
      "city": "Semarang",
      "A2": "Jawa Tengah",
      "country": "Indonesia",
      "lat": 6.9667,
      "lng": 110.4167,
      "population": 1621384
    },
    {
      "popularity": 257,
      "slug": "united-states/kentucky/owensboro",
      "city": "Owensboro",
      "A2": "Kentucky",
      "country": "United States",
      "lat": 37.7574,
      "lng": 87.1173,
      "population": 74068
    },
    {
      "popularity": 258,
      "slug": "united-states/tennessee/nashville",
      "city": "Nashville",
      "A2": "Tennessee",
      "country": "United States",
      "lat": 36.1715,
      "lng": 86.7843,
      "population": 1081903
    },
    {
      "popularity": 259,
      "slug": "united-states/tennessee/knoxville",
      "city": "Knoxville",
      "A2": "Tennessee",
      "country": "United States",
      "lat": 35.9692,
      "lng": 83.9496,
      "population": 586048
    },
    {
      "popularity": 260,
      "slug": "indonesia/makassar",
      "city": "Makassar",
      "A2": "Sulawesi Selatan",
      "country": "Indonesia",
      "lat": 5.1331,
      "lng": 119.4136,
      "population": 1338663
    },
    {
      "popularity": 261,
      "slug": "canada/burlington",
      "city": "Burlington",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 43.3167,
      "lng": 79.8,
      "population": 183314
    },
    {
      "popularity": 262,
      "slug": "finland/turku",
      "city": "Turku",
      "A2": "Varsinais Suomi",
      "country": "Finland",
      "lat": 60.4517,
      "lng": 22.27,
      "population": 187604
    },
    {
      "popularity": 263,
      "slug": "peru/arequipa",
      "city": "Arequipa",
      "A2": "Arequipa",
      "country": "Peru",
      "lat": 16.3988,
      "lng": 71.5369,
      "population": 1008290
    },
    {
      "popularity": 264,
      "slug": "india/kalyan",
      "city": "Kalyan",
      "A2": "Mahārāshtra",
      "country": "India",
      "lat": 19.2502,
      "lng": 73.1602,
      "population": 1576614
    },
    {
      "popularity": 265,
      "slug": "united-states/indiana/indianapolis",
      "city": "Indianapolis",
      "A2": "Indiana",
      "country": "United States",
      "lat": 39.7771,
      "lng": 86.1458,
      "population": 1588961
    },
    {
      "popularity": 266,
      "slug": "united-states/pennsylvania/pittsburgh",
      "city": "Pittsburgh",
      "A2": "Pennsylvania",
      "country": "United States",
      "lat": 40.4396,
      "lng": 79.9762,
      "population": 1703266
    },
    {
      "popularity": 267,
      "slug": "indonesia/medan",
      "city": "Medan",
      "A2": "Sumatera Utara",
      "country": "Indonesia",
      "lat": 3.6667,
      "lng": 98.6667,
      "population": 2109330
    },
    {
      "popularity": 268,
      "slug": "netherlands/leiden",
      "city": "Leiden",
      "A2": "Zuid Holland",
      "country": "Netherlands",
      "lat": 52.1544,
      "lng": 4.4947,
      "population": 124899
    },
    {
      "popularity": 269,
      "slug": "canada/kitchener",
      "city": "Kitchener",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 43.4186,
      "lng": 80.4728,
      "population": 470015
    },
    {
      "popularity": 270,
      "slug": "czechia/prague",
      "city": "Prague",
      "A2": "Praha, Hlavní Město",
      "country": "Czechia",
      "lat": 50.0833,
      "lng": 14.4167,
      "population": 1335084
    },
    {
      "popularity": 271,
      "slug": "united-states/new-mexico/las-cruces",
      "city": "Las Cruces",
      "A2": "New Mexico",
      "country": "United States",
      "lat": 32.3265,
      "lng": 106.7892,
      "population": 136254
    },
    {
      "popularity": 272,
      "slug": "united-states/texas/mcallen",
      "city": "Mcallen",
      "A2": "Texas",
      "country": "United States",
      "lat": 26.2273,
      "lng": 98.2471,
      "population": 804114
    },
    {
      "popularity": 273,
      "slug": "united-kingdom/bedford",
      "city": "Bedford",
      "A2": "Bedford",
      "country": "United Kingdom",
      "lat": 52.135,
      "lng": 0.47,
      "population": 92407
    },
    {
      "popularity": 274,
      "slug": "thailand/chiang-rai",
      "city": "Chiang Rai",
      "A2": "Chiang Rai",
      "country": "Thailand",
      "lat": 19.9094,
      "lng": 99.8275,
      "population": 70610
    },
    {
      "popularity": 275,
      "slug": "croatia/osijek",
      "city": "Osijek",
      "A2": "Osječko Baranjska Županija",
      "country": "Croatia",
      "lat": 45.5603,
      "lng": 18.6703,
      "population": 84104
    },
    {
      "popularity": 276,
      "slug": "indonesia/mataram",
      "city": "Mataram",
      "A2": "Nusa Tenggara Barat",
      "country": "Indonesia",
      "lat": 8.5833,
      "lng": 116.1167,
      "population": 408900
    },
    {
      "popularity": 277,
      "slug": "slovakia/kosice",
      "city": "Kosice",
      "A2": "Košický",
      "country": "Slovakia",
      "lat": 48.7167,
      "lng": 21.25,
      "population": 238593
    },
    {
      "popularity": 278,
      "slug": "united-states/texas/bryan",
      "city": "Bryan",
      "A2": "Texas",
      "country": "United States",
      "lat": 30.6657,
      "lng": 96.3668,
      "population": 86276
    },
    {
      "popularity": 279,
      "slug": "dominican-republic/santo-domingo",
      "city": "Santo Domingo",
      "A2": "Ozama",
      "country": "Dominican Republic",
      "lat": 18.4764,
      "lng": 69.8933,
      "population": 2581827
    },
    {
      "popularity": 280,
      "slug": "canada/saskatoon",
      "city": "Saskatoon",
      "A2": "Saskatchewan",
      "country": "Canada",
      "lat": 52.1333,
      "lng": 106.6833,
      "population": 246376
    },
    {
      "popularity": 281,
      "slug": "bosnia-and-herzegovina/banja-luka",
      "city": "Banja Luka",
      "A2": "Srpska, Republika",
      "country": "Bosnia And Herzegovina",
      "lat": 44.7667,
      "lng": 17.1833,
      "population": 199191
    },
    {
      "popularity": 282,
      "slug": "united-states/texas/amarillo",
      "city": "Amarillo",
      "A2": "Texas",
      "country": "United States",
      "lat": 35.1988,
      "lng": 101.8311,
      "population": 205603
    },
    {
      "popularity": 283,
      "slug": "thailand/ko-samui",
      "city": "Ko Samui",
      "A2": "Surat Thani",
      "country": "Thailand",
      "lat": 9.5157,
      "lng": 99.9436,
      "population": 68994
    },
    {
      "popularity": 284,
      "slug": "united-states/california/chico",
      "city": "Chico",
      "A2": "California",
      "country": "United States",
      "lat": 39.7575,
      "lng": 121.8152,
      "population": 117668
    },
    {
      "popularity": 285,
      "slug": "united-states/louisiana/new-orleans",
      "city": "New Orleans",
      "A2": "Louisiana",
      "country": "United States",
      "lat": 30.0687,
      "lng": 89.9288,
      "population": 1020886
    },
    {
      "popularity": 286,
      "slug": "canada/chatham",
      "city": "Chatham",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 42.4229,
      "lng": 82.1324,
      "population": 101647
    },
    {
      "popularity": 287,
      "slug": "brazil/curitiba",
      "city": "Curitiba",
      "A2": "Paraná",
      "country": "Brazil",
      "lat": 25.4297,
      "lng": 49.2719,
      "population": 1879355
    },
    {
      "popularity": 288,
      "slug": "united-states/louisiana/bossier-city",
      "city": "Bossier City",
      "A2": "Louisiana",
      "country": "United States",
      "lat": 32.5227,
      "lng": 93.6666,
      "population": 68159
    },
    {
      "popularity": 289,
      "slug": "united-states/missouri/joplin",
      "city": "Joplin",
      "A2": "Missouri",
      "country": "United States",
      "lat": 37.0758,
      "lng": 94.5018,
      "population": 84048
    },
    {
      "popularity": 290,
      "slug": "bolivia/santa-cruz",
      "city": "Santa Cruz",
      "A2": "Santa Cruz",
      "country": "Bolivia",
      "lat": 17.7892,
      "lng": 63.1975,
      "population": 3151676
    },
    {
      "popularity": 291,
      "slug": "united-states/texas/odessa",
      "city": "Odessa",
      "A2": "Texas",
      "country": "United States",
      "lat": 31.8831,
      "lng": 102.3406,
      "population": 155998
    },
    {
      "popularity": 292,
      "slug": "canada/regina",
      "city": "Regina",
      "A2": "Saskatchewan",
      "country": "Canada",
      "lat": 50.4547,
      "lng": 104.6067,
      "population": 215106
    },
    {
      "popularity": 293,
      "slug": "georgia/gori",
      "city": "Gori",
      "A2": "Shida Kartli",
      "country": "Georgia",
      "lat": 41.9817,
      "lng": 44.1124,
      "population": 48143
    },
    {
      "popularity": 294,
      "slug": "united-states/indiana/muncie",
      "city": "Muncie",
      "A2": "Indiana",
      "country": "United States",
      "lat": 40.1989,
      "lng": 85.395,
      "population": 87879
    },
    {
      "popularity": 295,
      "slug": "france/montpellier",
      "city": "Montpellier",
      "A2": "Occitanie",
      "country": "France",
      "lat": 43.6119,
      "lng": 3.8772,
      "population": 290053
    },
    {
      "popularity": 296,
      "slug": "argentina/rosario",
      "city": "Rosario",
      "A2": "Santa Fe",
      "country": "Argentina",
      "lat": 32.9575,
      "lng": 60.6394,
      "population": 1193605
    },
    {
      "popularity": 297,
      "slug": "canada/victoria",
      "city": "Victoria",
      "A2": "British Columbia",
      "country": "Canada",
      "lat": 48.4283,
      "lng": 123.3647,
      "population": 335696
    },
    {
      "popularity": 298,
      "slug": "united-states/indiana/evansville",
      "city": "Evansville",
      "A2": "Indiana",
      "country": "United States",
      "lat": 37.9881,
      "lng": 87.5341,
      "population": 230427
    },
    {
      "popularity": 299,
      "slug": "bolivia/la-paz",
      "city": "La Paz",
      "A2": "La Paz",
      "country": "Bolivia",
      "lat": 16.4942,
      "lng": 68.1475,
      "population": 2867504
    },
    {
      "popularity": 300,
      "slug": "sweden/gothenburg",
      "city": "Gothenburg",
      "A2": "Västra Götaland",
      "country": "Sweden",
      "lat": 57.6717,
      "lng": 11.981,
      "population": 604829
    },
    {
      "popularity": 301,
      "slug": "united-states/washington/seattle",
      "city": "Seattle",
      "A2": "Washington",
      "country": "United States",
      "lat": 47.6211,
      "lng": 122.3244,
      "population": 3789215
    },
    {
      "popularity": 302,
      "slug": "canada/surrey",
      "city": "Surrey",
      "A2": "British Columbia",
      "country": "Canada",
      "lat": 49.19,
      "lng": 122.8489,
      "population": 517887
    },
    {
      "popularity": 303,
      "slug": "thailand/udon-thani",
      "city": "Udon Thani",
      "A2": "Udon Thani",
      "country": "Thailand",
      "lat": 17.4253,
      "lng": 102.7902,
      "population": 130274
    },
    {
      "popularity": 304,
      "slug": "united-states/virginia/norfolk",
      "city": "Norfolk",
      "A2": "Virginia",
      "country": "United States",
      "lat": 36.8945,
      "lng": 76.259,
      "population": 242742
    },
    {
      "popularity": 305,
      "slug": "united-states/oklahoma/oklahoma-city",
      "city": "Oklahoma City",
      "A2": "Oklahoma",
      "country": "United States",
      "lat": 35.4676,
      "lng": 97.5136,
      "population": 972943
    },
    {
      "popularity": 306,
      "slug": "canada/victoria",
      "city": "Victoria",
      "A2": "British Columbia",
      "country": "Canada",
      "lat": 48.4283,
      "lng": 123.3647,
      "population": 335696
    },
    {
      "popularity": 307,
      "slug": "morocco/fes",
      "city": "Fes",
      "A2": "Fès Meknès",
      "country": "Morocco",
      "lat": 34.0433,
      "lng": 5.0033,
      "population": 1112072
    },
    {
      "popularity": 308,
      "slug": "united-states/new-york/rochester",
      "city": "Rochester",
      "A2": "New York",
      "country": "United States",
      "lat": 43.168,
      "lng": 77.6162,
      "population": 703952
    },
    {
      "popularity": 309,
      "slug": "united-states/illinois/elgin",
      "city": "Elgin",
      "A2": "Illinois",
      "country": "United States",
      "lat": 42.0385,
      "lng": 88.3229,
      "population": 110849
    },
    {
      "popularity": 310,
      "slug": "united-states/florida/palm-coast",
      "city": "Palm Coast",
      "A2": "Florida",
      "country": "United States",
      "lat": 29.5392,
      "lng": 81.246,
      "population": 417007
    },
    {
      "popularity": 311,
      "slug": "united-states/colorado/denver",
      "city": "Denver",
      "A2": "Colorado",
      "country": "United States",
      "lat": 39.7621,
      "lng": 104.8759,
      "population": 2876625
    },
    {
      "popularity": 312,
      "slug": "united-states/colorado/aurora",
      "city": "Aurora",
      "A2": "Colorado",
      "country": "United States",
      "lat": 39.7087,
      "lng": 104.7273,
      "population": 379289
    },
    {
      "popularity": 313,
      "slug": "united-states/texas/laredo",
      "city": "Laredo",
      "A2": "Texas",
      "country": "United States",
      "lat": 27.5629,
      "lng": 99.4875,
      "population": 262491
    },
    {
      "popularity": 314,
      "slug": "india/kolkata",
      "city": "Kolkata",
      "A2": "West Bengal",
      "country": "India",
      "lat": 22.5727,
      "lng": 88.3639,
      "population": 18698000
    },
    {
      "popularity": 315,
      "slug": "united-states/indiana/elkhart",
      "city": "Elkhart",
      "A2": "Indiana",
      "country": "United States",
      "lat": 41.6916,
      "lng": 85.9628,
      "population": 147567
    },
    {
      "popularity": 316,
      "slug": "kenya/mombasa",
      "city": "Mombasa",
      "A2": "Mombasa",
      "country": "Kenya",
      "lat": 4.05,
      "lng": 39.6667,
      "population": 1200000
    },
    {
      "popularity": 317,
      "slug": "united-states/north-carolina/rocky-mount",
      "city": "Rocky Mount",
      "A2": "North Carolina",
      "country": "United States",
      "lat": 35.9676,
      "lng": 77.8048,
      "population": 64018
    },
    {
      "popularity": 318,
      "slug": "mexico/monterrey",
      "city": "Monterrey",
      "A2": "Nuevo León",
      "country": "Mexico",
      "lat": 25.6667,
      "lng": 100.3,
      "population": 1135512
    },
    {
      "popularity": 319,
      "slug": "united-states/texas/mission",
      "city": "Mission",
      "A2": "Texas",
      "country": "United States",
      "lat": 26.2041,
      "lng": 98.3251,
      "population": 84331
    },
    {
      "popularity": 320,
      "slug": "united-kingdom/birmingham",
      "city": "Birmingham",
      "A2": "Birmingham",
      "country": "United Kingdom",
      "lat": 52.48,
      "lng": 1.9025,
      "population": 1137100
    },
    {
      "popularity": 321,
      "slug": "venezuela/valencia",
      "city": "Valencia",
      "A2": "Carabobo",
      "country": "Venezuela",
      "lat": 10.1667,
      "lng": 68,
      "population": 1484430
    },
    {
      "popularity": 322,
      "slug": "united-states/california/san-francisco",
      "city": "San Francisco",
      "A2": "California",
      "country": "United States",
      "lat": 37.7562,
      "lng": 122.443,
      "population": 3592294
    },
    {
      "popularity": 323,
      "slug": "united-kingdom/leicester",
      "city": "Leicester",
      "A2": "Leicester",
      "country": "United Kingdom",
      "lat": 52.6344,
      "lng": 1.1319,
      "population": 464395
    },
    {
      "popularity": 324,
      "slug": "united-states/louisiana/lafayette",
      "city": "Lafayette",
      "A2": "Louisiana",
      "country": "United States",
      "lat": 30.2084,
      "lng": 92.0323,
      "population": 264357
    },
    {
      "popularity": 325,
      "slug": "turkey/gaziantep",
      "city": "Gaziantep",
      "A2": "Gaziantep",
      "country": "Turkey",
      "lat": 37.0667,
      "lng": 37.3833,
      "population": 160152
    },
    {
      "popularity": 326,
      "slug": "namibia/windhoek",
      "city": "Windhoek",
      "A2": "Khomas",
      "country": "Namibia",
      "lat": 22.57,
      "lng": 17.0836,
      "population": 322500
    },
    {
      "popularity": 327,
      "slug": "united-states/idaho/boise",
      "city": "Boise",
      "A2": "Idaho",
      "country": "United States",
      "lat": 43.6007,
      "lng": 116.2312,
      "population": 389280
    },
    {
      "popularity": 328,
      "slug": "united-states/florida/miami",
      "city": "Miami",
      "A2": "Florida",
      "country": "United States",
      "lat": 25.7839,
      "lng": 80.2102,
      "population": 6445545
    },
    {
      "popularity": 329,
      "slug": "united-states/pennsylvania/lancaster",
      "city": "Lancaster",
      "A2": "Pennsylvania",
      "country": "United States",
      "lat": 40.0421,
      "lng": 76.3012,
      "population": 401524
    },
    {
      "popularity": 330,
      "slug": "senegal/dakar",
      "city": "Dakar",
      "A2": "Dakar",
      "country": "Senegal",
      "lat": 14.7319,
      "lng": 17.4572,
      "population": 1146053
    },
    {
      "popularity": 331,
      "slug": "south-korea/daejeon",
      "city": "Daejeon",
      "A2": "Daejeon",
      "country": "South Korea",
      "lat": 36.351,
      "lng": 127.385,
      "population": 1475221
    },
    {
      "popularity": 332,
      "slug": "united-states/oregon/salem",
      "city": "Salem",
      "A2": "Oregon",
      "country": "United States",
      "lat": 44.9231,
      "lng": 123.0246,
      "population": 266804
    },
    {
      "popularity": 333,
      "slug": "united-states/tennessee/kingsport",
      "city": "Kingsport",
      "A2": "Tennessee",
      "country": "United States",
      "lat": 36.5224,
      "lng": 82.5453,
      "population": 119666
    },
    {
      "popularity": 334,
      "slug": "brazil/goiania",
      "city": "Goiania",
      "A2": "Goiás",
      "country": "Brazil",
      "lat": 16.6806,
      "lng": 49.2564,
      "population": 1393575
    },
    {
      "popularity": 335,
      "slug": "uganda/kampala",
      "city": "Kampala",
      "A2": "Kampala",
      "country": "Uganda",
      "lat": 0.3136,
      "lng": 32.5811,
      "population": 1659600
    },
    {
      "popularity": 336,
      "slug": "mexico/san-miguel-de-allende",
      "city": "San Miguel De Allende",
      "A2": "Guanajuato",
      "country": "Mexico",
      "lat": 20.9142,
      "lng": 100.7436,
      "population": 69811
    },
    {
      "popularity": 337,
      "slug": "nigeria/kaduna",
      "city": "Kaduna",
      "A2": "Kaduna",
      "country": "Nigeria",
      "lat": 10.5105,
      "lng": 7.4165,
      "population": 760084
    },
    {
      "popularity": 338,
      "slug": "united-states/michigan/grand-rapids",
      "city": "Grand Rapids",
      "A2": "Michigan",
      "country": "United States",
      "lat": 42.962,
      "lng": 85.6562,
      "population": 609314
    },
    {
      "popularity": 339,
      "slug": "united-states/north-dakota/fargo",
      "city": "Fargo",
      "A2": "North Dakota",
      "country": "United States",
      "lat": 46.8652,
      "lng": 96.8292,
      "population": 208675
    },
    {
      "popularity": 340,
      "slug": "georgia/batumi",
      "city": "Batumi",
      "A2": "Ajaria",
      "country": "Georgia",
      "lat": 41.6458,
      "lng": 41.6417,
      "population": 154600
    },
    {
      "popularity": 341,
      "slug": "united-states/arkansas/fort-smith",
      "city": "Fort Smith",
      "A2": "Arkansas",
      "country": "United States",
      "lat": 35.3493,
      "lng": 94.3695,
      "population": 125354
    },
    {
      "popularity": 342,
      "slug": "united-states/arkansas/conway",
      "city": "Conway",
      "A2": "Arkansas",
      "country": "United States",
      "lat": 35.0754,
      "lng": 92.4694,
      "population": 74951
    },
    {
      "popularity": 343,
      "slug": "bolivia/cochabamba",
      "city": "Cochabamba",
      "A2": "Cochabamba",
      "country": "Bolivia",
      "lat": 17.3935,
      "lng": 66.157,
      "population": 632013
    },
    {
      "popularity": 344,
      "slug": "united-states/indiana/fort-wayne",
      "city": "Fort Wayne",
      "A2": "Indiana",
      "country": "United States",
      "lat": 41.0886,
      "lng": 85.1437,
      "population": 334122
    },
    {
      "popularity": 345,
      "slug": "united-states/texas/college-station",
      "city": "College Station",
      "A2": "Texas",
      "country": "United States",
      "lat": 30.5852,
      "lng": 96.296,
      "population": 215243
    },
    {
      "popularity": 346,
      "slug": "pakistan/lahore",
      "city": "Lahore",
      "A2": "Punjab",
      "country": "Pakistan",
      "lat": 31.5497,
      "lng": 74.3436,
      "population": 11148000
    },
    {
      "popularity": 347,
      "slug": "united-states/washington/pasco",
      "city": "Pasco",
      "A2": "Washington",
      "country": "United States",
      "lat": 46.2506,
      "lng": 119.1304,
      "population": 75432
    },
    {
      "popularity": 348,
      "slug": "united-states/alabama/hoover",
      "city": "Hoover",
      "A2": "Alabama",
      "country": "United States",
      "lat": 33.3754,
      "lng": 86.8064,
      "population": 85768
    },
    {
      "popularity": 349,
      "slug": "guatemala/guatemala-city",
      "city": "Guatemala City",
      "A2": "Guatemala",
      "country": "Guatemala",
      "lat": 14.6099,
      "lng": 90.5252,
      "population": 2934841
    },
    {
      "popularity": 350,
      "slug": "united-states/texas/edinburg",
      "city": "Edinburg",
      "A2": "Texas",
      "country": "United States",
      "lat": 26.3197,
      "lng": 98.1596,
      "population": 101170
    },
    {
      "popularity": 351,
      "slug": "united-states/texas/temple",
      "city": "Temple",
      "A2": "Texas",
      "country": "United States",
      "lat": 31.1076,
      "lng": 97.3894,
      "population": 107258
    },
    {
      "popularity": 352,
      "slug": "united-states/oklahoma/lawton",
      "city": "Lawton",
      "A2": "Oklahoma",
      "country": "United States",
      "lat": 34.6176,
      "lng": 98.4203,
      "population": 93025
    },
    {
      "popularity": 353,
      "slug": "tunisia/tunis",
      "city": "Tunis",
      "A2": "Tunis",
      "country": "Tunisia",
      "lat": 36.8008,
      "lng": 10.18,
      "population": 1056247
    },
    {
      "popularity": 354,
      "slug": "egypt/giza",
      "city": "Giza",
      "A2": "Al Jīzah",
      "country": "Egypt",
      "lat": 29.987,
      "lng": 31.2118,
      "population": 5598402
    },
    {
      "popularity": 355,
      "slug": "brazil/belem",
      "city": "Belem",
      "A2": "Pará",
      "country": "Brazil",
      "lat": 1.4558,
      "lng": 48.5039,
      "population": 1499641
    },
    {
      "popularity": 356,
      "slug": "united-states/illinois/chicago",
      "city": "Chicago",
      "A2": "Illinois",
      "country": "United States",
      "lat": 41.8373,
      "lng": 87.6862,
      "population": 8604203
    },
    {
      "popularity": 357,
      "slug": "united-kingdom/edinburgh",
      "city": "Edinburgh",
      "A2": "Edinburgh, City of",
      "country": "United Kingdom",
      "lat": 55.953,
      "lng": 3.189,
      "population": 488050
    },
    {
      "popularity": 358,
      "slug": "united-states/colorado/greeley",
      "city": "Greeley",
      "A2": "Colorado",
      "country": "United States",
      "lat": 40.4151,
      "lng": 104.7706,
      "population": 137810
    },
    {
      "popularity": 359,
      "slug": "taiwan/taichung",
      "city": "Taichung",
      "A2": "Taichung",
      "country": "Taiwan",
      "lat": 24.15,
      "lng": 120.6667,
      "population": 2803894
    },
    {
      "popularity": 360,
      "slug": "united-states/north-dakota/grand-forks",
      "city": "Grand Forks",
      "A2": "North Dakota",
      "country": "United States",
      "lat": 47.9218,
      "lng": 97.0886,
      "population": 64748
    },
    {
      "popularity": 361,
      "slug": "south-africa/durban",
      "city": "Durban",
      "A2": "KwaZulu Natal",
      "country": "South Africa",
      "lat": 29.8583,
      "lng": 31.025,
      "population": 595061
    },
    {
      "popularity": 362,
      "slug": "united-states/north-carolina/asheville",
      "city": "Asheville",
      "A2": "North Carolina",
      "country": "United States",
      "lat": 35.5704,
      "lng": 82.5536,
      "population": 312507
    },
    {
      "popularity": 363,
      "slug": "united-states/arkansas/jonesboro",
      "city": "Jonesboro",
      "A2": "Arkansas",
      "country": "United States",
      "lat": 35.8212,
      "lng": 90.6791,
      "population": 78394
    },
    {
      "popularity": 364,
      "slug": "united-states/oklahoma/enid",
      "city": "Enid",
      "A2": "Oklahoma",
      "country": "United States",
      "lat": 36.4061,
      "lng": 97.8701,
      "population": 49688
    },
    {
      "popularity": 365,
      "slug": "argentina/salta",
      "city": "Salta",
      "A2": "Salta",
      "country": "Argentina",
      "lat": 24.7883,
      "lng": 65.4106,
      "population": 535303
    },
    {
      "popularity": 366,
      "slug": "lithuania/kaunas",
      "city": "Kaunas",
      "A2": "Kauno Miestas",
      "country": "Lithuania",
      "lat": 54.9,
      "lng": 23.9333,
      "population": 288466
    },
    {
      "popularity": 367,
      "slug": "united-states/tennessee/clarksville",
      "city": "Clarksville",
      "A2": "Tennessee",
      "country": "United States",
      "lat": 36.5695,
      "lng": 87.342,
      "population": 188746
    },
    {
      "popularity": 368,
      "slug": "united-states/pennsylvania/reading",
      "city": "Reading",
      "A2": "Pennsylvania",
      "country": "United States",
      "lat": 40.34,
      "lng": 75.9267,
      "population": 267155
    },
    {
      "popularity": 369,
      "slug": "united-states/new-york/albany",
      "city": "Albany",
      "A2": "New York",
      "country": "United States",
      "lat": 42.6664,
      "lng": 73.7987,
      "population": 586383
    },
    {
      "popularity": 370,
      "slug": "united-states/washington/richland",
      "city": "Richland",
      "A2": "Washington",
      "country": "United States",
      "lat": 46.2824,
      "lng": 119.2938,
      "population": 58225
    },
    {
      "popularity": 371,
      "slug": "united-states/north-dakota/bismarck",
      "city": "Bismarck",
      "A2": "North Dakota",
      "country": "United States",
      "lat": 46.8144,
      "lng": 100.7694,
      "population": 98345
    },
    {
      "popularity": 372,
      "slug": "morocco/tangier",
      "city": "Tangier",
      "A2": "Tanger Tétouan Al Hoceïma",
      "country": "Morocco",
      "lat": 35.7767,
      "lng": 5.8039,
      "population": 947952
    },
    {
      "popularity": 373,
      "slug": "united-states/florida/jacksonville",
      "city": "Jacksonville",
      "A2": "Florida",
      "country": "United States",
      "lat": 30.3322,
      "lng": 81.6749,
      "population": 1181496
    },
    {
      "popularity": 374,
      "slug": "canada/lethbridge",
      "city": "Lethbridge",
      "A2": "Alberta",
      "country": "Canada",
      "lat": 49.6942,
      "lng": 112.8328,
      "population": 92729
    },
    {
      "popularity": 375,
      "slug": "france/nice",
      "city": "Nice",
      "A2": "Provence Alpes Côte d’Azur",
      "country": "France",
      "lat": 43.7034,
      "lng": 7.2663,
      "population": 341032
    },
    {
      "popularity": 376,
      "slug": "china/jinan",
      "city": "Jinan",
      "A2": "Shandong",
      "country": "China",
      "lat": 36.6667,
      "lng": 116.9833,
      "population": 7967400
    },
    {
      "popularity": 377,
      "slug": "morocco/rabat",
      "city": "Rabat",
      "A2": "Rabat Salé Kénitra",
      "country": "Morocco",
      "lat": 34.0253,
      "lng": 6.8361,
      "population": 572717
    },
    {
      "popularity": 378,
      "slug": "india/allahabad",
      "city": "Allahabad",
      "A2": "Uttar Pradesh",
      "country": "India",
      "lat": 25.45,
      "lng": 81.85,
      "population": 5954391
    },
    {
      "popularity": 379,
      "slug": "bangladesh/khulna",
      "city": "Khulna",
      "A2": "Khulna",
      "country": "Bangladesh",
      "lat": 22.8167,
      "lng": 89.55,
      "population": 1400689
    },
    {
      "popularity": 380,
      "slug": "united-states/california/ashland",
      "city": "Ashland",
      "A2": "California",
      "country": "United States",
      "lat": 37.6942,
      "lng": 122.1159,
      "population": 24430
    },
    {
      "popularity": 381,
      "slug": "mexico/tijuana",
      "city": "Tijuana",
      "A2": "Baja California",
      "country": "Mexico",
      "lat": 32.525,
      "lng": 117.0333,
      "population": 1922523
    },
    {
      "popularity": 382,
      "slug": "united-states/idaho/idaho-falls",
      "city": "Idaho Falls",
      "A2": "Idaho",
      "country": "United States",
      "lat": 43.4872,
      "lng": 112.0362,
      "population": 100442
    },
    {
      "popularity": 383,
      "slug": "china/shantou",
      "city": "Shantou",
      "A2": "Guangdong",
      "country": "China",
      "lat": 23.3735,
      "lng": 116.6941,
      "population": 5319028
    },
    {
      "popularity": 384,
      "slug": "united-states/rhode-island/providence",
      "city": "Providence",
      "A2": "Rhode Island",
      "country": "United States",
      "lat": 41.823,
      "lng": 71.4187,
      "population": 1203230
    },
    {
      "popularity": 385,
      "slug": "united-states/kansas/lawrence",
      "city": "Lawrence",
      "A2": "Kansas",
      "country": "United States",
      "lat": 38.9597,
      "lng": 95.2641,
      "population": 98648
    },
    {
      "popularity": 386,
      "slug": "germany/jena",
      "city": "Jena",
      "A2": "Thuringia",
      "country": "Germany",
      "lat": 50.9272,
      "lng": 11.5864,
      "population": 111407
    },
    {
      "popularity": 387,
      "slug": "united-states/north-dakota/minot",
      "city": "Minot",
      "A2": "North Dakota",
      "country": "United States",
      "lat": 48.2375,
      "lng": 101.2781,
      "population": 49425
    },
    {
      "popularity": 388,
      "slug": "south-korea/gwangju",
      "city": "Gwangju",
      "A2": "Gwangju",
      "country": "South Korea",
      "lat": 35.1667,
      "lng": 126.9167,
      "population": 1490092
    },
    {
      "popularity": 389,
      "slug": "united-kingdom/aberdeen",
      "city": "Aberdeen",
      "A2": "Aberdeen City",
      "country": "United Kingdom",
      "lat": 57.15,
      "lng": 2.11,
      "population": 200680
    },
    {
      "popularity": 390,
      "slug": "jordan/amman",
      "city": "Amman",
      "A2": "Al ‘Āşimah",
      "country": "Jordan",
      "lat": 31.95,
      "lng": 35.9333,
      "population": 4007526
    },
    {
      "popularity": 391,
      "slug": "kyrgyzstan/bishkek",
      "city": "Bishkek",
      "A2": "Bishkek",
      "country": "Kyrgyzstan",
      "lat": 42.8667,
      "lng": 74.5667,
      "population": 1053900
    },
    {
      "popularity": 392,
      "slug": "nigeria/ibadan",
      "city": "Ibadan",
      "A2": "Oyo",
      "country": "Nigeria",
      "lat": 7.3964,
      "lng": 3.9167,
      "population": 2550593
    },
    {
      "popularity": 393,
      "slug": "united-states/texas/corpus-christi",
      "city": "Corpus Christi",
      "A2": "Texas",
      "country": "United States",
      "lat": 27.726,
      "lng": 97.3755,
      "population": 342464
    },
    {
      "popularity": 394,
      "slug": "egypt/cairo",
      "city": "Cairo",
      "A2": "Al Qāhirah",
      "country": "Egypt",
      "lat": 30.0444,
      "lng": 31.2358,
      "population": 19787000
    },
    {
      "popularity": 395,
      "slug": "united-states/pennsylvania/scranton",
      "city": "Scranton",
      "A2": "Pennsylvania",
      "country": "United States",
      "lat": 41.4044,
      "lng": 75.6649,
      "population": 384250
    },
    {
      "popularity": 396,
      "slug": "canada/kelowna",
      "city": "Kelowna",
      "A2": "British Columbia",
      "country": "Canada",
      "lat": 49.8881,
      "lng": 119.4956,
      "population": 142146
    },
    {
      "popularity": 397,
      "slug": "united-states/north-carolina/high-point",
      "city": "High Point",
      "A2": "North Carolina",
      "country": "United States",
      "lat": 35.9907,
      "lng": 79.9938,
      "population": 179913
    },
    {
      "popularity": 398,
      "slug": "united-states/new-mexico/albuquerque",
      "city": "Albuquerque",
      "A2": "New Mexico",
      "country": "United States",
      "lat": 35.1053,
      "lng": 106.6464,
      "population": 761195
    },
    {
      "popularity": 399,
      "slug": "united-kingdom/northampton",
      "city": "Northampton",
      "A2": "Northamptonshire",
      "country": "United Kingdom",
      "lat": 52.2304,
      "lng": 0.8938,
      "population": 212100
    },
    {
      "popularity": 400,
      "slug": "united-kingdom/bath",
      "city": "Bath",
      "A2": "Bath and North East Somerset",
      "country": "United Kingdom",
      "lat": 51.38,
      "lng": 2.36,
      "population": 94782
    },
    {
      "popularity": 401,
      "slug": "azerbaijan/baku",
      "city": "Baku",
      "A2": "Bakı",
      "country": "Azerbaijan",
      "lat": 40.3667,
      "lng": 49.8352,
      "population": 2181800
    },
    {
      "popularity": 402,
      "slug": "united-states/illinois/bloomington",
      "city": "Bloomington",
      "A2": "Illinois",
      "country": "United States",
      "lat": 40.4757,
      "lng": 88.9703,
      "population": 133846
    },
    {
      "popularity": 403,
      "slug": "united-states/mississippi/jackson",
      "city": "Jackson",
      "A2": "Mississippi",
      "country": "United States",
      "lat": 32.3163,
      "lng": 90.2124,
      "population": 325350
    },
    {
      "popularity": 404,
      "slug": "germany/frankfurt",
      "city": "Frankfurt",
      "A2": "Hesse",
      "country": "Germany",
      "lat": 50.1136,
      "lng": 8.6797,
      "population": 764104
    },
    {
      "popularity": 405,
      "slug": "united-states/arkansas/springdale",
      "city": "Springdale",
      "A2": "Arkansas",
      "country": "United States",
      "lat": 36.1899,
      "lng": 94.1574,
      "population": 81125
    },
    {
      "popularity": 406,
      "slug": "ecuador/guayaquil",
      "city": "Guayaquil",
      "A2": "Guayas",
      "country": "Ecuador",
      "lat": 2.19,
      "lng": 79.8875,
      "population": 2723665
    },
    {
      "popularity": 407,
      "slug": "germany/karlsruhe",
      "city": "Karlsruhe",
      "A2": "Baden Württemberg",
      "country": "Germany",
      "lat": 49.0167,
      "lng": 8.4,
      "population": 308436
    },
    {
      "popularity": 408,
      "slug": "brazil/campinas",
      "city": "Campinas",
      "A2": "São Paulo",
      "country": "Brazil",
      "lat": 22.9009,
      "lng": 47.0573,
      "population": 1164098
    },
    {
      "popularity": 409,
      "slug": "united-states/iowa/cedar-rapids",
      "city": "Cedar Rapids",
      "A2": "Iowa",
      "country": "United States",
      "lat": 41.9665,
      "lng": 91.6782,
      "population": 188038
    },
    {
      "popularity": 410,
      "slug": "lithuania/vilnius",
      "city": "Vilnius",
      "A2": "Vilniaus Miestas",
      "country": "Lithuania",
      "lat": 54.6833,
      "lng": 25.2833,
      "population": 574147
    },
    {
      "popularity": 411,
      "slug": "mexico/aguascalientes",
      "city": "Aguascalientes",
      "A2": "Aguascalientes",
      "country": "Mexico",
      "lat": 21.876,
      "lng": 102.296,
      "population": 934424
    },
    {
      "popularity": 412,
      "slug": "germany/hagen",
      "city": "Hagen",
      "A2": "North Rhine Westphalia",
      "country": "Germany",
      "lat": 51.3594,
      "lng": 7.475,
      "population": 188687
    },
    {
      "popularity": 413,
      "slug": "united-states/alabama/huntsville",
      "city": "Huntsville",
      "A2": "Alabama",
      "country": "United States",
      "lat": 34.6988,
      "lng": 86.6412,
      "population": 319249
    },
    {
      "popularity": 414,
      "slug": "canada/moncton",
      "city": "Moncton",
      "A2": "New Brunswick",
      "country": "Canada",
      "lat": 46.1328,
      "lng": 64.7714,
      "population": 108620
    },
    {
      "popularity": 415,
      "slug": "canada/montreal",
      "city": "Montreal",
      "A2": "Quebec",
      "country": "Canada",
      "lat": 45.5089,
      "lng": 73.5617,
      "population": 3519595
    },
    {
      "popularity": 416,
      "slug": "united-states/pennsylvania/bethlehem",
      "city": "Bethlehem",
      "A2": "Pennsylvania",
      "country": "United States",
      "lat": 40.6266,
      "lng": 75.3679,
      "population": 75815
    },
    {
      "popularity": 417,
      "slug": "united-states/michigan/flint",
      "city": "Flint",
      "A2": "Michigan",
      "country": "United States",
      "lat": 43.0235,
      "lng": 83.6922,
      "population": 332190
    },
    {
      "popularity": 418,
      "slug": "argentina/mendoza",
      "city": "Mendoza",
      "A2": "Mendoza",
      "country": "Argentina",
      "lat": 32.8833,
      "lng": 68.8333,
      "population": 114822
    },
    {
      "popularity": 419,
      "slug": "canada/guelph",
      "city": "Guelph",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 43.55,
      "lng": 80.25,
      "population": 131794
    },
    {
      "popularity": 420,
      "slug": "united-states/north-carolina/greensboro",
      "city": "Greensboro",
      "A2": "North Carolina",
      "country": "United States",
      "lat": 36.0956,
      "lng": 79.8269,
      "population": 343090
    },
    {
      "popularity": 421,
      "slug": "madagascar/antananarivo",
      "city": "Antananarivo",
      "A2": "Antananarivo",
      "country": "Madagascar",
      "lat": 18.9386,
      "lng": 47.5214,
      "population": 2610000
    },
    {
      "popularity": 422,
      "slug": "iceland/reykjavik",
      "city": "Reykjavik",
      "A2": 0,
      "country": "Iceland",
      "lat": 64.1475,
      "lng": 21.935,
      "population": 128793
    },
    {
      "popularity": 423,
      "slug": "united-states/arkansas/rogers",
      "city": "Rogers",
      "A2": "Arkansas",
      "country": "United States",
      "lat": 36.3172,
      "lng": 94.1526,
      "population": 68669
    },
    {
      "popularity": 424,
      "slug": "canada/fredericton",
      "city": "Fredericton",
      "A2": "New Brunswick",
      "country": "Canada",
      "lat": 45.9636,
      "lng": 66.6431,
      "population": 58220
    },
    {
      "popularity": 425,
      "slug": "india/surat",
      "city": "Surat",
      "A2": "Gujarāt",
      "country": "India",
      "lat": 21.17,
      "lng": 72.83,
      "population": 4875000
    },
    {
      "popularity": 426,
      "slug": "united-states/california/palmdale",
      "city": "Palmdale",
      "A2": "California",
      "country": "United States",
      "lat": 34.5944,
      "lng": 118.1057,
      "population": 155079
    },
    {
      "popularity": 427,
      "slug": "mexico/san-luis-potosi",
      "city": "San Luis Potosi",
      "A2": "San Luis Potosí",
      "country": "Mexico",
      "lat": 22.1511,
      "lng": 100.9761,
      "population": 772828
    },
    {
      "popularity": 428,
      "slug": "algeria/constantine",
      "city": "Constantine",
      "A2": "Constantine",
      "country": "Algeria",
      "lat": 36.365,
      "lng": 6.6147,
      "population": 448374
    },
    {
      "popularity": 429,
      "slug": "australia/brisbane",
      "city": "Brisbane",
      "A2": "Queensland",
      "country": "Australia",
      "lat": 27.4678,
      "lng": 153.0281,
      "population": 2360241
    },
    {
      "popularity": 430,
      "slug": "united-states/california/modesto",
      "city": "Modesto",
      "A2": "California",
      "country": "United States",
      "lat": 37.6374,
      "lng": 121.0028,
      "population": 383134
    },
    {
      "popularity": 431,
      "slug": "colombia/bucaramanga",
      "city": "Bucaramanga",
      "A2": "Santander",
      "country": "Colombia",
      "lat": 7.1186,
      "lng": 73.1161,
      "population": 581130
    },
    {
      "popularity": 432,
      "slug": "spain/madrid",
      "city": "Madrid",
      "A2": "Madrid",
      "country": "Spain",
      "lat": 40.4167,
      "lng": 3.7167,
      "population": 6006000
    },
    {
      "popularity": 433,
      "slug": "mexico/puebla",
      "city": "Puebla",
      "A2": "Puebla",
      "country": "Mexico",
      "lat": 19.0333,
      "lng": 98.1833,
      "population": 1576259
    },
    {
      "popularity": 434,
      "slug": "china/dongguan",
      "city": "Dongguan",
      "A2": "Guangdong",
      "country": "China",
      "lat": 23.0475,
      "lng": 113.7493,
      "population": 8142000
    },
    {
      "popularity": 435,
      "slug": "egypt/alexandria",
      "city": "Alexandria",
      "A2": "Al Iskandarīyah",
      "country": "Egypt",
      "lat": 31.2,
      "lng": 29.9167,
      "population": 4870000
    },
    {
      "popularity": 436,
      "slug": "south-korea/suwon",
      "city": "Suwon",
      "A2": "Gyeonggi",
      "country": "South Korea",
      "lat": 37.2858,
      "lng": 127.01,
      "population": 1234300
    },
    {
      "popularity": 437,
      "slug": "brazil/belo-horizonte",
      "city": "Belo Horizonte",
      "A2": "Minas Gerais",
      "country": "Brazil",
      "lat": 19.9281,
      "lng": 43.9419,
      "population": 5159000
    },
    {
      "popularity": 438,
      "slug": "argentina/mar-del-plata",
      "city": "Mar Del Plata",
      "A2": "Buenos Aires",
      "country": "Argentina",
      "lat": 38,
      "lng": 57.55,
      "population": 593337
    },
    {
      "popularity": 439,
      "slug": "united-states/tennessee/johnson-city",
      "city": "Johnson City",
      "A2": "Tennessee",
      "country": "United States",
      "lat": 36.3406,
      "lng": 82.3803,
      "population": 127571
    },
    {
      "popularity": 440,
      "slug": "netherlands/rotterdam",
      "city": "Rotterdam",
      "A2": "Zuid Holland",
      "country": "Netherlands",
      "lat": 51.9225,
      "lng": 4.4792,
      "population": 631155
    },
    {
      "popularity": 441,
      "slug": "greece/chania",
      "city": "Chania",
      "A2": "Kríti",
      "country": "Greece",
      "lat": 35.5167,
      "lng": 24.0167,
      "population": 53910
    },
    {
      "popularity": 442,
      "slug": "united-states/oregon/oregon-city",
      "city": "Oregon City",
      "A2": "Oregon",
      "country": "United States",
      "lat": 45.3415,
      "lng": 122.5927,
      "population": 37339
    },
    {
      "popularity": 443,
      "slug": "mexico/toluca",
      "city": "Toluca",
      "A2": "México",
      "country": "Mexico",
      "lat": 19.2925,
      "lng": 99.6569,
      "population": 223876
    },
    {
      "popularity": 444,
      "slug": "united-states/wyoming/casper",
      "city": "Casper",
      "A2": "Wyoming",
      "country": "United States",
      "lat": 42.842,
      "lng": 106.3207,
      "population": 67598
    },
    {
      "popularity": 445,
      "slug": "united-states/illinois/decatur",
      "city": "Decatur",
      "A2": "Illinois",
      "country": "United States",
      "lat": 39.8556,
      "lng": 88.9337,
      "population": 87236
    },
    {
      "popularity": 446,
      "slug": "ireland/dublin",
      "city": "Dublin",
      "A2": "Dublin",
      "country": "Ireland",
      "lat": 53.3497,
      "lng": 6.2603,
      "population": 553165
    },
    {
      "popularity": 447,
      "slug": "montenegro/podgorica",
      "city": "Podgorica",
      "A2": "Podgorica",
      "country": "Montenegro",
      "lat": 42.4397,
      "lng": 19.2661,
      "population": 174515
    },
    {
      "popularity": 448,
      "slug": "china/weifang",
      "city": "Weifang",
      "A2": "Shandong",
      "country": "China",
      "lat": 36.7167,
      "lng": 119.1,
      "population": 9373000
    },
    {
      "popularity": 449,
      "slug": "united-states/alabama/mobile",
      "city": "Mobile",
      "A2": "Alabama",
      "country": "United States",
      "lat": 30.6783,
      "lng": 88.1162,
      "population": 315502
    },
    {
      "popularity": 450,
      "slug": "united-states/wisconsin/eau-claire",
      "city": "Eau Claire",
      "A2": "Wisconsin",
      "country": "United States",
      "lat": 44.8199,
      "lng": 91.4949,
      "population": 107404
    },
    {
      "popularity": 451,
      "slug": "united-states/tennessee/memphis",
      "city": "Memphis",
      "A2": "Tennessee",
      "country": "United States",
      "lat": 35.1046,
      "lng": 89.9773,
      "population": 1066967
    },
    {
      "popularity": 452,
      "slug": "norway/oslo",
      "city": "Oslo",
      "A2": "Oslo",
      "country": "Norway",
      "lat": 59.9111,
      "lng": 10.7528,
      "population": 693494
    },
    {
      "popularity": 453,
      "slug": "united-states/nebraska/grand-island",
      "city": "Grand Island",
      "A2": "Nebraska",
      "country": "United States",
      "lat": 40.9214,
      "lng": 98.3584,
      "population": 53296
    },
    {
      "popularity": 454,
      "slug": "curaçao/willemstad",
      "city": "Willemstad",
      "A2": 0,
      "country": "Curaçao",
      "lat": 12.108,
      "lng": 68.935,
      "population": 150000
    },
    {
      "popularity": 455,
      "slug": "united-states/colorado/colorado-springs",
      "city": "Colorado Springs",
      "A2": "Colorado",
      "country": "United States",
      "lat": 38.8674,
      "lng": 104.7606,
      "population": 642413
    },
    {
      "popularity": 456,
      "slug": "united-states/georgia/warner-robins",
      "city": "Warner Robins",
      "A2": "Georgia",
      "country": "United States",
      "lat": 32.597,
      "lng": 83.6529,
      "population": 155140
    },
    {
      "popularity": 457,
      "slug": "morocco/casablanca",
      "city": "Casablanca",
      "A2": "Casablanca Settat",
      "country": "Morocco",
      "lat": 33.5992,
      "lng": 7.62,
      "population": 4370000
    },
    {
      "popularity": 458,
      "slug": "united-states/north-carolina/wilmington",
      "city": "Wilmington",
      "A2": "North Carolina",
      "country": "United States",
      "lat": 34.21,
      "lng": 77.8866,
      "population": 255616
    },
    {
      "popularity": 459,
      "slug": "france/lyon",
      "city": "Lyon",
      "A2": "Auvergne Rhône Alpes",
      "country": "France",
      "lat": 45.76,
      "lng": 4.84,
      "population": 518635
    },
    {
      "popularity": 460,
      "slug": "laos/vientiane",
      "city": "Vientiane",
      "A2": "Viangchan",
      "country": "Laos",
      "lat": 17.9667,
      "lng": 102.6,
      "population": 948487
    },
    {
      "popularity": 461,
      "slug": "united-states/indiana/terre-haute",
      "city": "Terre Haute",
      "A2": "Indiana",
      "country": "United States",
      "lat": 39.4654,
      "lng": 87.3763,
      "population": 92490
    },
    {
      "popularity": 462,
      "slug": "united-states/iowa/des-moines",
      "city": "Des Moines",
      "A2": "Iowa",
      "country": "United States",
      "lat": 41.5725,
      "lng": 93.6105,
      "population": 473957
    },
    {
      "popularity": 463,
      "slug": "united-states/new-york/beacon",
      "city": "Beacon",
      "A2": "New York",
      "country": "United States",
      "lat": 41.5036,
      "lng": 73.9655,
      "population": 13968
    },
    {
      "popularity": 464,
      "slug": "germany/nuremberg",
      "city": "Nuremberg",
      "A2": "Bavaria",
      "country": "Germany",
      "lat": 49.4539,
      "lng": 11.0775,
      "population": 515543
    },
    {
      "popularity": 465,
      "slug": "china/quanzhou",
      "city": "Quanzhou",
      "A2": "Fujian",
      "country": "China",
      "lat": 24.9139,
      "lng": 118.5858,
      "population": 6480000
    },
    {
      "popularity": 466,
      "slug": "united-states/louisiana/baton-rouge",
      "city": "Baton Rouge",
      "A2": "Louisiana",
      "country": "United States",
      "lat": 30.4418,
      "lng": 91.131,
      "population": 570308
    },
    {
      "popularity": 467,
      "slug": "china/zhanjiang",
      "city": "Zhanjiang",
      "A2": "Guangdong",
      "country": "China",
      "lat": 21.1967,
      "lng": 110.4031,
      "population": 7332000
    },
    {
      "popularity": 468,
      "slug": "india/mumbai",
      "city": "Mumbai",
      "A2": "Mahārāshtra",
      "country": "India",
      "lat": 19.0758,
      "lng": 72.8775,
      "population": 22186000
    },
    {
      "popularity": 469,
      "slug": "united-states/arkansas/little-rock",
      "city": "Little Rock",
      "A2": "Arkansas",
      "country": "United States",
      "lat": 34.7256,
      "lng": 92.3576,
      "population": 439815
    },
    {
      "popularity": 470,
      "slug": "united-states/california/fresno",
      "city": "Fresno",
      "A2": "California",
      "country": "United States",
      "lat": 36.7831,
      "lng": 119.7941,
      "population": 703498
    },
    {
      "popularity": 471,
      "slug": "brazil/uberlandia",
      "city": "Uberlandia",
      "A2": "Minas Gerais",
      "country": "Brazil",
      "lat": 18.9189,
      "lng": 48.2769,
      "population": 604013
    },
    {
      "popularity": 472,
      "slug": "united-states/california/riverside",
      "city": "Riverside",
      "A2": "California",
      "country": "United States",
      "lat": 33.9381,
      "lng": 117.3948,
      "population": 2107852
    },
    {
      "popularity": 473,
      "slug": "qatar/doha",
      "city": "Doha",
      "A2": "Ad Dawḩah",
      "country": "Qatar",
      "lat": 25.3,
      "lng": 51.5333,
      "population": 1186023
    },
    {
      "popularity": 474,
      "slug": "united-states/new-jersey/bridgeton",
      "city": "Bridgeton",
      "A2": "New Jersey",
      "country": "United States",
      "lat": 39.4286,
      "lng": 75.2281,
      "population": 33379
    },
    {
      "popularity": 475,
      "slug": "colombia/pasto",
      "city": "Pasto",
      "A2": "Nariño",
      "country": "Colombia",
      "lat": 1.21,
      "lng": 77.2747,
      "population": 382236
    },
    {
      "popularity": 476,
      "slug": "germany/bremen",
      "city": "Bremen",
      "A2": "Bremen",
      "country": "Germany",
      "lat": 53.0769,
      "lng": 8.8089,
      "population": 566573
    },
    {
      "popularity": 477,
      "slug": "guyana/georgetown",
      "city": "Georgetown",
      "A2": "Demerara Mahaica",
      "country": "Guyana",
      "lat": 6.7833,
      "lng": 58.1667,
      "population": 200500
    },
    {
      "popularity": 478,
      "slug": "france/toulouse",
      "city": "Toulouse",
      "A2": "Occitanie",
      "country": "France",
      "lat": 43.6045,
      "lng": 1.444,
      "population": 486828
    },
    {
      "popularity": 479,
      "slug": "united-states/wisconsin/kenosha",
      "city": "Kenosha",
      "A2": "Wisconsin",
      "country": "United States",
      "lat": 42.5864,
      "lng": 87.8765,
      "population": 124972
    },
    {
      "popularity": 480,
      "slug": "peru/cusco",
      "city": "Cusco",
      "A2": "Cusco",
      "country": "Peru",
      "lat": 13.5222,
      "lng": 71.9833,
      "population": 428450
    },
    {
      "popularity": 481,
      "slug": "austria/graz",
      "city": "Graz",
      "A2": "Steiermark",
      "country": "Austria",
      "lat": 47.0708,
      "lng": 15.4386,
      "population": 289440
    },
    {
      "popularity": 482,
      "slug": "united-states/idaho/pocatello",
      "city": "Pocatello",
      "A2": "Idaho",
      "country": "United States",
      "lat": 42.8724,
      "lng": 112.4646,
      "population": 72878
    },
    {
      "popularity": 483,
      "slug": "china/beijing",
      "city": "Beijing",
      "A2": "Beijing",
      "country": "China",
      "lat": 39.904,
      "lng": 116.4075,
      "population": 19437000
    },
    {
      "popularity": 484,
      "slug": "united-states/wisconsin/janesville",
      "city": "Janesville",
      "A2": "Wisconsin",
      "country": "United States",
      "lat": 42.6855,
      "lng": 89.0136,
      "population": 70755
    },
    {
      "popularity": 485,
      "slug": "finland/jyvaskyla",
      "city": "Jyvaskyla",
      "A2": "Keski Suomi",
      "country": "Finland",
      "lat": 62.2333,
      "lng": 25.7333,
      "population": 137368
    },
    {
      "popularity": 486,
      "slug": "spain/malaga",
      "city": "Malaga",
      "A2": "Andalusia",
      "country": "Spain",
      "lat": 36.7194,
      "lng": 4.42,
      "population": 577405
    },
    {
      "popularity": 487,
      "slug": "united-kingdom/nottingham",
      "city": "Nottingham",
      "A2": "Nottingham",
      "country": "United Kingdom",
      "lat": 52.9533,
      "lng": 1.15,
      "population": 289301
    },
    {
      "popularity": 488,
      "slug": "bosnia-and-herzegovina/sarajevo",
      "city": "Sarajevo",
      "A2": "Bosnia and Herzegovina, Federation of",
      "country": "Bosnia And Herzegovina",
      "lat": 43.8563,
      "lng": 18.4132,
      "population": 275524
    },
    {
      "popularity": 489,
      "slug": "thailand/hua-hin",
      "city": "Hua Hin",
      "A2": "Prachuap Khiri Khan",
      "country": "Thailand",
      "lat": 12.5686,
      "lng": 99.9578,
      "population": 59369
    },
    {
      "popularity": 490,
      "slug": "china/chongqing",
      "city": "Chongqing",
      "A2": "Chongqing",
      "country": "China",
      "lat": 29.55,
      "lng": 106.5069,
      "population": 8261000
    },
    {
      "popularity": 491,
      "slug": "united-states/south-dakota/rapid-city",
      "city": "Rapid City",
      "A2": "South Dakota",
      "country": "United States",
      "lat": 44.0716,
      "lng": 103.2204,
      "population": 92664
    },
    {
      "popularity": 492,
      "slug": "united-states/texas/pharr",
      "city": "Pharr",
      "A2": "Texas",
      "country": "United States",
      "lat": 26.1685,
      "lng": 98.1904,
      "population": 79112
    },
    {
      "popularity": 493,
      "slug": "colombia/barranquilla",
      "city": "Barranquilla",
      "A2": "Atlántico",
      "country": "Colombia",
      "lat": 10.9639,
      "lng": 74.7964,
      "population": 1274250
    },
    {
      "popularity": 494,
      "slug": "nigeria/benin-city",
      "city": "Benin City",
      "A2": "Edo",
      "country": "Nigeria",
      "lat": 6.3176,
      "lng": 5.6145,
      "population": 1147188
    },
    {
      "popularity": 495,
      "slug": "nigeria/port-harcourt",
      "city": "Port Harcourt",
      "A2": "Rivers",
      "country": "Nigeria",
      "lat": 4.75,
      "lng": 7,
      "population": 1005904
    },
    {
      "popularity": 496,
      "slug": "brazil/recife",
      "city": "Recife",
      "A2": "Pernambuco",
      "country": "Brazil",
      "lat": 8.0539,
      "lng": 34.8808,
      "population": 1653461
    },
    {
      "popularity": 497,
      "slug": "poland/rzeszow",
      "city": "Rzeszow",
      "A2": "Podkarpackie",
      "country": "Poland",
      "lat": 50.05,
      "lng": 22,
      "population": 182548
    },
    {
      "popularity": 498,
      "slug": "guatemala/panajachel",
      "city": "Panajachel",
      "A2": "Sololá",
      "country": "Guatemala",
      "lat": 14.7361,
      "lng": 91.1558,
      "population": 11142
    },
    {
      "popularity": 499,
      "slug": "united-states/illinois/peoria",
      "city": "Peoria",
      "A2": "Illinois",
      "country": "United States",
      "lat": 40.752,
      "lng": 89.6153,
      "population": 256286
    },
    {
      "popularity": 500,
      "slug": "united-states/utah/provo",
      "city": "Provo",
      "A2": "Utah",
      "country": "United States",
      "lat": 40.2457,
      "lng": 111.6457,
      "population": 500617
    },
    {
      "popularity": 501,
      "slug": "united-states/north-carolina/charlotte",
      "city": "Charlotte",
      "A2": "North Carolina",
      "country": "United States",
      "lat": 35.208,
      "lng": 80.8304,
      "population": 1512923
    },
    {
      "popularity": 502,
      "slug": "united-states/colorado/pueblo",
      "city": "Pueblo",
      "A2": "Colorado",
      "country": "United States",
      "lat": 38.2705,
      "lng": 104.6112,
      "population": 143932
    },
    {
      "popularity": 503,
      "slug": "china/nanning",
      "city": "Nanning",
      "A2": "Guangxi",
      "country": "China",
      "lat": 22.8192,
      "lng": 108.315,
      "population": 7254100
    },
    {
      "popularity": 504,
      "slug": "united-states/kentucky/lexington",
      "city": "Lexington",
      "A2": "Kentucky",
      "country": "United States",
      "lat": 38.0423,
      "lng": 84.4587,
      "population": 323152
    },
    {
      "popularity": 505,
      "slug": "united-kingdom/luton",
      "city": "Luton",
      "A2": "Luton",
      "country": "United Kingdom",
      "lat": 51.8783,
      "lng": 0.4147,
      "population": 213052
    },
    {
      "popularity": 506,
      "slug": "united-states/kansas/topeka",
      "city": "Topeka",
      "A2": "Kansas",
      "country": "United States",
      "lat": 39.0346,
      "lng": 95.6955,
      "population": 147458
    },
    {
      "popularity": 507,
      "slug": "switzerland/geneva",
      "city": "Geneva",
      "A2": "Genève",
      "country": "Switzerland",
      "lat": 46.2,
      "lng": 6.15,
      "population": 201818
    },
    {
      "popularity": 508,
      "slug": "united-states/illinois/rockford",
      "city": "Rockford",
      "A2": "Illinois",
      "country": "United States",
      "lat": 42.2597,
      "lng": 89.0641,
      "population": 282762
    },
    {
      "popularity": 509,
      "slug": "finland/oulu",
      "city": "Oulu",
      "A2": "Pohjois Pohjanmaa",
      "country": "Finland",
      "lat": 65.0142,
      "lng": 25.4719,
      "population": 200526
    },
    {
      "popularity": 510,
      "slug": "united-states/nebraska/kearney",
      "city": "Kearney",
      "A2": "Nebraska",
      "country": "United States",
      "lat": 40.701,
      "lng": 99.0834,
      "population": 34418
    },
    {
      "popularity": 511,
      "slug": "germany/bielefeld",
      "city": "Bielefeld",
      "A2": "North Rhine Westphalia",
      "country": "Germany",
      "lat": 52.0167,
      "lng": 8.5333,
      "population": 333509
    },
    {
      "popularity": 512,
      "slug": "germany/stuttgart",
      "city": "Stuttgart",
      "A2": "Baden Württemberg",
      "country": "Germany",
      "lat": 48.7761,
      "lng": 9.1775,
      "population": 630305
    },
    {
      "popularity": 513,
      "slug": "finland/espoo",
      "city": "Espoo",
      "A2": "Uusimaa",
      "country": "Finland",
      "lat": 60.21,
      "lng": 24.66,
      "population": 269802
    },
    {
      "popularity": 514,
      "slug": "united-states/california/turlock",
      "city": "Turlock",
      "A2": "California",
      "country": "United States",
      "lat": 37.5053,
      "lng": 120.8588,
      "population": 107317
    },
    {
      "popularity": 515,
      "slug": "canada/abbotsford",
      "city": "Abbotsford",
      "A2": "British Columbia",
      "country": "Canada",
      "lat": 49.05,
      "lng": 122.3167,
      "population": 141397
    },
    {
      "popularity": 516,
      "slug": "united-states/connecticut/hartford",
      "city": "Hartford",
      "A2": "Connecticut",
      "country": "United States",
      "lat": 41.7661,
      "lng": 72.6834,
      "population": 905152
    },
    {
      "popularity": 517,
      "slug": "united-states/ohio/toledo",
      "city": "Toledo",
      "A2": "Ohio",
      "country": "United States",
      "lat": 41.6639,
      "lng": 83.5822,
      "population": 482111
    },
    {
      "popularity": 518,
      "slug": "lithuania/klaipeda",
      "city": "Klaipeda",
      "A2": "Klaipėdos Miestas",
      "country": "Lithuania",
      "lat": 55.7075,
      "lng": 21.1428,
      "population": 164310
    },
    {
      "popularity": 519,
      "slug": "united-states/california/porterville",
      "city": "Porterville",
      "A2": "California",
      "country": "United States",
      "lat": 36.0644,
      "lng": 119.0338,
      "population": 77318
    },
    {
      "popularity": 520,
      "slug": "united-states/florida/ocala",
      "city": "Ocala",
      "A2": "Florida",
      "country": "United States",
      "lat": 29.178,
      "lng": 82.1511,
      "population": 169383
    },
    {
      "popularity": 521,
      "slug": "japan/tokyo",
      "city": "Tokyo",
      "A2": "Tōkyō",
      "country": "Japan",
      "lat": 35.6839,
      "lng": 139.7744,
      "population": 39105000
    },
    {
      "popularity": 522,
      "slug": "united-states/florida/palm-bay",
      "city": "Palm Bay",
      "A2": "Florida",
      "country": "United States",
      "lat": 27.955,
      "lng": 80.6627,
      "population": 507002
    },
    {
      "popularity": 523,
      "slug": "morocco/agadir",
      "city": "Agadir",
      "A2": "Souss Massa",
      "country": "Morocco",
      "lat": 30.4167,
      "lng": 9.5833,
      "population": 421844
    },
    {
      "popularity": 524,
      "slug": "india/pune",
      "city": "Pune",
      "A2": "Mahārāshtra",
      "country": "India",
      "lat": 18.5196,
      "lng": 73.8553,
      "population": 7948000
    },
    {
      "popularity": 525,
      "slug": "kosovo/pristina",
      "city": "Pristina",
      "A2": "Prishtinë",
      "country": "Kosovo",
      "lat": 42.6633,
      "lng": 21.1622,
      "population": 0
    },
    {
      "popularity": 526,
      "slug": "canada/nanaimo",
      "city": "Nanaimo",
      "A2": "British Columbia",
      "country": "Canada",
      "lat": 49.1642,
      "lng": 123.9364,
      "population": 90504
    },
    {
      "popularity": 527,
      "slug": "germany/hannover",
      "city": "Hannover",
      "A2": "Lower Saxony",
      "country": "Germany",
      "lat": 52.3744,
      "lng": 9.7386,
      "population": 542668
    },
    {
      "popularity": 528,
      "slug": "samoa/apia",
      "city": "Apia",
      "A2": "Tuamasaga",
      "country": "Samoa",
      "lat": 13.8333,
      "lng": 171.8333,
      "population": 37708
    },
    {
      "popularity": 529,
      "slug": "united-states/california/oakland",
      "city": "Oakland",
      "A2": "California",
      "country": "United States",
      "lat": 37.7903,
      "lng": 122.2165,
      "population": 433031
    },
    {
      "popularity": 530,
      "slug": "austria/vienna",
      "city": "Vienna",
      "A2": "Wien",
      "country": "Austria",
      "lat": 48.2083,
      "lng": 16.3725,
      "population": 1911191
    },
    {
      "popularity": 531,
      "slug": "united-states/connecticut/bridgeport",
      "city": "Bridgeport",
      "A2": "Connecticut",
      "country": "United States",
      "lat": 41.1918,
      "lng": 73.1953,
      "population": 924449
    },
    {
      "popularity": 532,
      "slug": "botswana/gaborone",
      "city": "Gaborone",
      "A2": "Gaborone",
      "country": "Botswana",
      "lat": 24.6569,
      "lng": 25.9086,
      "population": 231626
    },
    {
      "popularity": 533,
      "slug": "united-states/new-york/utica",
      "city": "Utica",
      "A2": "New York",
      "country": "United States",
      "lat": 43.0961,
      "lng": 75.226,
      "population": 112650
    },
    {
      "popularity": 534,
      "slug": "argentina/ushuaia",
      "city": "Ushuaia",
      "A2": "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
      "country": "Argentina",
      "lat": 54.8072,
      "lng": 68.3044,
      "population": 56956
    },
    {
      "popularity": 535,
      "slug": "china/shijiazhuang",
      "city": "Shijiazhuang",
      "A2": "Hebei",
      "country": "China",
      "lat": 38.0422,
      "lng": 114.5086,
      "population": 10784600
    },
    {
      "popularity": 537,
      "slug": "colombia/salento",
      "city": "Salento",
      "A2": "Quindío",
      "country": "Colombia",
      "lat": 4.6372,
      "lng": 75.5708,
      "population": 7103
    },
    {
      "popularity": 538,
      "slug": "united-states/colorado/boulder",
      "city": "Boulder",
      "A2": "Colorado",
      "country": "United States",
      "lat": 40.0249,
      "lng": 105.2523,
      "population": 124345
    },
    {
      "popularity": 539,
      "slug": "united-states/montana/helena",
      "city": "Helena",
      "A2": "Montana",
      "country": "United States",
      "lat": 46.5965,
      "lng": 112.0202,
      "population": 52936
    },
    {
      "popularity": 540,
      "slug": "united-states/illinois/joliet",
      "city": "Joliet",
      "A2": "Illinois",
      "country": "United States",
      "lat": 41.5189,
      "lng": 88.1499,
      "population": 147344
    },
    {
      "popularity": 541,
      "slug": "united-states/california/victorville",
      "city": "Victorville",
      "A2": "California",
      "country": "United States",
      "lat": 34.5277,
      "lng": 117.3536,
      "population": 346789
    },
    {
      "popularity": 542,
      "slug": "turkey/bodrum",
      "city": "Bodrum",
      "A2": "Muğla",
      "country": "Turkey",
      "lat": 37.0383,
      "lng": 27.4292,
      "population": 5136
    },
    {
      "popularity": 543,
      "slug": "nicaragua/leon",
      "city": "Leon",
      "A2": "León",
      "country": "Nicaragua",
      "lat": 12.4333,
      "lng": 86.8833,
      "population": 174051
    },
    {
      "popularity": 544,
      "slug": "united-states/california/delano",
      "city": "Delano",
      "A2": "California",
      "country": "United States",
      "lat": 35.767,
      "lng": 119.2637,
      "population": 54917
    },
    {
      "popularity": 545,
      "slug": "united-states/oklahoma/tulsa",
      "city": "Tulsa",
      "A2": "Oklahoma",
      "country": "United States",
      "lat": 36.1284,
      "lng": 95.9042,
      "population": 671033
    },
    {
      "popularity": 546,
      "slug": "china/shanghai",
      "city": "Shanghai",
      "A2": "Shanghai",
      "country": "China",
      "lat": 31.1667,
      "lng": 121.4667,
      "population": 22118000
    },
    {
      "popularity": 547,
      "slug": "congo-(brazzaville)/brazzaville",
      "city": "Brazzaville",
      "A2": "Brazzaville",
      "country": "Congo (Brazzaville)",
      "lat": 4.2667,
      "lng": 15.2833,
      "population": 1827000
    },
    {
      "popularity": 548,
      "slug": "niger/niamey",
      "city": "Niamey",
      "A2": "Niamey",
      "country": "Niger",
      "lat": 13.5086,
      "lng": 2.1111,
      "population": 1026848
    },
    {
      "popularity": 549,
      "slug": "united-states/illinois/waukegan",
      "city": "Waukegan",
      "A2": "Illinois",
      "country": "United States",
      "lat": 42.3697,
      "lng": 87.8716,
      "population": 86075
    },
    {
      "popularity": 550,
      "slug": "france/lille",
      "city": "Lille",
      "A2": "Hauts de France",
      "country": "France",
      "lat": 50.6278,
      "lng": 3.0583,
      "population": 233098
    },
    {
      "popularity": 551,
      "slug": "pakistan/islamabad",
      "city": "Islamabad",
      "A2": "Islāmābād",
      "country": "Pakistan",
      "lat": 33.6989,
      "lng": 73.0369,
      "population": 1014825
    },
    {
      "popularity": 552,
      "slug": "mexico/tulum",
      "city": "Tulum",
      "A2": "Quintana Roo",
      "country": "Mexico",
      "lat": 20.2119,
      "lng": 87.4658,
      "population": 33374
    },
    {
      "popularity": 553,
      "slug": "united-states/california/lodi",
      "city": "Lodi",
      "A2": "California",
      "country": "United States",
      "lat": 38.1218,
      "lng": 121.2932,
      "population": 74773
    },
    {
      "popularity": 554,
      "slug": "united-states/illinois/normal",
      "city": "Normal",
      "A2": "Illinois",
      "country": "United States",
      "lat": 40.5218,
      "lng": 88.9881,
      "population": 54469
    },
    {
      "popularity": 555,
      "slug": "united-states/washington/kennewick",
      "city": "Kennewick",
      "A2": "Washington",
      "country": "United States",
      "lat": 46.1978,
      "lng": 119.1732,
      "population": 240735
    },
    {
      "popularity": 556,
      "slug": "united-states/new-york/ithaca",
      "city": "Ithaca",
      "A2": "New York",
      "country": "United States",
      "lat": 42.4442,
      "lng": 76.5032,
      "population": 55137
    },
    {
      "popularity": 557,
      "slug": "south-africa/soweto",
      "city": "Soweto",
      "A2": "Gauteng",
      "country": "South Africa",
      "lat": 26.2678,
      "lng": 27.8586,
      "population": 1271628
    },
    {
      "popularity": 558,
      "slug": "peru/chachapoyas",
      "city": "Chachapoyas",
      "A2": "Amazonas",
      "country": "Peru",
      "lat": 6.2167,
      "lng": 77.85,
      "population": 32026
    },
    {
      "popularity": 559,
      "slug": "united-states/ohio/dayton",
      "city": "Dayton",
      "A2": "Ohio",
      "country": "United States",
      "lat": 39.7797,
      "lng": 84.1998,
      "population": 718353
    },
    {
      "popularity": 560,
      "slug": "united-kingdom/manchester",
      "city": "Manchester",
      "A2": "Manchester",
      "country": "United Kingdom",
      "lat": 53.4794,
      "lng": 2.2453,
      "population": 547627
    },
    {
      "popularity": 561,
      "slug": "united-states/mississippi/gulfport",
      "city": "Gulfport",
      "A2": "Mississippi",
      "country": "United States",
      "lat": 30.4271,
      "lng": 89.0703,
      "population": 220987
    },
    {
      "popularity": 562,
      "slug": "united-states/iowa/dubuque",
      "city": "Dubuque",
      "A2": "Iowa",
      "country": "United States",
      "lat": 42.5008,
      "lng": 90.7067,
      "population": 68109
    },
    {
      "popularity": 563,
      "slug": "costa-rica/liberia",
      "city": "Liberia",
      "A2": "Guanacaste",
      "country": "Costa Rica",
      "lat": 10.6338,
      "lng": 85.4333,
      "population": 45380
    },
    {
      "popularity": 564,
      "slug": "switzerland/zurich",
      "city": "Zurich",
      "A2": "Zürich",
      "country": "Switzerland",
      "lat": 47.3744,
      "lng": 8.5411,
      "population": 434008
    },
    {
      "popularity": 565,
      "slug": "united-states/oregon/corvallis",
      "city": "Corvallis",
      "A2": "Oregon",
      "country": "United States",
      "lat": 44.5697,
      "lng": 123.278,
      "population": 67467
    },
    {
      "popularity": 566,
      "slug": "brazil/sao-jose-dos-campos",
      "city": "Sao Jose Dos Campos",
      "A2": "São Paulo",
      "country": "Brazil",
      "lat": 23.1789,
      "lng": 45.8869,
      "population": 688597
    },
    {
      "popularity": 567,
      "slug": "united-states/michigan/lansing",
      "city": "Lansing",
      "A2": "Michigan",
      "country": "United States",
      "lat": 42.7142,
      "lng": 84.5601,
      "population": 324286
    },
    {
      "popularity": 568,
      "slug": "united-arab-emirates/sharjah",
      "city": "Sharjah",
      "A2": "Ash Shāriqah",
      "country": "United Arab Emirates",
      "lat": 25.3575,
      "lng": 55.3919,
      "population": 1247749
    },
    {
      "popularity": 569,
      "slug": "egypt/port-said",
      "city": "Port Said",
      "A2": "Būr Sa‘īd",
      "country": "Egypt",
      "lat": 31.25,
      "lng": 32.2833,
      "population": 524433
    },
    {
      "popularity": 570,
      "slug": "united-states/new-york/manhattan",
      "city": "Manhattan",
      "A2": "New York",
      "country": "United States",
      "lat": 40.7834,
      "lng": 73.9662,
      "population": 1628706
    },
    {
      "popularity": 571,
      "slug": "united-states/texas/wichita-falls",
      "city": "Wichita Falls",
      "A2": "Texas",
      "country": "United States",
      "lat": 33.9072,
      "lng": 98.5291,
      "population": 104683
    },
    {
      "popularity": 572,
      "slug": "colombia/palermo",
      "city": "Palermo",
      "A2": "Huila",
      "country": "Colombia",
      "lat": 2.8883,
      "lng": 75.4339,
      "population": 800000
    },
    {
      "popularity": 573,
      "slug": "united-states/florida/pensacola",
      "city": "Pensacola",
      "A2": "Florida",
      "country": "United States",
      "lat": 30.4427,
      "lng": 87.1886,
      "population": 346921
    },
    {
      "popularity": 574,
      "slug": "ghana/kumasi",
      "city": "Kumasi",
      "A2": "Ashanti",
      "country": "Ghana",
      "lat": 6.6833,
      "lng": 1.6167,
      "population": 2069350
    },
    {
      "popularity": 575,
      "slug": "montenegro/budva",
      "city": "Budva",
      "A2": "Budva",
      "country": "Montenegro",
      "lat": 42.2847,
      "lng": 18.8453,
      "population": 19218
    },
    {
      "popularity": 576,
      "slug": "united-states/pennsylvania/allentown",
      "city": "Allentown",
      "A2": "Pennsylvania",
      "country": "United States",
      "lat": 40.5961,
      "lng": 75.4756,
      "population": 683794
    },
    {
      "popularity": 577,
      "slug": "united-states/louisiana/shreveport",
      "city": "Shreveport",
      "A2": "Louisiana",
      "country": "United States",
      "lat": 32.4656,
      "lng": 93.7956,
      "population": 280062
    },
    {
      "popularity": 578,
      "slug": "south-korea/anyang",
      "city": "Anyang",
      "A2": "Gyeonggi",
      "country": "South Korea",
      "lat": 37.3925,
      "lng": 126.9269,
      "population": 573296
    },
    {
      "popularity": 579,
      "slug": "china/tangshan",
      "city": "Tangshan",
      "A2": "Hebei",
      "country": "China",
      "lat": 39.6292,
      "lng": 118.1742,
      "population": 7577289
    },
    {
      "popularity": 580,
      "slug": "united-kingdom/birmingham",
      "city": "Birmingham",
      "A2": "Birmingham",
      "country": "United Kingdom",
      "lat": 52.48,
      "lng": 1.9025,
      "population": 1137100
    },
    {
      "popularity": 581,
      "slug": "united-states/arizona/flagstaff",
      "city": "Flagstaff",
      "A2": "Arizona",
      "country": "United States",
      "lat": 35.1872,
      "lng": 111.6195,
      "population": 81974
    },
    {
      "popularity": 582,
      "slug": "mexico/cozumel",
      "city": "Cozumel",
      "A2": "Quintana Roo",
      "country": "Mexico",
      "lat": 20.5104,
      "lng": 86.9493,
      "population": 77236
    },
    {
      "popularity": 583,
      "slug": "congo-(kinshasa)/lubumbashi",
      "city": "Lubumbashi",
      "A2": "Haut Katanga",
      "country": "Congo (Kinshasa)",
      "lat": 11.6697,
      "lng": 27.4581,
      "population": 1786397
    },
    {
      "popularity": 584,
      "slug": "united-states/nevada/reno",
      "city": "Reno",
      "A2": "Nevada",
      "country": "United States",
      "lat": 39.5497,
      "lng": 119.8483,
      "population": 445020
    },
    {
      "popularity": 585,
      "slug": "germany/cologne",
      "city": "Cologne",
      "A2": "North Rhine Westphalia",
      "country": "Germany",
      "lat": 50.9422,
      "lng": 6.9578,
      "population": 1083498
    },
    {
      "popularity": 586,
      "slug": "united-states/california/yuba-city",
      "city": "Yuba City",
      "A2": "California",
      "country": "United States",
      "lat": 39.1357,
      "lng": 121.6381,
      "population": 120456
    },
    {
      "popularity": 587,
      "slug": "pakistan/bahawalpur",
      "city": "Bahawalpur",
      "A2": "Punjab",
      "country": "Pakistan",
      "lat": 29.3956,
      "lng": 71.6722,
      "population": 762111
    },
    {
      "popularity": 588,
      "slug": "united-states/ohio/cleveland",
      "city": "Cleveland",
      "A2": "Ohio",
      "country": "United States",
      "lat": 41.4767,
      "lng": 81.6804,
      "population": 1710093
    },
    {
      "popularity": 589,
      "slug": "uruguay/montevideo",
      "city": "Montevideo",
      "A2": "Montevideo",
      "country": "Uruguay",
      "lat": 34.8667,
      "lng": 56.1667,
      "population": 1319108
    },
    {
      "popularity": 590,
      "slug": "united-states/alaska/anchorage",
      "city": "Anchorage",
      "A2": "Alaska",
      "country": "United States",
      "lat": 61.1508,
      "lng": 149.1091,
      "population": 288000
    },
    {
      "popularity": 591,
      "slug": "united-states/illinois/champaign",
      "city": "Champaign",
      "A2": "Illinois",
      "country": "United States",
      "lat": 40.1144,
      "lng": 88.2735,
      "population": 159443
    },
    {
      "popularity": 592,
      "slug": "china/linyi",
      "city": "Linyi",
      "A2": "Shandong",
      "country": "China",
      "lat": 35.0606,
      "lng": 118.3425,
      "population": 10820000
    },
    {
      "popularity": 593,
      "slug": "pakistan/peshawar",
      "city": "Peshawar",
      "A2": "Khyber Pakhtunkhwa",
      "country": "Pakistan",
      "lat": 34,
      "lng": 71.5,
      "population": 1970042
    },
    {
      "popularity": 594,
      "slug": "united-states/oregon/eugene",
      "city": "Eugene",
      "A2": "Oregon",
      "country": "United States",
      "lat": 44.0563,
      "lng": 123.1173,
      "population": 273439
    },
    {
      "popularity": 595,
      "slug": "venezuela/maracaibo",
      "city": "Maracaibo",
      "A2": "Zulia",
      "country": "Venezuela",
      "lat": 10.6333,
      "lng": 71.6333,
      "population": 1551539
    },
    {
      "popularity": 596,
      "slug": "zambia/lusaka",
      "city": "Lusaka",
      "A2": "Lusaka",
      "country": "Zambia",
      "lat": 15.4167,
      "lng": 28.2833,
      "population": 1742979
    },
    {
      "popularity": 597,
      "slug": "togo/lome",
      "city": "Lome",
      "A2": "Maritime",
      "country": "Togo",
      "lat": 6.1319,
      "lng": 1.2228,
      "population": 837437
    },
    {
      "popularity": 598,
      "slug": "united-states/connecticut/new-haven",
      "city": "New Haven",
      "A2": "Connecticut",
      "country": "United States",
      "lat": 41.3112,
      "lng": 72.9246,
      "population": 564830
    },
    {
      "popularity": 599,
      "slug": "netherlands/nijmegen",
      "city": "Nijmegen",
      "A2": "Gelderland",
      "country": "Netherlands",
      "lat": 51.8475,
      "lng": 5.8625,
      "population": 177659
    },
    {
      "popularity": 600,
      "slug": "china/hangzhou",
      "city": "Hangzhou",
      "A2": "Zhejiang",
      "country": "China",
      "lat": 30.25,
      "lng": 120.1675,
      "population": 6713000
    },
    {
      "popularity": 601,
      "slug": "china/zhengzhou",
      "city": "Zhengzhou",
      "A2": "Henan",
      "country": "China",
      "lat": 34.7492,
      "lng": 113.6605,
      "population": 10136000
    },
    {
      "popularity": 602,
      "slug": "spain/a-coruna",
      "city": "A Coruna",
      "A2": "Galicia",
      "country": "Spain",
      "lat": 43.3667,
      "lng": 8.3833,
      "population": 245468
    },
    {
      "popularity": 603,
      "slug": "turkey/konya",
      "city": "Konya",
      "A2": "Konya",
      "country": "Turkey",
      "lat": 37.8714,
      "lng": 32.4847,
      "population": 157934
    },
    {
      "popularity": 604,
      "slug": "united-states/wisconsin/appleton",
      "city": "Appleton",
      "A2": "Wisconsin",
      "country": "United States",
      "lat": 44.2779,
      "lng": 88.3891,
      "population": 220570
    },
    {
      "popularity": 605,
      "slug": "bangladesh/dhaka",
      "city": "Dhaka",
      "A2": "Dhaka",
      "country": "Bangladesh",
      "lat": 23.7289,
      "lng": 90.3944,
      "population": 16839000
    },
    {
      "popularity": 606,
      "slug": "united-states/oregon/medford",
      "city": "Medford",
      "A2": "Oregon",
      "country": "United States",
      "lat": 42.3372,
      "lng": 122.8537,
      "population": 170876
    },
    {
      "popularity": 607,
      "slug": "brazil/brasilia",
      "city": "Brasilia",
      "A2": "Distrito Federal",
      "country": "Brazil",
      "lat": 15.7939,
      "lng": 47.8828,
      "population": 3015268
    },
    {
      "popularity": 608,
      "slug": "united-states/california/merced",
      "city": "Merced",
      "A2": "California",
      "country": "United States",
      "lat": 37.3057,
      "lng": 120.4778,
      "population": 145149
    },
    {
      "popularity": 609,
      "slug": "china/kunming",
      "city": "Kunming",
      "A2": "Yunnan",
      "country": "China",
      "lat": 25.0433,
      "lng": 102.7061,
      "population": 6850000
    },
    {
      "popularity": 610,
      "slug": "united-states/california/visalia",
      "city": "Visalia",
      "A2": "California",
      "country": "United States",
      "lat": 36.3276,
      "lng": 119.3269,
      "population": 237386
    },
    {
      "popularity": 611,
      "slug": "china/zhoukou",
      "city": "Zhoukou",
      "A2": "Henan",
      "country": "China",
      "lat": 33.625,
      "lng": 114.6418,
      "population": 8953172
    },
    {
      "popularity": 612,
      "slug": "united-states/wyoming/cheyenne",
      "city": "Cheyenne",
      "A2": "Wyoming",
      "country": "United States",
      "lat": 41.1351,
      "lng": 104.79,
      "population": 79484
    },
    {
      "popularity": 613,
      "slug": "brazil/sao-luis",
      "city": "Sao Luis",
      "A2": "Maranhão",
      "country": "Brazil",
      "lat": 2.53,
      "lng": 44.3028,
      "population": 1073893
    },
    {
      "popularity": 614,
      "slug": "china/zunyi",
      "city": "Zunyi",
      "A2": "Guizhou",
      "country": "China",
      "lat": 27.705,
      "lng": 106.9336,
      "population": 6270700
    },
    {
      "popularity": 615,
      "slug": "china/nanchang",
      "city": "Nanchang",
      "A2": "Jiangxi",
      "country": "China",
      "lat": 28.6842,
      "lng": 115.8872,
      "population": 5545500
    },
    {
      "popularity": 617,
      "slug": "angola/huambo",
      "city": "Huambo",
      "A2": "Huambo",
      "country": "Angola",
      "lat": 12.7667,
      "lng": 15.7333,
      "population": 665564
    },
    {
      "popularity": 618,
      "slug": "united-states/virginia/lynchburg",
      "city": "Lynchburg",
      "A2": "Virginia",
      "country": "United States",
      "lat": 37.4003,
      "lng": 79.1909,
      "population": 126814
    },
    {
      "popularity": 619,
      "slug": "rwanda/kigali",
      "city": "Kigali",
      "A2": "Kigali",
      "country": "Rwanda",
      "lat": 1.9536,
      "lng": 30.0606,
      "population": 1156663
    },
    {
      "popularity": 620,
      "slug": "algeria/algiers",
      "city": "Algiers",
      "A2": "Alger",
      "country": "Algeria",
      "lat": 36.7764,
      "lng": 3.0586,
      "population": 3415811
    },
    {
      "popularity": 621,
      "slug": "united-states/california/bakersfield",
      "city": "Bakersfield",
      "A2": "California",
      "country": "United States",
      "lat": 35.3529,
      "lng": 119.0359,
      "population": 579295
    },
    {
      "popularity": 622,
      "slug": "brazil/jundiai",
      "city": "Jundiai",
      "A2": "São Paulo",
      "country": "Brazil",
      "lat": 23.1864,
      "lng": 46.8842,
      "population": 401896
    },
    {
      "popularity": 623,
      "slug": "united-kingdom/portsmouth",
      "city": "Portsmouth",
      "A2": "Portsmouth",
      "country": "United Kingdom",
      "lat": 50.8058,
      "lng": 1.0872,
      "population": 248440
    },
    {
      "popularity": 624,
      "slug": "united-states/michigan/ann-arbor",
      "city": "Ann Arbor",
      "A2": "Michigan",
      "country": "United States",
      "lat": 42.2755,
      "lng": 83.7312,
      "population": 322267
    },
    {
      "popularity": 625,
      "slug": "united-states/nevada/carson-city",
      "city": "Carson City",
      "A2": "Nevada",
      "country": "United States",
      "lat": 39.1512,
      "lng": 119.7474,
      "population": 58756
    },
    {
      "popularity": 626,
      "slug": "china/baoding",
      "city": "Baoding",
      "A2": "Hebei",
      "country": "China",
      "lat": 38.8671,
      "lng": 115.4845,
      "population": 11860000
    },
    {
      "popularity": 627,
      "slug": "pakistan/multan",
      "city": "Multan",
      "A2": "Punjab",
      "country": "Pakistan",
      "lat": 30.1978,
      "lng": 71.4711,
      "population": 1871843
    },
    {
      "popularity": 628,
      "slug": "united-states/south-carolina/columbia",
      "city": "Columbia",
      "A2": "South Carolina",
      "country": "United States",
      "lat": 34.0376,
      "lng": 80.9037,
      "population": 560041
    },
    {
      "popularity": 629,
      "slug": "united-states/pennsylvania/erie",
      "city": "Erie",
      "A2": "Pennsylvania",
      "country": "United States",
      "lat": 42.1168,
      "lng": 80.0733,
      "population": 184484
    },
    {
      "popularity": 630,
      "slug": "united-states/south-dakota/sioux-falls",
      "city": "Sioux Falls",
      "A2": "South Dakota",
      "country": "United States",
      "lat": 43.5397,
      "lng": 96.732,
      "population": 187239
    },
    {
      "popularity": 631,
      "slug": "china/nanyang",
      "city": "Nanyang",
      "A2": "Henan",
      "country": "China",
      "lat": 32.9987,
      "lng": 112.5292,
      "population": 10013600
    },
    {
      "popularity": 632,
      "slug": "congo-(kinshasa)/kisangani",
      "city": "Kisangani",
      "A2": "Tshopo",
      "country": "Congo (Kinshasa)",
      "lat": 0.5153,
      "lng": 25.1911,
      "population": 935977
    },
    {
      "popularity": 633,
      "slug": "colombia/cali",
      "city": "Cali",
      "A2": "Valle del Cauca",
      "country": "Colombia",
      "lat": 3.44,
      "lng": 76.5197,
      "population": 2471474
    },
    {
      "popularity": 634,
      "slug": "united-states/iowa/iowa-city",
      "city": "Iowa City",
      "A2": "Iowa",
      "country": "United States",
      "lat": 41.6559,
      "lng": 91.5303,
      "population": 118041
    },
    {
      "popularity": 636,
      "slug": "united-states/nebraska/omaha",
      "city": "Omaha",
      "A2": "Nebraska",
      "country": "United States",
      "lat": 41.2627,
      "lng": 96.0522,
      "population": 847819
    },
    {
      "popularity": 637,
      "slug": "the-gambia/banjul",
      "city": "Banjul",
      "A2": "Banjul",
      "country": "The Gambia",
      "lat": 13.4531,
      "lng": 16.5775,
      "population": 31356
    },
    {
      "popularity": 638,
      "slug": "united-kingdom/bournemouth",
      "city": "Bournemouth",
      "A2": "Bournemouth",
      "country": "United Kingdom",
      "lat": 50.72,
      "lng": 1.88,
      "population": 187503
    },
    {
      "popularity": 639,
      "slug": "pakistan/rawalpindi",
      "city": "Rawalpindi",
      "A2": "Punjab",
      "country": "Pakistan",
      "lat": 33.6007,
      "lng": 73.0679,
      "population": 2098231
    },
    {
      "popularity": 640,
      "slug": "pakistan/sargodha",
      "city": "Sargodha",
      "A2": "Punjab",
      "country": "Pakistan",
      "lat": 32.0836,
      "lng": 72.6711,
      "population": 659862
    },
    {
      "popularity": 641,
      "slug": "nigeria/abuja",
      "city": "Abuja",
      "A2": "Federal Capital Territory",
      "country": "Nigeria",
      "lat": 9.0556,
      "lng": 7.4914,
      "population": 1235880
    },
    {
      "popularity": 642,
      "slug": "united-states/new-jersey/vineland",
      "city": "Vineland",
      "A2": "New Jersey",
      "country": "United States",
      "lat": 39.4653,
      "lng": 74.9981,
      "population": 93239
    },
    {
      "popularity": 643,
      "slug": "united-states/washington/spokane",
      "city": "Spokane",
      "A2": "Washington",
      "country": "United States",
      "lat": 47.6671,
      "lng": 117.433,
      "population": 412275
    },
    {
      "popularity": 644,
      "slug": "india/indore",
      "city": "Indore",
      "A2": "Madhya Pradesh",
      "country": "India",
      "lat": 22.7206,
      "lng": 75.8472,
      "population": 1994397
    },
    {
      "popularity": 645,
      "slug": "united-states/tennessee/chattanooga",
      "city": "Chattanooga",
      "A2": "Tennessee",
      "country": "United States",
      "lat": 35.0657,
      "lng": 85.2488,
      "population": 415501
    },
    {
      "popularity": 646,
      "slug": "timor-leste/dili",
      "city": "Dili",
      "A2": "Díli",
      "country": "Timor Leste",
      "lat": 8.5536,
      "lng": 125.5783,
      "population": 222323
    },
    {
      "popularity": 647,
      "slug": "pakistan/karachi",
      "city": "Karachi",
      "A2": "Sindh",
      "country": "Pakistan",
      "lat": 24.86,
      "lng": 67.01,
      "population": 15292000
    },
    {
      "popularity": 648,
      "slug": "united-states/new-york/schenectady",
      "city": "Schenectady",
      "A2": "New York",
      "country": "United States",
      "lat": 42.8025,
      "lng": 73.9276,
      "population": 65273
    },
    {
      "popularity": 649,
      "slug": "united-states/texas/waco",
      "city": "Waco",
      "A2": "Texas",
      "country": "United States",
      "lat": 31.5598,
      "lng": 97.1881,
      "population": 192315
    },
    {
      "popularity": 650,
      "slug": "united-states/california/stockton",
      "city": "Stockton",
      "A2": "California",
      "country": "United States",
      "lat": 37.9765,
      "lng": 121.3109,
      "population": 397264
    },
    {
      "popularity": 651,
      "slug": "united-states/alabama/auburn",
      "city": "Auburn",
      "A2": "Alabama",
      "country": "United States",
      "lat": 32.6087,
      "lng": 85.4899,
      "population": 92777
    },
    {
      "popularity": 652,
      "slug": "united-states/washington/yakima",
      "city": "Yakima",
      "A2": "Washington",
      "country": "United States",
      "lat": 46.5923,
      "lng": 120.5496,
      "population": 133191
    },
    {
      "popularity": 653,
      "slug": "canada/oshawa",
      "city": "Oshawa",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 43.9,
      "lng": 78.85,
      "population": 166000
    },
    {
      "popularity": 654,
      "slug": "china/yantai",
      "city": "Yantai",
      "A2": "Shandong",
      "country": "China",
      "lat": 37.3997,
      "lng": 121.2664,
      "population": 6968202
    },
    {
      "popularity": 655,
      "slug": "nigeria/kano",
      "city": "Kano",
      "A2": "Kano",
      "country": "Nigeria",
      "lat": 12,
      "lng": 8.5167,
      "population": 3848885
    },
    {
      "popularity": 656,
      "slug": "united-states/virginia/harrisonburg",
      "city": "Harrisonburg",
      "A2": "Virginia",
      "country": "United States",
      "lat": 38.4361,
      "lng": 78.8735,
      "population": 72386
    },
    {
      "popularity": 657,
      "slug": "tajikistan/dushanbe",
      "city": "Dushanbe",
      "A2": "Dushanbe",
      "country": "Tajikistan",
      "lat": 38.5731,
      "lng": 68.7864,
      "population": 778500
    },
    {
      "popularity": 658,
      "slug": "united-states/washington/bellingham",
      "city": "Bellingham",
      "A2": "Washington",
      "country": "United States",
      "lat": 48.7543,
      "lng": 122.4687,
      "population": 130641
    },
    {
      "popularity": 659,
      "slug": "china/changchun",
      "city": "Changchun",
      "A2": "Jilin",
      "country": "China",
      "lat": 43.9,
      "lng": 125.2,
      "population": 7674439
    },
    {
      "popularity": 660,
      "slug": "cambodia/sihanoukville",
      "city": "Sihanoukville",
      "A2": "Sihanoukville",
      "country": "Cambodia",
      "lat": 10.6333,
      "lng": 103.5,
      "population": 0
    },
    {
      "popularity": 661,
      "slug": "united-states/wisconsin/milwaukee",
      "city": "Milwaukee",
      "A2": "Wisconsin",
      "country": "United States",
      "lat": 43.0642,
      "lng": 87.9673,
      "population": 1365787
    },
    {
      "popularity": 662,
      "slug": "brazil/itapema",
      "city": "Itapema",
      "A2": "Santa Catarina",
      "country": "Brazil",
      "lat": 27.09,
      "lng": 48.6108,
      "population": 45797
    },
    {
      "popularity": 663,
      "slug": "japan/fukuoka",
      "city": "Fukuoka",
      "A2": "Fukuoka",
      "country": "Japan",
      "lat": 33.6,
      "lng": 130.4167,
      "population": 2280000
    },
    {
      "popularity": 664,
      "slug": "united-states/california/fairfield",
      "city": "Fairfield",
      "A2": "California",
      "country": "United States",
      "lat": 38.2592,
      "lng": 122.0324,
      "population": 148683
    },
    {
      "popularity": 665,
      "slug": "cyprus/limassol",
      "city": "Limassol",
      "A2": "Lemesós",
      "country": "Cyprus",
      "lat": 34.675,
      "lng": 33.0443,
      "population": 235056
    },
    {
      "popularity": 666,
      "slug": "italy/venice",
      "city": "Venice",
      "A2": "Veneto",
      "country": "Italy",
      "lat": 45.4397,
      "lng": 12.3319,
      "population": 261321
    },
    {
      "popularity": 667,
      "slug": "india/thane",
      "city": "Thane",
      "A2": "Mahārāshtra",
      "country": "India",
      "lat": 19.18,
      "lng": 72.9633,
      "population": 1886941
    },
    {
      "popularity": 668,
      "slug": "jamaica/kingston",
      "city": "Kingston",
      "A2": "Kingston",
      "country": "Jamaica",
      "lat": 17.9714,
      "lng": 76.7931,
      "population": 580000
    },
    {
      "popularity": 669,
      "slug": "algeria/oran",
      "city": "Oran",
      "A2": "Oran",
      "country": "Algeria",
      "lat": 35.6969,
      "lng": 0.6331,
      "population": 852000
    },
    {
      "popularity": 670,
      "slug": "nigeria/zaria",
      "city": "Zaria",
      "A2": "Kaduna",
      "country": "Nigeria",
      "lat": 11.0667,
      "lng": 7.7,
      "population": 408198
    },
    {
      "popularity": 671,
      "slug": "canada/barrie",
      "city": "Barrie",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 44.3711,
      "lng": 79.6769,
      "population": 172657
    },
    {
      "popularity": 672,
      "slug": "pakistan/quetta",
      "city": "Quetta",
      "A2": "Balochistān",
      "country": "Pakistan",
      "lat": 30.192,
      "lng": 67.007,
      "population": 1001205
    },
    {
      "popularity": 673,
      "slug": "china/shenyang",
      "city": "Shenyang",
      "A2": "Liaoning",
      "country": "China",
      "lat": 41.8039,
      "lng": 123.4258,
      "population": 7208000
    },
    {
      "popularity": 674,
      "slug": "iraq/kirkuk",
      "city": "Kirkuk",
      "A2": "Kirkūk",
      "country": "Iraq",
      "lat": 35.4667,
      "lng": 44.4,
      "population": 975000
    },
    {
      "popularity": 675,
      "slug": "united-kingdom/huddersfield",
      "city": "Huddersfield",
      "A2": "Kirklees",
      "country": "United Kingdom",
      "lat": 53.645,
      "lng": 1.7798,
      "population": 162949
    },
    {
      "popularity": 676,
      "slug": "brazil/salvador",
      "city": "Salvador",
      "A2": "Bahia",
      "country": "Brazil",
      "lat": 12.9708,
      "lng": 38.5108,
      "population": 2886698
    },
    {
      "popularity": 677,
      "slug": "haiti/port-au-prince",
      "city": "Port Au Prince",
      "A2": "Ouest",
      "country": "Haiti",
      "lat": 18.5425,
      "lng": 72.3386,
      "population": 987310
    },
    {
      "popularity": 678,
      "slug": "united-states/arizona/casa-grande",
      "city": "Casa Grande",
      "A2": "Arizona",
      "country": "United States",
      "lat": 32.9068,
      "lng": 111.7624,
      "population": 61966
    },
    {
      "popularity": 679,
      "slug": "japan/sendai",
      "city": "Sendai",
      "A2": "Miyagi",
      "country": "Japan",
      "lat": 38.2683,
      "lng": 140.8694,
      "population": 1058070
    },
    {
      "popularity": 680,
      "slug": "nicaragua/managua",
      "city": "Managua",
      "A2": "Managua",
      "country": "Nicaragua",
      "lat": 12.15,
      "lng": 86.2667,
      "population": 1028808
    },
    {
      "popularity": 681,
      "slug": "pakistan/gujranwala",
      "city": "Gujranwala",
      "A2": "Punjab",
      "country": "Pakistan",
      "lat": 32.15,
      "lng": 74.1833,
      "population": 2027001
    },
    {
      "popularity": 682,
      "slug": "united-states/oregon/winston",
      "city": "Winston",
      "A2": "Oregon",
      "country": "United States",
      "lat": 43.12,
      "lng": 123.4242,
      "population": 5511
    },
    {
      "popularity": 683,
      "slug": "brazil/joao-pessoa",
      "city": "Joao Pessoa",
      "A2": "Paraíba",
      "country": "Brazil",
      "lat": 7.12,
      "lng": 34.88,
      "population": 801718
    },
    {
      "popularity": 684,
      "slug": "el-salvador/san-salvador",
      "city": "San Salvador",
      "A2": "San Salvador",
      "country": "El Salvador",
      "lat": 13.6989,
      "lng": 89.1914,
      "population": 567698
    },
    {
      "popularity": 685,
      "slug": "cyprus/nicosia",
      "city": "Nicosia",
      "A2": "Lefkosía",
      "country": "Cyprus",
      "lat": 35.1725,
      "lng": 33.365,
      "population": 330000
    },
    {
      "popularity": 686,
      "slug": "united-states/south-carolina/greenville",
      "city": "Greenville",
      "A2": "South Carolina",
      "country": "United States",
      "lat": 34.8353,
      "lng": 82.3647,
      "population": 484465
    },
    {
      "popularity": 687,
      "slug": "united-states/california/manteca",
      "city": "Manteca",
      "A2": "California",
      "country": "United States",
      "lat": 37.7927,
      "lng": 121.2264,
      "population": 103420
    },
    {
      "popularity": 688,
      "slug": "united-states/colorado/fort-collins",
      "city": "Fort Collins",
      "A2": "Colorado",
      "country": "United States",
      "lat": 40.5478,
      "lng": 105.0656,
      "population": 312666
    },
    {
      "popularity": 689,
      "slug": "panama/bocas-del-toro",
      "city": "Bocas Del Toro",
      "A2": "Bocas del Toro",
      "country": "Panama",
      "lat": 9.3403,
      "lng": 82.242,
      "population": 12996
    },
    {
      "popularity": 690,
      "slug": "united-kingdom/glasgow",
      "city": "Glasgow",
      "A2": "Glasgow City",
      "country": "United Kingdom",
      "lat": 55.8611,
      "lng": 4.25,
      "population": 626410
    },
    {
      "popularity": 691,
      "slug": "china/luoyang",
      "city": "Luoyang",
      "A2": "Henan",
      "country": "China",
      "lat": 34.6587,
      "lng": 112.4245,
      "population": 6888500
    },
    {
      "popularity": 692,
      "slug": "united-states/washington/marysville",
      "city": "Marysville",
      "A2": "Washington",
      "country": "United States",
      "lat": 48.0809,
      "lng": 122.1561,
      "population": 170009
    },
    {
      "popularity": 693,
      "slug": "china/handan",
      "city": "Handan",
      "A2": "Hebei",
      "country": "China",
      "lat": 36.6116,
      "lng": 114.4894,
      "population": 9549700
    },
    {
      "popularity": 694,
      "slug": "india/chennai",
      "city": "Chennai",
      "A2": "Tamil Nādu",
      "country": "India",
      "lat": 13.0825,
      "lng": 80.275,
      "population": 11564000
    },
    {
      "popularity": 695,
      "slug": "spain/granada",
      "city": "Granada",
      "A2": "Andalusia",
      "country": "Spain",
      "lat": 37.1781,
      "lng": 3.6008,
      "population": 231775
    },
    {
      "popularity": 696,
      "slug": "united-states/colorado/grand-junction",
      "city": "Grand Junction",
      "A2": "Colorado",
      "country": "United States",
      "lat": 39.0876,
      "lng": 108.5673,
      "population": 139143
    },
    {
      "popularity": 697,
      "slug": "chile/la-serena",
      "city": "La Serena",
      "A2": "Coquimbo",
      "country": "Chile",
      "lat": 29.9027,
      "lng": 71.252,
      "population": 195382
    },
    {
      "popularity": 698,
      "slug": "germany/dortmund",
      "city": "Dortmund",
      "A2": "North Rhine Westphalia",
      "country": "Germany",
      "lat": 51.5139,
      "lng": 7.4653,
      "population": 587696
    },
    {
      "popularity": 699,
      "slug": "united-states/texas/abilene",
      "city": "Abilene",
      "A2": "Texas",
      "country": "United States",
      "lat": 32.4543,
      "lng": 99.7384,
      "population": 123420
    },
    {
      "popularity": 700,
      "slug": "united-states/montana/great-falls",
      "city": "Great Falls",
      "A2": "Montana",
      "country": "United States",
      "lat": 47.5022,
      "lng": 111.2995,
      "population": 65131
    },
    {
      "popularity": 701,
      "slug": "north-korea/pyongyang",
      "city": "Pyongyang",
      "A2": "P’yŏngyang",
      "country": "North Korea",
      "lat": 39.03,
      "lng": 125.73,
      "population": 2863000
    },
    {
      "popularity": 702,
      "slug": "united-states/washington/olympia",
      "city": "Olympia",
      "A2": "Washington",
      "country": "United States",
      "lat": 47.0417,
      "lng": 122.8959,
      "population": 200915
    },
    {
      "popularity": 703,
      "slug": "united-states/florida/orlando",
      "city": "Orlando",
      "A2": "Florida",
      "country": "United States",
      "lat": 28.4772,
      "lng": 81.3369,
      "population": 1822394
    },
    {
      "popularity": 704,
      "slug": "united-kingdom/southampton",
      "city": "Southampton",
      "A2": "Southampton",
      "country": "United Kingdom",
      "lat": 50.9025,
      "lng": 1.4042,
      "population": 271173
    },
    {
      "popularity": 705,
      "slug": "united-states/utah/logan",
      "city": "Logan",
      "A2": "Utah",
      "country": "United States",
      "lat": 41.74,
      "lng": 111.8419,
      "population": 101616
    },
    {
      "popularity": 706,
      "slug": "china/fuzhou",
      "city": "Fuzhou",
      "A2": "Fujian",
      "country": "China",
      "lat": 26.0769,
      "lng": 119.2917,
      "population": 5245000
    },
    {
      "popularity": 707,
      "slug": "cabo-verde/praia",
      "city": "Praia",
      "A2": "Praia",
      "country": "Cabo Verde",
      "lat": 14.9177,
      "lng": 23.5092,
      "population": 127832
    },
    {
      "popularity": 708,
      "slug": "united-kingdom/coventry",
      "city": "Coventry",
      "A2": "Coventry",
      "country": "United Kingdom",
      "lat": 52.4081,
      "lng": 1.5106,
      "population": 362690
    },
    {
      "popularity": 709,
      "slug": "india/bhopal",
      "city": "Bhopal",
      "A2": "Madhya Pradesh",
      "country": "India",
      "lat": 23.25,
      "lng": 77.4167,
      "population": 1798218
    },
    {
      "popularity": 710,
      "slug": "united-states/montana/missoula",
      "city": "Missoula",
      "A2": "Montana",
      "country": "United States",
      "lat": 46.875,
      "lng": 114.0214,
      "population": 92895
    },
    {
      "popularity": 711,
      "slug": "burkina-faso/ouagadougou",
      "city": "Ouagadougou",
      "A2": "Centre",
      "country": "Burkina Faso",
      "lat": 12.3686,
      "lng": 1.5275,
      "population": 2453496
    },
    {
      "popularity": 712,
      "slug": "united-states/missouri/kansas-city",
      "city": "Kansas City",
      "A2": "Missouri",
      "country": "United States",
      "lat": 39.1239,
      "lng": 94.5541,
      "population": 1636715
    },
    {
      "popularity": 713,
      "slug": "venezuela/maracay",
      "city": "Maracay",
      "A2": "Aragua",
      "country": "Venezuela",
      "lat": 10.2469,
      "lng": 67.5958,
      "population": 407109
    },
    {
      "popularity": 714,
      "slug": "united-states/california/hesperia",
      "city": "Hesperia",
      "A2": "California",
      "country": "United States",
      "lat": 34.3975,
      "lng": 117.3147,
      "population": 95750
    },
    {
      "popularity": 715,
      "slug": "côte-d'ivoire/abidjan",
      "city": "Abidjan",
      "A2": "Abidjan",
      "country": "Côte d'Ivoire",
      "lat": 5.3364,
      "lng": 4.0267,
      "population": 4980000
    },
    {
      "popularity": 716,
      "slug": "new-zealand/dunedin",
      "city": "Dunedin",
      "A2": "Otago",
      "country": "New Zealand",
      "lat": 45.8742,
      "lng": 170.5036,
      "population": 99885
    },
    {
      "popularity": 717,
      "slug": "china/qiqihar",
      "city": "Qiqihar",
      "A2": "Heilongjiang",
      "country": "China",
      "lat": 47.3398,
      "lng": 123.9512,
      "population": 5367003
    },
    {
      "popularity": 718,
      "slug": "brazil/vitoria",
      "city": "Vitoria",
      "A2": "Espírito Santo",
      "country": "Brazil",
      "lat": 20.3189,
      "lng": 40.3378,
      "population": 355875
    },
    {
      "popularity": 719,
      "slug": "bahrain/manama",
      "city": "Manama",
      "A2": "Al ‘Āşimah",
      "country": "Bahrain",
      "lat": 26.225,
      "lng": 50.5775,
      "population": 157474
    },
    {
      "popularity": 720,
      "slug": "united-states/california/tulare",
      "city": "Tulare",
      "A2": "California",
      "country": "United States",
      "lat": 36.1996,
      "lng": 119.34,
      "population": 65496
    },
    {
      "popularity": 721,
      "slug": "brunei/bandar-seri-begawan",
      "city": "Bandar Seri Begawan",
      "A2": "Brunei and Muara",
      "country": "Brunei",
      "lat": 4.9167,
      "lng": 114.9167,
      "population": 50000
    },
    {
      "popularity": 722,
      "slug": "guinea/conakry",
      "city": "Conakry",
      "A2": "Conakry",
      "country": "Guinea",
      "lat": 9.538,
      "lng": 13.6773,
      "population": 1667864
    },
    {
      "popularity": 723,
      "slug": "united-states/michigan/detroit",
      "city": "Detroit",
      "A2": "Michigan",
      "country": "United States",
      "lat": 42.3834,
      "lng": 83.1024,
      "population": 3506126
    },
    {
      "popularity": 724,
      "slug": "germany/heidelberg",
      "city": "Heidelberg",
      "A2": "Baden Württemberg",
      "country": "Germany",
      "lat": 49.4122,
      "lng": 8.71,
      "population": 158741
    },
    {
      "popularity": 725,
      "slug": "colombia/santa-marta",
      "city": "Santa Marta",
      "A2": "Magdalena",
      "country": "Colombia",
      "lat": 11.2361,
      "lng": 74.2017,
      "population": 515556
    },
    {
      "popularity": 726,
      "slug": "france/rennes",
      "city": "Rennes",
      "A2": "Bretagne",
      "country": "France",
      "lat": 48.1147,
      "lng": 1.6794,
      "population": 217728
    },
    {
      "popularity": 727,
      "slug": "united-states/wisconsin/la-crosse",
      "city": "La Crosse",
      "A2": "Wisconsin",
      "country": "United States",
      "lat": 43.824,
      "lng": 91.2268,
      "population": 100693
    },
    {
      "popularity": 728,
      "slug": "united-states/california/tracy",
      "city": "Tracy",
      "A2": "California",
      "country": "United States",
      "lat": 37.7269,
      "lng": 121.4522,
      "population": 100049
    },
    {
      "popularity": 729,
      "slug": "nicaragua/san-juan-del-sur",
      "city": "San Juan Del Sur",
      "A2": "Rivas",
      "country": "Nicaragua",
      "lat": 11.25,
      "lng": 85.8667,
      "population": 17104
    },
    {
      "popularity": 730,
      "slug": "north-korea/wonsan",
      "city": "Wonsan",
      "A2": "Kangwŏn",
      "country": "North Korea",
      "lat": 39.1475,
      "lng": 127.4461,
      "population": 363127
    },
    {
      "popularity": 731,
      "slug": "spain/pamplona",
      "city": "Pamplona",
      "A2": "Navarre",
      "country": "Spain",
      "lat": 42.8167,
      "lng": 1.65,
      "population": 203081
    },
    {
      "popularity": 732,
      "slug": "malawi/lilongwe",
      "city": "Lilongwe",
      "A2": "Lilongwe",
      "country": "Malawi",
      "lat": 13.9833,
      "lng": 33.7833,
      "population": 781538
    },
    {
      "popularity": 733,
      "slug": "canada/brampton",
      "city": "Brampton",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 43.6833,
      "lng": 79.7667,
      "population": 593638
    },
    {
      "popularity": 734,
      "slug": "argentina/san-juan",
      "city": "San Juan",
      "A2": "San Juan",
      "country": "Argentina",
      "lat": 31.5375,
      "lng": 68.5364,
      "population": 471389
    },
    {
      "popularity": 735,
      "slug": "greece/thessaloniki",
      "city": "Thessaloniki",
      "A2": "Kentrikí Makedonía",
      "country": "Greece",
      "lat": 40.6403,
      "lng": 22.9356,
      "population": 315196
    },
    {
      "popularity": 736,
      "slug": "argentina/santa-fe",
      "city": "Santa Fe",
      "A2": "Santa Fe",
      "country": "Argentina",
      "lat": 31.6333,
      "lng": 60.7,
      "population": 405683
    },
    {
      "popularity": 737,
      "slug": "cameroon/douala",
      "city": "Douala",
      "A2": "Littoral",
      "country": "Cameroon",
      "lat": 4.05,
      "lng": 9.7,
      "population": 2446945
    },
    {
      "popularity": 738,
      "slug": "united-states/ohio/canton",
      "city": "Canton",
      "A2": "Ohio",
      "country": "United States",
      "lat": 40.8075,
      "lng": 81.3677,
      "population": 269418
    },
    {
      "popularity": 739,
      "slug": "mexico/juarez",
      "city": "Juarez",
      "A2": "Chihuahua",
      "country": "Mexico",
      "lat": 31.7386,
      "lng": 106.487,
      "population": 1321004
    },
    {
      "popularity": 740,
      "slug": "china/tianjin",
      "city": "Tianjin",
      "A2": "Tianjin",
      "country": "China",
      "lat": 39.1467,
      "lng": 117.2056,
      "population": 10932000
    },
    {
      "popularity": 741,
      "slug": "united-states/california/hemet",
      "city": "Hemet",
      "A2": "California",
      "country": "United States",
      "lat": 33.7341,
      "lng": 116.9969,
      "population": 177253
    },
    {
      "popularity": 742,
      "slug": "lesotho/maseru",
      "city": "Maseru",
      "A2": "Maseru",
      "country": "Lesotho",
      "lat": 29.31,
      "lng": 27.48,
      "population": 330790
    },
    {
      "popularity": 743,
      "slug": "united-states/massachusetts/springfield",
      "city": "Springfield",
      "A2": "Massachusetts",
      "country": "United States",
      "lat": 42.1155,
      "lng": 72.5395,
      "population": 623401
    },
    {
      "popularity": 744,
      "slug": "china/qingdao",
      "city": "Qingdao",
      "A2": "Shandong",
      "country": "China",
      "lat": 36.1167,
      "lng": 120.4,
      "population": 5775000
    },
    {
      "popularity": 745,
      "slug": "brazil/campo-grande",
      "city": "Campo Grande",
      "A2": "Mato Grosso do Sul",
      "country": "Brazil",
      "lat": 20.4686,
      "lng": 54.6222,
      "population": 906092
    },
    {
      "popularity": 746,
      "slug": "united-states/virginia/virginia-beach",
      "city": "Virginia Beach",
      "A2": "Virginia",
      "country": "United States",
      "lat": 36.7335,
      "lng": 76.0435,
      "population": 1478868
    },
    {
      "popularity": 747,
      "slug": "united-states/new-hampshire/nashua",
      "city": "Nashua",
      "A2": "New Hampshire",
      "country": "United States",
      "lat": 42.7491,
      "lng": 71.491,
      "population": 233917
    },
    {
      "popularity": 748,
      "slug": "iran/tabriz",
      "city": "Tabriz",
      "A2": "Āz̄arbāyjān e Sharqī",
      "country": "Iran",
      "lat": 38.0833,
      "lng": 46.2833,
      "population": 1558693
    },
    {
      "popularity": 749,
      "slug": "ireland/cork",
      "city": "Cork",
      "A2": "Cork",
      "country": "Ireland",
      "lat": 51.9,
      "lng": 8.4731,
      "population": 208669
    },
    {
      "popularity": 750,
      "slug": "united-states/maryland/frederick",
      "city": "Frederick",
      "A2": "Maryland",
      "country": "United States",
      "lat": 39.4336,
      "lng": 77.4141,
      "population": 156787
    },
    {
      "popularity": 751,
      "slug": "united-kingdom/bristol",
      "city": "Bristol",
      "A2": "Bristol, City of",
      "country": "United Kingdom",
      "lat": 51.45,
      "lng": 2.5833,
      "population": 567111
    },
    {
      "popularity": 752,
      "slug": "netherlands/utrecht",
      "city": "Utrecht",
      "A2": "Utrecht",
      "country": "Netherlands",
      "lat": 52.0889,
      "lng": 5.1156,
      "population": 343779
    },
    {
      "popularity": 753,
      "slug": "brazil/anapolis",
      "city": "Anapolis",
      "A2": "Goiás",
      "country": "Brazil",
      "lat": 16.3269,
      "lng": 48.9528,
      "population": 366491
    },
    {
      "popularity": 754,
      "slug": "united-states/california/redding",
      "city": "Redding",
      "A2": "California",
      "country": "United States",
      "lat": 40.5698,
      "lng": 122.365,
      "population": 121313
    },
    {
      "popularity": 755,
      "slug": "australia/hobart",
      "city": "Hobart",
      "A2": "Tasmania",
      "country": "Australia",
      "lat": 42.8806,
      "lng": 147.325,
      "population": 222356
    },
    {
      "popularity": 756,
      "slug": "united-states/idaho/sandpoint",
      "city": "Sandpoint",
      "A2": "Idaho",
      "country": "United States",
      "lat": 48.2822,
      "lng": 116.5613,
      "population": 13145
    },
    {
      "popularity": 757,
      "slug": "spain/marbella",
      "city": "Marbella",
      "A2": "Andalusia",
      "country": "Spain",
      "lat": 36.5167,
      "lng": 4.8833,
      "population": 147958
    },
    {
      "popularity": 758,
      "slug": "united-states/florida/key-west",
      "city": "Key West",
      "A2": "Florida",
      "country": "United States",
      "lat": 24.5637,
      "lng": 81.7768,
      "population": 31401
    },
    {
      "popularity": 759,
      "slug": "czechia/sumperk",
      "city": "Sumperk",
      "A2": "Olomoucký Kraj",
      "country": "Czechia",
      "lat": 49.9653,
      "lng": 16.9707,
      "population": 25452
    },
    {
      "popularity": 760,
      "slug": "iran/qom",
      "city": "Qom",
      "A2": "Qom",
      "country": "Iran",
      "lat": 34.64,
      "lng": 50.8764,
      "population": 1201158
    },
    {
      "popularity": 761,
      "slug": "congo-(kinshasa)/mbuji-mayi",
      "city": "Mbuji Mayi",
      "A2": "Kasaï Oriental",
      "country": "Congo (Kinshasa)",
      "lat": 6.1209,
      "lng": 23.5967,
      "population": 1559073
    },
    {
      "popularity": 762,
      "slug": "argentina/la-plata",
      "city": "La Plata",
      "A2": "Buenos Aires",
      "country": "Argentina",
      "lat": 34.9333,
      "lng": 57.95,
      "population": 193144
    },
    {
      "popularity": 763,
      "slug": "germany/hof",
      "city": "Hof",
      "A2": "Bavaria",
      "country": "Germany",
      "lat": 50.3167,
      "lng": 11.9167,
      "population": 45930
    },
    {
      "popularity": 764,
      "slug": "united-states/pennsylvania/philadelphia",
      "city": "Philadelphia",
      "A2": "Pennsylvania",
      "country": "United States",
      "lat": 40.0077,
      "lng": 75.1339,
      "population": 5649300
    },
    {
      "popularity": 765,
      "slug": "united-states/hawaii/hilo",
      "city": "Hilo",
      "A2": "Hawaii",
      "country": "United States",
      "lat": 19.6886,
      "lng": 155.0864,
      "population": 45056
    },
    {
      "popularity": 766,
      "slug": "france/nantes",
      "city": "Nantes",
      "A2": "Pays de la Loire",
      "country": "France",
      "lat": 47.2181,
      "lng": 1.5528,
      "population": 314138
    },
    {
      "popularity": 767,
      "slug": "australia/canberra",
      "city": "Canberra",
      "A2": "Australian Capital Territory",
      "country": "Australia",
      "lat": 35.2931,
      "lng": 149.1269,
      "population": 381488
    },
    {
      "popularity": 768,
      "slug": "united-states/florida/fort-lauderdale",
      "city": "Fort Lauderdale",
      "A2": "Florida",
      "country": "United States",
      "lat": 26.1412,
      "lng": 80.1464,
      "population": 182437
    },
    {
      "popularity": 769,
      "slug": "canada/ottawa",
      "city": "Ottawa",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 45.4247,
      "lng": 75.695,
      "population": 989567
    },
    {
      "popularity": 770,
      "slug": "sierra-leone/freetown",
      "city": "Freetown",
      "A2": "Western Area",
      "country": "Sierra Leone",
      "lat": 8.4833,
      "lng": 13.2331,
      "population": 951000
    },
    {
      "popularity": 771,
      "slug": "australia/adelaide",
      "city": "Adelaide",
      "A2": "South Australia",
      "country": "Australia",
      "lat": 34.9275,
      "lng": 138.6,
      "population": 1295714
    },
    {
      "popularity": 772,
      "slug": "china/nantong",
      "city": "Nantong",
      "A2": "Jiangsu",
      "country": "China",
      "lat": 31.9829,
      "lng": 120.8873,
      "population": 7283622
    },
    {
      "popularity": 773,
      "slug": "china/nanjing",
      "city": "Nanjing",
      "A2": "Jiangsu",
      "country": "China",
      "lat": 32.05,
      "lng": 118.7667,
      "population": 7729000
    },
    {
      "popularity": 774,
      "slug": "germany/erlangen",
      "city": "Erlangen",
      "A2": "Bavaria",
      "country": "Germany",
      "lat": 49.5964,
      "lng": 11.0044,
      "population": 111962
    },
    {
      "popularity": 775,
      "slug": "united-states/indiana/anderson",
      "city": "Anderson",
      "A2": "Indiana",
      "country": "United States",
      "lat": 40.0891,
      "lng": 85.6893,
      "population": 85992
    },
    {
      "popularity": 776,
      "slug": "united-kingdom/oxford",
      "city": "Oxford",
      "A2": "Oxfordshire",
      "country": "United Kingdom",
      "lat": 51.7519,
      "lng": 1.2578,
      "population": 152000
    },
    {
      "popularity": 777,
      "slug": "honduras/tegucigalpa",
      "city": "Tegucigalpa",
      "A2": "Francisco Morazán",
      "country": "Honduras",
      "lat": 14.0942,
      "lng": 87.2067,
      "population": 1126534
    },
    {
      "popularity": 778,
      "slug": "united-kingdom/liverpool",
      "city": "Liverpool",
      "A2": "Liverpool",
      "country": "United Kingdom",
      "lat": 53.4075,
      "lng": 2.9919,
      "population": 513441
    },
    {
      "popularity": 779,
      "slug": "morocco/essaouira",
      "city": "Essaouira",
      "A2": "Marrakech Safi",
      "country": "Morocco",
      "lat": 31.513,
      "lng": 9.7687,
      "population": 77966
    },
    {
      "popularity": 780,
      "slug": "montenegro/kotor",
      "city": "Kotor",
      "A2": "Kotor",
      "country": "Montenegro",
      "lat": 42.4254,
      "lng": 18.7712,
      "population": 0
    },
    {
      "popularity": 781,
      "slug": "united-states/nevada/sparks",
      "city": "Sparks",
      "A2": "Nevada",
      "country": "United States",
      "lat": 39.5729,
      "lng": 119.7157,
      "population": 105006
    },
    {
      "popularity": 782,
      "slug": "algeria/tebessa",
      "city": "Tebessa",
      "A2": "Tébessa",
      "country": "Algeria",
      "lat": 35.4,
      "lng": 8.1167,
      "population": 194461
    },
    {
      "popularity": 783,
      "slug": "united-states/florida/princeton",
      "city": "Princeton",
      "A2": "Florida",
      "country": "United States",
      "lat": 25.5396,
      "lng": 80.3971,
      "population": 32299
    },
    {
      "popularity": 784,
      "slug": "netherlands/arnhem",
      "city": "Arnhem",
      "A2": "Gelderland",
      "country": "Netherlands",
      "lat": 51.9833,
      "lng": 5.9167,
      "population": 148070
    },
    {
      "popularity": 785,
      "slug": "netherlands/the-hague",
      "city": "The Hague",
      "A2": "Zuid Holland",
      "country": "Netherlands",
      "lat": 52.08,
      "lng": 4.31,
      "population": 537833
    },
    {
      "popularity": 786,
      "slug": "netherlands/leeuwarden",
      "city": "Leeuwarden",
      "A2": "Fryslân",
      "country": "Netherlands",
      "lat": 53.2,
      "lng": 5.7833,
      "population": 17077
    },
    {
      "popularity": 787,
      "slug": "iran/mashhad",
      "city": "Mashhad",
      "A2": "Khorāsān e Raẕavī",
      "country": "Iran",
      "lat": 36.3069,
      "lng": 59.6042,
      "population": 3001184
    },
    {
      "popularity": 788,
      "slug": "ireland/galway",
      "city": "Galway",
      "A2": "Galway",
      "country": "Ireland",
      "lat": 53.2729,
      "lng": 9.0418,
      "population": 79504
    },
    {
      "popularity": 789,
      "slug": "switzerland/bern",
      "city": "Bern",
      "A2": "Bern",
      "country": "Switzerland",
      "lat": 46.948,
      "lng": 7.4474,
      "population": 133798
    },
    {
      "popularity": 791,
      "slug": "netherlands/eindhoven",
      "city": "Eindhoven",
      "A2": "Noord Brabant",
      "country": "Netherlands",
      "lat": 51.4344,
      "lng": 5.4842,
      "population": 231642
    },
    {
      "popularity": 792,
      "slug": "denmark/aalborg",
      "city": "Aalborg",
      "A2": "Nordjylland",
      "country": "Denmark",
      "lat": 57.0337,
      "lng": 9.9166,
      "population": 122219
    },
    {
      "popularity": 793,
      "slug": "belgium/brussels",
      "city": "Brussels",
      "A2": "Brussels Capital Region",
      "country": "Belgium",
      "lat": 50.8353,
      "lng": 4.3314,
      "population": 1743000
    },
    {
      "popularity": 794,
      "slug": "france/strasbourg",
      "city": "Strasbourg",
      "A2": "Grand Est",
      "country": "France",
      "lat": 48.5833,
      "lng": 7.7458,
      "population": 284677
    },
    {
      "popularity": 795,
      "slug": "china/chengdu",
      "city": "Chengdu",
      "A2": "Sichuan",
      "country": "China",
      "lat": 30.66,
      "lng": 104.0633,
      "population": 11920000
    },
    {
      "popularity": 796,
      "slug": "australia/cairns",
      "city": "Cairns",
      "A2": "Queensland",
      "country": "Australia",
      "lat": 16.92,
      "lng": 145.78,
      "population": 146778
    },
    {
      "popularity": 797,
      "slug": "united-states/florida/weston",
      "city": "Weston",
      "A2": "Florida",
      "country": "United States",
      "lat": 26.1006,
      "lng": 80.4054,
      "population": 71166
    },
    {
      "popularity": 798,
      "slug": "united-kingdom/leeds",
      "city": "Leeds",
      "A2": "Leeds",
      "country": "United Kingdom",
      "lat": 53.7997,
      "lng": 1.5492,
      "population": 789194
    },
    {
      "popularity": 799,
      "slug": "tuvalu/funafuti",
      "city": "Funafuti",
      "A2": "Funafuti",
      "country": "Tuvalu",
      "lat": 8.5243,
      "lng": 179.1942,
      "population": 6025
    },
    {
      "popularity": 800,
      "slug": "united-states/maryland/baltimore",
      "city": "Baltimore",
      "A2": "Maryland",
      "country": "United States",
      "lat": 39.3051,
      "lng": 76.6144,
      "population": 2106068
    },
    {
      "popularity": 801,
      "slug": "united-states/california/apple-valley",
      "city": "Apple Valley",
      "A2": "California",
      "country": "United States",
      "lat": 34.5328,
      "lng": 117.2104,
      "population": 73453
    },
    {
      "popularity": 802,
      "slug": "iran/tehran",
      "city": "Tehran",
      "A2": "Tehrān",
      "country": "Iran",
      "lat": 35.7,
      "lng": 51.4167,
      "population": 13819000
    },
    {
      "popularity": 803,
      "slug": "united-states/florida/tallahassee",
      "city": "Tallahassee",
      "A2": "Florida",
      "country": "United States",
      "lat": 30.4551,
      "lng": 84.2526,
      "population": 257601
    },
    {
      "popularity": 804,
      "slug": "denmark/aarhus",
      "city": "Aarhus",
      "A2": "Midtjylland",
      "country": "Denmark",
      "lat": 56.1572,
      "lng": 10.2107,
      "population": 237551
    },
    {
      "popularity": 805,
      "slug": "brazil/sorocaba",
      "city": "Sorocaba",
      "A2": "São Paulo",
      "country": "Brazil",
      "lat": 23.5019,
      "lng": 47.4578,
      "population": 644919
    },
    {
      "popularity": 806,
      "slug": "australia/wollongong",
      "city": "Wollongong",
      "A2": "New South Wales",
      "country": "Australia",
      "lat": 34.4331,
      "lng": 150.8831,
      "population": 261896
    },
    {
      "popularity": 807,
      "slug": "united-states/virginia/fairfax",
      "city": "Fairfax",
      "A2": "Virginia",
      "country": "United States",
      "lat": 38.8531,
      "lng": 77.2998,
      "population": 24019
    },
    {
      "popularity": 808,
      "slug": "united-states/florida/port-st.-lucie",
      "city": "Port St. Lucie",
      "A2": "Florida",
      "country": "United States",
      "lat": 27.2796,
      "lng": 80.3883,
      "population": 461152
    },
    {
      "popularity": 809,
      "slug": "australia/byron-bay",
      "city": "Byron Bay",
      "A2": "New South Wales",
      "country": "Australia",
      "lat": 28.6483,
      "lng": 153.6178,
      "population": 5521
    },
    {
      "popularity": 810,
      "slug": "netherlands/zwolle",
      "city": "Zwolle",
      "A2": "Overijssel",
      "country": "Netherlands",
      "lat": 52.5167,
      "lng": 6.1,
      "population": 124914
    },
    {
      "popularity": 811,
      "slug": "angola/luanda",
      "city": "Luanda",
      "A2": "Luanda",
      "country": "Angola",
      "lat": 8.8383,
      "lng": 13.2344,
      "population": 8883000
    },
    {
      "popularity": 812,
      "slug": "united-states/wisconsin/oshkosh",
      "city": "Oshkosh",
      "A2": "Wisconsin",
      "country": "United States",
      "lat": 44.0228,
      "lng": 88.5619,
      "population": 75536
    },
    {
      "popularity": 813,
      "slug": "pakistan/faisalabad",
      "city": "Faisalabad",
      "A2": "Punjab",
      "country": "Pakistan",
      "lat": 31.418,
      "lng": 73.079,
      "population": 3203846
    },
    {
      "popularity": 814,
      "slug": "united-states/florida/west-palm-beach",
      "city": "West Palm Beach",
      "A2": "Florida",
      "country": "United States",
      "lat": 26.7468,
      "lng": 80.1316,
      "population": 111955
    },
    {
      "popularity": 815,
      "slug": "united-states/arizona/lake-havasu-city",
      "city": "Lake Havasu City",
      "A2": "Arizona",
      "country": "United States",
      "lat": 34.5006,
      "lng": 114.3113,
      "population": 56820
    },
    {
      "popularity": 816,
      "slug": "mexico/torreon",
      "city": "Torreon",
      "A2": "Coahuila de Zaragoza",
      "country": "Mexico",
      "lat": 25.5394,
      "lng": 103.4486,
      "population": 716672
    },
    {
      "popularity": 817,
      "slug": "côte-d'ivoire/yamoussoukro",
      "city": "Yamoussoukro",
      "A2": "Yamoussoukro",
      "country": "Côte d'Ivoire",
      "lat": 6.8161,
      "lng": 5.2742,
      "population": 355573
    },
    {
      "popularity": 818,
      "slug": "aruba/oranjestad",
      "city": "Oranjestad",
      "A2": 0,
      "country": "Aruba",
      "lat": 12.5186,
      "lng": 70.0358,
      "population": 34980
    },
    {
      "popularity": 819,
      "slug": "united-states/georgia/savannah",
      "city": "Savannah",
      "A2": "Georgia",
      "country": "United States",
      "lat": 32.0281,
      "lng": 81.1784,
      "population": 276295
    },
    {
      "popularity": 820,
      "slug": "france/grenoble",
      "city": "Grenoble",
      "A2": "Auvergne Rhône Alpes",
      "country": "France",
      "lat": 45.1715,
      "lng": 5.7224,
      "population": 157650
    },
    {
      "popularity": 821,
      "slug": "netherlands/deventer",
      "city": "Deventer",
      "A2": "Overijssel",
      "country": "Netherlands",
      "lat": 52.25,
      "lng": 6.2,
      "population": 99166
    },
    {
      "popularity": 822,
      "slug": "ukraine/bar",
      "city": "Bar",
      "A2": "Vinnyts’ka Oblast’",
      "country": "Ukraine",
      "lat": 49.0781,
      "lng": 27.6831,
      "population": 16136
    },
    {
      "popularity": 823,
      "slug": "france/marseille",
      "city": "Marseille",
      "A2": "Provence Alpes Côte d’Azur",
      "country": "France",
      "lat": 43.2964,
      "lng": 5.37,
      "population": 868277
    },
    {
      "popularity": 824,
      "slug": "united-states/south-carolina/charleston",
      "city": "Charleston",
      "A2": "South Carolina",
      "country": "United States",
      "lat": 32.8153,
      "lng": 79.9628,
      "population": 628377
    },
    {
      "popularity": 826,
      "slug": "netherlands/tilburg",
      "city": "Tilburg",
      "A2": "Noord Brabant",
      "country": "Netherlands",
      "lat": 51.57,
      "lng": 5.07,
      "population": 217259
    },
    {
      "popularity": 827,
      "slug": "north-korea/kaesong",
      "city": "Kaesong",
      "A2": "Hwangnam",
      "country": "North Korea",
      "lat": 37.964,
      "lng": 126.5644,
      "population": 338155
    },
    {
      "popularity": 828,
      "slug": "australia/darwin",
      "city": "Darwin",
      "A2": "Northern Territory",
      "country": "Australia",
      "lat": 12.4381,
      "lng": 130.8411,
      "population": 136828
    },
    {
      "popularity": 829,
      "slug": "united-states/wyoming/cody",
      "city": "Cody",
      "A2": "Wyoming",
      "country": "United States",
      "lat": 44.5212,
      "lng": 109.0549,
      "population": 9788
    },
    {
      "popularity": 830,
      "slug": "dominican-republic/jarabacoa",
      "city": "Jarabacoa",
      "A2": "Cibao Sur",
      "country": "Dominican Republic",
      "lat": 19.1197,
      "lng": 70.6383,
      "population": 58803
    },
    {
      "popularity": 831,
      "slug": "malta/sliema",
      "city": "Sliema",
      "A2": "Sliema",
      "country": "Malta",
      "lat": 35.9122,
      "lng": 14.5042,
      "population": 16854
    },
    {
      "popularity": 832,
      "slug": "italy/rome",
      "city": "Rome",
      "A2": "Lazio",
      "country": "Italy",
      "lat": 41.8931,
      "lng": 12.4828,
      "population": 2872800
    },
    {
      "popularity": 833,
      "slug": "mexico/puerto-vallarta",
      "city": "Puerto Vallarta",
      "A2": "Jalisco",
      "country": "Mexico",
      "lat": 20.6458,
      "lng": 105.2222,
      "population": 203342
    },
    {
      "popularity": 835,
      "slug": "united-states/california/palo-alto",
      "city": "Palo Alto",
      "A2": "California",
      "country": "United States",
      "lat": 37.3913,
      "lng": 122.1468,
      "population": 65364
    },
    {
      "popularity": 836,
      "slug": "trinidad-and-tobago/port-of-spain",
      "city": "Port Of Spain",
      "A2": "Port of Spain",
      "country": "Trinidad And Tobago",
      "lat": 10.6667,
      "lng": 61.5167,
      "population": 37074
    },
    {
      "popularity": 837,
      "slug": "netherlands/breda",
      "city": "Breda",
      "A2": "Noord Brabant",
      "country": "Netherlands",
      "lat": 51.5875,
      "lng": 4.775,
      "population": 183873
    },
    {
      "popularity": 838,
      "slug": "united-states/iowa/sioux-city",
      "city": "Sioux City",
      "A2": "Iowa",
      "country": "United States",
      "lat": 42.4959,
      "lng": 96.3901,
      "population": 106455
    },
    {
      "popularity": 839,
      "slug": "honduras/san-pedro-sula",
      "city": "San Pedro Sula",
      "A2": "Cortés",
      "country": "Honduras",
      "lat": 15.5,
      "lng": 88.0333,
      "population": 1073824
    },
    {
      "popularity": 840,
      "slug": "united-states/california/sacramento",
      "city": "Sacramento",
      "A2": "California",
      "country": "United States",
      "lat": 38.5667,
      "lng": 121.4683,
      "population": 1898019
    },
    {
      "popularity": 841,
      "slug": "canada/cambridge",
      "city": "Cambridge",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 43.3972,
      "lng": 80.3114,
      "population": 129920
    },
    {
      "popularity": 842,
      "slug": "united-states/california/santa-barbara",
      "city": "Santa Barbara",
      "A2": "California",
      "country": "United States",
      "lat": 34.4285,
      "lng": 119.7202,
      "population": 202401
    },
    {
      "popularity": 843,
      "slug": "japan/nagoya",
      "city": "Nagoya",
      "A2": "Aichi",
      "country": "Japan",
      "lat": 35.1167,
      "lng": 136.9333,
      "population": 9522000
    },
    {
      "popularity": 844,
      "slug": "united-states/california/murrieta",
      "city": "Murrieta",
      "A2": "California",
      "country": "United States",
      "lat": 33.572,
      "lng": 117.1909,
      "population": 496046
    },
    {
      "popularity": 845,
      "slug": "united-states/arizona/scottsdale",
      "city": "Scottsdale",
      "A2": "Arizona",
      "country": "United States",
      "lat": 33.6872,
      "lng": 111.8651,
      "population": 258069
    },
    {
      "popularity": 846,
      "slug": "italy/milan",
      "city": "Milan",
      "A2": "Lombardy",
      "country": "Italy",
      "lat": 45.4669,
      "lng": 9.19,
      "population": 1366180
    },
    {
      "popularity": 847,
      "slug": "congo-(kinshasa)/kananga",
      "city": "Kananga",
      "A2": "Kasaï Central",
      "country": "Congo (Kinshasa)",
      "lat": 5.8961,
      "lng": 22.4167,
      "population": 1971704
    },
    {
      "popularity": 848,
      "slug": "chile/valparaiso",
      "city": "Valparaiso",
      "A2": "Valparaíso",
      "country": "Chile",
      "lat": 33.0458,
      "lng": 71.6197,
      "population": 296655
    },
    {
      "popularity": 849,
      "slug": "monaco/monaco",
      "city": "Monaco",
      "A2": 0,
      "country": "Monaco",
      "lat": 43.7396,
      "lng": 7.4069,
      "population": 36371
    },
    {
      "popularity": 850,
      "slug": "norway/tromso",
      "city": "Tromso",
      "A2": "Troms",
      "country": "Norway",
      "lat": 69.6546,
      "lng": 18.9637,
      "population": 38980
    },
    {
      "popularity": 851,
      "slug": "united-states/california/mountain-view",
      "city": "Mountain View",
      "A2": "California",
      "country": "United States",
      "lat": 37.4,
      "lng": 122.0796,
      "population": 82739
    },
    {
      "popularity": 852,
      "slug": "france/paris",
      "city": "Paris",
      "A2": "Île de France",
      "country": "France",
      "lat": 48.8566,
      "lng": 2.3522,
      "population": 11027000
    },
    {
      "popularity": 853,
      "slug": "nigeria/onitsha",
      "city": "Onitsha",
      "A2": "Anambra",
      "country": "Nigeria",
      "lat": 6.1667,
      "lng": 6.7833,
      "population": 1483000
    },
    {
      "popularity": 854,
      "slug": "italy/florence",
      "city": "Florence",
      "A2": "Tuscany",
      "country": "Italy",
      "lat": 43.7714,
      "lng": 11.2542,
      "population": 380948
    },
    {
      "popularity": 855,
      "slug": "new-zealand/wanaka",
      "city": "Wanaka",
      "A2": "Otago",
      "country": "New Zealand",
      "lat": 44.7081,
      "lng": 169.1239,
      "population": 8900
    },
    {
      "popularity": 856,
      "slug": "norway/trondheim",
      "city": "Trondheim",
      "A2": "Sør Trøndelag",
      "country": "Norway",
      "lat": 63.44,
      "lng": 10.4,
      "population": 183378
    },
    {
      "popularity": 857,
      "slug": "belgium/antwerp",
      "city": "Antwerp",
      "A2": "Flanders",
      "country": "Belgium",
      "lat": 51.2211,
      "lng": 4.3997,
      "population": 529247
    },
    {
      "popularity": 858,
      "slug": "netherlands/zandvoort",
      "city": "Zandvoort",
      "A2": "Noord Holland",
      "country": "Netherlands",
      "lat": 52.3667,
      "lng": 4.5333,
      "population": 17011
    },
    {
      "popularity": 859,
      "slug": "united-states/california/san-jose",
      "city": "San Jose",
      "A2": "California",
      "country": "United States",
      "lat": 37.3019,
      "lng": 121.8486,
      "population": 1798103
    },
    {
      "popularity": 860,
      "slug": "united-states/florida/fort-myers",
      "city": "Fort Myers",
      "A2": "Florida",
      "country": "United States",
      "lat": 26.6195,
      "lng": 81.8303,
      "population": 87103
    },
    {
      "popularity": 861,
      "slug": "belize/belize-city",
      "city": "Belize City",
      "A2": "Belize",
      "country": "Belize",
      "lat": 17.4986,
      "lng": 88.1886,
      "population": 57169
    },
    {
      "popularity": 862,
      "slug": "canada/halifax",
      "city": "Halifax",
      "A2": "Nova Scotia",
      "country": "Canada",
      "lat": 44.6475,
      "lng": 63.5906,
      "population": 403131
    },
    {
      "popularity": 863,
      "slug": "united-states/connecticut/stamford",
      "city": "Stamford",
      "A2": "Connecticut",
      "country": "United States",
      "lat": 41.1035,
      "lng": 73.5583,
      "population": 129638
    },
    {
      "popularity": 864,
      "slug": "united-states/california/newport-beach",
      "city": "Newport Beach",
      "A2": "California",
      "country": "United States",
      "lat": 33.6151,
      "lng": 117.8669,
      "population": 84534
    },
    {
      "popularity": 865,
      "slug": "iran/shiraz",
      "city": "Shiraz",
      "A2": "Fārs",
      "country": "Iran",
      "lat": 29.61,
      "lng": 52.5425,
      "population": 1565572
    },
    {
      "popularity": 866,
      "slug": "malaysia/george-town",
      "city": "George Town",
      "A2": "Pulau Pinang",
      "country": "Malaysia",
      "lat": 5.4145,
      "lng": 100.3292,
      "population": 708127
    },
    {
      "popularity": 867,
      "slug": "norway/bergen",
      "city": "Bergen",
      "A2": "Hordaland",
      "country": "Norway",
      "lat": 60.3925,
      "lng": 5.3233,
      "population": 257087
    },
    {
      "popularity": 868,
      "slug": "united-states/oregon/portland",
      "city": "Portland",
      "A2": "Oregon",
      "country": "United States",
      "lat": 45.5372,
      "lng": 122.65,
      "population": 2074775
    },
    {
      "popularity": 869,
      "slug": "united-states/california/south-lake-tahoe",
      "city": "Lake Tahoe",
      "A2": "California",
      "country": "United States",
      "lat": 38.9393,
      "lng": 119.9828,
      "population": 30188
    },
    {
      "popularity": 870,
      "slug": "mongolia/ulaanbaatar",
      "city": "Ulaanbaatar",
      "A2": "Ulaanbaatar",
      "country": "Mongolia",
      "lat": 47.9214,
      "lng": 106.9055,
      "population": 1396288
    },
    {
      "popularity": 871,
      "slug": "united-states/california/oxnard",
      "city": "Oxnard",
      "A2": "California",
      "country": "United States",
      "lat": 34.1963,
      "lng": 119.1815,
      "population": 387647
    },
    {
      "popularity": 872,
      "slug": "germany/kassel",
      "city": "Kassel",
      "A2": "Hesse",
      "country": "Germany",
      "lat": 51.3158,
      "lng": 9.4979,
      "population": 201048
    },
    {
      "popularity": 873,
      "slug": "honduras/copan",
      "city": "Copan",
      "A2": "Copán",
      "country": "Honduras",
      "lat": 14.8333,
      "lng": 89.15,
      "population": 41542
    },
    {
      "popularity": 874,
      "slug": "united-states/arizona/phoenix",
      "city": "Phoenix",
      "A2": "Arizona",
      "country": "United States",
      "lat": 33.5722,
      "lng": 112.0891,
      "population": 4219697
    },
    {
      "popularity": 875,
      "slug": "united-states/oregon/bend",
      "city": "Bend",
      "A2": "Oregon",
      "country": "United States",
      "lat": 44.0562,
      "lng": 121.3087,
      "population": 109802
    },
    {
      "popularity": 876,
      "slug": "venezuela/caracas",
      "city": "Caracas",
      "A2": "Distrito Capital",
      "country": "Venezuela",
      "lat": 10.5,
      "lng": 66.9333,
      "population": 1943901
    },
    {
      "popularity": 877,
      "slug": "netherlands/lelystad",
      "city": "Lelystad",
      "A2": "Flevoland",
      "country": "Netherlands",
      "lat": 52.5167,
      "lng": 5.4833,
      "population": 77893
    },
    {
      "popularity": 878,
      "slug": "north-korea/sinuiju",
      "city": "Sinuiju",
      "A2": "P’yŏngbuk",
      "country": "North Korea",
      "lat": 40.1,
      "lng": 124.4,
      "population": 352000
    },
    {
      "popularity": 879,
      "slug": "japan/okayama",
      "city": "Okayama",
      "A2": "Okayama",
      "country": "Japan",
      "lat": 34.65,
      "lng": 133.9167,
      "population": 720043
    },
    {
      "popularity": 880,
      "slug": "united-kingdom/sheffield",
      "city": "Sheffield",
      "A2": "Sheffield",
      "country": "United Kingdom",
      "lat": 53.3808,
      "lng": 1.4703,
      "population": 518090
    },
    {
      "popularity": 881,
      "slug": "united-states/california/monterey",
      "city": "Monterey",
      "A2": "California",
      "country": "United States",
      "lat": 36.5922,
      "lng": 121.8807,
      "population": 28178
    },
    {
      "popularity": 882,
      "slug": "japan/kobe",
      "city": "Kobe",
      "A2": "Hyōgo",
      "country": "Japan",
      "lat": 34.6913,
      "lng": 135.183,
      "population": 1513193
    },
    {
      "popularity": 883,
      "slug": "united-states/georgia/augusta",
      "city": "Augusta",
      "A2": "Georgia",
      "country": "United States",
      "lat": 33.3645,
      "lng": 82.0708,
      "population": 390809
    },
    {
      "popularity": 884,
      "slug": "china/hefei",
      "city": "Hefei",
      "A2": "Anhui",
      "country": "China",
      "lat": 31.8639,
      "lng": 117.2808,
      "population": 7457027
    },
    {
      "popularity": 885,
      "slug": "united-states/utah/park-city",
      "city": "Park City",
      "A2": "Utah",
      "country": "United States",
      "lat": 40.6505,
      "lng": 111.502,
      "population": 15061
    },
    {
      "popularity": 886,
      "slug": "canada/whistler",
      "city": "Whistler",
      "A2": "British Columbia",
      "country": "Canada",
      "lat": 50.1208,
      "lng": 122.9544,
      "population": 11854
    },
    {
      "popularity": 887,
      "slug": "united-states/nevada/enterprise",
      "city": "Enterprise",
      "A2": "Nevada",
      "country": "United States",
      "lat": 36.0164,
      "lng": 115.2208,
      "population": 171108
    },
    {
      "popularity": 888,
      "slug": "united-kingdom/cheltenham",
      "city": "Cheltenham",
      "A2": "Gloucestershire",
      "country": "United Kingdom",
      "lat": 51.9,
      "lng": 2.0667,
      "population": 116447
    },
    {
      "popularity": 889,
      "slug": "netherlands/haarlem",
      "city": "Haarlem",
      "A2": "Noord Holland",
      "country": "Netherlands",
      "lat": 52.3803,
      "lng": 4.6406,
      "population": 162902
    },
    {
      "popularity": 890,
      "slug": "united-states/washington/bellevue",
      "city": "Bellevue",
      "A2": "Washington",
      "country": "United States",
      "lat": 47.5951,
      "lng": 122.1535,
      "population": 148164
    },
    {
      "popularity": 891,
      "slug": "united-states/washington/spokane-valley",
      "city": "Spokane Valley",
      "A2": "Washington",
      "country": "United States",
      "lat": 47.6626,
      "lng": 117.2346,
      "population": 101060
    },
    {
      "popularity": 892,
      "slug": "united-states/california/menlo-park",
      "city": "Menlo Park",
      "A2": "California",
      "country": "United States",
      "lat": 37.4686,
      "lng": 122.1672,
      "population": 34698
    },
    {
      "popularity": 893,
      "slug": "united-states/wisconsin/green-bay",
      "city": "Green Bay",
      "A2": "Wisconsin",
      "country": "United States",
      "lat": 44.515,
      "lng": 87.9896,
      "population": 207557
    },
    {
      "popularity": 894,
      "slug": "united-states/texas/midland",
      "city": "Midland",
      "A2": "Texas",
      "country": "United States",
      "lat": 32.0249,
      "lng": 102.1137,
      "population": 154793
    },
    {
      "popularity": 895,
      "slug": "united-states/minnesota/duluth",
      "city": "Duluth",
      "A2": "Minnesota",
      "country": "United States",
      "lat": 46.7756,
      "lng": 92.1392,
      "population": 119476
    },
    {
      "popularity": 896,
      "slug": "italy/pisa",
      "city": "Pisa",
      "A2": "Tuscany",
      "country": "Italy",
      "lat": 43.7167,
      "lng": 10.4,
      "population": 90118
    },
    {
      "popularity": 897,
      "slug": "switzerland/lugano",
      "city": "Lugano",
      "A2": "Ticino",
      "country": "Switzerland",
      "lat": 46.0103,
      "lng": 8.9625,
      "population": 63185
    },
    {
      "popularity": 898,
      "slug": "united-states/florida/cape-coral",
      "city": "Cape Coral",
      "A2": "Florida",
      "country": "United States",
      "lat": 26.6446,
      "lng": 81.9956,
      "population": 668382
    },
    {
      "popularity": 899,
      "slug": "united-states/california/petaluma",
      "city": "Petaluma",
      "A2": "California",
      "country": "United States",
      "lat": 38.2423,
      "lng": 122.6267,
      "population": 66929
    },
    {
      "popularity": 900,
      "slug": "united-states/florida/plantation",
      "city": "Plantation",
      "A2": "Florida",
      "country": "United States",
      "lat": 26.126,
      "lng": 80.2617,
      "population": 94580
    },
    {
      "popularity": 901,
      "slug": "canada/edmonton",
      "city": "Edmonton",
      "A2": "Alberta",
      "country": "Canada",
      "lat": 53.5344,
      "lng": 113.4903,
      "population": 1062643
    },
    {
      "popularity": 902,
      "slug": "united-states/massachusetts/worcester",
      "city": "Worcester",
      "A2": "Massachusetts",
      "country": "United States",
      "lat": 42.2705,
      "lng": 71.8079,
      "population": 498328
    },
    {
      "popularity": 903,
      "slug": "brazil/santa-teresa",
      "city": "Santa Teresa",
      "A2": "Espírito Santo",
      "country": "Brazil",
      "lat": 19.9358,
      "lng": 40.6,
      "population": 21823
    },
    {
      "popularity": 904,
      "slug": "chile/iquique",
      "city": "Iquique",
      "A2": "Tarapacá",
      "country": "Chile",
      "lat": 20.2141,
      "lng": 70.1524,
      "population": 188003
    },
    {
      "popularity": 905,
      "slug": "belgium/leuven",
      "city": "Leuven",
      "A2": "Flanders",
      "country": "Belgium",
      "lat": 50.8775,
      "lng": 4.7044,
      "population": 100291
    },
    {
      "popularity": 906,
      "slug": "morocco/laayoune",
      "city": "Laayoune",
      "A2": "Laâyoune Sakia El Hamra",
      "country": "Morocco",
      "lat": 27.15,
      "lng": 13.2,
      "population": 188084
    },
    {
      "popularity": 907,
      "slug": "paraguay/san-ignacio",
      "city": "San Ignacio",
      "A2": "Misiones",
      "country": "Paraguay",
      "lat": 26.8867,
      "lng": 57.0283,
      "population": 50468
    },
    {
      "popularity": 908,
      "slug": "united-states/florida/port-orange",
      "city": "Port Orange",
      "A2": "Florida",
      "country": "United States",
      "lat": 29.1084,
      "lng": 81.0137,
      "population": 64842
    },
    {
      "popularity": 909,
      "slug": "united-states/florida/sarasota",
      "city": "Sarasota",
      "A2": "Florida",
      "country": "United States",
      "lat": 27.3386,
      "lng": 82.5431,
      "population": 722243
    },
    {
      "popularity": 910,
      "slug": "italy/trieste",
      "city": "Trieste",
      "A2": "Friuli Venezia Giulia",
      "country": "Italy",
      "lat": 45.6503,
      "lng": 13.7703,
      "population": 204338
    },
    {
      "popularity": 911,
      "slug": "united-states/florida/daytona-beach",
      "city": "Daytona Beach",
      "A2": "Florida",
      "country": "United States",
      "lat": 29.1994,
      "lng": 81.0982,
      "population": 69186
    },
    {
      "popularity": 912,
      "slug": "united-states/california/indio",
      "city": "Indio",
      "A2": "California",
      "country": "United States",
      "lat": 33.7346,
      "lng": 116.2346,
      "population": 417059
    },
    {
      "popularity": 913,
      "slug": "united-states/florida/bradenton",
      "city": "Bradenton",
      "A2": "Florida",
      "country": "United States",
      "lat": 27.49,
      "lng": 82.5739,
      "population": 59439
    },
    {
      "popularity": 914,
      "slug": "united-states/louisiana/lake-charles",
      "city": "Lake Charles",
      "A2": "Louisiana",
      "country": "United States",
      "lat": 30.2012,
      "lng": 93.2122,
      "population": 156181
    },
    {
      "popularity": 915,
      "slug": "philippines/san-mateo",
      "city": "San Mateo",
      "A2": "Rizal",
      "country": "Philippines",
      "lat": 14.6969,
      "lng": 121.1219,
      "population": 273306
    },
    {
      "popularity": 916,
      "slug": "japan/kitakyushu",
      "city": "Kitakyushu",
      "A2": "Fukuoka",
      "country": "Japan",
      "lat": 33.8833,
      "lng": 130.8833,
      "population": 935084
    },
    {
      "popularity": 917,
      "slug": "oman/muscat",
      "city": "Muscat",
      "A2": "Masqaţ",
      "country": "Oman",
      "lat": 23.6139,
      "lng": 58.5922,
      "population": 1421409
    },
    {
      "popularity": 918,
      "slug": "united-states/alabama/tuscaloosa",
      "city": "Tuscaloosa",
      "A2": "Alabama",
      "country": "United States",
      "lat": 33.2348,
      "lng": 87.5267,
      "population": 155499
    },
    {
      "popularity": 919,
      "slug": "united-states/california/brentwood",
      "city": "Brentwood",
      "A2": "California",
      "country": "United States",
      "lat": 37.9355,
      "lng": 121.7191,
      "population": 64474
    },
    {
      "popularity": 920,
      "slug": "netherlands/kralendijk",
      "city": "Kralendijk",
      "A2": 0,
      "country": "Netherlands",
      "lat": 12.1517,
      "lng": 68.2761,
      "population": 0
    },
    {
      "popularity": 921,
      "slug": "china/shenzhen",
      "city": "Shenzhen",
      "A2": "Guangdong",
      "country": "China",
      "lat": 22.535,
      "lng": 114.054,
      "population": 14678000
    },
    {
      "popularity": 922,
      "slug": "united-states/florida/bonita-springs",
      "city": "Bonita Springs",
      "A2": "Florida",
      "country": "United States",
      "lat": 26.3559,
      "lng": 81.7861,
      "population": 421291
    },
    {
      "popularity": 923,
      "slug": "brazil/manaus",
      "city": "Manaus",
      "A2": "Amazonas",
      "country": "Brazil",
      "lat": 3.1,
      "lng": 60.0167,
      "population": 1802014
    },
    {
      "popularity": 924,
      "slug": "mexico/mexicali",
      "city": "Mexicali",
      "A2": "Baja California",
      "country": "Mexico",
      "lat": 32.6633,
      "lng": 115.4678,
      "population": 1049792
    },
    {
      "popularity": 925,
      "slug": "israel/haifa",
      "city": "Haifa",
      "A2": "Haifa",
      "country": "Israel",
      "lat": 32.8,
      "lng": 34.9833,
      "population": 281087
    },
    {
      "popularity": 926,
      "slug": "france/cannes",
      "city": "Cannes",
      "A2": "Provence Alpes Côte d’Azur",
      "country": "France",
      "lat": 43.5513,
      "lng": 7.0128,
      "population": 73965
    },
    {
      "popularity": 927,
      "slug": "cyprus/larnaca",
      "city": "Larnaca",
      "A2": "Lárnaka",
      "country": "Cyprus",
      "lat": 34.9167,
      "lng": 33.6333,
      "population": 59200
    },
    {
      "popularity": 928,
      "slug": "united-states/texas/galveston",
      "city": "Galveston",
      "A2": "Texas",
      "country": "United States",
      "lat": 29.2487,
      "lng": 94.891,
      "population": 50446
    },
    {
      "popularity": 929,
      "slug": "philippines/santa-rosa",
      "city": "Santa Rosa",
      "A2": "Laguna",
      "country": "Philippines",
      "lat": 14.3167,
      "lng": 121.1167,
      "population": 414812
    },
    {
      "popularity": 930,
      "slug": "ghana/accra",
      "city": "Accra",
      "A2": "Greater Accra",
      "country": "Ghana",
      "lat": 5.6037,
      "lng": 0.187,
      "population": 2291352
    },
    {
      "popularity": 931,
      "slug": "british-virgin-islands/road-town",
      "city": "Road Town",
      "A2": 0,
      "country": "British Virgin Islands",
      "lat": 18.4167,
      "lng": 64.6167,
      "population": 0
    },
    {
      "popularity": 932,
      "slug": "united-kingdom/shrewsbury",
      "city": "Shrewsbury",
      "A2": "Shropshire",
      "country": "United Kingdom",
      "lat": 52.708,
      "lng": 2.754,
      "population": 71715
    },
    {
      "popularity": 933,
      "slug": "gibraltar/gibraltar",
      "city": "Gibraltar",
      "A2": 0,
      "country": "Gibraltar",
      "lat": 36.1324,
      "lng": 5.3781,
      "population": 187083
    },
    {
      "popularity": 934,
      "slug": "belgium/bruges",
      "city": "Bruges",
      "A2": "Flanders",
      "country": "Belgium",
      "lat": 51.2089,
      "lng": 3.2242,
      "population": 118284
    },
    {
      "popularity": 935,
      "slug": "china/wuhan",
      "city": "Wuhan",
      "A2": "Hubei",
      "country": "China",
      "lat": 30.5872,
      "lng": 114.2881,
      "population": 9729000
    },
    {
      "popularity": 936,
      "slug": "united-states/california/palm-desert",
      "city": "Palm Desert",
      "A2": "California",
      "country": "United States",
      "lat": 33.7378,
      "lng": 116.3695,
      "population": 53275
    },
    {
      "popularity": 937,
      "slug": "united-states/california/cathedral-city",
      "city": "Cathedral City",
      "A2": "California",
      "country": "United States",
      "lat": 33.8363,
      "lng": 116.4642,
      "population": 55007
    },
    {
      "popularity": 938,
      "slug": "united-states/california/carlsbad",
      "city": "Carlsbad",
      "A2": "California",
      "country": "United States",
      "lat": 33.1247,
      "lng": 117.2837,
      "population": 115382
    },
    {
      "popularity": 939,
      "slug": "united-states/idaho/coeur-d'alene",
      "city": "Coeur D'Alene",
      "A2": "Idaho",
      "country": "United States",
      "lat": 47.7041,
      "lng": 116.7935,
      "population": 116834
    },
    {
      "popularity": 940,
      "slug": "italy/trento",
      "city": "Trento",
      "A2": "Trentino Alto Adige",
      "country": "Italy",
      "lat": 46.0667,
      "lng": 11.1167,
      "population": 117997
    },
    {
      "popularity": 941,
      "slug": "united-states/california/oceanside",
      "city": "Oceanside",
      "A2": "California",
      "country": "United States",
      "lat": 33.2247,
      "lng": 117.3083,
      "population": 175742
    },
    {
      "popularity": 942,
      "slug": "france/annecy",
      "city": "Annecy",
      "A2": "Auvergne Rhône Alpes",
      "country": "France",
      "lat": 45.916,
      "lng": 6.133,
      "population": 128199
    },
    {
      "popularity": 943,
      "slug": "spain/ibiza",
      "city": "Ibiza",
      "A2": "Balearic Islands",
      "country": "Spain",
      "lat": 38.9089,
      "lng": 1.4328,
      "population": 50643
    },
    {
      "popularity": 944,
      "slug": "switzerland/basel",
      "city": "Basel",
      "A2": "Basel Stadt",
      "country": "Switzerland",
      "lat": 47.5606,
      "lng": 7.5906,
      "population": 177827
    },
    {
      "popularity": 946,
      "slug": "france/bordeaux",
      "city": "Bordeaux",
      "A2": "Nouvelle Aquitaine",
      "country": "France",
      "lat": 44.84,
      "lng": 0.58,
      "population": 257068
    },
    {
      "popularity": 947,
      "slug": "canada/banff",
      "city": "Banff",
      "A2": "Alberta",
      "country": "Canada",
      "lat": 51.1781,
      "lng": 115.5719,
      "population": 7847
    },
    {
      "popularity": 948,
      "slug": "italy/padova",
      "city": "Padova",
      "A2": "Veneto",
      "country": "Italy",
      "lat": 45.4064,
      "lng": 11.8778,
      "population": 210440
    },
    {
      "popularity": 949,
      "slug": "jersey/saint-helier",
      "city": "Saint Helier",
      "A2": 0,
      "country": "Jersey",
      "lat": 49.1858,
      "lng": 2.11,
      "population": 33522
    },
    {
      "popularity": 950,
      "slug": "united-states/texas/san-angelo",
      "city": "San Angelo",
      "A2": "Texas",
      "country": "United States",
      "lat": 31.4424,
      "lng": 100.4506,
      "population": 101004
    },
    {
      "popularity": 951,
      "slug": "japan/ube",
      "city": "Ube",
      "A2": "Yamaguchi",
      "country": "Japan",
      "lat": 33.9517,
      "lng": 131.2467,
      "population": 162873
    },
    {
      "popularity": 952,
      "slug": "united-states/montana/bozeman",
      "city": "Bozeman",
      "A2": "Montana",
      "country": "United States",
      "lat": 45.6832,
      "lng": 111.0552,
      "population": 57695
    },
    {
      "popularity": 953,
      "slug": "united-states/california/temecula",
      "city": "Temecula",
      "A2": "California",
      "country": "United States",
      "lat": 33.4928,
      "lng": 117.1315,
      "population": 114761
    },
    {
      "popularity": 954,
      "slug": "united-states/california/san-clemente",
      "city": "San Clemente",
      "A2": "California",
      "country": "United States",
      "lat": 33.4498,
      "lng": 117.6103,
      "population": 64558
    },
    {
      "popularity": 955,
      "slug": "united-states/oregon/beaverton",
      "city": "Beaverton",
      "A2": "Oregon",
      "country": "United States",
      "lat": 45.4779,
      "lng": 122.8168,
      "population": 99037
    },
    {
      "popularity": 956,
      "slug": "united-arab-emirates/abu-dhabi",
      "city": "Abu Dhabi",
      "A2": "Abū Z̧aby",
      "country": "United Arab Emirates",
      "lat": 24.4511,
      "lng": 54.3969,
      "population": 1483000
    },
    {
      "popularity": 957,
      "slug": "jamaica/montego-bay",
      "city": "Montego Bay",
      "A2": "Saint James",
      "country": "Jamaica",
      "lat": 18.4667,
      "lng": 77.9167,
      "population": 110115
    },
    {
      "popularity": 958,
      "slug": "austria/salzburg",
      "city": "Salzburg",
      "A2": "Salzburg",
      "country": "Austria",
      "lat": 47.7972,
      "lng": 13.0477,
      "population": 155021
    },
    {
      "popularity": 959,
      "slug": "united-states/california/vista",
      "city": "Vista",
      "A2": "California",
      "country": "United States",
      "lat": 33.1896,
      "lng": 117.2386,
      "population": 101638
    },
    {
      "popularity": 961,
      "slug": "italy/naples",
      "city": "Naples",
      "A2": "Campania",
      "country": "Italy",
      "lat": 40.8333,
      "lng": 14.25,
      "population": 966144
    },
    {
      "popularity": 962,
      "slug": "saudi-arabia/jeddah",
      "city": "Jeddah",
      "A2": "Makkah al Mukarramah",
      "country": "Saudi Arabia",
      "lat": 21.5428,
      "lng": 39.1728,
      "population": 3976000
    },
    {
      "popularity": 963,
      "slug": "austria/innsbruck",
      "city": "Innsbruck",
      "A2": "Tirol",
      "country": "Austria",
      "lat": 47.2683,
      "lng": 11.3933,
      "population": 132493
    },
    {
      "popularity": 964,
      "slug": "philippines/san-sebastian",
      "city": "San Sebastian",
      "A2": "Samar",
      "country": "Philippines",
      "lat": 11.7,
      "lng": 125.0167,
      "population": 8704
    },
    {
      "popularity": 965,
      "slug": "switzerland/lausanne",
      "city": "Lausanne",
      "A2": "Vaud",
      "country": "Switzerland",
      "lat": 46.5333,
      "lng": 6.6333,
      "population": 138905
    },
    {
      "popularity": 966,
      "slug": "united-states/colorado/centennial",
      "city": "Centennial",
      "A2": "Colorado",
      "country": "United States",
      "lat": 39.5926,
      "lng": 104.8674,
      "population": 110937
    },
    {
      "popularity": 967,
      "slug": "japan/nagasaki",
      "city": "Nagasaki",
      "A2": "Nagasaki",
      "country": "Japan",
      "lat": 32.7833,
      "lng": 129.8667,
      "population": 404656
    },
    {
      "popularity": 968,
      "slug": "netherlands/almere",
      "city": "Almere",
      "A2": "Flevoland",
      "country": "Netherlands",
      "lat": 52.3758,
      "lng": 5.2256,
      "population": 207904
    },
    {
      "popularity": 969,
      "slug": "united-states/new-mexico/taos",
      "city": "Taos",
      "A2": "New Mexico",
      "country": "United States",
      "lat": 36.3871,
      "lng": 105.5804,
      "population": 14196
    },
    {
      "popularity": 970,
      "slug": "italy/genoa",
      "city": "Genoa",
      "A2": "Liguria",
      "country": "Italy",
      "lat": 44.4072,
      "lng": 8.934,
      "population": 580097
    },
    {
      "popularity": 971,
      "slug": "north-korea/hamhung",
      "city": "Hamhung",
      "A2": "Hamnam",
      "country": "North Korea",
      "lat": 39.9167,
      "lng": 127.5333,
      "population": 768551
    },
    {
      "popularity": 972,
      "slug": "solomon-islands/honiara",
      "city": "Honiara",
      "A2": "Honiara",
      "country": "Solomon Islands",
      "lat": 9.4333,
      "lng": 159.95,
      "population": 84520
    },
    {
      "popularity": 973,
      "slug": "macau/macau",
      "city": "Macau",
      "A2": 0,
      "country": "Macau",
      "lat": 22.203,
      "lng": 113.545,
      "population": 568700
    },
    {
      "popularity": 974,
      "slug": "united-states/nevada/incline-village",
      "city": "Incline Village",
      "A2": "Nevada",
      "country": "United States",
      "lat": 39.2639,
      "lng": 119.9453,
      "population": 8669
    },
    {
      "popularity": 975,
      "slug": "mauritania/nouakchott",
      "city": "Nouakchott",
      "A2": 0,
      "country": "Mauritania",
      "lat": 18.0858,
      "lng": 15.9785,
      "population": 1077169
    },
    {
      "popularity": 976,
      "slug": "united-states/nevada/henderson",
      "city": "Henderson",
      "A2": "Nevada",
      "country": "United States",
      "lat": 36.0133,
      "lng": 115.038,
      "population": 320189
    },
    {
      "popularity": 977,
      "slug": "kuwait/kuwait-city",
      "city": "Kuwait City",
      "A2": "Al ‘Āşimah",
      "country": "Kuwait",
      "lat": 29.375,
      "lng": 47.98,
      "population": 2989000
    },
    {
      "popularity": 978,
      "slug": "japan/osaka",
      "city": "Osaka",
      "A2": "Ōsaka",
      "country": "Japan",
      "lat": 34.752,
      "lng": 135.4582,
      "population": 15490000
    },
    {
      "popularity": 979,
      "slug": "greece/rethymno",
      "city": "Rethymno",
      "A2": "Kríti",
      "country": "Greece",
      "lat": 35.3689,
      "lng": 24.4739,
      "population": 32468
    },
    {
      "popularity": 980,
      "slug": "philippines/santa-maria",
      "city": "Santa Maria",
      "A2": "Bulacan",
      "country": "Philippines",
      "lat": 14.8183,
      "lng": 120.9563,
      "population": 289820
    },
    {
      "popularity": 981,
      "slug": "france/biarritz",
      "city": "Biarritz",
      "A2": "Nouvelle Aquitaine",
      "country": "France",
      "lat": 43.48,
      "lng": 1.56,
      "population": 25532
    },
    {
      "popularity": 982,
      "slug": "turkey/bursa",
      "city": "Bursa",
      "A2": "Bursa",
      "country": "Turkey",
      "lat": 40.1833,
      "lng": 29.0667,
      "population": 211644
    },
    {
      "popularity": 983,
      "slug": "china/foshan",
      "city": "Foshan",
      "A2": "Guangdong",
      "country": "China",
      "lat": 23.0292,
      "lng": 113.1056,
      "population": 7905700
    },
    {
      "popularity": 984,
      "slug": "norway/alesund",
      "city": "Alesund",
      "A2": "Møre og Romsdal",
      "country": "Norway",
      "lat": 62.4723,
      "lng": 6.1549,
      "population": 52163
    },
    {
      "popularity": 985,
      "slug": "israel/beersheba",
      "city": "Beersheba",
      "A2": "Southern",
      "country": "Israel",
      "lat": 31.2589,
      "lng": 34.7978,
      "population": 209000
    },
    {
      "popularity": 986,
      "slug": "united-states/california/napa",
      "city": "Napa",
      "A2": "California",
      "country": "United States",
      "lat": 38.2976,
      "lng": 122.3011,
      "population": 85239
    },
    {
      "popularity": 987,
      "slug": "united-states/montana/billings",
      "city": "Billings",
      "A2": "Montana",
      "country": "United States",
      "lat": 45.7891,
      "lng": 108.5524,
      "population": 120728
    },
    {
      "popularity": 988,
      "slug": "united-kingdom/stanley",
      "city": "Stanley",
      "A2": "Wakefield",
      "country": "United Kingdom",
      "lat": 53.7145,
      "lng": 1.476,
      "population": 15314
    },
    {
      "popularity": 989,
      "slug": "italy/bologna",
      "city": "Bologna",
      "A2": "Emilia Romagna",
      "country": "Italy",
      "lat": 44.4939,
      "lng": 11.3428,
      "population": 389261
    },
    {
      "popularity": 990,
      "slug": "the-bahamas/nassau",
      "city": "Nassau",
      "A2": 0,
      "country": "The Bahamas",
      "lat": 25.0667,
      "lng": 77.3333,
      "population": 274400
    },
    {
      "popularity": 991,
      "slug": "germany/darmstadt",
      "city": "Darmstadt",
      "A2": "Hesse",
      "country": "Germany",
      "lat": 49.8667,
      "lng": 8.65,
      "population": 159207
    },
    {
      "popularity": 992,
      "slug": "canada/hamilton",
      "city": "Hamilton",
      "A2": "Ontario",
      "country": "Canada",
      "lat": 43.2567,
      "lng": 79.8692,
      "population": 693645
    },
    {
      "popularity": 993,
      "slug": "china/zhangzhou",
      "city": "Zhangzhou",
      "A2": "Fujian",
      "country": "China",
      "lat": 24.5093,
      "lng": 117.6612,
      "population": 5140000
    },
    {
      "popularity": 994,
      "slug": "iraq/erbil",
      "city": "Erbil",
      "A2": "Arbīl",
      "country": "Iraq",
      "lat": 36.1911,
      "lng": 44.0094,
      "population": 846000
    },
    {
      "popularity": 995,
      "slug": "italy/modena",
      "city": "Modena",
      "A2": "Emilia Romagna",
      "country": "Italy",
      "lat": 44.6458,
      "lng": 10.9257,
      "population": 185273
    },
    {
      "popularity": 996,
      "slug": "japan/kagoshima",
      "city": "Kagoshima",
      "A2": "Kagoshima",
      "country": "Japan",
      "lat": 31.58,
      "lng": 130.5281,
      "population": 593754
    },
    {
      "popularity": 997,
      "slug": "united-kingdom/brighton",
      "city": "Brighton",
      "A2": "Brighton and Hove",
      "country": "United Kingdom",
      "lat": 50.8284,
      "lng": 0.1395,
      "population": 134293
    },
    {
      "popularity": 998,
      "slug": "norway/arendal",
      "city": "Arendal",
      "A2": "Aust Agder",
      "country": "Norway",
      "lat": 58.4667,
      "lng": 8.7667,
      "population": 45065
    },
    {
      "popularity": 999,
      "slug": "luxembourg/luxembourg",
      "city": "Luxembourg",
      "A2": "Luxembourg",
      "country": "Luxembourg",
      "lat": 49.6106,
      "lng": 6.1328,
      "population": 128512
    },
    {
      "popularity": 1000,
      "slug": "germany/dusseldorf",
      "city": "Dusseldorf",
      "A2": "North Rhine Westphalia",
      "country": "Germany",
      "lat": 51.2311,
      "lng": 6.7724,
      "population": 645923
    },
    {
      "popularity": 1001,
      "slug": "finland/rovaniemi",
      "city": "Rovaniemi",
      "A2": "Lappi",
      "country": "Finland",
      "lat": 66.5028,
      "lng": 25.7285,
      "population": 61763
    },
    {
      "popularity": 1002,
      "slug": "italy/monza",
      "city": "Monza",
      "A2": "Lombardy",
      "country": "Italy",
      "lat": 45.5836,
      "lng": 9.2736,
      "population": 123598
    },
    {
      "popularity": 1004,
      "slug": "saudi-arabia/mecca",
      "city": "Mecca",
      "A2": "Makkah al Mukarramah",
      "country": "Saudi Arabia",
      "lat": 21.4225,
      "lng": 39.8261,
      "population": 1675368
    }
  ] 

  export function getCityBySlug(slugParam) {
    console.log('getting city');
    console.log(slugParam);
    return CITIES.filter((city) => city.slug === slugParam);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }