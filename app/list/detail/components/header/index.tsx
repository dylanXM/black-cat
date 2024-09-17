import { View, Image, Text, StyleSheet } from 'react-native';
import { Twitter } from '@/common/apis/twitter';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import React from 'react';
import {
  color_disabled_text_light,
  color_primary,
  color_primary_dark,
  color_primary_neutral,
} from '@/constants/Colors';

export default function ActivityHeader() {
  const { activity } = useSelector((state: RootState) => state.activity);
  const { channel, title, user } = (activity || {}) as Twitter;

  if (!activity) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.channelContainer}>
        <Text style={styles.channel}>{channel}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.userinfo}>
        <Image source={{ uri: user?.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.username}>{user?.username}</Text>
          <Text style={styles.lastLogin}>Published 2 days ago</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: 183,
    justifyContent: 'center',
  },
  userinfo: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: color_primary_dark,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  username: {
    fontSize: 14,
    color: color_primary_neutral,
  },
  lastLogin: {
    fontSize: 12,
    color: color_disabled_text_light,
  },
  channelContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  channel: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color_primary,
    height: 20,
    fontSize: 12,
    color: color_primary,
  },
});