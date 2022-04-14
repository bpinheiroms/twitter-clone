import { convertDateTimezone } from '../helper/date';
import { IPostItem } from '../interfaces';

const userDataMock = {
  idUser: 1,
  nameUser: 'Bruno',
  username: 'bpinheiroms',
};

const feedListMock: IPostItem[] = [
  {
    id: 12345678,
    nameUser: 'Dan Abramov',
    username: 'dan_abramov',
    idUser: 2,
    text: 'I created redux!',
    date: '2022-04-14T14:27:00',
    type: 'tweet',
  },
  {
    id: 12345677,
    nameUser: 'Kent C. Dodds',
    username: 'kent_dodds',
    idUser: 3,
    text: 'I created a tweet!',
    date: '2022-04-14T15:27:00',
    type: 'tweet',
  },
  {
    id: 12345679,
    nameUser: 'Elon Musk',
    username: 'elon_musk',
    idUser: 4,
    text: 'I created Tesla!',
    date: '2022-04-14T11:27:00',
    type: 'tweet',
  },
  {
    id: 12345675,
    nameUser: 'Ivan on Tech',
    username: 'ivan_tech',
    idUser: 4,
    text: 'I created Moralis!',
    date: convertDateTimezone(new Date()),
    type: 'tweet',
  },
];

export { feedListMock, userDataMock };
