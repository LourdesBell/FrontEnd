export class Proyectos {
    id? : number;
    nombreProyectos : string;
    urlProyectos : string;

    constructor(nombreProyectos: string, urlProyectos: string){
        this.nombreProyectos  = nombreProyectos ;
        this.urlProyectos = urlProyectos ;
    }
}
