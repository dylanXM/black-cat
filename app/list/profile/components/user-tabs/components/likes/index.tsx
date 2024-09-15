import ActivityCard from '@/components/activity-card';
import { RootState } from '@/store';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Likes() {
  const { user } = useSelector((state: RootState) => state.user);
  const { activities } = user;

  return (
    <View style={styles.container}>
      {/* {
        activities?.map((activity, index) => {
          const { id } = activity;
          return (
            <View key={id}>
              {
                index !== 0 && (
                  <View style={styles.divider} />
                )
              }
              <ActivityCard activity={activity} initState={{ like: true, going: true }} canEdit={false} />
            </View>
          )
        })
      } */}
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
    paddingTop: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  cardContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
});