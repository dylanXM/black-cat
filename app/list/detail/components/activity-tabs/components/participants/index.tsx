import { RootState } from '@/store';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function Participants() {
  const { activity } = useSelector((state: RootState) => state.activity);

  console.log('Participants activity', JSON.stringify(activity?.likesUsers));

  if (!activity) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text>Participants</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
  },
  divider: {
    borderWidth: 1,
    marginLeft: 16,
    borderColor: '#E8E8E8',
  }
});