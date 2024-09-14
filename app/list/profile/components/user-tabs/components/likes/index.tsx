import ActivityCard from '@/components/activity-card';
import { RootState } from '@/store';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Likes() {
  const { user } = useSelector((state: RootState) => state.user);
  const { activities } = user;

  return (
    <View style={styles.container}>
      {
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
      }
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
  }
});