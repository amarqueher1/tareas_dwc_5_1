export const Contenedor = (props) => (
  <main>
    <section className="container">
      <h3>Hoy hay { props.children.length } cumpleaños</h3>
      { props.children }
    </section>
  </main>
)