import { View, Text, StyleSheet } from 'react-native';

export default function Details() {
  const array = Array(100).fill(0);
  return (
    <View style={styles.container}>
      {array.map((_, index) => (
        <Text key={index}>Details</Text>
      ))}
    </View>
  );
  
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
  },
});