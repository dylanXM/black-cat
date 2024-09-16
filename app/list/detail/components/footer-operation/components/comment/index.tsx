import { View, StyleSheet, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import SvgSend from '@/components/svgs/Send';
import SvgCross from '@/components/svgs/Cross';
import { useState } from 'react';
import { showToast } from '../../../activity-tab/components/toast';
import { color_complement, color_primary } from '@/constants/Colors';
import React from 'react';

interface CommentProps {
  handleToggleComment: () => void;
}

export default function Comment({ handleToggleComment }: CommentProps) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setComment(e.nativeEvent.text);
  };

  const clearComment = () => {
    setComment('');
  };

  const handleSubmit = () => {
    new Promise((resolve, reject) => {
      // 模拟提交
      setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
          resolve(1);
        } else {
          reject('提交失败');
        }
      }, 1000); 
    }).then(() => {
      showToast({ title: 'Comment sent', type: 'success' });
      clearComment();
    }).catch(() => {
      showToast({ title: 'Comment failed', type: 'error' });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SvgCross style={styles.crossIcon} fill={color_complement} onPress={handleToggleComment} />
        <TextInput value={comment} onChange={handleCommentChange} style={styles.input} placeholder="@Little Prince" />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.send} activeOpacity={0.8} disabled={!comment}>
        <SvgSend style={styles.icon} fill={color_primary} />
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
    backgroundColor: color_primary,
  },
  send: {
    width: 56,
    height: 56,
    backgroundColor: color_complement,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
  },
  crossIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 6,
    paddingRight: 14,
    flex: 1,
  },
  input: {
    height: 36,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 7,
    paddingTop: 7,
    flex: 1,
  }
});