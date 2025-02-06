import { Text, View, StyleSheet} from 'react-native';
import Colors from '../../constants/colors'

function Title({children}){
    return (
        <View style={styles.title}>
            <Text style={styles.titleText}>{children}</Text>
        </View>
    );
}

export default Title;

const styles = StyleSheet.create({

    title: {
        borderBottomWidth: 2,
        borderColor: Colors.primaryLight600,
        marginBottom: 24,
        
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.primaryLight600,
    }



})