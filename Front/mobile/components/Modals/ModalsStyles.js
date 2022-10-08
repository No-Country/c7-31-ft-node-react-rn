import { StyleSheet } from "react-native";

export const ModalsStyles = () => {
	return StyleSheet.create({
		modalBigContainer: {
			width: "100%",
		},
		modalContainer: {
			width: "100%",
			height: 450,
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		modalImage: {
			width: 200,
			height: 200,
		},
		modalText: {
			width: 320,
			textAlign: "center",
			color: "white",
			fontSize: 25,
		},
	});
};
