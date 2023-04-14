let fechaHoy = new Date();
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
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) console.log(`Generación: ${generaciones[0][0]}. Rasgo característico: ${generaciones[0][1]}`);
        if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) console.log(`Generación: ${generaciones[1][0]}. Rasgo característico: ${generaciones[1][1]}`);
        if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) console.log(`Generación: ${generaciones[2][0]}. Rasgo característico: ${generaciones[2][1]}`);
        if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) console.log(`Generación: ${generaciones[3][0]}. Rasgo característico: ${generaciones[3][1]}`);
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) console.log(`Generación: ${generaciones[4][0]}. Rasgo característico: ${generaciones[4][1]}`);
    }
    esMayorDeEdad() {
        this._edad >= 18 ? console.log(`La persona es mayor de edad.`) : console.log(`La persona no es mayor de edad.`);
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad} años`);
        console.log(`DNI: ${this.DNI}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Altura: ${this.altura} cm`);
        console.log(`Año de nacimiento: ${this.anioNacimiento}`);
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
    nuevaPersona.mostrarDatos();
}