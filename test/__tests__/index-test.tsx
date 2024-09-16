import Empty from '@/components/empty';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { Comment } from '@/common/apis/twitter';
import ActivityComments from '@/components/activity-comments';



const mockComments: Comment[] = [
  {
    id: 1,
    userId: 1,
    content: 'This is a comment',
    likes: [1, 2, 3, 4, 5],
    time: '9 hours ago',
    user: {
      id: 1,
      username: 'admin',
      password: '',
      email: '123456@123.com',
      avatar:
        'https://yangxm-1317654405.cos.ap-guangzhou.myqcloud.com/ai/tmp_885f4e6f1806cf82aa38d4989f3b0ed5.jpg',
      activityIds: [],
      goingIds: [1, 2, 3],
      likeIds: [7, 8, 9],
    }
  }
];

describe('Index', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Empty text="asdasd" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ActivityComments comments={mockComments} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});