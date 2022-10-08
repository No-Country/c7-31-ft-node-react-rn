import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import assets from "../../constants/assets";
import { ModalsStyles } from "./ModalsStyles";

export const ModalErrorCredentials = ({ setShowMessageError }) => {
	const modalStyles = ModalsStyles();
	const [visible, setVisible] = useState(true);

	return (
		<View style={modalStyles.modalBigContainer}>
			<Modal
				isVisible={visible}
				onBackdropPress={() => setShowMessageError(false)}
				coverScreen={true}>
				<View style={modalStyles.modalContainer}>
					<TouchableOpacity
						onPress={() => setShowMessageError(false)}>
						<Image
							source={assets.error_credentials_light}
							resizeMode='contain'
							style={modalStyles.modalImage}
						/>
					</TouchableOpacity>
					<Text style={modalStyles.modalText}>
						Alguno de los datos ingresados no son válidos
					</Text>
				</View>
			</Modal>
		</View>
	);
};
