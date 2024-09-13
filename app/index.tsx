import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import Login from './login';
import List from './list';

export default function Index() {
	const login = useSelector((state: RootState) => state.login);

	// if (!login.isLoggedIn) {
	// 	return (
	// 		<Login />
	// 	);
	// }
	
	return (
		<List />
	)
}