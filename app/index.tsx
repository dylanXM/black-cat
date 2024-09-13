import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import Login from './login';
import Home from './home';

export default function Index() {
	const login = useSelector((state: RootState) => state.login);
	console.log('login', login);

	// if (!login.isLoggedIn) {
	// 	return (
	// 		<Login />
	// 	);
	// }
	
	return (
		<Home />
	)
}