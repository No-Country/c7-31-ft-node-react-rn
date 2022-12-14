import React, { useContext } from "react";
import { Image, ScrollView, useWindowDimensions, View } from "react-native";
import { RedButtonsLogin } from "../../../components/Buttons/Buttons";
import { CarouselWelcomeScreen } from "../../../components/CarouselWelcomeScreen/CarouselWelcomeScreen";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { WelcomeScreenStyles } from "./WelcomeScreenStyles";

export const WelcomeScreen = () => {
	const welcomeStyles = WelcomeScreenStyles();
	const { width } = useWindowDimensions();
	const { dark } = useContext(ThemeContext);
	const arrayImages = [
		{
			image: dark ? assets.welcome1_light : assets.welcome1_dark,
			text: "Busca lugares donde quieras hacer una actividad",
		},
		{
			image: dark ? assets.welcome2_light : assets.welcome2_dark,
			text: "Reserva y confirma cuando el grupo este completo",
		},
		{
			image: dark ? assets.welcome3_light : assets.welcome3_dark,
			text: "Realiza actividades sin problemas",
		},
		{
			image: dark ? assets.welcome4_light : assets.welcome4_dark,
			text: "Conoce gente y disfruta de tus aficiones",
		},
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
				<View style={welcomeStyles.containerCarousel}>
					<CarouselWelcomeScreen
						arrayImages={arrayImages}
						width={width}
					/>
				</View>
				<RedButtonsLogin
					buttonText={"Encontrar Lugares"}
					path={"LoginScreen"}
				/>
			</View>
		</ScrollView>
	);
};
