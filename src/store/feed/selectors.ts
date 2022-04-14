import moment from 'moment';
import { selector } from 'recoil';
import { userDataMock } from '../../data';
import { IPostItem } from '../../interfaces';
import { feedListFilterState, feedListState } from './atoms';

const _ = require('lodash');

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(feedListFilterState);
    const list = get(feedListState);

    const sorted = _.sortBy(list, function (o: IPostItem) {
      return new Date(o.date);
    }).reverse();

    switch (filter) {
      case 'all':
        return sorted.filter((item: IPostItem) => item);
      case 'following':
        return sorted.filter((item: IPostItem) => item);
      default:
        return sorted;
    }
  },
});

export const exceedLimitPostsState = selector({
  key: 'exceedLimitPostsState',
  get: ({ get }) => {
    const list = get(feedListState);

    const yesterday = moment().add(-1, 'day').endOf('day');

    const todayList = _.filter(list, function (o: IPostItem) {
      return moment(o.date) > yesterday && o.idUser === userDataMock.idUser;
    });

    return todayList.length === 5;
  },
});
