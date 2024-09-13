import { Link, Stack } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet } from 'react-native';

export default function NotFound() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<ThemedView style={styles.container}>
				<ThemedText type="title">页面不存在</ThemedText>
				<Link href="/login" style={styles.link}>
					<ThemedText type="link">Go to home screen!</ThemedText>
				</Link>
			</ThemedView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
});
