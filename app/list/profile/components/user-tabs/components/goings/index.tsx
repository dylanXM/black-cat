import ActivityCard from '@/components/activity-card';
import Empty from '@/components/empty';
import { RootState } from '@/store';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Goings() {
  const { user } = useSelector((state: RootState) => state.user);
  const { activities } = user;

  if ((activities || []).length === 0) {
    return (
      <Empty text="No activity found" />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.cardContainer}>
            <ActivityCard activity={item} initState={{ like: true, going: true }} canEdit={true} />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginLeft: 16,
  },
  cardContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
});