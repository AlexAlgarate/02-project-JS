/*
Ejercicio 1

Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes
campos:
- Nombre (el tuyo o inventado)
- Apellidos (el tuyo o inventado)
- Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas
de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
- Si estás en búsqueda activa con un valor de verdadero o false
En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del
objeto que hemos creado anteriormente
 */

const usuario = {
  nombre: 'Alex',
  apellidos: 'Apellido 1 Apellido 2',
  temasBootcamp: [
    {course: 'React', fechaInicio: '2025-10-01'},
    {course: 'Git', fechaInicio: '2026-01-01'},
    {course: 'Node.js', fechaInicio: '2025-12-21'},
  ],
  busquedaActiva: true,
};

console.log(`El curso de React empieza el ${usuario.temasBootcamp[0].fechaInicio}`);
