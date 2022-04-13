import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron
					titulo="A Warm Welcome!"
					contenido="This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information."
					boton="Call to action!"
				/>
				<div className="row my-3 mx-5 py-4">
					<Card
						titulo="Hola"
						botontext="Find Out More!"
						descripcion="Some quick example text to build on the card title and
						make up the bulk of the card's content."
						imagen="https://img.remediosdigitales.com/2556ac/captura-de-pantalla-2010-12-01-a-las-162636/450_1000.jpg"
					/>
					<Card
						titulo="Somos"
						botontext="Click Me!"
						descripcion="Some quick example text to build on the card title and
						make up the bulk of the card's content."
						imagen="http://www.snau.es/blog/wp-content/uploads/2017/02/508ac3b80f820a42ea07abe668d484fa-e1487838769331-300x200.jpg"
					/>

					<Card
						titulo="cards"
						botontext="More!"
						descripcion="Some quick example text to build on the card title and
						make up the bulk of the card's content."
						imagen="https://t2.pbb.ltmcdn.com/es/posts/3/6/6/un_bebe_recien_nacido_puede_estar_cerca_de_un_perro_4663_orig.jpg"
					/>
					<Card
						titulo="distintas"
						botontext="More like this!"
						descripcion="Some quick example text to build on the card title and
						make up the bulk of the card's content."
						imagen="http://imagenes-tiernas.net/wp-content/uploads/2012/12/59340_362724613824495_2138154294_n-e1355330721410.jpg"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
			<div className="container">
				<span className="navbar-brand" href="#">
					Dogs and Babies
				</span>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span class="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

const Jumbotron = ({ titulo, contenido, boton }) => {
	return (
		<div className="jumbotron bg-light my-3 mx-5 px-3 py-3">
			<h1 className="display-4">{titulo}</h1>
			<p className="lead">{contenido}</p>
			<p className="lead">
				<a
					className="btn btn-info text-white btn-lg"
					href="#"
					role="button">
					{boton}
				</a>
			</p>
		</div>
	);
};

const Card = ({ botontext, descripcion, imagen, titulo }) => {
	return (
		<div className="col-md-3">
			<div className="card text-center">
				<img
					className="card-img-top"
					src={imagen}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{titulo}</h5>
					<p className="card-text">{descripcion}</p>
				</div>
				<div
					className="bg-light py-2"
					style={{ borderTop: "0.5px solid #D3D3D3" }}>
					<a href="#" className="btn btn-info text-white">
						{botontext}
					</a>
				</div>
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<footer
			className="bg-secondary text-center text-lg-start"
			style={{
				position: "fixed",
				bottom: "0",
				width: "100%",
				left: "0",
			}}>
			<div className="text-center text-light p-3">© 2022 Copyright</div>
		</footer>
	);
};

export default Home;
