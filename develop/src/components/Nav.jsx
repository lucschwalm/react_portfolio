import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <div id="navbar" className="d-flex justify-content-between">
            <h1 className="ms-3 mt-3">Luc Schwalm</h1>
            <ul className="nav d-flex flex-row-reverse py-3">
            <li className="nav-item">
                <Link to="/resume" className={currentPage === '/resume' ? "nav-link active" : "nav-link"}>Resume</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className={currentPage === '/contact' ? "nav-link active" : "nav-link"}>Contact</Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" className={currentPage === '/portfolio' ? "nav-link active" : "nav-link"}>Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className={currentPage === '/' ? "nav-link active" : "nav-link"}>About</Link>
            </li>
        </ul>
        </div>  
    );
}