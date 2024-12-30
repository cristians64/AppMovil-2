import React from 'react'
import { Text,View } from 'react-native';

export const Ejercicio1 = () => {
  
    function calcularAreaCuadrado(lado: number): number {
        return lado * lado;
        }
  
    return (
    <View>
        <Text style={{color:"black", fontSize:25}}></Text>
        <Text style={{color:"black", fontSize:25}}>Ejercicio 1</Text>
        <Text>Crear una función con parámetros que permita calcular el área de un cuadrado, cuyos lados es 5.</Text>
                <Text>El resultado es: {calcularAreaCuadrado(5)}</Text>
                <Text style={{color:"black", fontSize:25}}></Text>
    </View>
  )
}
