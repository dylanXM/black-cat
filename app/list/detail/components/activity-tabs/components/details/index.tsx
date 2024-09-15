import { useActivityDetail } from '@/app/list/detail/hooks';
import { View, Text, StyleSheet } from 'react-native';

export default function Details() {
  const { activity } = useActivityDetail();
  console.log('Details activity', activity);

  if (!activity) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <View><Text>这是图片轮播图</Text></View>
      <View><Text>这是活动详情</Text></View>
      <View><Text>这是When</Text></View>
      <View><Text>这是Where</Text></View>
      <View><Text>这是goings</Text></View>
      <View><Text>这是comments</Text></View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
});