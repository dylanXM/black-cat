import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface FooterProps {
  loading: boolean;
  isDone: boolean;
}

export default function Footer({ loading, isDone }: FooterProps) {

  if (isDone) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>没有更多了～</Text>
      </View>
    );
  }
  
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
  },
  text: {
    color: '#67616D',
  }
});