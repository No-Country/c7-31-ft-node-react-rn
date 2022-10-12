import React, { useContext, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel, { Pagination } from "react-native-snap-carousel";
import assets from "../../constants/assets";
import { ThemeContext } from "../../Context/Theme";
import { LocalStyles } from "../../navigation/screens/LocalScreen/LocalScreenStyles";
export const CarouselLocalScreenReviews = ({ reviewsArray }) => {
	const localStyles = LocalStyles();
	const [index, setIndex] = useState(0);
	const { dark, notBackTheme } = useContext(ThemeContext);

	const renderItem = ({ item }) => {
		return (
			<View style={localStyles.containerReviewCard}>
				<View style={localStyles.containerReviewCardUser}>
					<Image
						source={dark ? assets.user_light : assets.user_dark}
						resizeMode='contain'
						style={localStyles.reviewCardUserAvatar}
					/>
					<View style={localStyles.containerReviewCarUserInfo}>
						<Text style={localStyles.reviewCardUserName}>
							{item.name}
						</Text>
						<Text style={localStyles.reviewCardUserTimestamp}>
							{item.date}
						</Text>
					</View>
				</View>
				<Text style={localStyles.reviewCardUserDescription}>
					{item.description}
				</Text>
			</View>
		);
	};

	return (
		<ScrollView
			style={{
				width: 320,
				height: 320,
				paddingTop: 25,
			}}>
			<Carousel
				layout={"default"}
				data={reviewsArray}
				sliderWidth={320}
				itemWidth={320}
				itemHeight={150}
				renderItem={renderItem}
				enableSnap={true}
				onSnapToItem={(e) => setIndex(e)}
			/>
			<Pagination
				dotsLength={reviewsArray.length}
				activeDotIndex={index}
				containerStyle={{
					zIndex: 3,
					position: "absolute",
					bottom: 0,
					width: "100%",
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 0,
					backgroundColor: notBackTheme,
				}}
				inactiveDotStyle={
					{
						// Define styles for inactive dots here
					}
				}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
			/>
		</ScrollView>
	);
};
