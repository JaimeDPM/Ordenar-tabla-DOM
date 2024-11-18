"use strict"


class empleado {
    #nombre;
    #apellidos;
    #nacimiento;
    #sueldo;

    constructor(nombre, apellidos, nacimiento, sueldo) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#nacimiento = nacimiento;
        this.#sueldo = sueldo;
    }

    //Como son atrbiutos privados tenemos que hacer un metodo para obtenerlos:
    get nombre() {
        return this.#nombre;
    }

    get apellidos() {
        return this.#apellidos;
    }

    get nacimiento() {
        return this.#nacimiento;
    }

    get sueldo() {
        return this.#sueldo;
    }


    toString(){
        return `<tr>
                <td>${this.#nombre}</td>
                <td> ${this.#apellidos}</td>
                <td> ${this.#nacimiento}</td>
                <td> ${this.#sueldo}</td>
                </tr>`;
    }

}

let empleados = [
    new empleado("Paco","Fiestas",1997,27000),
    new empleado("Chindas","Vinto",2001,33000),
    new empleado("Juan","Cruz",2005,38000),
    new empleado("Paco","Merte",1990,50000),
    new empleado("Sabrina","Carpenter",2000,100000),
    new empleado("Eulerio","Rodolfo",1925,12000),
    new empleado("Ana","de Alba",1986,42000)
]

let tabla = document.getElementById("lista-empleados")
tabla.innerHTML = empleados[0]  //Creo que esta linea no hace falta
empleados.forEach((empleado) =>{
    tabla.innerHTML += empleado; //Añado el "+" para que me salgan todos y no solo el ultimo
})

//Intento ordenar de mayort a menor si hago click

const CASILLAS_VALIDAS = ['Nombre', 'Apellidos', 'Año Nacimiento', 'Sueldo'];

function main() {
    for(let i = 1; i <= 4; i++) {
        let casilla = document.getElementById(`casilla-${i}`);
        casilla.addEventListener('click', OrdenarOnClick);
    }

}

function comprobarCasillaValida(casilla) {
    let contenido = casilla.textContent;
    return CASILLAS_VALIDAS.includes(contenido);
}

function OrdenarOnClick(event) {
    let casilla = event.target;
    console.log("click en casilla "+ casilla.textContent);

    if(comprobarCasillaValida(casilla)) {
       let columna = casilla.textContent;
       let indice = CASILLAS_VALIDAS.indexOf(columna);

       //Ordenar dependiendo de la columna
       empleados.sort((a,b) =>{
        switch(indice){
            case 0: //nombre
            return a.nombre.localeCompare(b.nombre);
            case 1: // Apellidos
                return a.apellidos.localeCompare(b.apellidos);
            case 2: // Año Nacimiento
                return a.nacimiento - b.nacimiento;
            case 3: // Sueldo
                return a.sueldo - b.sueldo;
            default:
                return 0;
        }
       });
       
       tabla.innerHTML = '';
       empleados.forEach((empleado) => {
           tabla.innerHTML += empleado;
       });
    }
}


main();