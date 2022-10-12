import { useContext, useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import CountryPicker, { DARK_THEME } from "react-native-country-picker-modal";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import { Calendar } from "../../../components/Calendar/Calendar";
import { ThemeContext } from "../../../Context/Theme";
import {
	emailValidation,
	getAge,
	nameLastNameValidation,
	passwordValidation,
} from "../../../helpers/inputValidations";
import { RegisterScreenStyles } from "./RegisterScreenStyles";

export const RegisterScreen = () => {
	const registerScreenStyles = RegisterScreenStyles();
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthDate, setBirthDate] = useState("Fecha de nacimiento");
	const [country, setCountry] = useState("Pais");

	const { dark } = useContext(ThemeContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [genre, setGenre] = useState("");
	const [showCalendar, setShowCalendar] = useState(false);
	const [showCountry, setShowCountry] = useState(false);

	const [nameValid, setNameValid] = useState();
	const [lastNameValid, setLastNameValid] = useState();
	const [birthdateValid, setBirthdateValid] = useState();
	const [birthdateLess18, setBirthdateLess18] = useState(false);

	const [emailValid, setEmailValid] = useState();
	const [genreValid, setGenreValid] = useState();
	const [passwordValid, setPasswordValid] = useState();
	const [nameEmpty, setNameEmpty] = useState();
	const [lastNameEmpty, setLastNameEmpty] = useState();
	const [emailEmpty, setEmailEmpty] = useState();
	const [passwordEmpty, setPasswordEmpty] = useState();
	const [genreEmpty, setGenreEmpty] = useState();
	const [countryEmpty, setCountryEmpty] = useState();

	const validateEmptys = () => {
		name === "" ? setNameEmpty(true) : setNameEmpty(false);
		lastName === "" ? setLastNameEmpty(true) : setLastNameEmpty(false);
		birthDate === "Fecha de nacimiento"
			? setBirthdateValid(false)
			: setBirthdateValid(true);
		genre === "" ? setGenreEmpty(true) : setGenreEmpty(false);
		email === "" ? setEmailEmpty(true) : setEmailEmpty(false);
		email === "" ? setEmailEmpty(true) : setEmailEmpty(false);
		password === "" ? setPasswordEmpty(true) : setPasswordEmpty(false);
		country === "Pais" ? setCountryEmpty(false) : setCountryEmpty(true);
		getAge(birthDate) > 18
			? setBirthdateLess18(false)
			: setBirthdateLess18(true);
	};

	const handleSubmit = () => {
		validateEmptys();
		nameLastNameValidation(name, setNameValid);
		nameLastNameValidation(lastName, setLastNameValid);
		emailValidation(email, setEmailValid);
		passwordValidation(password, setPasswordValid);

		if (
			nameValid &&
			lastNameValid &&
			birthdateValid &&
			emailValid &&
			genreValid &&
			countryEmpty
		) {
			const user = {
				name,
				lastName,
				birthDate,
				email,
				password,
				genre,
				country,
			};
		}
	};

	const handleSelectedGenre = (value) => {
		setGenre(value);
		setGenreValid(true);
	};

	const selectCountry = (country) => {
		setCountry(country);
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
				{nameEmpty && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{nameValid === false && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Solo debe contener letras
					</Text>
				)}
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setLastName(e)}
					value={lastName}
					placeholder='Apellido'
				/>
				{lastNameEmpty && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{lastNameValid === false && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Solo debe contener letras
					</Text>
				)}
				<TouchableOpacity
					style={registerScreenStyles.inputUserInfo}
					onPress={() => setShowCalendar(true)}>
					<Text style={registerScreenStyles.textInputUserInfo}>
						{birthDate === "Fecha de nacimiento"
							? birthDate
							: new Date(birthDate).toLocaleDateString("es-EU")}
					</Text>
				</TouchableOpacity>
				{showCalendar && (
					<Calendar
						setBirthDate={setBirthDate}
						setShowCalendar={setShowCalendar}
					/>
				)}
				{birthdateValid === false && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{birthdateLess18 === true && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Debe ser mayor de 18 años para registrarse
					</Text>
				)}
				<TouchableOpacity
					style={registerScreenStyles.inputUserInfo}
					onPress={() => setShowCountry(true)}>
					<Text style={registerScreenStyles.textInputUserInfo}>
						{country}
					</Text>
				</TouchableOpacity>
				{showCountry && (
					<CountryPicker
						{...{
							withFlag: true,
							region: "Americas",
							subregion: "South America",
						}}
						visible
						theme={dark ? DARK_THEME : ""}
						onSelect={(e) => selectCountry(e.name)}
						onClose={() => setShowCountry(false)}
					/>
				)}
				{countryEmpty === false && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setEmail(e)}
					value={email}
					placeholder='Email'
				/>
				{emailEmpty && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{emailValid === false && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Email Invalido
					</Text>
				)}
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setPassword(e)}
					value={password}
					placeholder='Contaseña'
					keyboardType='default'
					secureTextEntry={true}
				/>
				{passwordEmpty && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{passwordValid && (
					<>
						<Text style={registerScreenStyles.errorMessageText}>
							🛑 Debe contener una minúscula , una mayúscula y un
							número.
						</Text>
						<Text style={registerScreenStyles.errorMessageText}>
							🛑 Debe ser mayor a 8 caracteres
						</Text>
					</>
				)}
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
				{genreEmpty && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Debe seleccionar uno
					</Text>
				)}
				<Text style={registerScreenStyles.textRegisterScreen}>
					Seleccionando los acuerdos y continuar, usted acepta los
					Términos de Servicio, Pagos y toma en conocimiento nuestra
					Política de Privacidad.
				</Text>
				<TouchableOpacity
					style={registerScreenStyles.redButtonLogin}
					key={`Acepto`}
					onPress={
						() => handleSubmit()
						// setShowMessageError
						// 	? setShowMessageError(true)
						// 	: navigation.navigate(path)
					}>
					<Text style={registerScreenStyles.textButtonsLogin}>
						Acepto
					</Text>
				</TouchableOpacity>
			</View>
			<ButtonChangeTheme />
		</ScrollView>
	);
};
