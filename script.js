const cursos = [
  { nombre: "Matemática I", semestre: 1 },
  { nombre: "Programación I", semestre: 1 },
  { nombre: "Comunicación", semestre: 1 },
  { nombre: "Matemática II", semestre: 2 },
  { nombre: "Física I", semestre: 2 },
  { nombre: "Programación II", semestre: 2 },
  { nombre: "Álgebra Lineal", semestre: 2 },
  { nombre: "Estructuras de Datos", semestre: 3 },
  { nombre: "Base de Datos", semestre: 3 },
  { nombre: "Física II", semestre: 3 },
  { nombre: "POO", semestre: 3 },
  { nombre: "Análisis de Algoritmos", semestre: 4 },
  { nombre: "Ingeniería de Software", semestre: 4 },
  { nombre: "Redes de Computadoras", semestre: 5 },
  { nombre: "Seguridad Informática", semestre: 6 },
  { nombre: "Tesis I", semestre: 7 },
  { nombre: "Tesis II", semestre: 8 },
  { nombre: "Tesis II", semestre: 9 },
  { nombre: "Tesis II", semestre: 10 }
];

const malla = document.getElementById('malla');

// Crear una columna por semestre
for (let semestre = 1; semestre <= 8; semestre++) {
  const columna = document.createElement('div');
  columna.className = 'semestre';

  // Título del semestre
  const titulo = document.createElement('h2');
  titulo.innerText = `Semestre ${semestre}`;
  columna.appendChild(titulo);

  // Cursos del semestre
  const cursosSemestre = cursos.filter(c => c.semestre === semestre);
  cursosSemestre.forEach(curso => {
    const divCurso = document.createElement('div');
    divCurso.className = 'curso';
    divCurso.innerText = curso.nombre;
    columna.appendChild(divCurso);
  });

  malla.appendChild(columna);
}
