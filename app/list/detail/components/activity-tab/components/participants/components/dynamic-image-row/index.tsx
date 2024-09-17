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

// 组件实际宽度
const actualWidth = width - 102;
// 每个图片宽度
const imageWidth = 24;
// 每个图片间距
const imageMargin = 7;
// 每个图片实际宽度
const actualImageWidth = imageWidth + imageMargin;

interface DynamicImageRowProps {
  images: string[]; // 假设每张图片都是一个URL地址
}

export default function DynamicImageRow({ images }: DynamicImageRowProps) {
  const [expanded, setExpanded] = useState(false);

  // 计算一行的最大图片数量
  const maxImagesPerRow = Math.floor((actualWidth - actualImageWidth + 1) / actualImageWidth); // 100为图片宽度的示例值，16为左右padding的总和

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
          <Text style={styles.expand}>{expanded ? '∧' : '∨'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // 允许换行
    padding: 8,
    width: actualWidth,
  },
  image: {
    width: imageWidth, // 图片宽度，可以根据实际情况调整
    height: imageWidth, // 图片高度，与宽度保持一致以形成正方形
    marginVertical: 7,
    marginRight: imageMargin,
    borderRadius: 12,
  },
  expand: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 12,
    textAlign: 'center',
    lineHeight: imageWidth,
    color: '#AC8EC9',
    borderWidth: 1,
    borderColor: '#AC8EC9',
    marginTop: 7,
  }
});