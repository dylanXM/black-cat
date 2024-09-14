import SafeContainer from '@/components/SafeContainer';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import SvgSearch from '@/components/svgs/Search';
import SvgLogoCat from '@/components/svgs/LogoCat';
import Tip from './components/tip';
import { useFetchActivity } from './hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import ActivityCard from '@/components/activity-card';

export default function List({ navigation }: any) {
  const { user } = useSelector((state: RootState) => state.user);
  const { activities, isDone, loading, fetchNextPageActivities } = useFetchActivity();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const toProfile = () => {
    navigation.navigate('Profile');
  };

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
            source={{ uri: user.avatar || '' }}
          />
        </TouchableOpacity>
      </View>
      <Tip />
      <View style={styles.activityContainer}>
      {
        activities?.map((activity, index) => {
          const { id } = activity;
          return (
            <View key={index}>
              {
                index !== 0 && (
                  <View style={styles.divider} />
                )
              }
              <ActivityCard activity={activity} initState={{ like: true, going: true }} canEdit={true} />
            </View>
          )
        })
      }
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
    marginTop: 16,
  }
});