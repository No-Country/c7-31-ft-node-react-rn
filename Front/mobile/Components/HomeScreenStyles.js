import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
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
        padding: 5,
        height: 265,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    logo: {
        width: 150,
        height: 40,
        marginLeft: 10,
    },
    carousel: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        overflow: "hidden",
        marginLeft: 12,
    },
    SearchBar: {
        flexDirection: "row",
    },
    iconos_categorias: {
        width: 69,
        height: 92,
        marginRight: 15,
    },
    lupa_search: {
        width: 38,
        height: 38,
        marginRight: 15,
        borderRadius: 0.5,
        marginTop: 13,
        marginLeft: 10,
    },
    filter: {
        width: 37,
        height: 37,
        marginLeft: 335,
        marginTop: 15,
        position: "absolute",
        justifyContent: "flex-end",
    },
    star_red: {
        width: 15,
        height: 15,
        marginLeft:100
    },
    cards: {
        boxShadow: "none",
    },
    nombre_cancha: {
        flexDirection:"row"
    },
    titulo_descripcion_cancha: {
        fontWeight:"600",
        fontSize:16,
    }
});
