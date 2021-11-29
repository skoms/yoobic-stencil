export interface City {
  id: number;
  name: string;
  population: number;
  country: string;
  continent: string;
  yearOfSettlement: number;
}

export const CITIES: City[] = [
  {
    id: 1,
    name: 'Tokyo',
    population: 37400068,
    country: 'Japan',
    continent: 'Asia',
    yearOfSettlement: 1170,
  },
  {
    id: 2,
    name: 'Delhi',
    population: 28514000,
    country: 'India',
    continent: 'Asia',
    yearOfSettlement: 1052,
  },
  {
    id: 3,
    name: 'Shanghai',
    population: 25582000,
    country: 'China',
    continent: 'Asia',
    yearOfSettlement: 1732,
  },
  {
    id: 4,
    name: 'São Paulo',
    population: 21650000,
    country: 'Brazil',
    continent: 'South America',
    yearOfSettlement: 1554,
  },
  {
    id: 5,
    name: 'Mexico City',
    population: 21581000,
    country: 'Mexico',
    continent: 'North America',
    yearOfSettlement: 1325,
  },
  {
    id: 6,
    name: 'Cairo',
    population: 20076000,
    country: 'Egypt',
    continent: 'Africa',
    yearOfSettlement: 969,
  },
  {
    id: 7,
    name: 'Mumbai',
    population: 19980000,
    country: 'India',
    continent: 'Asia',
    yearOfSettlement: 1507,
  },
  {
    id: 8,
    name: 'Beijing',
    population: 19618000,
    country: 'China',
    continent: 'Asia',
    yearOfSettlement: -1045,
  },
  {
    id: 9,
    name: 'Dhaka',
    population: 19578000,
    country: 'Bangladesh',
    continent: 'Asia',
    yearOfSettlement: 1608,
  },
  {
    id: 10,
    name: 'Osaka',
    population: 19281000,
    country: 'Japan',
    continent: 'Asia',
    yearOfSettlement: 645,
  },
];
