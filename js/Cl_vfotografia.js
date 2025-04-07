export default class Cl_vfotografia{
    constructor(){
        this.inCodigo = document.getElementById("fotoForm_inCodigo");
        this.inCostoBase = document.getElementById("fotoForm_inCostoBase");
        this.inTipoFoto = document.getElementById("fotoForm_inTipoFoto");
        this.btProcesar = document.getElementById("fotoForm_btProcesarFoto");
    }

    get codigo(){
        return this.inCodigo.value;
    }

    get costoBase(){
        return +this.inCostoBase.value;
    }

    get tipoFoto(){
        return this.inTipoFoto.value;
    }
}