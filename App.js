import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState(null);
	const [gameIsOver, setGameIsOver] = useState(true);

	let screen = (
		<StartGameScreen
			setUserNumber={setUserNumber}
			setGameIsOver={setGameIsOver}
		/>
	);

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} setGameIsOver={setGameIsOver} />
		);
	}

	if (userNumber && gameIsOver) {
		screen = <GameOverScreen />;
	}

	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.accent500]}
			style={styles.rootScreen}
		>
			<ImageBackground
				style={styles.rootScreen}
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
