import { IPostItem } from '../interfaces';
import { convertDateTimezone } from './date';

const generateTweetData = (text: string): IPostItem => {
  const data: IPostItem = {
    id: new Date().getMilliseconds(),
    idUser: 1,
    nameUser: 'Bruno',
    username: 'bpinheiroms',
    text: text,
    date: convertDateTimezone(new Date()),
    type: 'tweet',
  };

  return data;
};

export { generateTweetData };
