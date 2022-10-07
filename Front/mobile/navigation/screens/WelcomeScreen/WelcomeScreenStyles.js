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
		},
		containerScreen: {
			width: width,
			height: height - 30,
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		logoIcon: {
			width: 277,
			height: 78,
			margin: 25,
		},
	});
};
