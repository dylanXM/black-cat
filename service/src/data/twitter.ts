import { User } from './user';

const comment = {
  id: 1,
  userId: 1,
  content: 'This is a comment',
  likes: [1, 2, 3, 4, 5],
  time: '9 hours ago',
};

export type Comment = typeof comment;

const twitter = {
  userId: 1,
  channle: 'Channel 1',
  title: 'Activity Title Name Make it Longer May Longer than One Line',
  startTime: '2021-07-01 00:00:00',
  endTime: '2021-07-01 23:59:59',
  content:
    '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti',
  goings: [1, 2, 3, 4, 5],
  likes: [1, 2, 3, 4, 5],
  comments: Array(10)
    .fill(comment)
    .map((c, index) => ({
      ...c,
      id: index,
    })),
  address: 'Address',
  pictures: [
    'https://img.lovepik.com/photo/20211119/medium/lovepik-ten-thousand-mountains-tupian-picture_500348227.jpg',
    'https://img.lovepik.com/photo/20211119/medium/lovepik-ten-thousand-mountains-tupian-picture_500348227.jpg',
    'https://img.lovepik.com/photo/20211119/medium/lovepik-ten-thousand-mountains-tupian-picture_500348227.jpg',
    'https://img.lovepik.com/photo/20211119/medium/lovepik-ten-thousand-mountains-tupian-picture_500348227.jpg',
  ],
};

export type Twitter = typeof twitter & { user?: User };

export const twitterLength = 100;
export const twitterList = Array(twitterLength)
  .fill(twitter)
  .map((t, index) => ({
    ...t,
    id: index,
  }));

export function findTwitterById(id: number) {
  return twitterList.find((item) => item.userId === id);
}

export function findTwitterByChannel(channel: string) {
  return twitterList.find((item) => item.channle === channel);
}

export function findTwitterByUserId(userId: number) {
  return twitterList.filter((item) => item.userId === userId);
}
