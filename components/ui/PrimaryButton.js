import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children, style}){
    return (
        <View style={[style, styles.buttonContainer]}>
            <Pressable android_ripple={{color: Colors.primaryLight500}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}


export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 4,
        borderWidth: 1,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: Colors.primaryLight600,
    },
    buttonText: {
        fontSize: 18,
        padding: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },


})