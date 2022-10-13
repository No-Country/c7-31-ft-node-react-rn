import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const LocalStyles = () => {
	const { textTheme, notTextTheme, backTheme, notBackTheme } =
		useContext(ThemeContext);
	const heightHeader = useHeaderHeight();
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			marginTop: heightHeader,
		},
		containerLineSeparator: {
			alignSelf: "center",
			width: "95%",
			height: 2,
			backgroundColor: "#A6A6A6",
			paddingLeft: 10,
			paddingRight: 10,
			marginTop: 10,
			marginBottom: 10,
		},
		containerImageAndIcons: {
			width: "100%",
			height: 245,
			position: "relative",
			padding: 0,
			margin: 0,
			marginTop: 10,
		},
		containerIconsInteractive: {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-end",
			paddingLeft: 15,
			paddingRight: 30,
			position: "absolute",
			zIndex: 2,
			top: 20,
		},
		containerIconsInteractiveGroup: {
			width: 65,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
		},
		iconsInteractiveBack: {
			width: 27,
			height: 27,
		},
		iconsInteractiveShare: {
			width: 27,
			height: 27,
		},
		iconsInteractiveLike: {
			width: 27,
			height: 27,
		},
		imageSlider: {
			width: "100%",
			minHeight: 240,
		},
		containerLocalInfo: {
			width: "100%",
			paddingLeft: 10,
		},
		containerLocalInfoTitle: {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		localInfoTitle: {
			fontWeight: "400",
			fontSize: 36,
			color: textTheme,
		},
		localInfoDistance: {
			fontWeight: "400",
			fontSize: 20,
			paddingTop: 10,
			color: textTheme,
		},
		localInfoActivity: {
			fontWeight: "400",
			fontSize: 16,
			marginTop: 12,
			color: textTheme,
		},
		containerInfoReviewAndPrice: {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "flex-start",
			alignItems: "center",
			marginTop: 12,
		},
		imageInfoReview: {
			width: 13,
			height: 13,
		},
		infoReviewAndPrice: {
			paddingLeft: 5,
			fontSize: 16,
			fontWeight: "600",
			color: textTheme,
		},
		infoReviewAndPriceHour: {
			paddingLeft: 5,
			fontWeight: "100",
			color: "#A6A6A6",
		},
		descriptionContainer: {
			paddingLeft: 12,
			marginTop: 12,
		},
		descriptionTitle: {
			fontWeight: "400",
			fontSize: 18,
			color: textTheme,
		},
		descriptionParagraph: {
			fontWeight: "400",
			fontSize: 16,
			lineHeight: 20,
			textAlign: "justify",
			paddingRight: 17,
			marginTop: 5,
			color: textTheme,
		},
		containerServices: {
			paddingLeft: 10,
			display: "flex",
			flexDirection: "column",
			flexWrap: "wrap",
			justifyContent: "flex-start",
		},
		servicesTitle: {
			fontSize: 20,
			fontWeight: "400",
			color: textTheme,
		},
		containerServicesOffered: {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
		},
		servicesOffered: {
			width: "49%",
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginTop: 10,
		},
		servicesOfferedIcons: {
			width: 30,
			height: 25,
		},
		servicesOfferedName: {
			width: 110,
			paddingLeft: 10,
			color: textTheme,
		},
		locationContainer: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
		},
		locationTitle: {
			fontSize: 20,
			fontWeight: "400",
			paddingBottom: 10,
			paddingLeft: 10,
			color: textTheme,
		},
		locationImage: { width: "100%", height: 240 },
		locationAdress: {
			paddingLeft: 10,
			fontSize: 16,
			fontWeight: "400",
			marginTop: 10,
			color: textTheme,
		},
		scheduleContainer: {
			display: "flex",
			flexDirection: "column",
			paddingLeft: 10,
		},
		scheduleTitle: {
			fontSize: 20,
			fontWeight: "400",
			marginBottom: 10,
			color: textTheme,
		},
		containerScheduleByDay: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			paddingRight: 10,
			paddingTop: 5,
		},
		containerScheduleDay: {
			fontSize: 16,
			fontWeight: "400",
			color: textTheme,
		},
		containerScheduleTime: {
			fontSize: 16,
			fontWeight: "400",
			color: textTheme,
		},
		containerCommunity: {
			width: "100%",
			minHeight: 300,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			paddingLeft: 14,
			paddingTop: 15,
			backgroundColor: notBackTheme,
			marginTop: 10,
		},
		containerCommuinityTitle: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		communityTitleText: {
			fontSize: 25,
			fontWeight: "400",
			color: notTextTheme,
		},
		comunnityTitleLogo: {
			width: 142,
			marginLeft: 4,
			marginRight: 2,
		},
		communityDescription: {
			minWidth: 320,
			maxWidth: 370,
			fontSize: 16,
			fontWeight: "400",
			letterSpacing: 0.6,
			color: "#ffffff",
			paddingTop: 15,
			color: notTextTheme,
		},
		containerCommunityGroups: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		communityGroupTitle: {
			fontSize: 20,
			fontWeight: "800",
			color: "#ffffff",
			paddingTop: 15,
			color: notTextTheme,
		},
		containerCommunityGroupsLives: {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			paddingTop: 15,
		},
		communityGroupListAvatars: {
			minWidth: 50,
			display: "flex",
			flexDirection: "row",
		},
		communityGroupImageAvatar: {
			width: 32,
		},
		containerCommunityGroupsLivesInfo: {
			display: "flex",
			flexDirection: "column",
			paddingLeft: 5,
		},
		communityGroupNameGroup: {
			fontSize: 14,
			fontWeight: "400",
			color: "#ffffff",
			color: notTextTheme,
		},
		communityGroupDetailGroup: {
			fontSize: 14,
			fontWeight: "400",
			color: "#ffffff",
			color: notTextTheme,
		},
		communityFooter: {
			fontSize: 16,
			fontWeight: "400",
			color: "#ffffff",
			paddingTop: 20,
			color: notTextTheme,
		},
		containerReviews: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			paddingLeft: 14,
			paddingRight: 14,
			paddingBottom: 20,
		},
		containerReviewsTitle: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginTop: 10,
		},
		reviewTitleIcon: {
			width: 13,
			marginRight: 5,
		},
		reviewTitleText: {
			fontSize: 36,
			fontWeight: "400",
			color: textTheme,
		},
		containerReviewTypes: {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "flex-start",
			alignItems: "center",
			marginTop: 10,
		},
		conainerReviewEachType: {
			width: "49%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			marginTop: 5,
		},
		reviewTypeName: {
			fontSize: 15,
			fontWeight: "400",
			textTransform: "capitalize",
			color: textTheme,
		},
		containerReviewTypeScore: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "flex-end",
			paddingRight: 10,
		},
		reviewTypeLine: {
			width: 100,
			height: 2,
			backgroundColor: notBackTheme,
			alignSelf: "center",
			marginRight: 3,
			marginTop: 5,
		},
		reviewTypeValue: {
			fontSize: 16,
			fontWeight: "400",
			color: textTheme,
		},
		containerReviewCard: {
			width: 320,
			marginTop: 30,
			height: 184,
			borderWidth: 1,
			borderRadius: 10,
			borderColor: notBackTheme,
			paddingTop: 15,
			paddingLeft: 10,
			paddingRight: 10,
		},
		containerReviewCardUser: {
			display: "flex",
			flexDirection: "row",
		},
		reviewCardUserAvatar: {
			width: 32,
			height: 32,
			marginRight: 7,
		},
		containerReviewCarUserInfo: {
			display: "flex",
			flexDirection: "column",
		},
		reviewCardUserName: {
			fontSize: 14,
			fontWeight: "900",
			color: textTheme,
		},
		reviewCardUserTimestamp: {
			fontSize: 12,
			color: textTheme,
		},
		reviewCardUserDescription: {
			paddingTop: 16,
			textAlign: "justify",
			fontSize: 16,
			fontWeight: "400",
			color: textTheme,
		},
		containerMakeReservation: {
			height: 70,
			backgroundColor: notBackTheme,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-around",
			alignItems: "center",
			position: "absolute",
			bottom: 0,
			left: 0,
			right: 0,
			borderBottomColor: backTheme,
			borderBottomWidth: 1,
			zIndex: 10,
		},
		containerMakeReservationInfo: {
			width: 180,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		makeReservationInfoPrice: {
			width: 125,
			color: notTextTheme,
			fontWeight: "900",
			fontSize: 18,
			textAlign: "left",
		},
		makeReservationInfoPriceHour: {
			textAlign: "left",
			color: notTextTheme,
			fontWeight: "600",
		},
		makeReservationInfoText: {
			width: 125,
			color: notTextTheme,
			fontSize: 14,
			textAlign: "left",
		},
		containerMakeReservationButton: {
			width: 180,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		makeReservationButton: {
			width: 136,
			height: 44,
			borderRadius: 10,
			backgroundColor: "#F6163C",
		},
		makeReservationButtonText: {
			color: "white",
			textAlign: "center",
			lineHeight: 44,
			fontSize: 20,
		},
	});
};
