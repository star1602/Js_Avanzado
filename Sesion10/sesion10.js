class Alumno{
    constructor (codigo, nombre, nota1, nota2, nota3){
        this._codigo = codigo;
        this._nombre = nombre; 
        this._nota1 = nota1; 
        this._nota2 = nota2; 
        this._nota3 = nota3; 
        this._nota4 = nota3; 
    }

    get promedio(){
       let promedio= Math.round((this._nota1*0.15)+(this._nota2*0.2)+(this._nota3*0.25)+(this._nota4*0.4))
       return "Su promedio es de: " + promedio

    }


    get condicion(){
        let promedio = Math.round((this._nota1*0.15)+(this._nota2*0.2)+(this._nota3*0.25)+(this._nota4*0.4))
        
        if(promedio >= 12){
        return  "Es un alumno aprobado"
        } else {
            return "Es un alumno desaprobado"    
        }
    }

    get obsequio(){
        let promedio= Math.round((this._nota1*0.15)+(this._nota2*0.2)+(this._nota3*0.25)+(this._nota4*0.4))
        if(promedio >= 17){
        return "Por tu nota, te haz ganado una mochila"    
        } else {
            return "Hasta el momento no has ganado nada"    
        }
    }

}

let Estrella = new Alumno ("1602","Estrella", 20, 10, 12, 15)

console.log(Estrella.promedio)
console.log(Estrella.condicion)
console.log(Estrella.obsequio)