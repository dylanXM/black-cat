import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider } from 'react-redux';
import store from '@/store';
import { QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index';
import List from './list';
import Login from './login';
import NotFound from './+not-found';
import { ModalPortal } from 'react-native-modals';
import { client } from '@/common/utils/query-client';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer independent={true}>
        <QueryClientProvider client={client}>
          <Provider store={store}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <Stack.Navigator>
                <Stack.Screen name="index" component={Index} options={{ headerShown: false }} />
                <Stack.Screen name="list" component={List} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" component={NotFound} />
              </Stack.Navigator>
              <ModalPortal />
              <Toast />
            </ThemeProvider>
          </Provider>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
