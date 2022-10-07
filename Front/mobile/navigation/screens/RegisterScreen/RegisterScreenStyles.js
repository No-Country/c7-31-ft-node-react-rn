import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const RegisterScreenStyles = () => {
	const { backTheme, notBackTheme, textTheme } = useContext(ThemeContext);
	return StyleSheet.create({
		containerBig: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			backgroundColor: backTheme,
		},
		containerRegisterScreen: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			marginTop: 25,
		},
		inputUserInfo: {
			width: 300,
			height: 45,
			lineHeight: 15,
			borderRadius: 15,
			paddingLeft: 25,
			borderColor: notBackTheme,
			color: "#181818",
			borderWidth: 2,
			backgroundColor: "white",
			marginBottom: 20,
		},
		textInputUserInfo: {
			lineHeight: 45,
			color: "#a7a7a7",
		},
		textRegisterScreen: {
			width: 320,
			color: textTheme,
			fontSize: 14,
			textAlign: "justify",
			marginBottom: 15,
			marginTop: 10,
			lineHeight: 20,
		},
		containerButtonSelection: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		buttonSelection: {
			width: 100,
			height: 37,
			borderRadius: 50,
			borderColor: notBackTheme,
			borderWidth: 1,
			margin: 5,
		},
		buttonSelected: {
			width: 100,
			height: 37,
			borderRadius: 50,
			borderColor: notBackTheme,
			backgroundColor: "#F6163C",
			borderWidth: 1,
			margin: 5,
		},
		textButtonSelection: {
			color: textTheme,
			fontSize: 19,
			textAlign: "center",
			lineHeight: 37,
			fontWeight: "500",
		},
		textButtonSelected: {
			color: "white",
			fontSize: 19,
			textAlign: "center",
			lineHeight: 37,
			fontWeight: "500",
		},
	});
};
