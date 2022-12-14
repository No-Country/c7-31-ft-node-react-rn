import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const FavoriteScreenStyles = () => {
	const heightHeader = useHeaderHeight();
	const { width, height } = useWindowDimensions();
	const { backTheme, textTheme } = useContext(ThemeContext);

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			marginTop: heightHeader,
		},
		title: {
			alignSelf: "center",
			width: 350,
			fontFamily: "ChivoRegular",
			fontSize: 25,
			color: textTheme,
			padding: 15,
		},
		containerFavoritesScreen: {
			alignSelf: "center",
			width: 350,
			minHeight: height,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			paddingLeft: 10,
		},
		containerLocal: {
			alignSelf: "center",
			width: 350,
			height: 130,
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		containerImageHeart: {
			position: "relative",
		},
		imageLocal: {
			width: 160,
			height: 119,
			marginRight: 13,
			borderRadius: 10,
		},
		favoriteIconBg: {
			position: "absolute",
			width: 35,
			height: 35,
			backgroundColor: "white",
			right: 20,
			top: 5,
			borderRadius: 25,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		favoriteIcon: {},
		containerInfoLocal: {
			width: 150,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		containerRateLocal: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		rateIcon: {
			marginRight: 5,
		},
		rateText: {
			fontSize: 16,
			color: textTheme,
			fontFamily: "ChivoRegular",
		},
		containerTitle: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		titleText: {
			fontSize: 14,
			color: textTheme,
			fontFamily: "ChivoBold",
		},
		titleActivity: {
			fontSize: 14,
			fontSize: 14,
			color: textTheme,
			fontFamily: "ChivoBold",
		},
		containerSubTitle: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		distanceText: {
			fontSize: 14,
			color: textTheme,
			fontFamily: "ChivoRegular",
		},
		groupNumber: {
			fontSize: 14,
			color: textTheme,
			fontFamily: "ChivoRegular",
		},
		containerPrice: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		priceText: {
			fontSize: 18,
			marginRight: 10,
			color: textTheme,
			fontFamily: "ChivoBold",
		},
		hourText: {
			fontSize: 14,
			lineHeight: 25,
			color: textTheme,
			fontFamily: "ChivoRegular",
		},
		dotSeparator: {
			width: 5,
			height: 5,
			backgroundColor: textTheme,
			borderRadius: 50,
			marginLeft: 5,
			marginRight: 5,
		},
	});
};
