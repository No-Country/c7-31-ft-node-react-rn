import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen";
import CategoriesScreenView from "./CategoriesScreenView";

const Stack = createNativeStackNavigator();

export const StackHomeCategory = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home Screen'
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Category Screen View'
                component={CategoriesScreenView}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
