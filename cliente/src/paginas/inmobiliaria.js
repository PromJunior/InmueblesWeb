import 'bootstrap/dist/css/bootstrap.min.css';
import './inmobiliaria.css';

function Inmobiliaria() {
  const propiedades = [
    {
      id: 1,
      titulo: "Casa moderna en Miraflores",
      descripcion: "3 habitaciones · 2 baños · 150 m²",
      precio: "$250,000",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      titulo: "Departamento en San Isidro",
      descripcion: "2 habitaciones · 1 baño · 90 m²",
      precio: "$180,000",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      titulo: "Dúplex en Surco",
      descripcion: "4 habitaciones · 3 baños · 200 m²",
      precio: "$320,000",
      imagen: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 titulo-catalogo">🏠 Catálogo Inmobiliario</h1>
      <div className="row">
        {propiedades.map((propiedad) => (
          <div key={propiedad.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm catalogo-card">
              <img
                src={propiedad.imagen}
                className="card-img-top"
                alt={propiedad.titulo}
              />
              <div className="card-body">
                <h5 className="card-title">{propiedad.titulo}</h5>
                <p className="card-text">{propiedad.descripcion}</p>
                <h6 className="text-primary fw-bold">{propiedad.precio}</h6>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-outline-primary btn-sm">Ver detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inmobiliaria;
