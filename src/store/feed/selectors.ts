import moment from 'moment';
import { selector } from 'recoil';
import { userDataMock } from '../../data';
import { IPostItem } from '../../interfaces';
import { followingListState } from '../profile/atoms';
import { feedListFilterState, feedListState } from './atoms';

const _ = require('lodash');

export const filteredFeedListState = selector({
  key: 'filteredFeedListState',
  get: ({ get }) => {
    const filter = get(feedListFilterState);
    const list = get(feedListState);
    const followingList = get(followingListState);

    const sorted = _.sortBy(list, function (o: IPostItem) {
      return new Date(o.date);
    }).reverse();

    if (filter) {
      return sorted.filter((item: IPostItem) =>
        _.includes(followingList, item.idUser),
      );
    }

    return sorted.filter((item: IPostItem) => item);
  },
});

export const filteredMyPostListsState = selector({
  key: 'filteredMyPostListsState',
  get: ({ get }) => {
    const list = get(feedListState);

    const allPosts: IPostItem[] = _.filter(list, function (o: IPostItem) {
      return (
        o.idUser === userDataMock.idUser ||
        o.idUserRePost === userDataMock.idUser
      );
    });

    return allPosts;
  },
});

export const exceedLimitPostsState = selector({
  key: 'exceedLimitPostsState',
  get: ({ get }) => {
    const list = get(feedListState);

    const yesterday = moment().add(-1, 'day').endOf('day');

    const todayList = _.filter(list, function (o: IPostItem) {
      return (
        moment(o.date) > yesterday &&
        (o.idUser === userDataMock.idUser ||
          o.idUserRePost === userDataMock.idUser)
      );
    });

    return todayList.length === 5;
  },
});
