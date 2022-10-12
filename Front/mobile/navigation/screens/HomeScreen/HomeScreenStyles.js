import { StyleSheet, Dimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";
import { useContext } from "react";
const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen;

export const HomeStyles = () => {
    const { backTheme, textTheme } = useContext(ThemeContext);

    return StyleSheet.create({
        container: {
            backgroundColor: backTheme,
            alignItems: "baseline",
            justifyContent: "space-around",
            display: "flex",
            flexDirection: "row",
            paddingTop: 60,
        },
        input: {
            height: 45,
            marginTop: 12,
            marginBottom: 12,
            borderWidth: 1,
            padding: 10,
            overflow: "hidden",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            width: 330,
            borderBottomWidth: 0,
            borderBottomWidth: 0,
            borderTopWidth: 0,
            borderTopWidth: 0,
        },
        image: {
            marginBottom: 10,
            padding: 10,
            height: 355,
            width: 375,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
        },
        logo: {
            width: 150,
            height: 45,
            marginLeft: 10,
        },
        carousel: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            overflow: "hidden",
            marginLeft: 12,
            backgroundColor: backTheme,
        },
        SearchBar: {
            flexDirection: "row",
            backgroundColor: backTheme,
        },
        iconos_categorias: {
            width: 69,
            height: 92,
            marginRight: 15,
            backgroundColor: backTheme,
        },
        lupa_search: {
            width: 37,
            height: 37,
            marginRight: 15,
            borderRadius: 0.5,
            marginTop: 15,
            marginLeft: 13,
        },
        filter: {
            width: 37,
            height: 37,
            marginLeft: 335,
            marginTop: 15,
            position: "absolute",
            justifyContent: "flex-end",
        },
        corazon_en_card: {
            width: 37,
            height: 37,
            marginRight: 12,
            marginTop: 15,
            position: "relative",
            justifyContent: "flex-end",
            zIndex: 10,
            alignSelf: "flex-end",
        },
        star_red: {
            width: 15,
            height: 15,
            marginLeft: 100,
        },
        cards: {
            boxShadow: "none",
            width: widthScreen - 25,
            marginLeft: 18,
            marginTop: 17,
        },
        nombre_cancha: {
            flexDirection: "row",
        },
        titulo_descripcion_cancha: {
            fontWeight: "600",
            fontSize: 16,
            marginRight: 10,
			color: textTheme,

        },
        subtitulo_descripcion_cancha: {
            fontWeight: "600",
            fontSize: 14,
            marginRight: 10,
			color: textTheme,
        },
        boton_ver_mas_categorias: {
            color: "red",
            display: "flex",
            //alignItems:"flex-end",
            alignSelf: "flex-end",
            fontSize: 12,
            marginRight: 18,
            marginTop: 4,
            marginBottom: 2,
            //justifyContent:"flex-end",
            //marginLeft:250,
            backgroundColor: backTheme,
        },
        lista_flex_iconos: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            width: widthScreen,
            height: heightImage,
            justifyContent: "space-evenly",
            padding: 18,
        },
        container_cards: {
            backgroundColor: backTheme,
        },
        container_boton_categoria: {
            backgroundColor: backTheme,
        },
        contenedor_input: {
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            borderWidth: "thin",
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,
        },
        buttonFindPlaces: {
            backgroundColor: "#F6163C",
            width: 375,
            height: 95,
            alignSelf: "center",
            borderRadius: 15,
            marginTop: 15,
            marginBottom: 15,
        },
        textButtonFindPlaces: {
            fontSize: 20,
            fontWeight: "400",
            textAlign: "center",
            color: backTheme,
            lineHeight: 30,
        },
        contenedor_boton_reservas: {
            backgroundColor: backTheme,
        },
        actualmente_en: {
            marginLeft: 22,
            fontSize: 16,
            fontWeight: "700",
        },
        container_categorias: {
            backgroundColor: backTheme,
        },
    });
};
