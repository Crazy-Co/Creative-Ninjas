import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleToggle = () => {
        const nav_item = document.querySelectorAll('.nav-item');
        nav_item.forEach(element => {
            element.addEventListener('click', () => {
                const toggleBtn = document.querySelector('.navbar-toggler');
                toggleBtn.click();
            })
        });
    }
    const handleActive = (e) => {
        document.querySelector('.active').classList.toggle('active');
        e.target.classList.toggle('active');
    }
    const handleActiveHome = (e) => {
        document.querySelector('.active').classList.toggle('active');
        document.querySelector('.nav-item').classList.toggle('active');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"  onClick={(e) => handleActiveHome(e)}>
                    <span className="material-symbols-outlined">
                        diversity_2
                    </span>
                    <div>
                        Creative Ninjas
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" onClick={handleToggle}></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active" onClick={(e) => handleActive(e)}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item" onClick={(e) => handleActive(e)}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item" onClick={(e) => handleActive(e)}>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item" onClick={(e) => handleActive(e)}>
                            <Link className="nav-link" to="/signin">Login</Link>
                        </li>
                        <li className="nav-item" onClick={(e) => handleActive(e)}>
                            <Link className="nav-link" to="/signup">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar