import { View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
const { height } = Dimensions.get('window');

import { ReactNode } from 'react';

interface SafeContainerProps {
  children: ReactNode;
  topColor: string;
  bottomColor: string;
  [key: string]: unknown;
}

export default function SafeContainer({ children, topColor, bottomColor, ...rest }: SafeContainerProps) {
  const insets = useSafeAreaInsets();

  return (
    <View 
      style={{
        maxHeight: height,
        height,
        // flex: 1,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#fff',
      }}
      {...rest}
    >
      <View style={{ height: insets.top, backgroundColor: topColor }}></View>
      {children}
      <View style={{ height: insets.bottom, backgroundColor: bottomColor }}></View>
    </View>
  );
}