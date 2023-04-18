import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
			<section class="border-top">
        <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
					<Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table text-warning"></i>
                        <span className="text-dark">Productos</span>
                    </Link> 
            
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
				<Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder text-warning"></i>
                        <span className="text-dark">Categorias</span>
                    </Link>
                </div>

                <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
				<Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area text-warning"></i>
                        <span className="text-dark">Usuarios</span>
                </Link>
                
                </div>
                
            </div>
        </div>
    </section>
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; 2023DHGroup1.com </span>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;