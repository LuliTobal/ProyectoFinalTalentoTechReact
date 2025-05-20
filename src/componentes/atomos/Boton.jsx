// import { useContext, useEffect, useState } from "react";
import "../EstilosComponentes/EstilosAtomos/estiloBoton.css";
import classnames from "classnames";
// import Icon from "../Icon/Icon";
// import { Badge } from "@mui/material";
// import { Context } from "../../../context/Context";

const Button = ({ texto, variante, icon, iconSize, onClick}) => {
  const buttonClassnames = classnames("button", {
    principal: variante === "principal",
    secundario: variante === "secundario",
    terciario: variante === "terciario",
    // conIcono: Icon,
  });

//   const { carrito } = useContext(Context);
//   const [cantidad, setCantidad] = useState(0);

//   useEffect(() => {
//     setCantidad(carrito.length);
//   }, [carrito]);

  return (
    <>
      <button className={buttonClassnames} onClick={onClick}>
        {/* {icon && (

          <Badge badgeContent={cantidad} color="primary">
            <Icon
              type={icon}
              className="button-icon"
              size={iconSize}
            />
          </Badge>
        )} */}
        {texto}
      </button>
    </>
  );
};
export default Button;