import { IndexProps } from '@/app/index';
import SafeContainer from '@/components/SafeContainer';
import SvgLogoCat from '@/components/svgs/LogoCat';
import SvgHome from '@/components/svgs/Home';
import { RootState } from '@/store';
import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import UserInfo from './components/user-info';
import UserTabs from './components/user-tabs';
import { color_complement, color_primary, color_primary_dark } from '@/constants/Colors';

export default function Profile({ navigation }: IndexProps) {
  const { user } = useSelector((state: RootState) => state.user);

  const backToHome = () => {
    navigation.goBack();
  };
  
  if (!user) {
    return null;
  }

  return (
    <SafeContainer topColor={color_primary} bottomColor="transparent" restStyles={styles.back}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={backToHome}>
            <SvgHome style={[styles.headerLeftBtn, { fill: color_primary_dark }]} />
          </TouchableOpacity>
          <SvgLogoCat style={[styles.headerLogo, { fill: color_complement }]} />
          <Image
            style={styles.headerRightAvatar}
            source={{ uri: user.avatar }}
          />
        </View>
        <UserInfo />
        <UserTabs />
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: color_primary,
  },
  container: {
    height: 'auto',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: color_primary,
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
