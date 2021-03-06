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

const generateQuotePostData = (
  text: string,
  quotePostItem: IPostItem,
): IPostItem => {
  const data: IPostItem = {
    id: new Date().getTime(),
    idUser: userDataMock.idUser,
    nameUser: userDataMock.nameUser,
    username: userDataMock.username,
    text: text,
    date: convertDateTimezone(new Date()),
    type: 'quote-post',
    quotePostData: quotePostItem,
  };

  return data;
};

const getUserCondition = (post: IPostItem, user: any) => {
  return (
    (post.idUser === user.idUser && !post.idUserRePost) ||
    post.idUserRePost === user.idUser
  );
};

export {
  getUserCondition,
  generateTweetData,
  generateRetweetData,
  generateQuotePostData,
};
