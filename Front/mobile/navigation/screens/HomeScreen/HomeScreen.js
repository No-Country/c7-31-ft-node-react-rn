import {
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    View,
    Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CarouselCustomHome } from "../../../components/CarouselCustom/CarouselCustomHome";
import assets from "../../../constants/assets";
import HomeCard from "./HomeCard";
import { homeStyles } from "./HomeScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { userStyles } from "../UserScreen/UserScreenStyles";
import { Card } from "react-native-elements";
import BotonReservas from "./BotonReservas/BotonReservas";
import CarouselHome from "./CarouselHome.js/CarouselHome";

const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen - 300;

export default function Home({ navigation }) {
    return (
        <ScrollView>
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
            <View style={homeStyles.contenedor_input}>
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
            </View>
            {/*  <CarouselCustomHome
                arrayImages={iconsHomeArray}
                width={widthScreen}
                height={heightImage}
                style={{backgroundColor:"white"}}
            /> */}
            <CarouselHome />
            <TouchableOpacity
                style={homeStyles.container_boton_categoria}
                onPress={() => navigation.navigate("Category Screen View")}>
                <Text style={homeStyles.boton_ver_mas_categorias}>Ver más</Text>
            </TouchableOpacity>
            <BotonReservas />
            <View style={homeStyles.container_cards}>
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </View>
        </ScrollView>
    );
}
