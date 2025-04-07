export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarFoto() {
        this.modelo.procesarRecuerdo(this.vista.iniciarFotografia());

        this.vista.reporte1(
            this.modelo.montoFinal(),
            this.modelo.conFotosDigitales,
            this.modelo.acumFotosDigitales,
            this.modelo.promedioDigital(),
            
        )


    }

    procesarVideo() {
        this.modelo.procesarRecuerdo(this.vista.iniciarVideo());

        this.vista.reporte2(
            this.modelo.montoFinal(),
            this.modelo.conFotosDigitales,
            this.modelo.acumFotosDigitales,
            this.modelo.promedioDigital(),
        )


    }
}