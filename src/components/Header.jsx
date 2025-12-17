import { useState } from 'react';

function Header({ onNavigate, onSearch }) {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchInput);
    };

    return (

        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1E90FF' }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#" onClick={() => onNavigate('home')}>
                        <i className="bi bi-bus-front-fill" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#" onClick={() => onNavigate('home')}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" onClick={() => onNavigate('home')}>AllTrips</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Today's Trip
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Contact book</a></li>
                                    <li><a className="dropdown-item" href="#">Participant</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => onNavigate('newTrip')}>New Journey</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Cerca viaggi..."
                                aria-label="Search"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <button className="btn btn-outline-light" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>





        </>

    )

}

export default Header;