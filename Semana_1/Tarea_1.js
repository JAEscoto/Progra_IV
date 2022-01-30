let Estudiante_1 = {
    id: '62111013',
    nombre: 'Juan Escoto',
    asignatura: 'Programacion IV',
    nota_final: 81,
    status: 'APB'
}
let Estudiante_2 = {
    id: '62135240',
    nombre: 'Samuel Molina',
    asignatura: 'Programacion IV',
    nota_final: 51,
    status: 'RPB'
}
let Estudiante_3 = {
    id: '50325681',
    nombre: 'Marco Recarte',
    asignatura: 'Programacion IV',
    nota_final: 60,
    status: 'APB'
}
let Estudiante_4 = {
    id: '62503210',
    nombre: 'Allison Duarte',
    asignatura: 'Programacion IV',
    nota_final: 52,
    status: 'RPB'
}

let arrayEstudiantes=[Estudiante_1, Estudiante_2, Estudiante_3, Estudiante_4]
let busqueda = arrayEstudiantes.filter(Estudiante => Estudiante.status == 'RPB')

console.log('Estudiante/es reprobados: ', busqueda)
