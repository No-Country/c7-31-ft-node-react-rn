import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { userStyles } from "./UserScreenStyles";
import { Card, ListItem, Icon } from "react-native-elements";
import assets from "../../../constants/assets";

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
    {
        title: "Cerrar sesión",
        icon: "logout",
    },
];

export default function UserScreenLogged() {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "left",
                        marginTop: "20%",
                        marginLeft: 20,
                    }}>
                    Perfil
                </Text>
            </View>
            <Card.Divider />
           
            <View style={userStyles.profile_card}>
                <Card.Image
                    style={userStyles.profile_picture}
                    source={assets.profile_picture}
                />
                <View style={userStyles.descripcion_profile}>
                    <View>
                        <Text style={userStyles.titulo_descripcion_usuario}>
                            John Doe
                        </Text>
                    </View>
                    <View style={userStyles.stayupper}>
                        <Image
                            source={assets.logo_dark}
                            style={{
                                width: 80,
                                height: 13,
                                marginTop: 3,
                                marginRight: 3,
                            }}
                        />
                        <Image source={assets.bolita_verde} />
                        <Text style={{fontSize:15}}>Siempre disponible</Text>
                    </View>

                    <Text
                        style={userStyles.titulo_descripcion_usuario}
                        onPress={() => {
                            console.log("hola");
                        }}>
                        En grupo 100 - Futbol
                    </Text>
                </View>
            </View>

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

            <TouchableOpacity
                key={`welcome`}
                style={userStyles.buttonFindPlaces}>
                <Text
                    style={userStyles.textButtonFindPlaces}
                    onPress={() => {}}>
                    Iniciar sesión
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
