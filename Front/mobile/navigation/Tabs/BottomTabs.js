import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import assets from "../../constants/assets";

//screens
import GroupsScreen from "../screens/GroupsScreen/GroupsScreen";
import CategoriesScreenView from "../screens/HomeScreen/Categories/CategoriesScreenView";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import UserScreen from "../screens/UserScreen/UserScreen";
import { StackExample } from "../Stacks/StackExample";
import {StackHomeCategory} from '../screens/HomeScreen/Categories/StackHomeCategory'

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
	return (
		<Tab.Navigator
			//initialRouteName='Home'
			screenOptions={{
				tabBarActiveTintColor: "red",
			}}>
			<Tab.Screen
				name='Home'
				component={StackHomeCategory}
				options={{
					tabBarIcon: ({ tintColor }) => (
						<Image
							source={assets.home_dark}
							style={{
								width: 15,
								height: 15,
								tintColor: tintColor,
							}}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name='Groups'
				component={GroupsScreen}
				options={{
					tabBarIcon: ({ tintColor }) => (
						<Image
							source={assets.place_dark}
							style={{
								width: 15,
								height: 15,
								tintColor: tintColor,
							}}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name='Favorites'
				component={StackExample}
				options={{
					tabBarIcon: ({ tintColor }) => (
						<Image
							source={assets.favorite_dark}
							style={{
								width: 15,
								height: 15,
								tintColor: tintColor,
							}}
						/>
					),
					tabBarBadge: 5,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name='User'
				component={UserScreen}
				options={{
					tabBarIcon: ({ tintColor }) => (
						<Image
							source={assets.user_dark}
							style={{
								width: 15,
								height: 15,
								tintColor: tintColor,
							}}
						/>
					),

					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};
