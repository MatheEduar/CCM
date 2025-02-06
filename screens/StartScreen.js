import { View, StyleSheet } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title"


function StartScreen(){
    return (
        <View style={styles.screen}>

            <Title>Qual dimensão?</Title>


            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>2D</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}> 
                    <PrimaryButton style={styles.marginTop}>3D</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonsContainer: {
        width: '80%',
    },
    buttonContainer: {},
    marginTop: {
        marginTop: 10,
    }
})