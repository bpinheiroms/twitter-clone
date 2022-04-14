import { userDataMock } from '../data';
import { IPostItem } from '../interfaces';
import { convertDateTimezone } from './date';

const generateTweetData = (text: string): IPostItem => {
  const data: IPostItem = {
    id: new Date().getTime(),
    idUser: userDataMock.idUser,
    nameUser: userDataMock.nameUser,
    username: userDataMock.username,
    text: text,
    date: convertDateTimezone(new Date()),
    type: 'tweet',
  };

  return data;
};

const generateRetweetData = (postItem: IPostItem): IPostItem => {
  const data: IPostItem = {
    ...postItem,
    id: new Date().getTime(),
    date: convertDateTimezone(new Date()),
    idUserRePost: userDataMock.idUser,
    type: 'retweet',
  };

  return data;
};

export { generateTweetData, generateRetweetData };
