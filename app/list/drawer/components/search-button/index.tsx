import { useSearchTip } from '@/app/list/hooks/use-search-tip';
import SvgSearch from '@/components/svgs/Search';
import { RootState } from '@/store';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

interface SearchButtonProps {
  navigation: DrawerNavigationHelpers;
}

export default function SearchButton({ navigation }: SearchButtonProps) {
  const search = useSelector((state: RootState) => state.search);
  const { channel, timeRange } = search;
  const canSubmit = channel || (timeRange.start && timeRange.end);
  const { tip } = useSearchTip();

  const handleSearch = () => {
    navigation.closeDrawer();
    // todo: 触发搜索
  };

  console.log('搜索条件', search);

  return (
    <TouchableOpacity
      style={[styles.container, canSubmit ? styles.activeContainer : null]}
      disabled={!canSubmit}
      onPress={handleSearch}
    >
      <View style={styles.searchContainer}>
        <SvgSearch style={styles.searchIcon} />
        <Text style={styles.searchText}>SEARCH</Text>
      </View>
      {
        canSubmit && <Text style={styles.tip}>{tip}</Text>
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