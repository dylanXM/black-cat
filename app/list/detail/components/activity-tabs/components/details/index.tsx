import { View, Text, StyleSheet } from 'react-native';

export default function Details() {
  // const array = Array(500).fill(0);
  // return (
  //   <View style={styles.container}>
  //     {array.map((_, index) => (
  //       <Text key={index}>Details</Text>
  //     ))}
  //   </View>
  // );
  
  return (
    <View style={styles.container}>
      <View><Text>这是图片轮播图</Text></View>
      <View><Text>这是活动详情</Text></View>
      <View><Text>这是When</Text></View>
      <View><Text>这是Where</Text></View>
      <View><Text>这是goings</Text></View>
      <View><Text>这是comments</Text></View>
      <View><Text>这是操作</Text></View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});