import SafeContainer from '@/components/SafeContainer';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import SvgSearch from '@/components/svgs/Search';
import SvgLogoCat from '@/components/svgs/LogoCat';
import Tip from './components/tip';
import { useFetchActivity, useShowTip } from './hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import ActivityCard from '@/components/activity-card';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import Empty from '@/components/empty';

export default function List({ navigation }: any) {
  const { user } = useSelector((state: RootState) => state.user);
  const { activities, isDone, loading, fetchNextPageActivities, count } = useFetchActivity();
  const { tipVisible } = useShowTip();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const toProfile = () => {
    navigation.navigate('Profile');
  };

  useEffect(() => {
    if (!loading) {
      Toast.hide();
      return;
    }
    Toast.show({
      type: 'info',
      text1: 'data is loading...',
      autoHide: false,
    });
  }, [loading]);

  console.log('loading', loading);

  return (
    <SafeContainer topColor='#8560A9' bottomColor='transparent' restStyles={styles.back}>
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer}>
          <SvgSearch style={styles.headerLeftBtn} />
        </TouchableOpacity>
        <SvgLogoCat style={[styles.headerLogo, { fill: '#D5EF7F' }]} />
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
          count === 0 && isDone && <Empty text={loading ? 'Fetching data...' : 'No activity found'} />
        }
        <View style={{ marginTop: 16 }}>
          {
            activities?.map((activity, index) => (
              <View key={index}>
                {index !== 0 && <View style={styles.divider} />}
                <ActivityCard activity={activity} initState={{ like: true, going: true }} canEdit={true} />
              </View>
            ))
          }
        </View>
      </View>
    </SafeContainer>
  )
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#8560A9',
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
    backgroundColor: '#8560A9',
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
    marginTop: 16,
    marginBottom: 16,
  },
  activityContainer: {
    flex: 1,
  }
});