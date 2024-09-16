import SvgLike from '@/components/svgs/Like';
import SvgLikeOutline from '@/components/svgs/LikeOutline';
import SvgCheckOutLine from '@/components/svgs/CheckOutline';
import SvgCheck from '@/components/svgs/Check';
import { StyleSheet } from 'react-native';
import { color_complement_dark_1 } from '@/constants/Colors';

const styles = StyleSheet.create({
  icon: {
    width: 12,
    height: 12,
    marginRight: 4,
  }
});

export const configs = [
  {
    key: 'going',
    text: ' goings',
    activeText: 'I am going',
    icon: <SvgCheckOutLine style={styles.icon} />,
    activeIcon: <SvgCheck style={styles.icon} fill={color_complement_dark_1} />,
  },
  {
    key: 'like',
    text: ' likes',
    activeText: 'I like it',
    icon: <SvgLikeOutline style={styles.icon} />,
    activeIcon: <SvgLike style={styles.icon} fill='#FF5C5C' />,
  }
];