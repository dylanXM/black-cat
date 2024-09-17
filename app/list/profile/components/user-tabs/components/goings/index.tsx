import ActivityCard from '@/components/activity-card';
import Empty from '@/components/empty';
import { RootState } from '@/store';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';

export default function Goings() {
  const { user } = useSelector((state: RootState) => state.user);
  const { goings } = user;

  if ((goings || []).length === 0) {
    return (
      <Empty text="No activity found" />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={goings}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.cardContainer}>
            <ActivityCard activity={item} initState={{ like: true, going: true }} canEdit={true} />
          </View>
        )}
        nestedScrollEnabled={false}
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