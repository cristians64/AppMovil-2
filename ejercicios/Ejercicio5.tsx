import React from 'react'
import { Text,View } from 'react-native';

export const Ejercicio5 = () => {
    
    const datos = [7, 5, "sistemas", "hola", "adios", 2];
    
    const textos = datos.filter(dato => typeof dato === 'string') as string[];
    const textoMasLargo = textos.reduce((max, curr) => (curr.length > max.length ? curr : max), "");

    
    const numerosDatos = datos.filter(dato => typeof dato === 'number') as number[];
    const suma = numerosDatos.reduce((acc, curr) => acc + curr, 0);
    const resta = numerosDatos.reduce((acc, curr) => acc - curr);
    const multiplicacion = numerosDatos.reduce((acc, curr) => acc * curr, 1);
    const division = numerosDatos.reduce((acc, curr) =>acc / curr);
    const modulo = numerosDatos.reduce((acc, curr) => acc % curr);

    return (
    <View>
        <Text style={{color:"black", fontSize:25}}>Ejercicio 5</Text>
                <Text>A partir del siguiente array que se proporciona ejecutar las siguientes acciones:
                      const datos= [7, 5, “sistemas”, "hola", "adios", 2];
                      • Determinar cuál de los tres datos de texto es mayor.
                      • Determinar el resultado de las cinco operaciones matemáticas realizadas con los tres
                      datos numéricos.
                </Text>
                <Text style={{color:"black", fontSize:10}}></Text>
                <Text>El texto mas largo es: {textoMasLargo}</Text>
                <Text>El resultado de la suma es: {suma}</Text>
                <Text>El resultado de la resta es: {resta}</Text>
                <Text>El resultado de la multiplicacion es: {multiplicacion}</Text>
                <Text>El resultado de la division es es: {division}</Text>
                <Text>El resultado del modulo es: {modulo}</Text>
                <Text style={{color:"black", fontSize:25}}></Text>
    </View>
  )
}
