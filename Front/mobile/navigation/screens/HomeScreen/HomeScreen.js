import {
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    View,
	Text
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CarouselCustom } from "../../../components/CarouselCustom/CarouselCustom";
import assets from "../../../constants/assets";
import HomeCard from "./HomeCard";
import { homeStyles } from "./HomeScreenStyles";
import { useNavigation } from "@react-navigation/native";


const iconsHomeArray = [
    {
        image: assets.juegos_de_mesa_icono,
    },
    {
        image: assets.karting_icono,
    },
    {
        image: assets.pubs_icono,
    },
    {
        image: assets.ping_pong_icono,
    },
];


const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen - 300;

export default function Home({navigation}) {
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
            <CarouselCustom
                arrayImages={iconsHomeArray}
                width={widthScreen}
                height={heightImage}
            />
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
                            source={assets.pubs_icono}
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
			<TouchableOpacity  onPress={() => navigation.navigate(
                'Category Screen View'
            )}><Text style={homeStyles.boton_ver_mas_categorias}>Ver más</Text></TouchableOpacity>
            <View>
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
