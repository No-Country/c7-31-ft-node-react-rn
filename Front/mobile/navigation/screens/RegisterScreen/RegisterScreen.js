import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
	ButtonChangeTheme,
	RedButtonsLogin,
} from "../../../components/Buttons/Buttons";
import { Calendar } from "../../../components/Calendar/Calendar";
import { RegisterScreenStyles } from "./RegisterScreenStyles";

export const RegisterScreen = () => {
	const registerScreenStyles = RegisterScreenStyles();
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthDate, setBirthDate] = useState("Fecha de nacimiento");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [genre, setGenre] = useState("");
	const [showCalendar, setShowCalendar] = useState(false);

	const handleSelectedGenre = (value) => {
		setGenre(value);
	};

	return (
		<ScrollView style={registerScreenStyles.containerBig}>
			<View style={registerScreenStyles.containerRegisterScreen}>
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setName(e)}
					value={name}
					placeholder='Nombre'
				/>
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setLastName(e)}
					value={lastName}
					placeholder='Apellido'
				/>
				<TouchableOpacity
					style={registerScreenStyles.inputUserInfo}
					onPress={() => setShowCalendar(true)}>
					<Text style={registerScreenStyles.textInputUserInfo}>
						{birthDate === "Fecha de nacimiento"
							? birthDate
							: new Date(birthDate).toLocaleDateString("en-GB")}
					</Text>
				</TouchableOpacity>
				{showCalendar && (
					<Calendar
						setBirthDate={setBirthDate}
						setShowCalendar={setShowCalendar}
					/>
				)}
				<Text style={registerScreenStyles.textRegisterScreen}>
					Debe ser mayor de 18 años para registrarse, su información
					no sera compartida a otras personas.
				</Text>
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setEmail(e)}
					value={email}
					placeholder='Email'
				/>
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setPassword(e)}
					value={password}
					placeholder='Contaseña'
					keyboardType='number-pad'
					secureTextEntry={true}
				/>
				<View style={registerScreenStyles.containerButtonSelection}>
					<TouchableOpacity
						style={
							genre === "female"
								? registerScreenStyles.buttonSelected
								: registerScreenStyles.buttonSelection
						}
						onPress={() => handleSelectedGenre("female")}>
						<Text
							style={
								genre === "female"
									? registerScreenStyles.textButtonSelected
									: registerScreenStyles.textButtonSelection
							}>
							Mujer
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							genre === "male"
								? registerScreenStyles.buttonSelected
								: registerScreenStyles.buttonSelection
						}
						onPress={() => handleSelectedGenre("male")}>
						<Text
							style={
								genre === "male"
									? registerScreenStyles.textButtonSelected
									: registerScreenStyles.textButtonSelection
							}>
							Hombre
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							genre === "other"
								? registerScreenStyles.buttonSelected
								: registerScreenStyles.buttonSelection
						}
						onPress={() => handleSelectedGenre("other")}>
						<Text
							style={
								genre === "other"
									? registerScreenStyles.textButtonSelected
									: registerScreenStyles.textButtonSelection
							}>
							Otro
						</Text>
					</TouchableOpacity>
				</View>
				<Text style={registerScreenStyles.textRegisterScreen}>
					Seleccionando los acuerdos y continuar, usted acepta los
					Términos de Servicio, Pagos y toma en conocimiento nuestra
					Política de Privacidad.
				</Text>
				<RedButtonsLogin buttonText={"Acepto"} path={"HomeScreen"} />
			</View>
			<ButtonChangeTheme />
		</ScrollView>
	);
};
