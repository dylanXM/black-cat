import { Twitter } from '@/common/apis/twitter';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SvgTime from '@/components/svgs/Time';
import ActionButton from './components/action-button';
import { formatDateToMinute } from '@/common/utils/format-time';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  color_primary,
  color_primary_dark,
  color_primary_light,
  color_primary_neutral,
} from '@/constants/Colors';

export type TypeAction = 'like' | 'going';

interface ActivityCardProps {
  activity: Twitter;
  canEdit: boolean;
  initState: Record<TypeAction, boolean>;
}

export default function ActivityCard({ activity, canEdit, initState }: ActivityCardProps) {
  const { title, user, channel, startTime, endTime, likes, goings, content } = activity;
  const navigation = useNavigation<NavigationProp<any>>();

  const toDetail = () => {
    // todo 跳转到activities详情页
    navigation.navigate('Detail', { activity });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toDetail} activeOpacity={1}>
        {/** 这是header */}
        <View style={styles.header}>
          <View style={styles.userinfo}>
            <Image source={{ uri: user?.avatar }} style={styles.avatar} />
            <Text style={styles.username}>{user?.username}</Text>
          </View>
          <Text style={styles.channel}>{channel}</Text>
        </View>
        {/** 这是标题 */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {/** 这是时间 */}
        <View style={styles.timeContainer}>
          <SvgTime style={styles.timeIcon} fill={color_primary} />
          <Text style={styles.timeText}>
            {formatDateToMinute(new Date(startTime))} - {formatDateToMinute(new Date(endTime))}
          </Text>
        </View>
        {/** 这是内容 */}
        <View style={styles.contentContainer}>
          <Text style={styles.contentText} numberOfLines={3} ellipsizeMode="tail">
            {content}
          </Text>
        </View>
      </TouchableOpacity>
      {/** 这是操作 */}
      <ActionButton
        initCount={{ like: likes.length, going: goings.length }}
        initState={initState}
        canEdit={canEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
  },
  userinfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    height: 20,
    width: 20,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontSize: 12,
    color: color_primary_neutral,
  },
  channel: {
    fontSize: 12,
    color: color_primary,
    paddingLeft: 10,
    paddingTop: 2,
    paddingRight: 6,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: color_primary_light,
    borderRadius: 12,
  },
  titleContainer: {
    marginTop: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: color_primary_dark,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  timeIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  timeText: {
    fontSize: 12,
    color: color_primary,
  },
  contentContainer: {
    marginBottom: 12,
  },
  contentText: {
    fontSize: 14,
    color: color_primary_neutral,

  },
});