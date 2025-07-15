const cursos = [
  { id: "mat1", nombre: "Matemática I", semestre: 1, prerequisitos: [] },
  { id: "prog1", nombre: "Programación I", semestre: 1, prerequisitos: [] },
  { id: "com", nombre: "Comunicación", semestre: 1, prerequisitos: [] },

  { id: "mat2", nombre: "Matemática II", semestre: 2, prerequisitos: ["mat1"] },
  { id: "fis1", nombre: "Física I", semestre: 2, prerequisitos: ["mat1"] },
  { id: "prog2", nombre: "Programación II", semestre: 2, prerequisitos: ["prog1"] },
  { id: "algebra", nombre: "Álgebra Lineal", semestre: 2, prerequisitos: ["mat1"] },

  { id: "estructuras", nombre: "Estructuras de Datos", semestre: 3, prerequisitos: ["prog2"] },
  { id: "bd", nombre: "Base de Datos", semestre: 3, prerequisitos: ["prog2"] },
  { id: "fis2", nombre: "Física II", semestre: 3, prerequisitos: ["fis1"] },
  { id: "poo", nombre: "POO", semestre: 3, prerequisitos: ["prog2"] },

  { id: "algoritmos", nombre: "Análisis de Algoritmos", semestre: 4, prerequisitos: ["estructuras"] },
  { id: "software", nombre: "Ingeniería de Software", semestre: 4, prerequisitos: ["poo"] },

  { id: "redes", nombre: "Redes de Computadoras", semestre: 5, prerequisitos: ["estructuras"] },
  { id: "seguridad", nombre: "Seguridad Informática", semestre: 6, prerequisitos: ["redes"] },

  { id: "tesis1", nombre: "Tesis I", semestre: 7, prerequisitos: ["software"] },
  { id: "tesis2", nombre: "Tesis II", semestre: 8, prerequisitos: ["tesis1"] }
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
