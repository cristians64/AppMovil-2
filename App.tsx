import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, ScrollView,} from 'react-native';

import { Ejercicio1 } from './ejercicios/Ejercicio1';
import { Ejercicio2 } from './ejercicios/Ejercicio2';
import { Ejercicio3 } from './ejercicios/Ejercicio3';
import { Ejercicio4 } from './ejercicios/Ejercicio4';
import { Ejercicio5 } from './ejercicios/Ejercicio5';
import { Ejercicio6 } from './ejercicios/Ejercicio6';
import { Ejercicio7 } from './ejercicios/Ejercicio7';


export default function App() {

  return (
    <ScrollView>
      <ImageBackground style={styles.container}>
        <StatusBar style="auto" />

        <Text>{Ejercicio1()}</Text> 
        <Text>{Ejercicio2()}</Text>
        <Text>{Ejercicio3()}</Text>
        <Text>{Ejercicio4()}</Text>
        <Text>{Ejercicio5()}</Text>
        <Text>{Ejercicio6()}</Text>
        <Text>{Ejercicio7()}</Text>
        
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
