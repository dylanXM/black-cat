import SafeContainer from '@/components/SafeContainer';
import { StyleSheet, View, TouchableOpacity, Image, FlatList } from 'react-native';
import SvgSearch from '@/components/svgs/Search';
import SvgLogoCat from '@/components/svgs/LogoCat';
import Tip from './components/tip';
import { useFetchActivity, useShowTip } from './hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import ActivityCard from '@/components/activity-card';
import Empty from '@/components/empty';
import Footer from './components/footer';
import { useRef } from 'react';
import { color_complement, color_primary } from '@/constants/Colors';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function List({ navigation }: any) {
  const { user } = useSelector((state: RootState) => state.user);
  const { activities, isDone, loading, loadMore, count, refresh, refreshing } = useFetchActivity();
  const { tipVisible } = useShowTip();
  const flatListRef = useRef<FlatList>(null);

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const toProfile = () => {
    navigation.navigate('Profile');
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  return (
    <SafeContainer topColor={color_primary} bottomColor="transparent" restStyles={styles.back}>
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer}>
          <SvgSearch style={styles.headerLeftBtn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToTop}>
          <SvgLogoCat style={[styles.headerLogo, { fill: color_complement }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toProfile}>
          <Image
            style={styles.headerRightAvatar}
            source={{ uri: user.avatar || '@/assets/images/user.jpg' }}
          />
        </TouchableOpacity>
      </View>
      {tipVisible && <Tip activitiesLength={count} />}
      <View style={styles.activityContainer}>
        {
          count === 0 && isDone && <Empty text={'No activity found'} />
        }
        <View style={styles.flatListContainer}>
          <FlatList
            ref={flatListRef}
            data={activities}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.cardContainer}>
                <ActivityCard activity={item} initState={{ like: true, going: true }} canEdit={true} />
              </View>
            )}
            refreshing={refreshing}
            onRefresh={refresh}
            nestedScrollEnabled={false}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            onEndReachedThreshold={0.3}
            onEndReached={loadMore}
            ListFooterComponent={<Footer isDone={isDone} count={count} />}
            scrollEnabled={!loading}
          />
        </View>
      </View>
    </SafeContainer>
  )
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: color_primary,
  },
  container: {

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: color_primary,
  },
  headerLeftBtn: {
    width: 24,
    height: 24,
  },
  headerLogo: {
    width: 24,
    height: 24,
  },
  headerRightAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginLeft: 16,
  },
  activityContainer: {
    flex: 1,
  },
  flatListContainer: {
  },
  cardContainer: {
    paddingTop: 16,
    marginBottom: 16,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});