import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const heightScreen = Dimensions.get("window").height - 100;

export const userStyles = StyleSheet.create({
    buttonFindPlaces: {
        backgroundColor: "#F6163C",
        width: 315,
        height: 65,
        alignSelf: "center",
        borderRadius: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    textButtonFindPlaces: {
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        color: "white",
        lineHeight: 65,
    },
    inicia_sesion_texto: {
        fontSize: 15,
        marginLeft: 20,
        fontWeight: "600",
		marginBottom: 12
    },
    star_red: {
        width: 15,
        height: 15,
        marginLeft: 100,
    },
    titulo_descripcion_usuario: {
        fontSize: 24,
    },
    profile_picture: {
        width: 113,
        height: 113,
        marginLeft: 18,
		marginBottom: 14
    },
    profile_card: {
        display: "flex",
        flexDirection: "row",
    },
    descripcion_profile: {
        marginLeft: 11,
        marginTop: 15,
    },
    stayupper: {
		display: "flex",
        flexDirection: "row",

    },
});
