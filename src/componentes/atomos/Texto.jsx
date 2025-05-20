import React from 'react'
import classnames from 'classnames'
import '../EstilosComponentes/EstilosAtomos/estiloTexto.css'

const Texto = ({ level, texto, variante}) => {
    const textosClassnames = classnames('texto', {
        dark: variante === 'dark',
        medium: variante === 'maedum',
        light: variante === 'light',
        white: variante === 'white',
        black: variante === 'black',
        tituloFooter: variante === 'tituloFooter',
    })

    return (
        <>
            {level === 'h1' && <h1 className={textosClassnames}>{texto}</h1>}
            {level === 'h2' && <h2 className={textosClassnames}>{texto}</h2>}
            {level === 'h3' && <h3 className={textosClassnames}>{texto}</h3>}
            {level === 'p' && <p className={textosClassnames}>{texto}</p>}
        </>
    )
}
export default Texto;