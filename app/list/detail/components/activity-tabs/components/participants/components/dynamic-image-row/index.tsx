import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
const { width } = Dimensions.get('window');

interface DynamicImageRowProps {
  images: string[]; // 假设每张图片都是一个URL地址
}

export default function DynamicImageRow({ images }: DynamicImageRowProps) {
  const [expanded, setExpanded] = useState(false);

  // 计算一行的最大图片数量（假设每个图片是正方形）
  const maxImagesPerRow = Math.floor((width - 16 * 2) / 100); // 100为图片宽度的示例值，16为左右padding的总和

  // 根据是否展开决定显示哪些图片
  const visibleImages = expanded ? images : images.slice(0, maxImagesPerRow);

  return (
    <View style={styles.container}>
      {/* 显示可见的图片 */}
      {visibleImages.map((imageUri, index) => (
        <Image key={index} source={{ uri: imageUri }} style={styles.image} />
      ))}

      {/* 如果图片总数大于一行能显示的数量，则显示展开/收起的按钮 */}
      {images.length > maxImagesPerRow && (
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text>{expanded ? '收起' : '展开'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // 允许换行
    justifyContent: 'space-between',
    padding: 8,
  },
  image: {
    width: 100, // 图片宽度，可以根据实际情况调整
    height: 100, // 图片高度，与宽度保持一致以形成正方形
    marginVertical: 4,
  },
});