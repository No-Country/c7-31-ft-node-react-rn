import React from "react";
import { View, Image, TextInput, Dimensions } from "react-native";
import { homeStyles } from "../HomeScreenStyles";
import { iconsArray } from "./categoryIconsArray";
import assets from "../../../../constants/assets";
import { CarouselCustom } from "../../../../components/CarouselCustom/CarouselCustom";

const imagesArray = [
    {
        image: assets.dummy1,
    },
    {
        image: assets.dummy2,
    },
    {
        image: assets.dummy3,
    },
    {
        image: assets.dummy4,
    },
];

const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen - 300;

const CategoriesScreenView = () => {
    return (
        <>
            <View style={homeStyles.container_categorias}>
                <View style={homeStyles.container}>
                    <Image
                        source={assets.logo_version_white}
                        resizeMode='contain'
                        style={homeStyles.logo}
                    />
                    <Image
                        source={assets.message_dark}
                        resizeMode='contain'
                        style={{ width: 38, height: 36, marginLeft: 120 }}
                    />
                    <Image
                        source={assets.bell_dark}
                        resizeMode='contain'
                        style={{ width: 38, height: 38, marginRight: 15 }}
                    />
                </View>
                <View style={homeStyles.SearchBar}>
                    <Image
                        source={assets.icon_finder}
                        resizeMode='contain'
                        style={homeStyles.lupa_search}
                    />
                    <TextInput
                        placeholder='¿Qué quieres hacer?'
                        placeholderTextColor='grey'
                        style={homeStyles.input}
                        /* inlineImageLeft={assets.lupa_search} */
                    />
                    <Image
                        source={assets.filter_icono}
                        resizeMode='contain'
                        style={homeStyles.filter}
                    />
                </View>
                <View style={homeStyles.lista_flex_iconos}>
                    {iconsArray.map((icon) => (
                        <Image
                            key={icon.id}
                            source={icon.image}
                            style={homeStyles.iconos_categorias}
                            resizeMode='contain'
                        />
                    ))}
                </View>
                <View>
                    <CarouselCustom
                        arrayImages={imagesArray}
                        width={widthScreen}
                        height={heightImage + 70}
                        opacity='0'
                        style={{backgroundColor:"white"}}
                    />
                </View>
            </View>
        </>
    );
};

export default CategoriesScreenView;
