import SvgCommentSingle from '@/components/svgs/CommentSingle';
import SvgLikeOutline from '@/components/svgs/LikeOutline';
import SvgLike from '@/components/svgs/Like';
import SvgCheckOutLine from '@/components/svgs/CheckOutline';
import SvgCheck from '@/components/svgs/Check';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export const operationMap = {
  like: {
    icon: <SvgLikeOutline style={styles.icon} fill="#453257" />,
    text: 'Like',
    ActiveIcon: <SvgLike style={styles.icon} fill="#D5EF7F" />,
  },
  join: {
    icon: <SvgCheckOutLine style={styles.icon} fill="#453257" />,
    text: 'Join',
    ActiveIcon: <SvgCheck style={styles.icon} fill="#8560A9" />,
  }
}