import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const ListGroupsScreenStyles = () => {
	const { backTheme, textTheme, notBackTheme } = useContext(ThemeContext);

	return StyleSheet.create({
		containerBig: {
			width: "100%",
			flexDirection: "column",
			backgroundColor: backTheme,
			marginTop: 55,
		},
		containerListGroupScreen: {
			maxWidth: 320,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		containerGroup: {
			width: 300,
			height: 65,
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginTop: 5,
			paddingLeft: 16,
		},
		iconGroup: {
			width: 51,
			height: 51,
		},
		containerGroupInfo: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "flex-start",
			paddingLeft: 10,
		},
		groupInfoName: {
			fontSize: 16,
			fontWeight: "800",
			color: textTheme,
		},
		groupInfoDate: {
			fontSize: 14,
			color: textTheme,
		},
		containerCreateGroup: {
			width: "100%",
			paddingTop: 10,
			paddingBottom: 10,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: notBackTheme,
			alignSelf: "center",
		},
		buttonCreateGroup: {
			width: 136,
			height: 44,
			borderRadius: 10,
			backgroundColor: "#F6163C",
		},
		buttonCreateGroupText: {
			color: "white",
			textAlign: "center",
			lineHeight: 44,
			fontSize: 20,
		},
	});
};
