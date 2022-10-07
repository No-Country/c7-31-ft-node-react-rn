import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/FavoritesScreen/FavoriteScreen";
import CategoriesScreenView from "../screens/HomeScreen/Categories/CategoriesScreenView";
import { LocalScreen } from "../screens/LocalScreen/LocalScreen";
const HomeStackNavigator = createNativeStackNavigator();

export const StackExample = () => {
    return (
        <HomeStackNavigator.Navigator initialRouteName='Favorites'>
            <HomeStackNavigator.Screen
                name='Favorite Screen'
                component={FavoriteScreen}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigator.Screen
                name='Local'
                component={LocalScreen}
                options={{
                    headerBackButtonMenuEnabled: true,
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    headerTintColor: "white",
                    headerTitle: "",
                }}
            />
        </HomeStackNavigator.Navigator>
    );
};
