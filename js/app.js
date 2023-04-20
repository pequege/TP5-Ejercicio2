let fechaHoy = new Date();

const personaOutput = document.getElementById('persona-creada');
const generaciones = [["Silent Generation", "Austeridad"],
                    ["Baby Boom", "Ambición"],
                    ["Generación X", "Obsesión por el exito"],
                    ["Generación Y", "Frustración"],
                    ["Generación Z - Millenials", "Irreverencia"]];
let personaGlobal;

class Persona {
    #nombre; 
    #edad;
    #DNI;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;


    constructor(nombre, edad, DNI, sexo, peso, altura) {
        this._nombre = nombre;
        this._edad = edad;
        this._DNI = DNI;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
    }

    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get DNI() {
        return this._DNI;
    }

    get sexo() {
        return this._sexo;
    }

    get peso() {
        return this._peso;
    }

    get altura() {
        return this._altura;
    }

    get anioNacimiento() {
        return fechaHoy.getFullYear() - this.edad;
    }

    mostrarGeneracion() {
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) alert(`Generación: ${generaciones[0][0]}. Rasgo característico: ${generaciones[0][1]}`);
        if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) alert(`Generación: ${generaciones[1][0]}. Rasgo característico: ${generaciones[1][1]}`);
        if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) alert(`Generación: ${generaciones[2][0]}. Rasgo característico: ${generaciones[2][1]}`);
        if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) alert(`Generación: ${generaciones[3][0]}. Rasgo característico: ${generaciones[3][1]}`);
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) alert(`Generación: ${generaciones[4][0]}. Rasgo característico: ${generaciones[4][1]}`);
    }
    esMayorDeEdad() {
        this.edad >= 18 ? alert(`La persona es mayor de edad.`) : alert(`La persona no es mayor de edad.`);
    }

    mostrarDatos() {
        personaOutput.innerHTML = (`<h2>Persona Creada:</h2>`)
        personaOutput.innerHTML += (`<p>Nombre: ${this.nombre}</p>`);
        personaOutput.innerHTML += (`<p>Edad: ${this.edad} años</p>`);
        personaOutput.innerHTML += (`<p>DNI: ${this.DNI}</p>`);
        personaOutput.innerHTML += (`<p>Sexo: ${this.sexo}</p>`);
        personaOutput.innerHTML += (`<p>Peso: ${this.peso} kg</p>`);
        personaOutput.innerHTML += (`<p>Altura: ${this.altura} cm</p>`);
        personaOutput.innerHTML += (`<p>Año de nacimiento: ${this.anioNacimiento}</p>`);
        personaOutput.innerHTML += (`
        <button type="click" class="btn btn-danger m-1" onclick="personaGlobal.mostrarGeneracion()">Mostrar Generación</button>
        <button type="button" class="btn btn-danger m-1" onclick="personaGlobal.esMayorDeEdad()">¿Es Mayor de edad?</button>`)
    }

    generarDNI() {
        return Math.floor(Math.random() * 6000000) + 1;
    }
}


let formularioPersona = document.getElementById("form-persona");
formularioPersona.addEventListener('submit', obtenerDatosPersona);


function obtenerDatosPersona(e){
    e.preventDefault();
    let nombrePersona = document.getElementById('inputNombre').value;
    let EdadPersona = document.getElementById('inputEdad').value;
    let DNIPersona = document.getElementById('inputDNI').value;
    let sexoPersonaH = document.getElementById('radioButtonSexo1').checked;
    let sexoPersonaM = document.getElementById('radioButtonSexo2').checked;
    let pesoPersona = document.getElementById('inputPeso').value;
    let alturaPersona = document.getElementById('inputAltura').value;
    let nuevaPersona = new Persona(nombrePersona, EdadPersona, DNIPersona, sexoPersonaH?"H":"M", pesoPersona, alturaPersona)
    personaGlobal = nuevaPersona;
    nuevaPersona.mostrarDatos();
}