import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import assets from "../../../constants/assets";
import { ListGroupsScreenStyles } from "./ListGroupsScreenStyles";

const arrayGroups = [
	{
		name: "Grupo 126",
		date: "Sábado 27 de Enero - 09:00",
	},
	{
		name: "Grupo 129",
		date: "Domingo 28 de Enero - 17:00",
	},
	{
		name: "Grupo 90",
		date: "Domingo 28 de Enero - 21:00",
	},
	{
		name: "Grupo 85",
		date: "Martes 29 de Enero - 19:00",
	},
	{
		name: "Grupo 79",
		date: "Martes 29 de Enero - 20:00",
	},
	{
		name: "Grupo 100",
		date: "Jueves 31 de Enero - 22:00",
	},
	{
		name: "Grupo 99",
		date: "Viernes 1 de Febrero - 18:00",
	},
	{
		name: "Grupo 98",
		date: "Sábado 27 de Enero - 09:00",
	},
];

export const ListGroupsScreen = () => {
	const listGroupsScreenStyles = ListGroupsScreenStyles();

	const renderGroupInfo = () => {
		return arrayGroups.map((group) => (
			<TouchableOpacity
				key={group.name}
				style={listGroupsScreenStyles.containerGroup}>
				<Image
					source={assets.group_list_icon}
					resizeMode='contain'
					style={listGroupsScreenStyles.iconGroup}
				/>
				<View style={listGroupsScreenStyles.containerGroupInfo}>
					<Text style={listGroupsScreenStyles.groupInfoName}>
						{group.name}
					</Text>
					<Text style={listGroupsScreenStyles.groupInfoDate}>
						{group.date}
					</Text>
				</View>
			</TouchableOpacity>
		));
	};

	return (
		<>
			<ScrollView style={listGroupsScreenStyles.containerBig}>
				<View style={listGroupsScreenStyles.containerListGroupScreen}>
					{renderGroupInfo()}
				</View>

				<ButtonChangeTheme />
			</ScrollView>
			<View style={listGroupsScreenStyles.containerCreateGroup}>
				<TouchableOpacity
					style={listGroupsScreenStyles.buttonCreateGroup}
					// onPress={() => navigation.navigate("Seleccione un grupo")}
				>
					<Text style={listGroupsScreenStyles.buttonCreateGroupText}>
						Crear Grupo
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};
