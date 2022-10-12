import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import assets from "../../../../constants/assets";
import { homeStyles } from "../HomeScreenStyles";

const CarouselHome = () => {
    return (
        <View style={homeStyles.carousel}>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={assets.Soccer_icono}
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={assets.karting_icono}
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={assets.Gym_icono}
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={assets.ping_pong_icono}
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={assets.kickboxing_icono}
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CarouselHome;
