const cursos = [
  { nombre: "Precálculo", semestre: 1 },
  { nombre: "Tópicos en biología", semestre: 1 },
  { nombre: "Biología de la célula", semestre: 1 },
  { nombre: "Lab. de química general", semestre: 1 },
  { nombre: "Química general I", semestre: 1 },
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
  { nombre: "Tesis II", semestre: 8 }
];

const malla = document.getElementById('malla');

for (let i = 1; i <= 8; i++) {
  const semestreCursos = cursos.filter(c => c.semestre === i);
  if (semestreCursos.length === 0) {
    const placeholder = document.createElement('div');
    placeholder.innerHTML = `Semestre ${i}`;
    malla.appendChild(placeholder);
    continue;
  }
  semestreCursos.forEach(curso => {
    const div = document.createElement('div');
    div.className = 'curso';
    div.innerText = `${curso.nombre}\n(S${curso.semestre})`;
    malla.appendChild(div);
  });
}
