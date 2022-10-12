import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
	ButtonChangeTheme,
	OtherLoginMethodButton,
} from "../../../components/Buttons/Buttons";
import { ModalErrorCredentials } from "../../../components/Modals/Modals";
import assets from "../../../constants/assets";
import {
	emailValidation,
	passwordValidation,
} from "../../../helpers/inputValidations";
import { LoginScreenStyles } from "./LoginScreenStyles";

export const LoginScreen = () => {
	const navigation = useNavigation();

	const loginScreenStyles = LoginScreenStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showMessageError, setShowMessageError] = useState(false);
	const [emailValid, setEmailValid] = useState();
	const [passwordValid, setPasswordValid] = useState();
	const [emailEmpty, setEmailEmpty] = useState();
	const [passwordEmpty, setPasswordEmpty] = useState();

	useEffect(() => {
		if (emailValid && passwordValid) {
			navigation.navigate("HomeScreen");
			setShowMessageError(false);
		}
	}, [emailValid, passwordValid]);

	const handleSubmit = () => {
		email === "" ? setEmailEmpty(true) : setEmailEmpty(false);
		password === "" ? setPasswordEmpty(true) : setPasswordEmpty(false);
		emailValidation(email, setEmailValid);
		passwordValidation(password, setPasswordValid);

		if (emailValid && passwordValid) {
			setShowMessageError(false);
		} else {
			setShowMessageError(true);
		}
	};

	return (
		<ScrollView style={loginScreenStyles.containerBig}>
			<View style={loginScreenStyles.containerEmailScreen}>
				<TextInput
					style={loginScreenStyles.registerInput}
					onChangeText={(e) => setEmail(e)}
					value={email}
					keyboardType='email-address'
					placeholder='E-mail'
				/>
				{emailEmpty && (
					<Text style={loginScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{emailValid === false && (
					<Text style={loginScreenStyles.errorMessageText}>
						🛑 Email Invalido
					</Text>
				)}
				<TextInput
					style={loginScreenStyles.registerInput}
					onChangeText={(e) => setPassword(e)}
					value={password}
					placeholder='Password'
					keyboardType='default'
					secureTextEntry={true}
				/>
				{passwordEmpty && (
					<Text style={loginScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{passwordValid === false && (
					<>
						<Text style={loginScreenStyles.errorMessageText}>
							🛑 Debe contener una minúscula , una mayúscula y un
							número.
						</Text>
						<Text style={loginScreenStyles.errorMessageText}>
							🛑 Debe ser mayor a 8 caracteres
						</Text>
					</>
				)}
				{showMessageError && (
					<ModalErrorCredentials
						setShowMessageError={setShowMessageError}
					/>
				)}
				<TouchableOpacity
					style={loginScreenStyles.redButtonLogin}
					key='Continuar'
					onPress={() => handleSubmit()}>
					<Text style={loginScreenStyles.textButtonsLogin}>
						Continuar
					</Text>
				</TouchableOpacity>
				<View style={loginScreenStyles.containerSeparator}>
					<Text style={loginScreenStyles.lineSeparator}></Text>
					<Text style={loginScreenStyles.circleSeparator}></Text>
					<Text style={loginScreenStyles.lineSeparator}></Text>
				</View>
				<View style={loginScreenStyles.containerContinueButtonsWays}>
					<OtherLoginMethodButton
						buttonText={"Crear Cuenta"}
						path={"RegisterScreen"}
						icon={assets.user_dark}
					/>
					<OtherLoginMethodButton
						buttonText={"Continuar con Apple"}
						path={"RegisterScreen"}
						icon={assets.apple}
					/>
					<OtherLoginMethodButton
						buttonText={"Continuar con Google"}
						path={"RegisterScreen"}
						icon={assets.google}
					/>
					<OtherLoginMethodButton
						buttonText={"Continuar con Facebook"}
						path={"RegisterScreen"}
						icon={assets.fb}
					/>
				</View>
			</View>
			<ButtonChangeTheme />
		</ScrollView>
	);
};
