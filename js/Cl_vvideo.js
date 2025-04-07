export default class Cl_vvideo{
    constructor(){
        this.inCodigo = document.getElementById("videoForm_inCodigo");
        this.inCostoBase = document.getElementById("videoForm_inCostoBase");
        this.inFormatoVideo = document.getElementById("videoForm_inFormatoVideo");
        this.btProcesar = document.getElementById("video_btProcesarVideo");
    }

    get codigo(){
        return this.inCodigo.value;
    }

    get costoBase(){
        return +this.inCostoBase.value;
    }

    get formatoVideo(){
        return this.inFormatoVideo.value;
    }
}