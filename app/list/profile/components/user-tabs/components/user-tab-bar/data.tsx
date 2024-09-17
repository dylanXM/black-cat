import { StyleSheet } from 'react-native';
import SvgLikeOutline from '@/components/svgs/LikeOutline';
import SvgLike from '@/components/svgs/Like';
import SvgCheckOutLine from '@/components/svgs/CheckOutline';
import SvgCheck from '@/components/svgs/Check';
import SvgPastOutline from '@/components/svgs/PastOutline';
import SvgPast from '@/components/svgs/Past';
import React from 'react';
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
    key: 'likes',
    title: 'Likes',
    icon: <SvgLikeOutline style={styles.icon} />,
    activeIcon: <SvgLike style={styles.icon} fill={color_complement_dark_1} />,
  },
  {
    key: 'goings',
    title: 'Goings',
    icon: <SvgCheckOutLine style={styles.icon} />,
    activeIcon: <SvgCheck style={styles.icon} fill={color_complement_dark_1} />,
  },
  {
    key: 'pasts',
    title: 'Pasts',
    icon: <SvgPastOutline style={styles.icon} />,
    activeIcon: <SvgPast style={styles.icon} fill={color_complement_dark_1} />,
  },
];