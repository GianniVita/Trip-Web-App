import { useState } from 'react';
import Participant from './Participant';

function SingleTripCard({ trip }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Filtra i partecipanti in base al termine di ricerca
    const filteredParticipants = trip.participants.filter(participant =>
        participant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header text-white" style={{ backgroundColor: '#1E90FF' }}>
                    <h3>
                        <i className="bi bi-geo-alt-fill me-2"></i>
                        {trip.destination}
                    </h3>
                    <p className="mb-0">Dal {trip.startDate} al {trip.endDate}</p>
                </div>
                <div className="card-body">
                    <h4 className="mb-4">
                        <i className="bi bi-people-fill me-2"></i>
                        Rubrica Contatti
                    </h4>

                    {/* Barra di ricerca */}
                    <div className="mb-4">
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-search"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cerca per nome e cognome..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() => setSearchTerm('')}
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            )}
                        </div>
                        <small className="text-muted">
                            {filteredParticipants.length} partecipante{filteredParticipants.length !== 1 ? 'i' : ''} trovato{filteredParticipants.length !== 1 ? 'i' : ''}
                        </small>
                    </div>

                    {/* Lista partecipanti filtrati */}
                    <div className="row">
                        {filteredParticipants.length > 0 ? (
                            filteredParticipants.map(participant => (
                                <div key={participant.id} className="col-md-6 col-lg-4 mb-3">
                                    <Participant participant={participant} />
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <div className="alert alert-info">
                                    <i className="bi bi-info-circle me-2"></i>
                                    Nessun partecipante trovato con "{searchTerm}"
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleTripCard;
