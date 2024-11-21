export default class Cl_examen {
    constructor(valor, minAprueba) {
        this.valor = valor;
        this.minAprueba = minAprueba;
        this.aprobados = [];
        this.reprobados = [];
    }

    aprueba(e) {
        let n = this.minAprueba;
        for (let i = 0; i < e.length; i++) {
            if (e[i].nota >= n) {
                this.aprobados.push(e[i]);
            } else {
                this.reprobados.push(e[i]);
            }
        }
    }

    porcAprobados() {
        let a = this.aprobados.length;
        let r = this.reprobados.length;
        let t = a + r;
        return t === 0 ? 0 : (a / t) * 100; // evitar division por cero
    }

    porcReprobados() {
        let a = this.aprobados.length;
        let r = this.reprobados.length;
        let t = a + r;
        return t === 0 ? 0 : (r / t) * 100; // evitar division por cero
    }

    estudiantemejornota() {
        let mejornota = 0;
        let estmejornota;
        for (let i = 0; i < this.aprobados.length; i++) {
            if (this.aprobados[i].nota > mejornota) {
                mejornota = this.aprobados[i].nota;
                estmejornota = this.aprobados[i];
                estmejornota = {
                    nombre: a[i].nombre,
                    cedula: a[i].cedula,
                    sexo: a[i].sexo,
                    nota: a[i].nota,
                }
            }
        }
        return estmejornota;
    }

    notapromedio() {
        let totalNotas = 0;
        let totalEstudiantes = this.aprobados.length + this.reprobados.length;
        for (let estudiante of [...this.aprobados, ...this.reprobados]) {
            totalNotas += estudiante.nota;
        }
        return totalEstudiantes === 0 ? 0 : totalNotas / totalEstudiantes;
    }

    chicasporencimanotapromedio(){
        let totalNotas = 0;
        let totalEstudiantes = 0;
        for (let estudiante of [ this.aprobados]) {
            if (estudiante.sexo === 'F') {
                totalNotas += estudiante.nota;
                totalEstudiantes++;
            }
    return totalEstudiantes === 0 ? 0 : totalNotas / totalEstudiantes;
        }
    }
}