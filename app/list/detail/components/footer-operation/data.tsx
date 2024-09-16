import SvgCommentSingle from '@/components/svgs/CommentSingle';
import SvgLikeOutline from '@/components/svgs/LikeOutline';
import SvgLike from '@/components/svgs/Like';
import SvgCheckOutLine from '@/components/svgs/CheckOutline';
import SvgCheck from '@/components/svgs/Check';
import { StyleSheet } from 'react-native';
import { color_complement, color_primary, color_primary_dark } from '@/constants/Colors';
import React from 'react';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export const operationMap = {
  like: {
    icon: <SvgLikeOutline style={styles.icon} fill={color_primary_dark} />,
    text: 'Like',
    ActiveIcon: <SvgLike style={styles.icon} fill={color_complement} />,
  },
  join: {
    icon: <SvgCheckOutLine style={styles.icon} fill={color_primary_dark} />,
    text: 'Join',
    ActiveIcon: <SvgCheck style={styles.icon} fill={color_primary} />,
  }
}