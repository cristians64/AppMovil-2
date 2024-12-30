import React from 'react'
import { useState } from 'react';
import { Text,View,Button  } from 'react-native';

export const Ejercicio7 = () => {
  
    const [valorContador, setValorContador]= useState<number>(0);


    const cambiarContador = (numero:number)=>{
  
        setValorContador(valorContador+numero)
    }
  
    return (
    <View>
        <Text style={{color:"black", fontSize:25}}>Ejercicio 7</Text>
                <Text>Empleado el hook useState crear un acumulador de 5. Se debe visualizar el valor del
                acumular y dos botones (incrementar - disminuir)</Text>
                <Text>Valor inicial: <Text >{valorContador}</Text></Text>
                
                <Button title='-5' onPress={()=>cambiarContador(-5)}></Button>
        
                <Button title='+5' onPress={()=>cambiarContador(+5)}></Button>
                <Text style={{color:"black", fontSize:25}}></Text>
    </View>
  )
}
