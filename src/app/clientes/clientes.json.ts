//IMportamos la clase Cliente para pdoer usarla
import {Cliente} from './cliente'
//La signamos como una constante y la tenemos que exprotar par apdoer llamarla
//desde otro lugar
export const CLIENTES:Cliente [] = [
  {
    id:1,
    nombre:'Taysir',
    apellido:'AlShareef',
    email:'taysirasp@gmail.com',
    createAt:'1996-25-05'
  },
  {
    id:2,
    nombre:'Manuel',
    apellido:'Humanes',
    email:'manuel@gmail.com',
    createAt:'1975-03-05'
  },
  {
    id:3,
    nombre:'Jorge',
    apellido:'Diaz',
    email:'jd@gmail.com',
    createAt:'1997-02-01'
},
{
  id:4,
  nombre:'Eduardo',
  apellido:'Aguirre',
  email:'eduag@gmail.com',
  createAt:'1997-12-06'
},
{
id:5,
  nombre:'Miguel',
  apellido:'Sevilla',
  email:'sevillaMiguel@gmail.com',
  createAt:'1996-24-05'
},
{
  id:6,
  nombre:'Monica',
  apellido:'Naranjo',
  email:'monnp@gmail.com',
  createAt:'1972-08-10'
  },
{
  id:7,
  nombre:'Enrique',
  apellido:'Fuentes',
  email:'fuentesEnriquep@gmail.com',
  createAt:'1971-22-04'
}
];
