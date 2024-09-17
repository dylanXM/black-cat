import { findUserById } from 'src/data/user';
import deepClone from './cloneDeep';
import { findTwitterByIds, Twitter } from 'src/data/twitter';

function patchTwittersToUsers(ids: number[]): Twitter[] {
  const activities = deepClone(findTwitterByIds(ids));
  activities.forEach((item) => {
    item.user = deepClone(findUserById(item.userId));
  });
  return activities;
}

export default patchTwittersToUsers;
