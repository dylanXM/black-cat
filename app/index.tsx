import { Link } from 'expo-router';
import { Text } from 'react-native';


export default function Index() {
	
	return (
		<>
			<Text>这是Index页面</Text>
			<Link href="/login">
				<Text>去登录页</Text>
			</Link>
		</>
	)
}