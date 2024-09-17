import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import { Subject } from 'rxjs';

interface ToastProps {
  type: 'success' | 'error' | 'info' | 'loading';
  message: string;
}

const toastSubject$ = new Subject<ToastProps>();

const Toast = () => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<ToastProps['type']>('info');
  const [message, setMessage] = useState('');

  const showToast = useCallback(({ type, message }: ToastProps) => {
    setVisible(true);
    setType(type);
    setMessage(message);
  }, []);

  const hideToast = useCallback(() => {
    setVisible(false);
    setType('info');
    setMessage('');
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, hideToast]);

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'rgba(40, 167, 69, 0.8)'; // 半透明绿色
      case 'error':
        return 'rgba(220, 53, 69, 0.8)'; // 半透明红色
      case 'info':
        return 'rgba(23, 162, 184, 0.8)'; // 半透明蓝色
      case 'loading':
        return 'rgba(255, 255, 255, 0.8)'; // 半透明白色
      default:
        return 'rgba(51, 51, 51, 0.8)'; // 默认半透明
    }
  };

  useEffect(() => {
    const subscription = toastSubject$.subscribe((props: ToastProps) => {
      showToast(props);
    });
    return () => subscription.unsubscribe();
  }, [showToast]);

  return (
    <Modal transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.toastContainer}>
          {type === 'loading' ? (
            <ActivityIndicator size="small" color="#999999" />
          ) : (
            <Text style={[styles.toastText, { color: getBackgroundColor() }]}>
              {message}
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastContainer: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    shadowOpacity: 0.25, // 阴影透明度
    shadowRadius: 3.5, // 阴影模糊半径
    elevation: 5, // Android 阴影
    shadowColor: '#000', // 阴影颜色
    backgroundColor: '#fff',
  },
  toastText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export function showToast(props: ToastProps) {
  toastSubject$.next(props);
}

export default Toast;