// Definir el tipo de ubicación
export interface Location {
    lat: number;
    lng: number;
  }
  
// Definir el tipo de usuario
export interface User {
    name: string;
    location: Location;
    range: 'orden' | 'asesino';
    money: number;
}

//Definir el tipo de mision
export interface Mission {
  img: string
  targetName: string
  assassinName: string
  payment: number
  description: string
  isCompleted: boolean | null
}