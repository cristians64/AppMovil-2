import React from 'react'
import { Text,View } from 'react-native';

export const Ejercicio6 = () => {
    
    interface Alumno {
          name: string;
          edad: number;
          calificacion: number;
          }
    
          
        const alumnos: Alumno[] = [
          {
              name: 'Viviana',
              edad: 19,
              calificacion: 10,
          },
          {
              name: 'Wendy',
              edad: 20,
              calificacion: 8,
          },
          {
              name: 'Gerson',
              edad: 18,
              calificacion: 9,
          }
        ];
    
        function calcularPromedioCalificaciones(alumnos: Alumno[]): number {
          const totalCalificaciones = alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);
          return totalCalificaciones / alumnos.length;
        }
         const promedio: number = calcularPromedioCalificaciones(alumnos);
  
    return (
    <View>
        <Text style={{color:"black", fontSize:25}}>Ejercicio 6</Text>
        <Text>Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y
        calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones.
        </Text>
        <Text>El promedio de las notas es: {promedio}</Text>
        <Text style={{color:"black", fontSize:25}}></Text>
    </View>
  )
}
