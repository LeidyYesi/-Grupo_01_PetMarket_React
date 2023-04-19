import React from 'react';
import image from '../assets/images/Logo-pet-market.jpg';
import ContentWrapper from './ContentWrapper';
import Categories from './Categories';
import LastUsers from './LastUsers';
import ContentTotales from './ContentTotales';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Pet Market Logo"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt text-warning"></i>
                        <span className="text-dark">Dashboard - Pet Market</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading text-dark">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder text-warning"></i>
                        <span className="text-dark">Categorias</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area text-warning"></i>
                        <span className="text-dark">Ultimo usuario registrado</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table text-warning"></i>
                        <span className="text-dark">Total de productos y Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
           
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <Categories />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastUsers />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentTotales />
                </Route>
                <Route component={NotFound} />
            </Switch>
            
        </React.Fragment>
    )
}
export default SideBar;