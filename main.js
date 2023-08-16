// POO
// Paradigma de programación enfocada a solucionar problemas
// mediante la creación de modelos llamados clases y 
// ocuparlos mediante la generacion de objetos a partir 
// de instancias

// Abstracción, encapsulamiento, herencia y polimorfismo

// funciones generadoras o constructoras

// this es la referencia a quien lo contiene

function Persona(nombre, altura, peso, edad, colorOjos) {
  this.nombre = nombre;
  this.altura = altura;
  this.peso = peso;
  this.edad = edad;
  this.colorOjos = colorOjos;
}

const pedro = new Persona("Pedro", 1.72, 100, 32, "cafes");

// agregar metodos
// modificando el prototype
Persona.prototype.saludar = function() {
  alert("Hola mi nombre es " + this.nombre);
}

// Pilares

// abstracción: proceso por el cual se identifican las caracteristicas de mi modelo
// encapsulamiento: es la caracteristica de contener todo el código y solo
// poder ser accedido mediante el proceso de instacia
// herencia: es el proceso de obtener caracteristicas de una clase diferente
// polimorfismo: es la caracteristica de ejecutar un mismo metodo de maneras difernetes

// instacia: la creación de nuevos objetos a partir de una clase

const humano1 = new Humano("amrilla", "cafes", "negro", "español");