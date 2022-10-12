import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { userStyles } from "./UserScreenStyles";
import { Card, ListItem, Icon } from "react-native-elements";

const list = [
    {
        title: "Ajustes",
        icon: "settings",
    },
    {
        title: "Ayuda",
        icon: "help",
    },
    {
        title: "Terminos de Servicio",
        icon: "info",
    },
    {
        title: "Políticas de privacidad",
        icon: "privacy-tip",
    },
];

export default function UserScreen() {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "left",
                        marginTop: "20%",
                        marginLeft: 18,
                        height: 24
                    }}>
                    Perfil
                </Text>
            </View>
            <Card.Divider />
            <Text style={userStyles.inicia_sesion_texto}>
                Inicia sesión para ver tu perfil
            </Text>
            <TouchableOpacity
                key={`welcome`}
                style={userStyles.buttonFindPlaces}>
                <Text
                    style={userStyles.textButtonFindPlaces}
                    onPress={() => {}}>
                    Iniciar sesión
                </Text>
            </TouchableOpacity>
            <Card.Divider />
            <View>
                {list.map((item, i) => (
                    <ListItem key={i}>
                        <Icon name={item.icon} />
                        <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))}
            </View>
        </ScrollView>
    );
}
