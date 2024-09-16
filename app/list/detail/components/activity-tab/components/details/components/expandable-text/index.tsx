import React, { useState, useRef, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ExpandableTextProps {
  children: ReactNode;
  numberOfLines?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ children, numberOfLines = 2 }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const textRef = useRef<Text>(null);

  const handleLayout = () => {
    if (textRef.current) {
      textRef.current.measure((x, y, width, height) => {
        // 获取文本的实际高度
        const totalHeight = height;
        
        // 使用文本的内容和字体信息来计算预期高度
        const lineHeight = 16; // 假设字体大小为20
        const calculatedHeight = lineHeight * numberOfLines;

        // 判断是否被省略
        setIsTruncated(totalHeight > calculatedHeight);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text onLayout={handleLayout} ref={textRef} style={styles.noneText}>
        {children}
      </Text>
      <Text numberOfLines={expanded ? undefined : numberOfLines} style={styles.text}>
        {children}
      </Text>
      {isTruncated && !expanded && (
        <TouchableOpacity style={styles.expandTextContainer} onPress={() => setExpanded(true)}>
          <Text style={styles.expandText}>VIEW ALL</Text>
        </TouchableOpacity>
      )}
      {expanded && (
        <TouchableOpacity style={styles.collapseTextContainer} onPress={() => setExpanded(false)}>
          <Text style={styles.expandText}>COLLAPSE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    position: 'relative',
  },
  noneText: {
    position: 'absolute',
    opacity: 0,
    top: -1000,
    left: -1000,
  },
  text: {
    fontSize: 14,
    lineHeight: 16, // 行高
  },
  expandTextContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  expandText: {
    color: '#67616D',
    fontSize: 10,
    backgroundColor: '#D5EF7F',
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
  collapseTextContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});

export default ExpandableText;