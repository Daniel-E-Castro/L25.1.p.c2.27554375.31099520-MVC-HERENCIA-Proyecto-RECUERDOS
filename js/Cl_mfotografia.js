import Cl_cliente from "./Cl_cliente.js";

export default class Cl_mfotografia extends Cl_cliente {
  constructor({codigo, costoBase, tipoFoto}) {
    super(codigo, costoBase);
    this.tipoFoto = tipoFoto;
  }
  set tipoFoto(tipoFoto) {
    this._tipoFoto = tipoFoto;
  }
  get tipoFoto() {
    return this._tipoFoto;
  }
  calcularDescuento() {
    if (this._tipoFoto === "D") 
        return this._costoBase * 0.18;
    else return 0;
  }
  calcularIncrementoFoto() {
    if (this._tipoFoto === "I") 
        return this._costoBase * 0.13;
    else return 0;
  }
  precioDescuentoyIncremento() {
    if(this._tipoFoto === "D")
    return this._costoBase - this.calcularDescuento()
  else
  return this._costoBase + this.calcularIncrementoFoto()
  }

}
