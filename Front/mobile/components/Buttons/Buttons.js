import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../../Context/Theme";
import { ButtonsStyles } from "./ButtonsStyles";

export const RedButtonsLogin = ({ buttonText, path }) => {
	const buttonsStyles = ButtonsStyles();
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={buttonsStyles.redButtonLogin}
			key={`${buttonText}`}
			onPress={() => navigation.navigate(path)}>
			<Text style={buttonsStyles.textButtonsLogin}>{buttonText}</Text>
		</TouchableOpacity>
	);
};

export const OtherLoginMethodButton = ({ buttonText, path, icon }) => {
	const buttonsStyles = ButtonsStyles();
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={buttonsStyles.buttonRegisterOtherWays}
			onPress={() => navigation.navigate(path)}>
			<Image
				style={buttonsStyles.imageRegisterOtherWays}
				source={icon}
				resizeMode='contain'
			/>
			<Text style={buttonsStyles.textRegisterOtherWays}>
				{buttonText}
			</Text>
		</TouchableOpacity>
	);
};

export const ButtonChangeTheme = () => {
	const { changeTheme } = useContext(ThemeContext);
	const buttonsStyles = ButtonsStyles();

	return (
		<TouchableOpacity
			style={buttonsStyles.buttonChangeTheme}
			onPress={() => changeTheme()}>
			<Text style={buttonsStyles.textChangeTheme}></Text>
		</TouchableOpacity>
	);
};
