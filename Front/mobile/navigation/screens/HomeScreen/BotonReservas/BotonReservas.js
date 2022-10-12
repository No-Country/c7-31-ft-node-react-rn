import React from "react";
import { homeStyles } from "../HomeScreenStyles";
import { Text, Card } from "react-native-elements";
import { TouchableOpacity, View } from "react-native";

const BotonReservas = () => {
    return (
        <View style={homeStyles.contenedor_boton_reservas}>
            <Card.Divider />
            <Text style={homeStyles.actualmente_en}>Actualmente en:</Text>
            <TouchableOpacity
                key={`welcome`}
                style={homeStyles.buttonFindPlaces}>
                <Text
                    style={homeStyles.textButtonFindPlaces}
                    onPress={() => {}}>
                    Grupo 100
                </Text>
                <Text style={homeStyles.textButtonFindPlaces}>
                    Sábado 27 de Enero - 17:00
                </Text>
                <Text style={homeStyles.textButtonFindPlaces}>
                    Falta 1 usuario(s) para confirmar.
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default BotonReservas;
