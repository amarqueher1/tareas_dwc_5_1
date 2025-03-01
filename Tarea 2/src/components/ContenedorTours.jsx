export default function ContenedorTours({ tours }) {

  const cantidadDestacados = tours.filter((tour) => tour.destacado).length

  return (
    <div className='title'>
      <h2>Nuestros Tours</h2>
      <div className='underline'></div>
      <h3>
        Tenemos {cantidadDestacados} { cantidadDestacados === 1 ? 'tour destacado' : 'tours destacados' }
      </h3>
    </div>
  )
}