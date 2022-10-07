import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const LoginScreenStyles = () => {
	const { backTheme, notBackTheme } = useContext(ThemeContext);

	return StyleSheet.create({
		containerBig: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			backgroundColor: backTheme,
		},
		containerEmailScreen: {
			width: "100%",
			minHeight: 600,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
		registerInput: {
			width: 300,
			height: 45,
			lineHeight: 15,
			borderRadius: 15,
			paddingLeft: 25,
			borderColor: notBackTheme,
			color: "#181818",
			borderWidth: 2,
			backgroundColor: "white",
			marginTop: 15,
		},
		containerSeparator: {
			width: "100%",
			height: 10,
			marginTop: 20,
			marginBottom: 20,
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		lineSeparator: {
			width: 140,
			height: 1,
			backgroundColor: notBackTheme,
		},
		circleSeparator: {
			width: 8,
			height: 8,
			marginLeft: 10,
			marginRight: 10,
			borderRadius: 50,
			borderWidth: 1,
			borderColor: "#e4e5e7",
		},
		containerContinueButtonsWays: {
			width: "100%",
			marginTop: 20,
			marginBottom: 20,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	});
};
