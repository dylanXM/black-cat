import { useSearchTip } from '@/app/list/hooks/use-search-tip';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

export default function Tip() {
  const { tip, isShowTip } = useSearchTip();
  const disPatch = useDispatch();

  const handleClearSearch = () => {
    disPatch({ type: 'CLEAR_SEARCH' });
  };

  if (!isShowTip) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>14 Results</Text>
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