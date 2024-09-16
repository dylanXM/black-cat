import SafeContainer from '@/components/SafeContainer';
import SvgHome from '@/components/svgs/Home';
import SvgLogoCat from '@/components/svgs/LogoCat';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Twitter } from '@/common/apis/twitter';
import ActivityHeader from './components/header';
import { useEffect, useState } from 'react';
import FooterOperation from './components/footer-operation';
import { SET_ACTIVITY } from '@/store/actions/activity';
import ActivityTab from './components/activity-tab';

export default function Detail({ route }: { route: any }) {
  const { user } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<NavigationProp<any>>();
  const { activity } = route.params as { activity: Twitter };
  const dispatch = useDispatch();
  const [updateKey, setUpdateKey] = useState(0);

  useEffect(() => {
    dispatch({ type: SET_ACTIVITY, payload: { activity } });
    return () => {
      dispatch({ type: SET_ACTIVITY, payload: { activity: null } });
    };
  }, [activity]);

  const back = () => {
    navigation.goBack();
    setUpdateKey(updateKey + 1);
  };

  const toProfile = () => {
    navigation.navigate('Profile');
    setUpdateKey(updateKey + 1);
  };

  return (
    <SafeContainer key={updateKey} topColor="#8560A9" bottomColor="transparent" restStyles={styles.back}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <SvgHome style={[styles.headerLeftBtn, { fill: '#453257' }]} />
        </TouchableOpacity>
        <SvgLogoCat style={[styles.headerLogo, { fill: '#D5EF7F' }]} />
        <TouchableOpacity onPress={toProfile}>
          <Image
            style={styles.headerRightAvatar}
            source={{ uri: user.avatar }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        {/* 这是header */}
        <ActivityHeader />
        {/* 这是Tabs */}
        <ActivityTab />
      </View>
      {/* 这是底部操作栏 */}
      <View style={styles.footer}>
        <FooterOperation />
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#8560A9',
  },
  scrollContainer: {
    flex: 1,
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
  footer: {
    width: '100%',
  }
});
