import React from 'react'
import { Text,View } from 'react-native';

export const Ejercicio3 = () => {
  
    const arreglo2: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


    function dividirPorCinco(arreglo: number[]): number[] {
        return arreglo2.map(numero => numero / 5);
    }
    
    
    const resultado2: number[] = dividirPorCinco(arreglo2);

  
  
    return (
    <View>
        <Text style={{color:"black", fontSize:25}}>Ejercicio 3</Text>
                <Text>Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.
                const arreglo = [5,10,15,20,25,30,35,40,45,50]
                Recomendación emplear función map.</Text>
                <Text>Los resultados son: {resultado2}</Text>
                <Text style={{color:"black", fontSize:25}}></Text>
    </View>
  )
}
