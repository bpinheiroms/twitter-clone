import moment from 'moment';
import { selector } from 'recoil';
import { userDataMock } from '../../data';
import { sortFeedByDate } from '../../helper/date';
import { getUserCondition } from '../../helper/tweet';
import { IDataByUser, IPostItem, IUsers } from '../../interfaces';
import { profileModalState } from '../modals/atoms';
import { followingListState, userListState } from '../profile/atoms';
import { feedListFilterState, feedListState } from './atoms';

const _ = require('lodash');

export const filteredFeedListState = selector({
  key: 'filteredFeedListState',
  get: ({ get }) => {
    const filter = get(feedListFilterState);
    const list = get(feedListState);
    const followingList = get(followingListState);

    let sorted = sortFeedByDate(list);

    if (filter.isFollowing) {
      sorted = sorted.filter((item: IPostItem) =>
        _.includes(followingList, item.idUser),
      );
    } else {
      sorted = sorted.filter((item: IPostItem) => item);
    }

    if (filter.searchText !== '') {
      const expression = RegExp(
        `.*${filter.searchText.toLowerCase().split('').join('.*')}.*`,
      );

      sorted = sorted.filter(
        (lst: IPostItem) =>
          lst.text.toLowerCase().match(expression) && lst.type !== 'retweet',
      );
    }

    return sorted;
  },
});

export const exceedLimitPostsState = selector({
  key: 'exceedLimitPostsState',
  get: ({ get }) => {
    const list = get(feedListState);

    const yesterday = moment().add(-1, 'day').endOf('day');

    const todayList = _.filter(list, function (o: IPostItem) {
      return moment(o.date) > yesterday && getUserCondition(o, userDataMock);
    });

    return todayList.length === 5;
  },
});

export const dataByUserNameState = selector<IDataByUser>({
  key: 'dataByUserNameState',
  get: ({ get }) => {
    const profileModal = get(profileModalState);

    if (profileModal.opened) {
      const listFeed = get(feedListState);
      const listUsers = get(userListState);
      const listFollowing = get(followingListState);

      const user = _.findLast(
        listUsers,
        (user: IUsers) => user.username === profileModal.username,
      );

      if (user) {
        const posts: IPostItem[] = _.filter(
          listFeed,
          function (post: IPostItem) {
            return getUserCondition(post, user);
          },
        );

        const followedByMe = !!listFollowing.includes(user.idUser);
        const isMe = user.idUser === userDataMock.idUser;
        return {
          user: {
            ...user,
            followers: followedByMe ? user.followers + 1 : user.followers,
            following: isMe ? listFollowing.length : user.following,
          },
          posts: sortFeedByDate(posts),
          followedByMe,
          isMe,
        };
      }
    }

    return {
      user: undefined,
      posts: undefined,
      followedByMe: false,
      isMe: false,
    };
  },
});
