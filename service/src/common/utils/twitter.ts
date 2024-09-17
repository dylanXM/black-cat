import { findUserById } from 'src/data/user';
import deepClone from './cloneDeep';

type TypeKey = 'likes' | 'goings';

function patchUsersToTwitter(key: TypeKey, ids: number[]) {
  const users = deepClone(ids.map((id) => findUserById(id)));
  return users;
}

export default patchUsersToTwitter;
