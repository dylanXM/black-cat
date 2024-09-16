import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import LogoCat from '@/components/svgs/LogoCat';
import CustomInput from './components/custom-input';
import SvgUser from '@/components/svgs/User';
import { useMutation } from 'react-query';
import { doLogin } from '@/common/apis';
import { useLogin } from './hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IndexProps } from '../index';
import Toast from 'react-native-toast-message';
import LoginFooter from './components/login-footer';
import React from 'react';
import {
	color_complement,
	color_primary_dark,
	color_primary_light,
} from '@/constants/Colors';

export default function Login({ navigation }: IndexProps) {
	const { username, password, handleUsernameChange, handlePasswordChange } = useLogin();

  const { mutate, isLoading } = useMutation(doLogin, {
    onSuccess: (data) => {
			// 将data存储到本地
			AsyncStorage.setItem('token', data);
			// 跳转到首页
			navigation.navigate('list');
    },
    onError: () => {
			Toast.show({
				type: 'error',
				text1: 'A error has occurred, please try again later'
			});
    }
  });

	const canLogin = username.value.trim() && password.value.trim() && !isLoading;
	const loginDisabled = !canLogin || isLoading;

	const handleLogin = () => {
		if (!canLogin) {
			return;
		}
		mutate({
			username: username.value,
			password: password.value,
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image style={styles.backgroundImage} source={{ uri: '@/assets/images/Street-Dance-01.jpg' }} />
				<View style={styles.info}>
					<Text style={styles.slogan}>FIND THE MOST LOVED ACTIVITIES</Text>
					<Text style={styles.title}>BLACK CAT</Text>
					<View style={styles.logoContainer}>
						<View style={styles.logoCircle}>
							<LogoCat style={[styles.logo, { fill: color_complement }]} />
						</View>
					</View>
					<View>
						<CustomInput
							placeholder="username"
							icon={<SvgUser styles={{ fill: color_primary_light }} />}
							value={username}
							onChangeText={handleUsernameChange}
							secureTextEntry={false}
						/>
						<CustomInput
							placeholder="password"
							icon={<SvgUser styles={{ fill: color_primary_light }} />}
							value={password}
							onChangeText={handlePasswordChange}
							secureTextEntry={true}
						/>
					</View>
				</View>
			</View>
			<TouchableOpacity style={styles.operate} onPress={handleLogin} disabled={loginDisabled}>
				<LoginFooter loading={isLoading} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
	},
	info: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.95,
		backgroundColor: 'rgba(133, 96, 169, 0.9)',
	},
	operate: {
		height: 64,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color_complement,
		fontSize: 16,
		color: color_primary_dark,
		fontWeight: 'bold',
	},
	slogan: {
		marginBottom: 16,
		fontSize: 16,
		color: color_complement,
	},
	title: {
		marginBottom: 37,
		fontSize: 24,
		color: color_complement,
	},
	logoContainer: {
		width: 64,
		height: 64,
		borderRadius: 32,
		borderWidth: 1,		
		borderColor: 'rgba(213, 239, 127, 0.3)',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 118,
	},
	logoCircle: {
		width: 60,
		height: 60,
		borderRadius: 30,
		borderWidth: 1,		
		borderColor: color_complement,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 36,
		height: 36,
	},
	backgroundImage: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
	}
});
