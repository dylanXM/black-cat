import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import Login from '../login';
import List from '../list';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';

export interface IndexProps {
  navigation: NavigationProp<any>;
}

export default function Index({ navigation }: IndexProps) {
	const login = useSelector((state: RootState) => state.login);

	if (!login.isLoggedIn) {
		return (
			<Login navigation={navigation} />
		);
	}
	
	return (
		// eslint-disable-next-line react/react-in-jsx-scope
		<List navigation={navigation} />
	);
}