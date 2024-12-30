import React from 'react'
import { Text,View } from 'react-native';

export const Ejercicio2 = () => {
    function sumarElementos(arreglo: number[]): number {
        let suma: number = 0;
        
        for (const numero of arreglo) {
            suma += numero;
        }
        
        return suma;
    }
    
    const arreglo: number[] = [1, 2, 3, 4, 5];
    const resultado: number = sumarElementos(arreglo);
    return (
        <View>
            <Text  style={{color:"black", fontSize:25}}>Ejercicio 2</Text>
                <Text style={{color:"black", fontSize:5}}></Text>
                <Text>Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne
                la suma de los elementos del arreglo.</Text>
                <Text>La suma de los elementos del arreglo es: {resultado}</Text>
                <Text style={{color:"black", fontSize:25}}></Text>
        </View>
      )
}
