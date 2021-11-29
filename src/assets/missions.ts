/* eslint-disable max-len */
export interface Mission {
  id: number;
  thumbnail: string;
  name: string;
  location: string;
  company: string;
  rating: RatingObject;
  date: string;
  geoLocation: GeoLoc;
  picture: string;
  description: Description;
}

interface Description {
  title: string;
  intro: string;
  deadline: string;
}

export interface GeoLoc {
  latitude: number;
  longitude: number;
}

export interface RatingObject {
  decimal: number;
  filled?: string[];
  halfFilled?: string[];
  empty?: string[];
}

export const MISSIONS: Mission[] = [
  {
    id: 1,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Andreas Skomsøy',
    location: 'London, England',
    company: 'Yoobic',
    rating: { decimal: 3.5 },
    date: '2021-11-25',
    geoLocation: { latitude: 51.501364, longitude: -0.1418899999999894 },
    picture: '../../assets/images/mission1.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      deadline: '2021-11-30',
    },
  },
  {
    id: 2,
    thumbnail: '../../assets/images/me.jpg',
    name: 'John Dow',
    location: 'Wiltshire, England',
    company: 'Roobic',
    rating: { decimal: 2 },
    date: '2021-11-27',
    geoLocation: { latitude: 51.178889, longitude: -1.826111 },
    picture: '../../assets/images/mission2.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      deadline: '2021-11-30',
    },
  },
  {
    id: 3,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Jane Dow',
    location: 'Northumberland, England',
    company: 'Youbix',
    rating: { decimal: 5 },
    date: '2021-11-30',
    geoLocation: { latitude: 55.41575, longitude: -1.70607 },
    picture: '../../assets/images/mission3.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      deadline: '2021-12-15',
    },
  },
  {
    id: 4,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Kari Nordmann',
    location: 'Kent, England',
    company: 'Yootoob',
    rating: { decimal: 4.5 },
    date: '2021-12-12',
    geoLocation: { latitude: 51.14, longitude: 1.37 },
    picture: '../../assets/images/mission4.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      deadline: '2021-12-24',
    },
  },
  {
    id: 5,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Ola Nordmann',
    location: 'Inverness, Scotland',
    company: 'Loobux',
    rating: { decimal: 4.3 },
    date: '2021-12-25',
    geoLocation: { latitude: 57.4778, longitude: -4.2247 },
    picture: '../../assets/images/mission5.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      deadline: '2021-12-30',
    },
  },
  {
    id: 6,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Bill Humphrey',
    location: 'Southern Anglesey, Wales',
    company: 'Mebic',
    rating: { decimal: 3.6 },
    date: '2022-01-01',
    geoLocation: { latitude: 53.2077, longitude: -4.2361 },
    picture: '../../assets/images/mission6.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      deadline: '2022-02-27',
    },
  },
];
