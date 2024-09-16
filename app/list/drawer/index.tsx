import SafeContainer from '@/components/SafeContainer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import TimeRangeSearch from './components/time-range-search';
import ChannelSearch from './components/channel-search';
import SearchButton from './components/search-button';
import { useCallback, useEffect, useState } from 'react';
import { initialState, SearchState, TimeRange, TypeChannel } from '@/store/actions/search';
import { Subject } from 'rxjs';
import { color_disabled_text_light, color_primary_dark } from '@/constants/Colors';

export const drawerSearchSubject$ = new Subject();

export type TypeHandleChannelChange = (channel: TypeChannel) => void;
export type TypeHandleTimeRangeChange = (timeRange: { start: string, end: string }) => void;

export default function CustomDrawerContent({ navigation }: DrawerContentComponentProps) {
  const [searchParams, setSearchParams] = useState<SearchState>({ ...initialState });

  const handleChannelChange: TypeHandleChannelChange = useCallback((channel: TypeChannel) => {
    setSearchParams((prev) => ({ ...prev, channel }));
  }, []);

  const handleTimeRangeChange: TypeHandleTimeRangeChange = useCallback((timeRange: TimeRange) => {
    setSearchParams((prev) => ({
      ...prev,
      timeRange: {
        start: timeRange.start,
        end: timeRange.end,
      },
    }));
  }, []);

  useEffect(() => {
    const subscription = drawerSearchSubject$.subscribe(() => {
      setSearchParams({ ...initialState });
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <SafeContainer topColor={color_primary_dark} bottomColor={color_disabled_text_light}>
      <View style={styles.container}>
        <View style={styles.selectContainer}>
          <Text style={styles.selectTitle}>DATE</Text>
          <View style={styles.selectOptions}>
            <TimeRangeSearch handleTimeRangeChange={handleTimeRangeChange} />
          </View>
        </View>
        <View style={styles.selectContainer}>
          <Text style={styles.selectTitle}>CHANNEL</Text>
          <View style={styles.selectOptions}>
            <ChannelSearch handleChannelChange={handleChannelChange} />
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchButton navigation={navigation} searchParams={searchParams} />
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_primary_dark,
    paddingLeft: 16,
    paddingRight: 16,
  },
  searchContainer: {
    height: 64,
  },
  selectContainer: {
    marginTop: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  selectTitle: {
    color: '#AC8EC9',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#AC8EC9',
  },
  selectOptions: {
    marginTop: 12,
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  }
});