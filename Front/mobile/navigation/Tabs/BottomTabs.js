import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { Image, StyleSheet } from "react-native";
import assets from "../../constants/assets";
import { ThemeContext } from "../../Context/Theme";

//screens

import UserScreen from "../screens/UserScreen/UserScreen";
import { StackGroupScreens } from "../Stacks/StackGroupScreens";
import { StackHomeScreens } from "../Stacks/StackHomeScreens";
import { StackLocalScreens } from "../Stacks/StackLocalScreens";
const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
	const { dark, backTheme, textTheme, notBackTheme } =
		useContext(ThemeContext);

	return (
		<Tab.Navigator
			//initialRouteName='Home'

			screenOptions={{
				tabBarActiveTintColor: textTheme,
				tabBarStyle: {
					height: 65,
					paddingBottom: 10,
					backgroundColor: backTheme,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontFamily: "ChivoRegular",
				},
			}}>
			<Tab.Screen
				name='Inicio'
				component={StackHomeScreens}
				options={{
					tabBarIcon: () => (
						<Image
							source={dark ? assets.home_light : assets.home_dark}
							style={tabBarStyles.icons}
						/>
					),
					headerShown: false,
				}}
			/>

			<Tab.Screen
				name='Grupos'
				component={StackGroupScreens}
				options={{
					tabBarIcon: () => (
						<Image
							source={
								dark ? assets.place_light : assets.place_dark
							}
							style={tabBarStyles.icons}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name='Favoritos'
				component={StackLocalScreens}
				options={{
					tabBarIcon: () => (
						<Image
							source={
								dark
									? assets.favorite_light
									: assets.favorite_dark
							}
							style={tabBarStyles.icons}
						/>
					),
					headerShown: false,
					headerBackTitleVisible: true,
					headerTransparent: true,
					headerTintColor: notBackTheme,
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: backTheme,
					},
				}}
			/>
			<Tab.Screen
				name='Perfil'
				component={UserScreen}
				options={{
					tabBarIcon: () => (
						<Image
							source={dark ? assets.user_light : assets.user_dark}
							style={tabBarStyles.icons}
						/>
					),
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};

const tabBarStyles = StyleSheet.create({
	icons: {
		width: 20,
		height: 20,
	},
});
