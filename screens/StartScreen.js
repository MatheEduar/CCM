import { View, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";



function StartScreen(){
    return (
        <View style={styles.screen}>
            <PrimaryButton></PrimaryButton>
            <PrimaryButton></PrimaryButton>

        </View>
    );
}

export default StartScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,   
    }
})