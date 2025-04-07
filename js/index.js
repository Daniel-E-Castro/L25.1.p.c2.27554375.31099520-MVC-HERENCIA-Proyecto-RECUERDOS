import Cl_mtienda from "./Cl_mtienda.js";
import Cl_vtienda from "./Cl_vtienda.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_index {
    constructor() {
        let modelo = new Cl_mtienda(),
            vista = new Cl_vtienda(),
            controlador = new Cl_controlador(modelo, vista);

        vista.controlador = controlador

    }
}