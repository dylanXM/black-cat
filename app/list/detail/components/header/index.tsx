import { User } from '@/common/apis/user/user';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useActivityDetail } from '../../hooks';
import { Twitter } from '@/common/apis/twitter';

export default function ActivityHeader() {
  const { activity } = useActivityDetail();
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
  },
  userinfo: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#453257',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  username: {
    fontSize: 14,
    color: '#67616D',
  },
  lastLogin: {
    fontSize: 12,
    color: '#BABABA',
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
    borderColor: '#8560A9',
    height: 20,
    fontSize: 12,
    color: '#8560A9',
  },
});