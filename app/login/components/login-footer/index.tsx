import { color_primary_dark, color_primary_neutral } from '@/constants/Colors';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

interface LoginFooterProps {
  loading: boolean;
}

export default function LoginFooter({ loading }: LoginFooterProps) {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.spinner} />
        <Text style={styles.text}>Loging in...</Text>
      </View>
    );
  }

  return (
    <Text style={styles.signinText}>SIGN IN</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  spinner: {
    marginRight: 8,
  },
  text: {
    color: color_primary_neutral,
  },
  signinText: {
    color: color_primary_dark,
    fontSize: 16,
  }
});