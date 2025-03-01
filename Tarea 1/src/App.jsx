import { Tarjeta } from "./components/Tarjeta"
import { Contenedor } from "./components/Contenedor"
import datos from "./data"

function App() {
	return (
		<Contenedor>
			{datos.map((x) => (
				<Tarjeta 
          key={x.id} 
          imagen={x.image} 
          nombre={x.name}
          edad={x.age}
          />
			))}
		</Contenedor>
	)
}

export default App
