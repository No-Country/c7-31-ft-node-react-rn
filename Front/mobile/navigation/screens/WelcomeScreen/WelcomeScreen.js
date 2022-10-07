import React, { useContext } from "react";
import {
	Button,
	Image,
	Text,
	TouchableOpacity,
	useWindowDimensions,
	View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
	ButtonChangeTheme,
	RedButtonsLogin,
} from "../../../components/Buttons/Buttons";
import { CarouselCustom } from "../../../components/CarouselCustom/CarouselCustom";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { WelcomeScreenStyles } from "./WelcomeScreenStyles";

export const WelcomeScreen = () => {
	const welcomeStyles = WelcomeScreenStyles();
	const { width } = useWindowDimensions();
	const { dark } = useContext(ThemeContext);
	const arrayImages = [
		{ image: dark ? assets.welcome1_light : assets.welcome1_dark },
		{ image: dark ? assets.welcome2_light : assets.welcome2_dark },
		{ image: dark ? assets.welcome3_light : assets.welcome3_dark },
		{ image: dark ? assets.welcome4_light : assets.welcome4_dark },
	];

	return (
		<ScrollView style={welcomeStyles.containerBig}>
			<View style={welcomeStyles.containerScreen}>
				<Image
					source={
						dark
							? assets.principal_logo_light
							: assets.principal_logo_dark
					}
					resizeMode='contain'
					style={welcomeStyles.logoIcon}
				/>
				<CarouselCustom
					arrayImages={arrayImages}
					width={width}
					height={width}
					dotsPosition={-30}
				/>
				<RedButtonsLogin
					buttonText={"Encontrar Lugares"}
					path={"LoginScreen"}
				/>
			</View>
			<ButtonChangeTheme />
		</ScrollView>
	);
};
