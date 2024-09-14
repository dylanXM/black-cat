import { IndexProps } from '@/app/index';
import SafeContainer from '@/components/SafeContainer';
import SvgLogoCat from '@/components/svgs/LogoCat';
import SvgHome from '@/components/svgs/Home';
import { RootState } from '@/store';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import UserInfo from './components/user-info';
import UserTabs from './components/user-tabs';
import { ScrollView } from 'react-native-gesture-handler';


export default function Profile({ navigation }: IndexProps) {
  const { user } = useSelector((state: RootState) => state.user);
  console.log('user - Profile', user);

  const backToHome = () => {
    navigation.goBack();
  };

  return (
    <SafeContainer topColor='#8560A9' bottomColor='transparent' restStyles={styles.back}>
      <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
        <View style={styles.header}>
          <TouchableOpacity onPress={backToHome}>
            <SvgHome style={[styles.headerLeftBtn, { fill: '#453257' }]} />
          </TouchableOpacity>
          <SvgLogoCat style={[styles.headerLogo, { fill: '#D5EF7F' }]} />
          <Image
            style={styles.headerRightAvatar}
            source={{ uri: user.avatar }}
          />
        </View>
        <UserInfo />
        <UserTabs />
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
