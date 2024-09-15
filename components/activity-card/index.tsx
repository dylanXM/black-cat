import { Twitter } from '@/common/apis/twitter';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SvgTime from '@/components/svgs/Time';
import ActionButton from './components/action-button';
import { formatDateToMinute } from '@/common/utils/format-time';

export type TypeAction = 'like' | 'going';

interface ActivityCardProps {
  activity: Twitter;
  canEdit: boolean;
  initState: Record<TypeAction, boolean>;
}

export default function ActivityCard({ activity, canEdit, initState }: ActivityCardProps) {
  const { title, user, channle, startTime, endTime, likes, goings, content } = activity;

  const toDetail = () => {
    console.log('press card');
    // todo 跳转到activities详情页
  };

  return (
    <TouchableOpacity onPress={toDetail} activeOpacity={1}>
      <View style={styles.container}>
        {/** 这是header */}
        <View style={styles.header}>
          <View style={styles.userinfo}>
            <Image source={{ uri: user?.avatar }} style={styles.avatar} />
            <Text style={styles.username}>{user?.username}</Text>
          </View>
          <Text style={styles.channel}>{channle}</Text>
        </View>
        {/** 这是标题 */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {/** 这是时间 */}
        <View style={styles.timeContainer}>
          <SvgTime style={styles.timeIcon} fill="#8560A9" />
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
        {/** 这是操作 */}
        <ActionButton
          initCount={{ like: likes.length, going: goings.length }}
          initState={initState}
          canEdit={canEdit}
        />
      </View>
    </TouchableOpacity>
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
    color: '#67616D',
  },
  channel: {
    fontSize: 12,
    color: '#8560A9',
    paddingLeft: 10,
    paddingTop: 2,
    paddingRight: 6,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#D3C1E5',
    borderRadius: 12,
  },
  titleContainer: {
    marginTop: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#453257',
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
    color: '#8560A9',
  },
  contentContainer: {
    marginBottom: 12,
  },
  contentText: {
    fontSize: 14,
    color: '#67616D',

  },
});