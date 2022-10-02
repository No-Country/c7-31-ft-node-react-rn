import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import assets from "../../constants/assets";

//screens
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { LocalScreen } from "../screens/LocalScreen/LocalScreen";
import PeopleScreen from "../screens/PeopleScreen/PeopleScreen";
import PlacesScreen from "../screens/PlacesScreen/PlacesScreen";
import UserScreen from "../screens/UserScreen/UserScreen";
import { StackExample } from "../Stacks/StackExample";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabBarActiveTintColor: "red",
			}}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
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
				name='People'
				component={PeopleScreen}
				options={{
					tabBarIcon: ({ tintColor }) => (
						<Image
							source={assets.people_dark}
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
				name='Places'
				component={PlacesScreen}
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
