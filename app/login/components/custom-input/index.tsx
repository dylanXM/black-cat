import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import { LoginInfo } from '../../hooks';

interface CustomInputProps {
  icon: React.ReactNode | string;
  placeholder: string;
  value: LoginInfo;
  onChangeText: (text: string) => void;
}

const CustomInput = ({ icon, placeholder, value, onChangeText }: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <View style={[styles.container, isFocused && styles.containerActive, value.error && styles.containerError]}>
        {/* 图标 */}
        <View style={styles.iconContainer}>
          {icon}
        </View>

        {/* 输入框 */}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value.value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <Text style={styles.errorText}>{value.error && value.errorMessage}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    paddingHorizontal: 12,
  },
  containerActive: {
    // 激活时的样式变化（例如边框颜色）
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  containerError: {
    // 错误时的样式变化（例如边框颜色）
    borderColor: 'red',
  },
  iconContainer: {
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 0,
    marginLeft: 12,
    justifyContent: 'center',
  },
  errorText: {
    height: 16,
    color: 'red',
    fontSize: 10,
  }
});

export default CustomInput;
