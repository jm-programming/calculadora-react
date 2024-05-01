

function Boton(parametros) {
    const {texto , clase } = parametros
  return (
    <>
       <button className={clase}> {texto} </button>
    </>
  )
}

export default Boton