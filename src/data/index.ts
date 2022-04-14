import { convertDateTimezone } from '../helper/date';
import { IPostItem, IUsers } from '../interfaces';

const userDataMock: IUsers = {
  idUser: 1,
  nameUser: 'Bruno',
  username: 'bpinheiroms',
  joined: '2022-02-14',
  followers: 0,
  following: 0,
};

const listUsersMock: IUsers[] = [
  userDataMock,
  {
    nameUser: 'Dan Abramov',
    username: 'danAbramov',
    idUser: 2,
    joined: '2021-02-14',
    followers: 1000,
    following: 500,
  },
  {
    nameUser: 'Kent C. Dodds',
    username: 'kentDodds',
    idUser: 3,
    joined: '2022-01-14',
    followers: 300,
    following: 100,
  },
  {
    nameUser: 'Elon Musk',
    username: 'elonMusk',
    idUser: 4,
    joined: '2020-01-14',
    followers: 30000,
    following: 1000,
  },
  {
    nameUser: 'Ivan on Tech',
    username: 'ivanTech',
    idUser: 5,
    joined: '2022-03-14',
    followers: 270,
    following: 120,
  },
];

const feedListMock: IPostItem[] = [
  {
    id: 12345678,
    nameUser: 'Dan Abramov',
    username: 'danAbramov',
    idUser: 2,
    text: 'I created redux!',
    date: '2022-04-14T14:27:00',
    type: 'tweet',
  },
  {
    id: 12345677,
    nameUser: 'Kent C. Dodds',
    username: 'kentDodds',
    idUser: 3,
    text: 'I created a tweet!',
    date: '2022-04-14T15:27:00',
    type: 'tweet',
  },
  {
    id: 12345679,
    nameUser: 'Elon Musk',
    username: 'elonMusk',
    idUser: 4,
    text: 'I created Tesla!',
    date: '2022-04-14T11:27:00',
    type: 'tweet',
  },
  {
    id: 12345675,
    nameUser: 'Ivan on Tech',
    username: 'ivanTech',
    idUser: 5,
    text: 'I created Moralis!',
    date: convertDateTimezone(new Date()),
    type: 'tweet',
  },
];

export { feedListMock, userDataMock, listUsersMock };
