// import { useContext, useEffect, useState } from "react";
import "../EstilosComponentes/EstilosAtomos/estiloBoton.css";
import classnames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as guardado } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus, faSquarePlus, faBookmark } from "@fortawesome/free-regular-svg-icons";
// import Icon from "../Icon/Icon";
// import { Badge } from "@mui/material";
// import { Context } from "../../../context/Context";

const Button = ({ texto, variante, icon, iconSize, onClick, type}) => {
  const buttonClassnames = classnames("button", {  //para pasarle el estilo al boton, 
    principal: variante === "principal",
    secundario: variante === "secundario",
    terciario: variante === "terciario",
    con_icono: variante === "icono",
    icono_editar: variante === 'editar'
  });

  const buttonIcon = [ //esto es para pasarle el icono del boton
    icon === "guardar" && faBookmark,
    icon === "guardado" && guardado,
    icon === "sumar" && faSquarePlus,
    icon === "restar" && faSquareMinus
  ].filter(Boolean)[0];

//   const { carrito } = useContext(Context);
//   const [cantidad, setCantidad] = useState(0);

//   useEffect(() => {
//     setCantidad(carrito.length);
//   }, [carrito]);


  return (
    <>
      <button type={type} className={buttonClassnames} onClick={onClick}>
        {icon && (

          //<Badge badgeContent={cantidad} color="primary">
            <FontAwesomeIcon
              icon={buttonIcon}
              className="button-icon"
              size={iconSize}
            />
          //</Badge>
        )}
        {texto}
      </button>
    </>
  );
};
export default Button;