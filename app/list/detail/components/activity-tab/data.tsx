import { StyleSheet } from 'react-native';
import SvgInfoOutline from '@/components/svgs/InfoOutline';
import SvgInfo from '@/components/svgs/Info';
import SvgPeopleOutline from '@/components/svgs/PeopleOutline';
import SvgPeople from '@/components/svgs/People';
import SvgCommentOutline from '@/components/svgs/CommentOutline';
import SvgComment from '@/components/svgs/Comment';
import { color_complement_dark_1 } from '@/constants/Colors';

export const styles = StyleSheet.create({
  icon: {
    width: 14,
    height: 14,
    marginRight: 7,
  }
});

export const routes = [
  {
    key: 'details',
    title: 'Details',
    icon: <SvgInfoOutline style={styles.icon} fill="#8C8C8C" />,
    activeIcon: <SvgInfo style={styles.icon} fill={color_complement_dark_1} />,
  },
  {
    key: 'participants',
    title: 'Participants',
    icon: <SvgPeopleOutline style={styles.icon} fill="#8C8C8C" />,
    activeIcon: <SvgPeople style={styles.icon} fill={color_complement_dark_1} />,
  },
  {
    key: 'comments',
    title: 'Comments',
    icon: <SvgCommentOutline style={styles.icon} fill="#8C8C8C" />,
    activeIcon: <SvgComment style={styles.icon} fill={color_complement_dark_1} />,
  },
];