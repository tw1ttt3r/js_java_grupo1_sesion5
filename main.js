const escuela = new Escuela("sjdnlsd", "Mi escuelita", "298329832", "primaria");

let respuesta = true;
while(respuesta) {
  const nombre = prompt("nombre del alumno: ");
  const grado = prompt("grado del alumno: ");
  escuela.registraAlumnos(nombre, grado);
  const pregunta = prompt("Desea registrar un nuevo alumno")
  respuesta = pregunta === "s";
}