import { useCallback, useState } from 'react';

export interface LoginInfo {
  value: string;
  error: boolean;
  errorMessage: string;
}

export interface LoginHooks {
  username: LoginInfo;
  password: LoginInfo;
  handleUsernameChange: (value: string) => void;
  handlePasswordChange: (value: string) => void;
}

export function useLogin(): LoginHooks {
  const [username, setUsername] = useState<LoginInfo>({
    value: 'admin',
    error: false,
    errorMessage: '请填写用户名'
  });
  const [password, setPassword] = useState<LoginInfo>({
    value: '123456',
    error: false,
    errorMessage: '请填写密码'
  });
  
  const handleUsernameChange = useCallback((value: string) => {
    const newValue = value.trim();
    setUsername((prev) => ({
      ...prev,
      value: newValue,
      error: Boolean(!newValue),
    }));
  }, []);

  const handlePasswordChange = useCallback((value: string) => {
    const newValue = value.trim();
    setPassword((prev) => ({
      ...prev,
      value: newValue,
      error: Boolean(!newValue),
    }));
  }, []);

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
  };
}