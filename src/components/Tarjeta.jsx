export const Tarjeta = ({ nombre, edad, imagen }) => (
  <article className="person">
    <img src={imagen} alt="" />
    <div>
      <h4>{nombre}</h4>
      <p>{edad} años</p>
    </div>
  </article>
)