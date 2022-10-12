import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { StackLoginScreens } from "./Stacks/StackLoginScreens";

export default function Navigation() {
	return (
		<NavigationContainer>
			<StackLoginScreens />
			<StatusBar />
		</NavigationContainer>
	);
}
