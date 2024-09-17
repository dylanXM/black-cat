import { View, Text, StyleSheet, Image, FlatList, Dimensions, LayoutChangeEvent } from 'react-native';
import ExpandableText from './components/expandable-text';
import ActivityTime from './components/activity-time';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import React from 'react';
import { scrollHeightSubject$ } from '../../hooks';
import { color_primary, color_primary_neutral } from '@/constants/Colors';

const { width } = Dimensions.get('window');

export default function Details() {
  const { activity } = useSelector((state: RootState) => state.activity);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { layout } = event.nativeEvent;
    scrollHeightSubject$.next({ key: 'participants', height: layout.height });
  };

  if (!activity) {
    return null;
  }
  
  return (
    <View style={styles.container} onLayout={handleLayout}>
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
        nestedScrollEnabled={false}
        style={styles.imageContainer}
      />
      <View style={styles.content}>
        <ExpandableText numberOfLines={5}>
          {Array(3).fill(activity.content).join('')}
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
      <View style={styles.divider} />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderColor: '#E8E8E8',
    borderTopWidth: 1,
    marginLeft: 16,
  },
  noteContainer: {
    marginLeft: 16,
    marginBottom: 16,
    marginTop: 12,
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteDivider: {
    width: 4,
    height: 18,
    backgroundColor: color_primary,
    borderRadius: 2,
  },
  noteText: {
    fontSize: 16,
    color: color_primary,
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
    color: color_primary_neutral,
    marginBottom: 2,
  },
  subAddressText: {
    fontSize: 14,
    color: color_primary_neutral,
  },
  addressMap: {
    marginTop: 8,
    marginRight: 12,
    height: 88,
    width: width - 32,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    width: 67,
    marginTop: 20,
  },
  titleText: {
    color: color_primary_neutral,
    fontSize: 12,
    marginTop: -2,
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  completeDivider: {
    borderTopWidth: 1,
    borderColor: '#E8E8E8',
  },
  participantsContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  }
});