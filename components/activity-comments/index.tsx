import { Comment } from '@/common/apis/twitter';
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import SvgReply from '@/components/svgs/Reply';
import { color_complement, color_disabled_text_light, color_primary } from '@/constants/Colors';

export default function ActivityComments({ comments }: { comments: Comment[] }) {

  return (
    <View style={styles.container}>
      {/* <FlatList
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
                <SvgReply style={styles.replyIcon} fill={color_complement} />
              </View>
              <View style={styles.descContainer}>
                <Text>{Array(10).fill(item.content).join('')}</Text>
              </View>
            </View>
          </View>
        )}
        // nestedScrollEnabled={false}
        keyExtractor={(_, index) => String(index)}
        showsHorizontalScrollIndicator={false} // 隐藏滚动条
      /> */}
      {
        comments.map((item, index) => (
          <View style={styles.commnetContainer} key={index}>
            <Image
              style={styles.image}
              source={{ uri: item?.user?.avatar }}
            />
            <View style={styles.contentContainer}>
              <View style={styles.contentUser}>
                <View style={styles.contentHeader}>
                  <Text style={styles.contentUsername}>{item.user?.username}</Text>
                  <Text style={styles.contentUserTime}>{item.time}</Text>
                </View>
                <SvgReply style={styles.replyIcon} fill={color_complement} />
              </View>
              <View style={styles.descContainer}>
                <Text>{Array(10).fill(item.content).join('')}</Text>
              </View>
            </View>
          </View>
        ))
      }
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
    color: color_primary,
    marginRight: 12,
  },
  contentUserTime: {
    fontSize: 10,
    color: color_disabled_text_light,
  },
  descContainer: {
    marginTop: 4,
  }
});