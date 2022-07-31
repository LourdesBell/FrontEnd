export class Habilidades {
        id? : number;
        nombreHabilidades : string;
        descripcionHabilidades : number;
    
        constructor(nombreHabilidades: string, descripcionHabilidades: number){
            this.nombreHabilidades = nombreHabilidades;
            this.descripcionHabilidades = descripcionHabilidades;
        }
    }