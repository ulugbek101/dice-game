import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, setGameIsOver }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess == userNumber) {
			setGameIsOver(true);
		}
	}, [currentGuess, userNumber, setGameIsOver]);

	function nextGuessHandler(direction) {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "greater" && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong ...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newRandomNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRandomNumber);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText>Higher or Lower ?</InstructionText>
				<View style={styles.numberContainer}>
					<View style={styles.number}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
							-
						</PrimaryButton>
					</View>
					<View style={styles.number}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
							+
						</PrimaryButton>
					</View>
				</View>
			</Card>
			{/* <View> */}
			{/* Log rounds */}
			{/* </View> */}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	numberContainer: {
		flexDirection: "row",
	},
	number: {
		flex: 1,
	},
});

export default GameScreen;
