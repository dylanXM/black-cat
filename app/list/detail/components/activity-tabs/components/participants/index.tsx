import { RootState } from '@/store';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import DynamicImageRow from './components/dynamic-image-row';
import SvgCheckOutline from '@/components/svgs/CheckOutline';
import SvgLikeOutline from '@/components/svgs/LikeOutline';
import ActivityComments from '@/components/activity-comments';

export default function Participants() {
  const { activity } = useSelector((state: RootState) => state.activity);

  console.log('Participants activity', JSON.stringify(activity?.comments));

  if (!activity) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.titleContainer}>
          <SvgCheckOutline style={styles.icon} fill="#AC8EC9" />
          <Text style={styles.titleText}>{activity?.likesUsers?.length} going</Text>
        </View>
        <View>
          <DynamicImageRow images={activity?.goingsUsers?.map((user) => user.avatar) as string[] || []} />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.imageContainer}>
        <View style={styles.titleContainer}>
          <SvgLikeOutline style={styles.icon} fill="#AC8EC9" />
          <Text style={styles.titleText}>{activity?.likesUsers?.length} likes</Text>
        </View>
        <View>
          <DynamicImageRow images={activity?.likesUsers?.map((user) => user.avatar) as string[] || []} />
        </View>
      </View>
      <View style={styles.completeDivider} />
      <ActivityComments comments={activity?.comments || []} />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 12,
    paddingTop: 12,
  },
  divider: {
    borderTopWidth: 1,
    marginLeft: 16,
    borderColor: '#E8E8E8',
  },
  imageContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    width: 67,
    marginTop: 20,
  },
  titleText: {
    color: '#67616D',
    fontSize: 12,
    marginTop: -3,
  },
  completeDivider: {
    borderTopWidth: 1,
    borderColor: '#E8E8E8',
  },
});