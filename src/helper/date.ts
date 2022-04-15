import { IPostItem } from '../interfaces';

const _ = require('lodash');

const convertDateTimezone = (date: Date): string => {
  const offset = date.getTimezoneOffset();
  const newDate = new Date(date.getTime() - offset * 60 * 1000);

  return newDate.toISOString().split('.')[0];
};

const sortFeedByDate = (postList: IPostItem[]) => {
  return _.sortBy(postList, function (o: IPostItem) {
    return new Date(o.date);
  }).reverse();
};


export { convertDateTimezone, sortFeedByDate };
