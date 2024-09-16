import React from 'react';
import SvgDateFrom from '@/components/svgs/DateFrom';
import SvgDateTo from '@/components/svgs/DateTo';
import { View, Text, StyleSheet } from 'react-native';
import { formatDateString, formatTimeString } from './util';
import { color_complement, color_complement_dark_1, color_primary_neutral } from '@/constants/Colors';

type TypeTime = 'start' | 'end';

interface ActivityTimeProps {
  time: string;
  type: TypeTime;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: color_primary_neutral,
    marginLeft: 4,
  },
  timeContainer: {
    flexDirection: 'row',
  },
  icon: {
    height: 16,
    width: 16,
  },
  time1Text: {
    fontSize: 32,
    color: color_complement_dark_1,
  },
  time2Text: {
    fontSize: 8,
    color: color_complement_dark_1,
    marginTop: 24,
    marginLeft: 4,
  }
});

const timeIconMap = {
  start: <SvgDateFrom fill={color_complement} style={styles.icon} />,
  end: <SvgDateTo fill={color_complement} style={styles.icon} />,
};

export default function ActivityTime({ time, type }: ActivityTimeProps) {
  const date = formatDateString(time);
  const minuteTime = formatTimeString(time).split(' ');

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        {timeIconMap[type]}
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time1Text}>{minuteTime[0]}</Text>
        <Text style={styles.time2Text}>{minuteTime[1]}</Text>
      </View>
    </View>
  );
}