import { useActivityDetail } from '@/app/list/detail/hooks';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import ExpandableText from './components/expandable-text';
import ActivityTime from './components/activity-time';

const { width } = Dimensions.get('window');

export default function Details() {
  const { activity } = useActivityDetail();
  console.log('Details activity', JSON.stringify(activity?.likes));

  if (!activity) {
    return null;
  }
  
  return (
    <View>
      <FlatList
        data={activity.pictures}
        renderItem={({ item, index }) => (
          <Image
            style={[styles.image, index === 0 && { marginLeft: 12 }]}
            key={index}
            source={{ uri: item }}
          />
        )}
        keyExtractor={(_, index) => String(index)}
        horizontal={true} // 设置为横向滚动
        showsHorizontalScrollIndicator={false} // 隐藏滚动条
        style={styles.imageContainer}
      />
      <View style={styles.content}>
        <ExpandableText numberOfLines={5}>
          {activity.content}
        </ExpandableText>
      </View>
      <View style={styles.divider} />
      <View style={styles.noteContainer}>
        <View style={styles.note}>
          <View style={styles.noteDivider} />
          <Text style={styles.noteText}>When</Text>
        </View>
        <View style={styles.timeContainer}>
          <ActivityTime time={activity.startTime} type="start" />
          <View style={styles.timeDivider}></View>
          <ActivityTime time={activity.endTime} type="end" />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.noteContainer}>
        <View style={styles.note}>
          <View style={styles.noteDivider} />
          <Text style={styles.noteText}>Where</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.mainAddressText}>{activity.address}</Text>
          <Text style={styles.subAddressText}>{activity.address}</Text>
          <Image style={styles.addressMap} source={require('@/assets/images/gmap.png')} />
        </View>
      </View>
      <View><Text>这是comments</Text></View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  imageContainer: {
    marginTop: 12,
    marginBottom: 12,
    paddingRight: 12,
    height: 100,
  },
  image: {
    width: 180,
    height: 100,
    borderRadius: 10,
    marginRight: 12,
  },
  content: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 12,
  },
  divider: {
    marginBottom: 12,
    borderColor: '#E8E8E8',
    borderTopWidth: 1,
    marginLeft: 16,
  },
  noteContainer: {
    marginLeft: 16,
    marginBottom: 12,
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteDivider: {
    width: 4,
    height: 18,
    backgroundColor: '#8560A9',
    borderRadius: 2,
  },
  noteText: {
    fontSize: 16,
    color: '#8560A9',
    marginLeft: 4,
  },
  timeContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeDivider: {
    width: 2,
    backgroundColor: '#E8E8E8',
  },
  addressContainer: {
    marginTop: 8,
  },
  mainAddressText: {
    fontSize: 16,
    color: '#67616D',
    marginBottom: 2,
  },
  subAddressText: {
    fontSize: 14,
    color: '#67616D',
  },
  addressMap: {
    marginTop: 8,
    marginRight: 12,
    height: 88,
    width: width - 32,
    borderRadius: 10,
  },
});