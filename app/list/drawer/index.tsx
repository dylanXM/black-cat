import SafeContainer from '@/components/SafeContainer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomDrawerContent({}: DrawerContentComponentProps) {
  const handlePress = () => {
    // 处理点击事件
  };

  return (
    <SafeContainer topColor="#453257" bottomColor="#BABABA">
      <View style={styles.container}>
        <Text>Frawer</Text>
      </View>
      <View style={styles.searchContainer}>
        <Text>这是搜索按钮</Text>
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#453257',
  },
  searchContainer: {
    height: 64,
    borderWidth: 1,
    borderColor: '#8560A9',
  }
});