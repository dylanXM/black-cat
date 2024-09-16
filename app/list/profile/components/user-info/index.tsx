import { RootState } from '@/store';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import SvgEmail from '@/components/svgs/Email';
import { color_primary, color_primary_neutral } from '@/constants/Colors';
import React from 'react';

export default function UserInfo() {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.username}>{user.username}</Text>
      <View style={styles.email}>
        <SvgEmail style={[styles.icon, { fill: color_primary }]} />
        <Text style={styles.emailText}>{user.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 214,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 75,
    borderColor: color_primary,
    borderWidth: 2,
  },
  username: {
    marginTop: 24,
    fontSize: 24,
    color: color_primary_neutral,
  },
  email: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  emailText: {
    fontSize: 14,
    color: color_primary,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 6,
  }
});