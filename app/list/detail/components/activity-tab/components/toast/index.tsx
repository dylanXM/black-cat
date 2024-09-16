import { color_primary } from '@/constants/Colors';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, Animated, Easing } from 'react-native';
import { Subject } from 'rxjs';

type ToastType = 'info' | 'success' | 'error';

interface ToastProps {
  type: ToastType;
  title: string;
}

const toastSubject$ = new Subject<{ type: ToastType; title: string }>();

export default function DetailToast() {
  const [visible, setVisible] = useState(false);
  const [toastProps, setToastProps] = useState<ToastProps>({ type: 'info', title: '' });
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  const hideToast = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  }, []);

  const showToast = useCallback(({ type, title }: { type: ToastType; title: string }) => {
    setToastProps({ type, title });
    setVisible(true);
    fadeIn();
    setTimeout(hideToast, 3000); // 3秒后自动隐藏
  }, [fadeIn, hideToast]);

  useEffect(() => {
    const subscription = toastSubject$.subscribe(({ type, title }) => {
      showToast({ type, title });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [showToast]);

  if (!visible) return null;

  const backgroundColor = {
    info: 'rgba(33, 150, 243, 0.8)',
    success: 'rgba(229, 247, 169, 0.8)',
    error: 'rgba(244, 67, 54, 0.8)',
  }[toastProps.type];

  return (
    <Animated.View
      style={[
        styles.toast,
        { backgroundColor, opacity: fadeAnim },
      ]}
    >
      <Text style={styles.toastText}>{toastProps.title}</Text>
    </Animated.View>
  );
};

export function showToast({ type, title }: { type: ToastType; title: string }) {
  toastSubject$.next({ type, title });
}

const styles = StyleSheet.create({
  toast: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    position: 'absolute',
    width: '100%',
    top: 228,
    zIndex: 100,
  },
  toastText: {
    color: color_primary,
    fontSize: 16,
  },
});