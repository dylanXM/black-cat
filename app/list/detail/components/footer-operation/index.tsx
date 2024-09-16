import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SvgCommentSingle from '@/components/svgs/CommentSingle';
import { useOperation } from './hooks';
import { operationMap } from './data';
import Comment from './components/comment';
import { color_complement, color_complement_dark_2, color_primary, color_primary_dark } from '@/constants/Colors';

export default function FooterOperation() {
  const {
    isComment,
    isLike,
    isJoin,
    handleToggleJoin,
    handleToggleLike,
    handleToggleComment
  } = useOperation();

  if (isComment) {
    return (
      <Comment handleToggleComment={handleToggleComment} />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleComment} style={[styles.commonButton, styles.comment]} activeOpacity={0.9}>
        <SvgCommentSingle style={styles.icon} fill={color_primary_dark} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToggleLike} style={[styles.commonButton, styles.like]} activeOpacity={0.9}>
        {isLike ? operationMap['like'].ActiveIcon : operationMap['like'].icon}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToggleJoin} style={[styles.commonButton, styles.join]} activeOpacity={0.8}>
        {isJoin ? operationMap['join'].ActiveIcon : operationMap['join'].icon}
        <Text style={styles.text}>{isJoin ? 'I am going' : 'Join'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commonButton: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  comment: {
    width: '30%',
    backgroundColor: color_primary,
  },
  like: {
    width: '30%',
    backgroundColor: color_primary,
  },
  join: {
    width: '40%',
    backgroundColor: color_complement,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    color: color_complement_dark_2,
    fontSize: 14,
    marginLeft: 12,
  }
});