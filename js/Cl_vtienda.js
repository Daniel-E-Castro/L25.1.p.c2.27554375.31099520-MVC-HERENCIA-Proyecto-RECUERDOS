import Cl_mfotografia from "./Cl_mfotografia.js";
import Cl_vfotografia from "./Cl_vfotografia.js";

import Cl_mvideo from "./Cl_mvideo.js";
import Cl_vvideo from "./Cl_vvideo.js";

export default class Cl_vtienda {
    constructor() {
        this.controlador = null;

        this.vfotografia = new Cl_vfotografia();
        this.vvideo = new Cl_vvideo();

        this.salida = document.getElementById("salida");
        this.tablaFoto = document.getElementById("tablaFoto");
        this.tablaVideo = document.getElementById("tablaVideo");

        this.vfotografia.btProcesar.onclick = () => {
            this.controlador.procesarFoto();
        }

        this.vvideo.btProcesar.onclick = () => {
            this.controlador.procesarVideo();
        }
    }

    iniciarFotografia() {
        this.mfotografia = new Cl_mfotografia({
            codigo: this.vfotografia.codigo,
            costoBase: this.vfotografia.costoBase,
            tipoFoto: this.vfotografia.tipoFoto,
        });
        return this.mfotografia
    }

    iniciarVideo() {
        this.mvideo = new Cl_mvideo({
            codigo: this.vvideo.codigo,
            costoBase: this.vvideo.costoBase,
            formatoVideo: this.vvideo.formatoVideo,
        });
        return this.mvideo
    }

    reporte1(montoFinal, conFotosDigitales, acumFotosDigitales, promedioDigital) {
        this.tablaFoto.innerHTML += `
        <tr>
        <td>${this.mfotografia.codigo}</td>
        <td>${this.mfotografia.costoBase.toFixed(2)}</td>
        <td>${this.mfotografia.tipoFoto}</td>
        <td>${this.mfotografia.calcularDescuento().toFixed(2)}</td>
        <td>${this.mfotografia.calcularIncrementoFoto().toFixed(2)}</td>
        <td>${this.mfotografia.precioDescuentoyIncremento().toFixed(2)}</td>
        </tr>
        `;

        this.salida.innerHTML = `
        Total vendido: ${montoFinal.toFixed(2)}
        <br>Nº fotos digitales: ${conFotosDigitales}
        <br>Subtotal fotos digitales: ${acumFotosDigitales.toFixed(2)}
        <br>Promedio ventas digitales: ${promedioDigital.toFixed(2)} <br>
    `
    }

    reporte2(montoFinal, conFotosDigitales, acumFotosDigitales, promedioDigital, ) {
        this.tablaVideo.innerHTML += `
        <tr>
        <td>${this.mvideo.codigo}</td>
        <td>${this.mvideo.costoBase.toFixed(2)}</td>
        <td>${this.mvideo.formatoVideo}</td>
        <td>${this.mvideo.calcularIncrementoVideo().toFixed(2)}</td>
        <td>${this.mvideo.precioDescuentoyIncremento().toFixed(2)}</td>
      
        </tr>
        `;

        this.salida.innerHTML = `
        Total vendido: ${montoFinal.toFixed(2)}
        <br>Nº fotos digitales: ${conFotosDigitales}
        <br>Subtotal fotos digitales: ${acumFotosDigitales.toFixed(2)}
        <br>Promedio ventas digitales: ${promedioDigital.toFixed(2)} <br>
    `
    }
}