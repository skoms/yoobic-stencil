export interface User {
  id: number;
  name: Name;
  age: number;
  nationality: string;
  yob: string;
  occupation: string;
}

export interface Name {
  english: string;
  native: string;
}

export const USERS: User[] = [
  {
    id: 1,
    name: {
      english: 'Andreas Skomsoey',
      native: 'Andreas Skomsøy',
    },
    age: 24,
    nationality: 'Norwegian',
    yob: '1997',
    occupation: 'Developer',
  },
  {
    id: 2,
    name: {
      english: 'John Dow',
      native: 'John Dow',
    },
    age: 33,
    nationality: 'British',
    yob: '1988',
    occupation: 'Author',
  },
  {
    id: 3,
    name: {
      english: 'Jane Dow',
      native: 'Jane Dow',
    },
    age: 30,
    nationality: 'British',
    yob: '1991',
    occupation: 'Director',
  },
  {
    id: 4,
    name: {
      english: 'Kari Nordmann',
      native: 'Kari Nordmann',
    },
    age: 45,
    nationality: 'Norwegian',
    yob: '1976',
    occupation: 'Lawyer',
  },
  {
    id: 5,
    name: {
      english: 'Ola Nordmann',
      native: 'Ola Nordmann',
    },
    age: 42,
    nationality: 'Norwegian',
    yob: '1979',
    occupation: 'Retail Assistant',
  },
  {
    id: 6,
    name: {
      english: 'Peter Ivanoff',
      native: 'Петр Иванов',
    },
    age: 27,
    nationality: 'Russian',
    yob: '1994',
    occupation: 'Counsellor',
  },
  {
    id: 7,
    name: {
      english: 'Xiangyu Lee',
      native: '李香芋',
    },
    age: 21,
    nationality: 'Chinese',
    yob: '2000',
    occupation: 'Student',
  },
  {
    id: 8,
    name: {
      english: 'Amit Levi',
      native: 'עמית לוי',
    },
    age: 18,
    nationality: 'Israeli',
    yob: '2003',
    occupation: 'Student',
  },
];
