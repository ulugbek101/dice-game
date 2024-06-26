import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText"

function StartGameScreen({ setUserNumber, setGameIsOver }) {
	const [enteredNumber, setEneteredNumber] = useState("");

	function resetInputHandler() {
		setEneteredNumber("");
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid number",
				"Number has to be a number between 1 and 99",
				[{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
			);
			return;
		}

		setUserNumber(enteredNumber);
		setGameIsOver(false);
	}

	return (
		<View style={styles.rootContainer}>
			<Title>Guess my number!</Title>
			<Card>
				<InstructionText>Enter a number</InstructionText>
				<TextInput
					defaultValue={enteredNumber}
					onChangeText={enteredValue => setEneteredNumber(enteredValue)}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					maxLength={2}
					style={styles.numberInput}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
					<View style={styles.button}>
						<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: "center",
	},
	numberInput: {
		height: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
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
