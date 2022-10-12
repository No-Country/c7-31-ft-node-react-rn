import React, { useState } from "react";
import { homeStyles } from "./HomeScreenStyles";
import {
    Button,
    Card,
    Icon,
    ListItem,
    SearchBar,
    Alert,
} from "react-native-elements";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
} from "react-native";
import assets from "../../../constants/assets";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeCard = () => {
    const [corazonOn, setCorazonOn] = useState(true);
    return (
        <View style={homeStyles.cards}>
         {/*    <TouchableOpacity
                onPress={() => {
                    setCorazonOn(!corazonOn);
                }}>
                {corazonOn ? (
                    <Image
                        source={assets.like}
                        resizeMode='contain'
                        style={homeStyles.corazon_en_card}
                    />
                ) : (
                    <Image
                        source={assets.favorite_red_filled}
                        resizeMode='contain'
                        style={homeStyles.corazon_en_card}
                    />
                )}
            </TouchableOpacity> */}

            <Card.Image style={homeStyles.image} source={assets.dummy1} />

            <View style={homeStyles.nombre_cancha}>
                <Text style={homeStyles.titulo_descripcion_cancha}>
                    El rincon · Cancha de Fútbol
                </Text>
                <Card.Image
                    source={assets.star_red}
                    style={homeStyles.star_red}
                />
                <Text style={homeStyles.titulo_descripcion_cancha}>4.0</Text>
            </View>

            <Text>A 600 m · Grupos de 10</Text>
            <Text
                style={homeStyles.titulo_descripcion_cancha}
                onPress={() => {
                    console.log("hola");
                }}>
                10 USD hora
            </Text>
        </View>
    );
};

export default HomeCard;
