import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const WelcomeScreenStyles = () => {
	const { width, height } = useWindowDimensions();
	const { backTheme } = useContext(ThemeContext);

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: 25,
		},
		containerScreen: {
			width: width,
			minHeight: 500,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		logoIcon: {
			width: 250,
			height: 78,
		},
	});
};
