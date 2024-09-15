import ActivityComments from '@/components/activity-comments';
import { RootState } from '@/store';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function Comments() {
  const { activity } = useSelector((state: RootState) => state.activity);

  if (!activity) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityComments comments={activity?.comments || []} />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});