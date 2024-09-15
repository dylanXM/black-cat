import { User } from '@/common/apis/user/user';
import { View, Image, Text, StyleSheet } from 'react-native';

interface ActivityHeaderProps {
  title: string;
  channel: string;
  user: User;
}

export default function ActivityHeader({ title, channel, user }: ActivityHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.channel}>{channel}</Text>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.userinfo}>
        <Image source={{ uri: user?.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{user?.username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  userinfo: {
    flexDirection: 'row',
  },
  title: {

  },
  avatar: {

  },
  username: {

  },
  channel: {
  },
});