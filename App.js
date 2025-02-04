import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import  StartScreen from './screens/StartScreen'

let screen = <StartScreen />


export default function App() {
  return (
    <LinearGradient
    colors={['#002', '#113']}
    style={styles.rootScreen}
    >
      <ImageBackground 
        source={require('./assets/images/background.jpg')}
        resizeMode={'cover'}
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
        >
        <StatusBar barStyle='dark-content'/>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>


      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  },
});
