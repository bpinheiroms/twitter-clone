import { number } from "yup";

export interface IPostItem {
  id: string;
  nameUser: string;
  username: string;
  idUser: number;
  text: string;
  date: Date;
  type: 'retweet' | 'tweet' | 'quote-post';
  quotePostData?: IPostItem;
}
