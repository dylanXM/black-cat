import SvgSearch from '@/components/svgs/Search';
import { RootState } from '@/store';
import { useMemo } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

export default function SearchButton() {
  const search = useSelector((state: RootState) => state.search);
  console.log('搜索条件', search);
  const { channel, timeRange } = search;
  const canSubmit = channel && timeRange.start && timeRange.end;
  const showTips = channel || (timeRange.start && timeRange.end);

  const tips = useMemo(() => {
    let tips = '';
    if (channel) {
      tips += `${channel} activities`;
    }
    if (!timeRange.start && !timeRange.end) {
      return tips;
    }
    // todo：转换时间格式
    tips += ` form ${timeRange.start} to ${timeRange.end}`;
    return tips;
  }, [channel, search])

  return (
    <TouchableOpacity
      style={[styles.container, canSubmit ? styles.activeContainer : null]}
      // disabled={!canSubmit}
    >
      <View style={styles.searchContainer}>
        <SvgSearch style={styles.searchIcon} />
        <Text style={styles.searchText}>SEARCH</Text>
      </View>
      {
        showTips && <Text style={styles.tips}>{tips}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
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
  tips: {
    fontSize: 10,
    color: '#8560A9',
  }
});