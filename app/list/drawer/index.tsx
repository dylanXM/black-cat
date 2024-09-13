import SafeContainer from '@/components/SafeContainer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import TimeRangeSearch from './components/time-range-search';
import ChannelSearch from './components/channel-search';
import SearchButton from './components/search-button';

export default function CustomDrawerContent({}: DrawerContentComponentProps) {

  return (
    <SafeContainer topColor="#453257" bottomColor="#BABABA">
      <View style={styles.container}>
        <View style={styles.selectContainer}>
          <Text style={styles.selectTitle}>DATE</Text>
          <View style={styles.selectOptions}>
            <TimeRangeSearch />
          </View>
        </View>
        <View style={styles.selectContainer}>
          <Text style={styles.selectTitle}>CHANNEL</Text>
          <View style={styles.selectOptions}>
            <ChannelSearch />
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchButton />
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#453257',
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