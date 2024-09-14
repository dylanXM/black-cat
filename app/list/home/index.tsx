import SafeContainer from '@/components/SafeContainer';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import SvgSearch from '@/components/svgs/Search';
import SvgLogoCat from '@/components/svgs/LogoCat';
import Tip from './components/tip';

export default function List({ navigation }: any) {

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const toProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeContainer topColor='#8560A9' bottomColor='transparent' restStyles={styles.back}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer}>
            <SvgSearch style={styles.headerLeftBtn} />
          </TouchableOpacity>
          <SvgLogoCat style={[styles.headerLogo, { fill: '#D5EF7F' }]} />
          <TouchableOpacity onPress={toProfile}>
            <Image
              style={styles.headerRightAvatar}
              source={require('@/assets/images/user.jpg')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Tip />
      <View>
        <Text>这是list3333</Text>
      </View>
    </SafeContainer>
  )
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#8560A9',
  },
  container: {

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#8560A9',
  },
  headerLeftBtn: {
    width: 24,
    height: 24,
  },
  headerLogo: {
    width: 24,
    height: 24,
  },
  headerRightAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },

});