import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen/RegisterScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen/WelcomeScreen";
import { BottomTabs } from "../Tabs/BottomTabs";
const LoginStackNavigator = createNativeStackNavigator();

export const StackLoginScreens = () => {
	return (
		<LoginStackNavigator.Navigator initialRouteName='WelcomeScreen'>
			<LoginStackNavigator.Screen
				name='WelcomeScreen'
				component={WelcomeScreen}
				options={{
					headerShown: false,
					title: "Welcome",
					headerTitleAlign: "center",
				}}
			/>
			<LoginStackNavigator.Screen
				name='LoginScreen'
				component={LoginScreen}
				options={{
					headerBackButtonMenuEnabled: true,
					headerBackTitleVisible: true,
					headerTransparent: false,
					title: "Login",
					headerTitleAlign: "center",
				}}
			/>
			<LoginStackNavigator.Screen
				name='RegisterScreen'
				component={RegisterScreen}
				options={{
					headerBackButtonMenuEnabled: true,
					headerBackTitleVisible: true,
					headerTransparent: false,
					title: "Register",
					headerTitleAlign: "center",
				}}
			/>
			<LoginStackNavigator.Screen
				name='HomeScreen'
				component={BottomTabs}
				options={{
					headerShadowVisible: false,
					headerShown: false,
				}}
			/>
		</LoginStackNavigator.Navigator>
	);
};
