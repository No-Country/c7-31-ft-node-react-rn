import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const GroupsDetailsStyles = () => {
	const heightHeader = useHeaderHeight();
	const { dark, backTheme, textTheme, notBackTheme, notTextTheme } =
		useContext(ThemeContext);
	const { width, height } = useWindowDimensions();
	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: heightHeader,
		},
		contarinerScreenGroupDetail: {
			alignSelf: "center",
			width: 350,
			minHeight: height,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
			marginBottom: 10,
		},
		cardLocals: {
			alignSelf: "center",
			width: 350,
			marginBottom: 15,
		},
		cardsImage: {
			width: 350,
			height: 310,
			borderRadius: 20,
		},
		containerLocalInfo: {
			alignSelf: "center",
			width: 330,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		containerLocalText: {
			width: 315,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: 5,
		},
		cardLocalTextTitle: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
			marginTop: 5,
		},
		cardLocalScore: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		cardLocalScorePoints: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		cardLocalSubtitle: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
			marginTop: 5,
		},
		containerCardLocalPrice: {
			display: "flex",
			flexDirection: "row",
			marginTop: 5,
		},
		cardLocalPrice: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		cardLocalPriceText: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		containerPeople: {
			alignSelf: "center",
			width: 350,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			padding: 10,
		},
		titlePeople: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
			marginBottom: 10,
		},
		containerAvatars: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		avatarImg: {
			width: 51,
			height: 51,
			marginRight: 10,
		},
		avatarsName: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
	});
};
