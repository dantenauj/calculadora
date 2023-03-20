import Button from "./Boton"
import "./BotonesCalculadora.css"

export default function panelDeBotones ({clickHandle}) {
  
    const handleClick = nombreDeBoton => {
      clickHandle(nombreDeBoton)
    }
    return (
        <div className="component-button-panel">
       
          <div>
            <Button name="7" clickHandle={handleClick} />
            <Button name="8" clickHandle={handleClick} />
            <Button name="9" clickHandle={handleClick} />
            <Button name="+/-" clickHandle={handleClick} red/>
            <Button name="AC" clickHandle={handleClick} red/>
          </div>
          <div>
            <Button name="4" clickHandle={handleClick} />
            <Button name="5" clickHandle={handleClick} />
            <Button name="6" clickHandle={handleClick} />
            <Button name="x" clickHandle={handleClick} orange/>
            <Button name="/" clickHandle={handleClick} orange/>
          </div>
          <div>
            <Button name="1" clickHandle={handleClick} />
            <Button name="2" clickHandle={handleClick} />
            <Button name="3" clickHandle={handleClick} />
            <Button name="+" clickHandle={handleClick} orange />
            <Button name="-" clickHandle={handleClick} orange/>

          </div>
          <div>
            <Button name="0" clickHandle={handleClick} />
            <Button name="." clickHandle={handleClick} />
            <Button name="%" clickHandle={handleClick} />
            <Button name="√" clickHandle={handleClick} />

            <Button name="=" clickHandle={handleClick} />
          </div>
        </div>
      );
  }