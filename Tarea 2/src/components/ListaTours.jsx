import { notFound } from './../data'

export default function ListaTours({ tours }) {
	return (
		<div>
			{tours.map((tour) => (
				<article
					key={tour.id}
					className={`single-tour ${tour.destacado && 'destacado'}`}
					alt={tour.name}
				>
					<img src={tour.image || notFound} alt={tour.name} />
					<footer>
						<div className='tour-info'>
							<h4>{tour.name}</h4>
							<h4 className='tour-price'>
								{tour.price ? `${tour.price}€` : 'A consultar'}
							</h4>
						</div>
						<p>{tour.info}</p>
					</footer>
				</article>
			))}
		</div>
	)
}
