import { fetchActivitiesSubject$, showTipSubject$ } from '@/app/list/home/hooks';
import { useSearchTip } from '@/app/list/hooks/use-search-tip';
import SvgSearch from '@/components/svgs/Search';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface SearchButtonProps {
  navigation: DrawerNavigationHelpers;
}

export default function SearchButton({ navigation }: SearchButtonProps) {
  const { tip } = useSearchTip();

  const handleSearch = () => {
    // 关闭抽屉
    navigation.closeDrawer();
    // 获取活动列表
    fetchActivitiesSubject$.next({});
    // 显示提示
    showTipSubject$.next(true);
  };

  return (
    <TouchableOpacity
      style={[styles.container, tip ? styles.activeContainer : null]}
      disabled={!tip}
      onPress={handleSearch}
    >
      <View style={styles.searchContainer}>
        <SvgSearch style={styles.searchIcon} />
        <Text style={styles.searchText}>SEARCH</Text>
      </View>
      {
        tip && <Text style={styles.tip}>{tip}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  activeContainer: {
    backgroundColor: '#D5EF7F',
  },
  searchContainer: {
    flexDirection: 'row',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  searchText: {
    color: '#453257',
  },
  tip: {
    fontSize: 10,
    color: '#8560A9',
  }
});