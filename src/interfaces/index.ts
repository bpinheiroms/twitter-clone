export interface IPostItem {
  id: number;
  nameUser: string;
  username: string;
  idUser: number;
  idUserRePost?: number;
  text: string;
  date: string;
  type: 'retweet' | 'tweet' | 'quote-post';
  quotePostData?: IPostItem;
}

export interface ICreateTweet {
  text: string;
}

export interface IUsers {
  idUser: number;
  nameUser: string;
  username: string;
  joined: string;
  followers: number;
  following: number;
}

export interface IQuoteModalParams {
  opened: boolean;
  post?: IPostItem;
}

export interface IProfileModalParams {
  opened: boolean;
  username?: string;
}

export interface IFeedFilter {
  isFollowing: boolean;
  searchText: string;
}
