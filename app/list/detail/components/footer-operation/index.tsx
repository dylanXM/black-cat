import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SvgCommentSingle from '@/components/svgs/CommentSingle';
import { useOperation } from './hooks';
import { operationMap } from './data';
import Comment from './components/comment';

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
        <SvgCommentSingle style={styles.icon} fill="#453257" />
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
    backgroundColor: '#8560A9',
  },
  like: {
    width: '30%',
    backgroundColor: '#8560A9',
  },
  join: {
    width: '40%',
    backgroundColor: '#D5EF7F',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    color: '#788C36',
    fontSize: 14,
    marginLeft: 12,
  }
});