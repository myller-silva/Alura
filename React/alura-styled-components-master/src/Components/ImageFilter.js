import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import outros from "../assets/images/outros.svg";
import { Icone } from "./UI";


export default ( type ) => {
  const Images = {
    Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
    Saude: <Icone src={saude} alt="Saude" />,
    Transporte: <Icone src={transporte} alt="Transporte" />,
    Utilidades: <Icone src={utilidades} alt="Utilidades" />,
    default: <Icone src={outros} alt="Outros" />,
  }

  return Images[type] || Images.default;
}
