import { Comment } from '@/common/apis/twitter';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import SvgReply from '@/components/svgs/Reply';

export default function ActivityComments({ comments }: { comments: Comment[] }) {

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({ item, index }) => (
          <View style={styles.commnetContainer}>
            <Image
              style={styles.image}
              key={index}
              source={{ uri: item?.user?.avatar }}
            />
            <View style={styles.contentContainer}>
              <View style={styles.contentUser}>
                <View style={styles.contentHeader}>
                  <Text style={styles.contentUsername}>{item.user?.username}</Text>
                  <Text style={styles.contentUserTime}>{item.time}</Text>
                </View>
                <SvgReply style={styles.replyIcon} fill="#D5EF7F" />
              </View>
              <View style={styles.descContainer}>
                <Text>{Array(10).fill(item.content).join('')}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(_, index) => String(index)}
        showsHorizontalScrollIndicator={false} // 隐藏滚动条
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  commnetContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: 16,
    marginRight: 16,
  },
  replyIcon: {
    width: 16,
    height: 16,
  },
  contentContainer: {
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  contentUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentUsername: {
    fontSize: 12,
    color: '#8560A9',
    marginRight: 12,
  },
  contentUserTime: {
    fontSize: 10,
    color: '#BABABA',
  },
  descContainer: {
    marginTop: 4,
  }
});