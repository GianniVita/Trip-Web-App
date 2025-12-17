import { useState } from 'react';

function Participant({ participant }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="card border-primary h-100">
            <div
                className="card-body"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowDetails(!showDetails)}
            >
                <h5 className="card-title">
                    <i className="bi bi-person-circle me-2"></i>
                    {participant.name}
                </h5>

                {showDetails && (
                    <div className="mt-3 border-top pt-3">
                        <p className="mb-2">
                            <i className="bi bi-envelope me-2 text-primary"></i>
                            <strong>Email:</strong> {participant.email}
                        </p>
                        <p className="mb-2">
                            <i className="bi bi-telephone me-2 text-success"></i>
                            <strong>Telefono:</strong> {participant.phone}
                        </p>
                        <p className="mb-0">
                            <i className="bi bi-card-text me-2 text-info"></i>
                            <strong>Codice Fiscale:</strong> {participant.fiscalCode}
                        </p>
                    </div>
                )}

                <small className="text-muted d-block mt-2">
                    {showDetails ? 'Clicca per nascondere' : 'Clicca per vedere i dettagli'}
                </small>
            </div>
        </div>
    );
}

export default Participant;