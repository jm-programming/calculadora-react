



const  Calculadora = () => {
  return (
    <>
        <form name="form">
      <input className="screen" name="textview" id="screen"/>
    </form>
    <table>
    <tbody>
      <tr className="btn_red">
        <td>
          <input className="button" type="button" value="C"/>
        </td>
        <td>
          <input className="button" type="button" value="&larr;"/>
        </td>
        <td>
          <input className="button" type="button" value="/"  />
        </td>
        <td>
          <input className="button" type="button" value="*"  />
        </td>
      </tr>
      <tr>
        <td>
          <input className="button" type="button" value="7"  />
        </td>
        <td>
          <input className="button" type="button" value="8" />
        </td>
        <td>
          <input className="button" type="button" value="9"  />
        </td>
        <td>
          <input className="button-red" type="button" value="-"/>
        </td>
      </tr>
      <tr>
        <td>
          <input className="button" type="button" value="4"  />
        </td>
        <td>
          <input className="button" type="button" value="5" />
        </td>
        <td>
          <input className="button" type="button" value="6" />
        </td>
        <td>
          <input className="button-red" type="button" value="+"/>
        </td>
      </tr>
      <tr>
        <td>
          <input className="button" type="button" value="1"  />
        </td>
        <td>
          <input className="button" type="button" value="2" />
        </td>
        <td>
          <input className="button" type="button" value="3" />
        </td>
        <td rowSpan="5">
          <input className="button-red boton_igual" type="button" value="=" />
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <input className="button boton_cero" type="button" value="0"  />
        </td>
        <td>
          <input className="button-red" type="button" value="."  />
        </td>
      </tr>
      </tbody>
    </table>
    </>
  )
}

export default Calculadora