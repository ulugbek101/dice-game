import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
				maxLength={2}
				style={styles.numberInput}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.button}>
					<PrimaryButton>Reset</PrimaryButton>
				</View>
				<View style={styles.button}>
					<PrimaryButton>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		marginTop: 50,
		marginHorizontal: 24,
		borderRadius: 8,
		padding: 16,
		backgroundColor: "#4e0329",
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	numberInput: {
		height: 50,
		fontSize: 32,
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		width: 50,
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	button: {
		flex: 1,
	},
});

export default StartGameScreen;
