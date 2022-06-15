import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import { Link, Route, Routes } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" >

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/" >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Digital House" />
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active" >
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DH movies</span></Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>

        <li className="nav-item" >
          <Link className="nav-link" to="/GenresInDb">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/LastMovieInDb">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></Link>
        </li>

        <li className="nav-item nav-link" >
          <Link className="nav-link" to="/ContentRowMovies">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></Link>
        </li>

        <li className="nav-item nav-link" >
          <Link className="nav-link" to="/SearchMovies">
            <i className="fas fa-search"></i>
            <span>Search a movie</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      <Routes>
        <Route exact path="/" element={<ContentWrapper />} />
        <Route path="/GenresInDb" element={<GenresInDb />} />
        <Route path="/LastMovieInDb" element={<LastMovieInDb />} />
        <Route path="/ContentRowMovies" element={<ContentRowMovies />} />
        <Route path="/SearchMovies" element={<SearchMovies />} />
        <Route component={NotFound} />
      </Routes>
    </>
  )
}
export default SideBar;