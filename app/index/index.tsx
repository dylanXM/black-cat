import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import Login from '../login';
import List from '../list';
import { NavigationProp } from '@react-navigation/native';

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
		<List navigation={navigation} />
	)
}