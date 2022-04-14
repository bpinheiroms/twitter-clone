export interface IPostItem {
  id: number;
  nameUser: string;
  username: string;
  idUser: number;
  text: string;
  date: string;
  type: 'retweet' | 'tweet' | 'quote-post';
  quotePostData?: IPostItem;
}

export interface ICreateTweet {
  text: string;
}

export type IPostFilter = 'all' | 'following';
