import { Injectable } from '@nestjs/common';
import { GetTwittersDto } from './dto/get-twitter.dto';
import { twitterList } from 'src/data/twitter';
import { findUserById } from 'src/data/user';
import deepClone from 'src/common/utils/cloneDeep';
import patchUsersToTwitter from 'src/common/utils/twitter';

@Injectable()
export class TwitterService {
  async getTwitters(params: GetTwittersDto) {
    console.log('params', params);
    const { page, channel, startDate, endDate, pageSize } = params;

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const data = twitterList.filter((item) => {
      if (channel && item.channel !== channel) {
        return false;
      }
      if (startDate && item.time < startDate) {
        return false;
      }
      if (endDate && item.time > endDate) {
        return false;
      }
      return true;
    });

    // 根据userId匹配用户信息
    data.forEach((item) => {
      item.user = deepClone(findUserById(item.userId));
    });

    // 匹配 user 的信息
    data.forEach((item) => {
      item.likesUsers = patchUsersToTwitter('likes', item.likes);
      item.goingsUsers = patchUsersToTwitter('goings', item.goings);
    });

    const lendth = data.length;

    return {
      data: data.slice(startIndex, endIndex),
      count: lendth,
    };
  }
}
