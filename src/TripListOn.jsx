import { trips } from './Trips';
import { currentTrips } from './CurrentTrips';

function TripListOn({ onViewTrip, searchTerm = '' }) {

    // Filtra i viaggi in base al termine di ricerca
    const filterTrips = (tripList) => {
        if (!searchTerm) return tripList;
        return tripList.filter(trip =>
            trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filteredCurrentTrips = filterTrips(currentTrips);
    const filteredTrips = filterTrips(trips);

    return (
        <div className="container mt-4">
            {searchTerm && (
                <div className="alert alert-info mb-4">
                    <i className="bi bi-search me-2"></i>
                    Risultati per: <strong>"{searchTerm}"</strong>
                </div>
            )}

            {/* Viaggi in Corso */}
            <h3 className="mb-4">Viaggi in Corso</h3>
            {filteredCurrentTrips.length === 0 ? (
                <p className="text-muted">
                    {searchTerm ? `Nessun viaggio in corso trovato per "${searchTerm}"` : 'Nessun viaggio in corso'}
                </p>
            ) : (
                <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                    {filteredCurrentTrips.map(trip => (
                        <div key={trip.id} className="col">
                            <div className="card h-100">
                                <img
                                    src={trip.image}
                                    className="card-img-top"
                                    alt={trip.destination}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{trip.destination}</h5>
                                    <p className="card-text">Dal {trip.startDate} al {trip.endDate}</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => onViewTrip(trip)}
                                    >
                                        Dettagli
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Viaggi Programmati */}
            <h3>Viaggi Programmati</h3>
            {filteredTrips.length === 0 ? (
                <p className="text-muted">
                    {searchTerm ? `Nessun viaggio programmato trovato per "${searchTerm}"` : 'Nessun viaggio programmato'}
                </p>
            ) : (
                <ul className="list-group">
                    {filteredTrips.map(trip => (
                        <li key={trip.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{trip.destination}</strong><br />
                                Dal {trip.startDate} al {trip.endDate}
                            </div>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => onViewTrip(trip)}
                            >
                                <i className="bi bi-eye me-1"></i>
                                Dettagli
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TripListOn;