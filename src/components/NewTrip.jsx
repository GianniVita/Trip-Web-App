import { useState } from 'react';

function NewTrip() {
    const [formData, setFormData] = useState({
        destination: '',
        startDate: '',
        endDate: '',
        contact: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nuovo viaggio:', formData);
        // Reset form
        setFormData({
            destination: '',
            startDate: '',
            endDate: '',
            contact: '',
            phone: '',
            email: ''
        });
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-4">
                <i className="bi bi-plus-circle me-2"></i>
                Aggiungi Nuovo Viaggio
            </h3>

            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="destination" className="form-label">Destinazione</label>
                        <input
                            type="text"
                            className="form-control"
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="startDate" className="form-label">Data Inizio</label>
                        <input
                            type="date"
                            className="form-control"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="endDate" className="form-label">Data Fine</label>
                        <input
                            type="date"
                            className="form-control"
                            id="endDate"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <h5 className="mt-3 mb-3">Contatti</h5>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="contact" className="form-label">Nome Contatto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="phone" className="form-label">Telefono</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                    <button type="submit" className="btn btn-primary">
                        <i className="bi bi-check-circle me-2"></i>
                        Salva Viaggio
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewTrip;
