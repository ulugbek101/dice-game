import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
	return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		marginHorizontal: 24,
		borderRadius: 8,
		padding: 16,
		marginTop: 36,
		backgroundColor: Colors.primary800,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});

export default Card;
