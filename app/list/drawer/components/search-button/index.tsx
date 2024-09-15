import { fetchActivitiesSubject$, showTipSubject$ } from '@/app/list/home/hooks';
import { useSearchTip } from '@/app/list/hooks/use-search-tip';
import SvgSearch from '@/components/svgs/Search';
import { SearchState } from '@/store/actions/search';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { from, switchMap, timer } from 'rxjs';

interface SearchButtonProps {
  navigation: DrawerNavigationHelpers;
  searchParams: SearchState;
}

export default function SearchButton({ navigation, searchParams }: SearchButtonProps) {
  const { tip } = useSearchTip({ searchParams });
  const disPatch = useDispatch();

  const handleSearch = () => {
    const setSearch$ = from(Promise.resolve(disPatch({ type: 'SET_SEARCH', payload: searchParams })));
    setSearch$.pipe(
      switchMap(() => timer(300).pipe(
        switchMap(() => from(Promise.resolve(fetchActivitiesSubject$.next({}))))
      ))
    ).subscribe();
    // 关闭抽屉
    navigation.closeDrawer();
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