import React, { useContext, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { ThemeContext } from "../../Context/Theme";
export const CarouselCustom = ({ arrayImages, width, dotsPosition }) => {
	const [index, setIndex] = useState(0);
	const { textTheme, notBackTheme } = useContext(ThemeContext);

	const renderItem = ({ item }) => {
		return (
			<View
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "center",
					height: 365,
				}}>
				<Image
					source={item.image}
					resizeMode='contain'
					PlaceholderContent={<ActivityIndicator color='red' />}
					style={{ width: 220, height: 220 }}
				/>
				<Text
					style={{
						width: 280,
						textAlign: "center",
						color: textTheme,
						fontSize: 28,
					}}>
					{item.text}
				</Text>
			</View>
		);
	};

	return (
		<ScrollView
			style={{
				width,
				height: 370,
				paddingTop: 25,
			}}>
			<Carousel
				layout={"default"}
				data={arrayImages}
				sliderWidth={width}
				itemWidth={width}
				itemHeight={150}
				renderItem={renderItem}
				enableSnap={true}
				onSnapToItem={(e) => setIndex(e)}
			/>
			<Pagination
				dotsLength={arrayImages.length}
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
