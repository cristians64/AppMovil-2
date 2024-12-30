import React from 'react'
import { Text,View } from 'react-native';

export const Ejercicio4 = () => {
    
    type ParImpar = 'par' | 'impar';
    const numeros = [1, 2, 3, 4];
    const paridadNumeros: ParImpar[] = numeros.map(numero => (numero % 2 === 0 ? 'par' : 'impar'));
  
  
    return (
    <View>
        <Text style={{color:"black", fontSize:25}}>Ejercicio 4</Text>
        <Text>Del siguiente arreglo identificar si el número es par o impar. Se solicita generar un nuevo
          arreglo que remplace el número por las palabras correspondiente:
          • Si es número par, colocar par
          • Si es número impar, colocar impar
          const numeros = [1,2,3,4]
        </Text>
        <Text>El resultado es: {paridadNumeros}</Text>
        <Text style={{color:"black", fontSize:25}}></Text>
    </View>
  )
}
