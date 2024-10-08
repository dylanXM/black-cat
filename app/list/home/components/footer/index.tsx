import { color_primary_neutral } from '@/constants/Colors';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

interface FooterProps {
  isDone: boolean;
  count: number;
}

export default function Footer({ isDone, count }: FooterProps) {

  // 没有数据无需展示内容
  if (count === 0) {
    return null;
  }

  // 数据加载完毕
  if (isDone) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>没有更多了～</Text>
      </View>
    );
  }
  
  // 数据加载中
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.spinner} color="#999999" />
      <Text style={styles.text}>loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  spinner: {
    marginRight: 8,
    color: 'blue',
  },
  text: {
    color: color_primary_neutral,
  }
});