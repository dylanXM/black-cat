import { useSearchTip } from '@/app/list/hooks/use-search-tip';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivitiesSubject$, showTipSubject$ } from '../../hooks';
import { timer, from, switchMap } from 'rxjs';
import { channelSearchSubject$ } from '@/app/list/drawer/components/channel-search';
import { timeRangeSearchSubject$ } from '@/app/list/drawer/components/time-range-search';
import { RootState } from '@/store';
import { drawerSearchSubject$ } from '@/app/list/drawer';

interface TipProps {
  activitiesLength: number;
}

export default function Tip({ activitiesLength }: TipProps) {
  const search = useSelector((state: RootState) => state.search);
  const { tip } = useSearchTip({ searchParams: search });
  const disPatch = useDispatch();

  const handleClearSearch = () => {
    const clearSearch$ = from(Promise.resolve(disPatch({ type: 'CLEAR_SEARCH' })));
    clearSearch$.pipe(
      switchMap(() => timer(300).pipe(
        switchMap(() => from(Promise.resolve(fetchActivitiesSubject$.next({}))))
      ))
    ).subscribe();
    showTipSubject$.next(false);
    // 清除搜索条件
    channelSearchSubject$.next({});
    timeRangeSearchSubject$.next({});
    drawerSearchSubject$.next({});
  };

  if (!tip) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{activitiesLength} Results</Text>
        <TouchableOpacity onPress={handleClearSearch}>
          <Text style={styles.headerButton}>Clear Search</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.searchTip}>Searched for {tip}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF9FC',
    height: 68,
    paddingLeft: 27,
    paddingRight: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  headerTitle: {
    color: '#8560A9',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerButton: {
    color: '#67616D',
    backgroundColor: '#D5EF7F',
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 10,
  },
  searchTip: {
    color: '#67616D',
    fontSize: 12,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
});