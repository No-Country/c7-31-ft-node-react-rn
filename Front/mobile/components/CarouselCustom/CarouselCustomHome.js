import React, { useState } from "react";
import { ActivityIndicator, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel, { Pagination } from "react-native-snap-carousel";
import assets from "../../constants/assets";
const BASE_URI = "https://source.unsplash.com/random";
export const CarouselCustomHome = ({
    arrayImages,
    width,
    height,
    dotsPosition,
}) => {
    const [index, setIndex] = useState(0);

    const renderItem = ({ item, index }) => {
        return (
            <>
                <Image
                    source={item.image}
                    resizeMode='contain'
                    PlaceholderContent={<ActivityIndicator color='blue' />}
                    style={{ width, height, backgroundColor: "white" }}
                />
                <Image
                    source={item.image}
                    resizeMode='contain'
                    PlaceholderContent={<ActivityIndicator color='blue' />}
                    style={{ width, height, backgroundColor: "white" }}
                />
                <Image
                    source={item.image}
                    resizeMode='contain'
                    PlaceholderContent={<ActivityIndicator color='blue' />}
                    style={{ width, height, backgroundColor: "white" }}
                />
                <Image
                    source={item.image}
                    resizeMode='contain'
                    PlaceholderContent={<ActivityIndicator color='blue' />}
                    style={{ width, height, backgroundColor: "white" }}
                />
            </>
        );
    };

    return (
        <ScrollView
            style={{
                width,
                height,
            }}>
            <Carousel
                layout={"default"}
                data={arrayImages}
                sliderWidth={width}
                itemWidth={width}
                itemHeight={height}
                renderItem={renderItem}
                enableSnap={true}
                onSnapToItem={(e) => setIndex(e)}
                show={3}
            />
            <Pagination
                dotsLength={arrayImages.length}
                activeDotIndex={index}
                containerStyle={{
                    zIndex: 3,
                    position: "absolute",
                    bottom: dotsPosition,
                    width: "100%",
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.92)",
                }}
                inactiveDotStyle={
                    {
                        // Define styles for inactive dots here
                    }
                }
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({});
