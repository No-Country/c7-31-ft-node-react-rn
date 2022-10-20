import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const HomeStyles = () => {
	const heightHeader = useHeaderHeight();
	const { dark, backTheme, textTheme } = useContext(ThemeContext);
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: heightHeader,
		},
		containerLogoIcons: {
			alignSelf: "center",
			width: 340,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: 10,
		},
		logoHome: {
			width: 150,
			height: 45,
		},
		containerIcons: {
			height: 35,
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		iconBell: {
			width: 30,
			height: 30,
			marginLeft: 15,
		},
		iconBubble: {
			width: 30,
			height: 30,
		},
		containerSearch: {
			alignSelf: "center",
			width: 325,
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			position: "relative",
			marginTop: 16,
		},
		iconSearch: {
			position: "absolute",
			zIndex: 5,
			left: 10,
			width: 37,
			height: 37,
		},
		iconFilter: {
			position: "absolute",
			zIndex: 5,
			right: 10,
			width: 37,
			height: 37,
		},
		iconFilterActive: {
			position: "absolute",
			zIndex: 5,
			right: -10,
			top: -10,
			width: 70,
			height: 70,
		},
		inputSearchActivity: {
			width: 320,
			borderRadius: 50,
			paddingLeft: 55,
			paddingRight: 35,
			height: 45,
			backgroundColor: dark ? "#2E2B2B" : backTheme,
			fontFamily: "ChivoRegular",
		},
		containerCarouselActivities: {
			backgroundColor: backTheme,
			marginTop: 16,
		},
		containerActivitiesInCarousel: {
			marginTop: 5,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		imageActivitiesCarousel: {
			width: 50,
			height: 50,
		},
		textActivitiesCarousel: {
			width: 65,
			textAlign: "center",
			color: textTheme,
			fontSize: 14,
			fontFamily: "ChivoRegular",
		},
		containerFiltersSearch: {
			alignSelf: "center",
			width: 360,
			backgroundColor: "black",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
		containerCarouselFilter: {
			width: 350,
			height: 80,
			marginTop: 10,
		},
		textActivitiesCarouselFilter: {
			width: 65,
			textAlign: "center",
			color: "white",
			fontSize: 14,
			fontFamily: "ChivoRegular",
		},
		textActivitiesCarouselFilterSelected: {
			width: 65,
			textAlign: "center",
			color: "#F6163C",
			fontSize: 14,
			fontFamily: "ChivoBold",
		},
		containerCarouselFilterDayTimes: {
			alignSelf: "center",
			width: 350,
		},
		textDayTimes: {
			margin: 5,
			marginBottom: 10,
			textAlign: "left",
			color: "white",
			fontSize: 16,
			fontFamily: "ChivoBold",
		},
		textDayTimeChips: {
			width: 105,
			height: 28,
			lineHeight: 28,
			textAlign: "center",
			color: "white",
			fontSize: 14,
			fontFamily: "ChivoRegular",
			borderColor: "white",
			borderWidth: 2,
			borderRadius: 25,
			margin: 5,
		},
		textDayTimeChipsSelected: {
			width: 105,
			height: 28,
			lineHeight: 28,
			textAlign: "center",
			color: "black",
			fontSize: 14,
			fontFamily: "ChivoRegular",
			borderColor: "white",
			borderWidth: 2,
			borderRadius: 25,
			margin: 5,
			backgroundColor: "white",
		},
		buttonShowResults: {
			width: 147,
			height: 35,
			backgroundColor: "#F6163C",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 15,
			alignSelf: "flex-end",
			marginRight: 10,
			marginBottom: 10,
		},
		sliderPrice: {
			width: 350,
			height: 60,
			alignSelf: "center",
		},
		textPriceSlider: {
			alignSelf: "center",
			width: 340,
			fontSize: 26,
			fontFamily: "ChivoBold",
			color: "white",
		},
		textButtonShowResult: {
			fontSize: 14,
			fontFamily: "ChivoBold",
			textAlign: "center",
			color: "white",
		},
		lineSeparator: {
			alignSelf: "center",
			width: width,
			height: 1,
			backgroundColor: "#2E2B2B",
		},
		textGroupInProgress: {
			width,
			paddingLeft: 15,
			fontFamily: "ChivoBold",
			fontSize: 16,
			marginTop: 10,
			marginBottom: 10,
			color: textTheme,
		},
		containerGroupInProgress: {
			alignSelf: "center",
			width: 360,
			height: 100,
		},
		containerGroupInfo: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			backgroundColor: "#F6163C",
			width: 320,
			height: 95,
			alignSelf: "center",
			borderRadius: 15,
			marginLeft: 10,
		},
		containerGroupInfoName: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		containerGroupInfoText: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "flex-start",
		},
		groupInfoName: {
			fontFamily: "ChivoBold",
			fontSize: 14,
			color: "white",
		},
		groupInfoText: {
			fontFamily: "ChivoRegular",
			fontSize: 14,
			color: "white",
		},
		groupInfoMembersText: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: "white",
			paddingLeft: 10,
		},
		containerCardsLocals: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
			marginTop: 15,
			position: "relative",
		},
		cardLocals: {
			width: 335,
			height: 400,
			marginBottom: 15,
		},
		cardsImage: {
			width: 335,
			height: 310,
			borderRadius: 20,
		},
		iconsInteractiveLike: {
			position: "absolute",
			right: 15,
			top: 15,
			zIndex: 5,
			width: 27,
			height: 27,
		},
		containerLocalInfo: {
			alignSelf: "center",
			width: 325,
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
		},
		cardLocalScore: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		star_red: {
			width: 15,
			height: 15,
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
		},
		containerCardLocalPrice: {
			display: "flex",
			flexDirection: "row",
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
	});
};
