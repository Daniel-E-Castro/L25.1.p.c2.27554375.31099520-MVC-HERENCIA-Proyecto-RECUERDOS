import Cl_mfotografia from "./Cl_mfotografia.js";

export default class Cl_mtienda{
    constructor() {
        this.acumTotalVendido = 0;
        this.conFotosDigitales = 0;
        this.acumFotosDigitales = 0;
    }

    procesarRecuerdo(recuerdos) {
        this.acumTotalVendido+= recuerdos.precioDescuentoyIncremento()
        if (recuerdos instanceof Cl_mfotografia) {
            if (recuerdos.tipoFoto === "D") {
                this.acumFotosDigitales += recuerdos.precioDescuentoyIncremento()
                this.conFotosDigitales++
            }
        }
    }

    montoFinal() {
        return this.acumTotalVendido
    }

    promedioDigital() {
        return this.acumFotosDigitales / this.conFotosDigitales
    }
}   
