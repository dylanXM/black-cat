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
import Toast from 'react-native-toast-message'
import { useEffect } from 'react';

export default function Login({ navigation }: IndexProps) {
	const { username, password, handleUsernameChange, handlePasswordChange } = useLogin();

  const { mutate, isLoading } = useMutation(doLogin, {
    onSuccess: (data) => {
			// 将data存储到本地
			AsyncStorage.setItem('token', data);
			// 跳转到首页
			navigation.navigate('list');
      console.log('data', data);
    },
    onError: (error) => {
			// TODO 提示报错信息
      console.log('error', error);
			Toast.show({
				type: 'error',
				text1: 'A error has occurred, please try again later'
			})
    }
  });

	const canLogin = username.value.trim() && password.value.trim() && !isLoading;
	const loginDisabled = !canLogin || isLoading;

	const handleLogin = () => {
		if (!canLogin) {
			return;
		}
		const params = {
			username: username.value,
			password: password.value
		};
		mutate(params);
	};

	useEffect(() => {
		if (!isLoading) {
			Toast.hide();
			return;
		}
		Toast.show({
			type: 'info',
			text1: 'This is an info message'
		});
	}, [isLoading]);

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image style={styles.backgroundImage} source={require('@/assets/images/Street-Dance-01.jpg')} />
				<View style={styles.info}>
					<Text style={styles.slogan}>FIND THE MOST LOVED ACTIVITIES</Text>
					<Text style={styles.title}>BLACK CAT</Text>
					<View style={styles.logoContainer}>
						<View style={styles.logoCircle}>
							<LogoCat style={[styles.logo, { fill: '#D5EF7F' }]} />
						</View>
					</View>
					<View>
						<CustomInput
							placeholder="username"
							icon={<SvgUser styles={{ fill: '#D3C1E5' }} />}
							value={username}
							onChangeText={handleUsernameChange}
						/>
						<CustomInput
							placeholder="password"
							icon={<SvgUser styles={{ fill: '#D3C1E5' }} />}
							value={password}
							onChangeText={handlePasswordChange}
						/>
					</View>
				</View>
			</View>
			<TouchableOpacity style={styles.operate} onPress={handleLogin} disabled={loginDisabled}>
				<Text>SIGN IN</Text>
			</TouchableOpacity>
		</View>
	)
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
		backgroundColor: '#D5EF7F',
		fontSize: 16,
		color: '#453257',
		fontWeight: 'bold',
	},
	slogan: {
		marginBottom: 16,
		fontSize: 16,
		color: '#D5EF7F',
	},
	title: {
		marginBottom: 37,
		fontSize: 24,
		color: '#D5EF7F',
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
		borderColor: '#D5EF7F',
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
