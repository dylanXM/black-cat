import SafeContainer from '@/components/SafeContainer';
import SvgHome from '@/components/svgs/Home';
import SvgLogoCat from '@/components/svgs/LogoCat';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useNavigation } from '@react-navigation/native';
import { Twitter } from '@/common/apis/twitter';
import ActivityHeader from './components/header';
import { User } from '@/common/apis/user/user';


export default function Detail({ route }: { route: any }) {
  const { user } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();
  const { activity } = route.params as { activity: Twitter };

  const back = () => {
    navigation.goBack();
  };

  return (
    <SafeContainer topColor='#8560A9' bottomColor='transparent' restStyles={styles.back}>
      <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
        <View style={styles.header}>
          <TouchableOpacity onPress={back}>
            <SvgHome style={[styles.headerLeftBtn, { fill: '#453257' }]} />
          </TouchableOpacity>
          <SvgLogoCat style={[styles.headerLogo, { fill: '#D5EF7F' }]} />
          <Image
            style={styles.headerRightAvatar}
            source={{ uri: user.avatar }}
          />
        </View>
        <ActivityHeader title={activity.title} channel={activity.channel} user={activity.user as User} />
      </ScrollView>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#8560A9',
  },
  container: {
    height: 'auto',
    flex: 1,
    overflow: 'scroll',
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
