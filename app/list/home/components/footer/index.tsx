import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

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
      <ActivityIndicator style={styles.spinner} />
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
    color: '#f0f0f0',
  },
  text: {
    color: '#67616D',
  }
});