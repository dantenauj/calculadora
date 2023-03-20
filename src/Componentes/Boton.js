import "./Boton.css"

export default function Boton ({clickHandle, name, gray, orange, wide, green, red}) {

  const handleClick = () => clickHandle(name)

  const className = [
    "component-button",
    red ? "red" : "",
    wide ? "wide" : "",
    green ? "green" : "",
    gray ? "gray" : "",
    orange ? "orange" : "",
  ]

      return (
        <div className={className.join(" ").trim()}>
          <button className="btn" onClick={handleClick}>{name}</button>
        </div>
      );
  }