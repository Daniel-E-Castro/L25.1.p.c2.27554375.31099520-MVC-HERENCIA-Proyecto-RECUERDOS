import Cl_cliente from "./Cl_cliente.js";

export default class Cl_mfotografia extends Cl_cliente {
    constructor({codigo, costoBase, formatoVideo}) {
        super(codigo, costoBase);
        this.formatoVideo = formatoVideo;
      }
      set formatoVideo(formatoVideo) {
        this._formatoVideo = formatoVideo;
      }
      get formatoVideo() {
        return this._formatoVideo;
      }
      calcularIncrementoVideo(){
        if(this.formatoVideo === "SI")
            return this._costoBase * 0.20
        else
        return 0;
      }
      precioDescuentoyIncremento(){
        return this._costoBase + this.calcularIncrementoVideo()
      }
}