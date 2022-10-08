import React, { useContext } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CarouselCustom } from "../../../components/CarouselCustom/CarouselCustom";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { LocalStyles } from "./LocalScreenStyles";

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
const heightImage = widthScreen - 121;

export const LocalScreen = () => {
	const { dark } = useContext(ThemeContext);
	const localStyles = LocalStyles();
	return (
		<ScrollView style={localStyles.containerBig}>
			<View style={localStyles.containerImageAndIcons}>
				<View style={localStyles.containerIconsInteractive}>
					<View style={localStyles.containerIconsInteractiveGroup}>
						<TouchableOpacity onPress={() => console.log("HOLA")}>
							<Image
								source={assets.share}
								resizeMode='contain'
								style={localStyles.iconsInteractiveShare}
							/>
						</TouchableOpacity>
						<Image
							source={assets.like}
							resizeMode='contain'
							style={localStyles.iconsInteractiveLike}
						/>
					</View>
				</View>
				<CarouselCustom
					arrayImages={imagesArray}
					width={widthScreen}
					height={heightImage}
					dotsPosition={0}
				/>
			</View>
			<View style={localStyles.containerLocalInfo}>
				<View style={localStyles.containerLocalInfoTitle}>
					<Text style={localStyles.localInfoTitle}>El rincon </Text>
					<Text style={localStyles.localInfoDistance}>102 m2</Text>
				</View>
				<Text style={localStyles.localInfoActivity}>
					Cancha de futbol
				</Text>
				<View style={localStyles.containerInfoReviewAndPrice}>
					<Image
						source={assets.star_red}
						resizeMode='contain'
						style={localStyles.imageInfoReview}
					/>
					<Text style={localStyles.infoReviewAndPrice}>
						4.0 - 20 opiniones - 10 USD
					</Text>
					<Text style={localStyles.infoReviewAndPriceHour}>hora</Text>
				</View>
			</View>

			<View style={localStyles.descriptionContainer}>
				<Text style={localStyles.descriptionTitle}>Descripción</Text>
				<Text style={localStyles.descriptionParagraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
					ullamcorper neque ut diam vestibulum cursus. Sed congue,
					massa non tempus venenatis, turpis felis vulputate sem, in
					mollis ante turpis in risus. Interdum et malesuada fames ac
					ante ipsum primis in faucibus. Quisque ut rutrum quam.
				</Text>
			</View>

			<View style={localStyles.containerLineSeparator}></View>

			<View style={localStyles.containerServices}>
				<Text style={localStyles.servicesTitle}>Servicios</Text>
				<View style={localStyles.containerServicesOffered}>
					<View style={localStyles.servicesOffered}>
						<Image
							source={
								dark
									? assets.bathdroom_light
									: assets.bathdroom_dark
							}
							resizeMode='contain'
							style={localStyles.servicesOfferedIcons}
						/>
						<Text style={localStyles.servicesOfferedName}>
							Baños
						</Text>
					</View>
					<View style={localStyles.servicesOffered}>
						<Image
							source={
								dark
									? assets.parking_light
									: assets.parking_dark
							}
							resizeMode='contain'
							style={localStyles.servicesOfferedIcons}
						/>
						<Text style={localStyles.servicesOfferedName}>
							Estacionamiento
						</Text>
					</View>
					<View style={localStyles.servicesOffered}>
						<Image
							source={
								dark ? assets.shower_light : assets.shower_dark
							}
							resizeMode='contain'
							style={localStyles.servicesOfferedIcons}
						/>
						<Text style={localStyles.servicesOfferedName}>
							Duchas / Vestuario
						</Text>
					</View>
					<View style={localStyles.servicesOffered}>
						<Image
							source={
								dark ? assets.water_light : assets.water_dark
							}
							resizeMode='contain'
							style={localStyles.servicesOfferedIcons}
						/>
						<Text style={localStyles.servicesOfferedName}>
							Hidratación Disponible
						</Text>
					</View>
					<View style={localStyles.servicesOffered}>
						<Image
							source={
								dark
									? assets.hotwater_light
									: assets.hotwater_dark
							}
							resizeMode='contain'
							style={localStyles.servicesOfferedIcons}
						/>
						<Text style={localStyles.servicesOfferedName}>
							Agua Caliente
						</Text>
					</View>
				</View>
			</View>
			<View style={localStyles.containerLineSeparator}></View>

			<View style={localStyles.locationContainer}>
				<Text style={localStyles.locationTitle}>Como llegar:</Text>
				<Image
					source={assets.dummy5}
					resizeMode='contain'
					style={localStyles.locationImage}
				/>
				<Text style={localStyles.locationAdress}>
					Dirección: Venezuela 1564
				</Text>
			</View>
			<View style={localStyles.containerLineSeparator}></View>
			<View style={localStyles.scheduleContainer}>
				<Text style={localStyles.scheduleTitle}>Horarios</Text>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>
						Domingo
					</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>Lunes</Text>
					<Text style={localStyles.containerScheduleTime}>
						No Abre
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>Martes</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>
						Miercoles
					</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>Jueves</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>
						Viernes
					</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>Sábado</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
			</View>
			<View style={localStyles.containerCommunity}>
				<View style={localStyles.containerCommuinityTitle}>
					<Text style={localStyles.communityTitleText}>Qué tan</Text>
					<Image
						source={dark ? assets.logo_dark : assets.logo_light}
						resizeMode='contain'
						style={localStyles.comunnityTitleLogo}
					/>
					<Text style={localStyles.communityTitleText}> sos?</Text>
				</View>
				<Text style={localStyles.communityDescription}>
					¡Únete con la comunidad y anímate a juntarte con
					desconocidos ya!
				</Text>
				<View style={localStyles.containerCommunityGroups}>
					<Text style={localStyles.communityGroupTitle}>
						Grupos armados en este momento:
					</Text>
					<View style={localStyles.containerCommunityGroupsLives}>
						<View style={localStyles.communityGroupListAvatars}>
							<Image
								source={
									dark ? assets.user_dark : assets.user_light
								}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
							<Image
								source={
									dark ? assets.user_dark : assets.user_light
								}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
							<Image
								source={
									dark ? assets.user_dark : assets.user_light
								}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
							<Image
								source={
									dark ? assets.user_dark : assets.user_light
								}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
						</View>
						<View
							style={
								localStyles.containerCommunityGroupsLivesInfo
							}>
							<Text style={localStyles.communityGroupNameGroup}>
								Grupo 1
							</Text>
							<Text style={localStyles.communityGroupDetailGroup}>
								Faltan 2 personas más
							</Text>
						</View>
					</View>
					<View style={localStyles.containerCommunityGroupsLives}>
						<View style={localStyles.communityGroupListAvatars}>
							<Image
								source={
									dark ? assets.user_dark : assets.user_light
								}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
							<Image
								source={
									dark ? assets.user_dark : assets.user_light
								}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
							<Image
								source={
									dark ? assets.user_dark : assets.user_light
								}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
						</View>
						<View
							style={
								localStyles.containerCommunityGroupsLivesInfo
							}>
							<Text style={localStyles.communityGroupNameGroup}>
								Grupo 2
							</Text>
							<Text style={localStyles.communityGroupDetailGroup}>
								Faltan 6 personas más
							</Text>
						</View>
					</View>
				</View>
				<Text style={localStyles.communityFooter}>
					Hay más de 10 grupos disponibles para unirse.
				</Text>
			</View>

			{/* OPINIONES */}
			<View style={localStyles.containerReviews}>
				<View style={localStyles.containerReviewsTitle}>
					<Image
						source={assets.star_red}
						resizeMode='contain'
						style={localStyles.reviewTitleIcon}
					/>
					<Text style={localStyles.reviewTitleText}>
						4.0 - 20 opiniones
					</Text>
				</View>
				{/* VALORES */}
				<View style={localStyles.containerReviewTypes}>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Atencion al cliente
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}></Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Limpieza y mantenimiento
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}></Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Calidad-precio
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}></Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Comodidad
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}></Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Concurrencia
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}></Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Servicios
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}></Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
				</View>

				{/* CARD OPINIONES */}
				<View style={localStyles.containerReviewCard}>
					<View style={localStyles.containerReviewCardUser}>
						<Image
							source={dark ? assets.user_light : assets.user_dark}
							resizeMode='contain'
							style={localStyles.reviewCardUserAvatar}
						/>
						<View style={localStyles.containerReviewCarUserInfo}>
							<Text style={localStyles.reviewCardUserName}>
								Juan
							</Text>
							<Text style={localStyles.reviewCardUserTimestamp}>
								Septiembre de 2022
							</Text>
						</View>
					</View>
					<Text style={localStyles.reviewCardUserDescription}>
						Use por primera vez la app con este lugar y fue
						fenomenal, disfrute mucho con gente desconocida, buena
						atención.
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};
