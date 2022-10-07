import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
	OtherLoginMethodButton,
	RedButtonsLogin,
} from "../../../components/Buttons/Buttons";
import assets from "../../../constants/assets";
import { loginScreenStyles } from "./LoginScreenStyles";

export const LoginScreen = () => {
	const navigation = useNavigation();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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
				<TextInput
					style={loginScreenStyles.registerInput}
					onChangeText={(e) => setPassword(e)}
					value={password}
					placeholder='Password'
					keyboardType='number-pad'
					secureTextEntry={true}
				/>
				<RedButtonsLogin buttonText={"Continuar"} path={"HomeScreen"} />
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
		</ScrollView>
	);
};
