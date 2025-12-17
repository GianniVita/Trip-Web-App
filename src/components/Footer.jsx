function Footer() {
    return (
        <footer className="text-white mt-5 py-4" style={{ backgroundColor: '#1E90FF' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>Help Center</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Contact Support</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Guide</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Cookie Policy</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Disclaimer</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Terms and Conditions</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
                            <li><a href="#" className="text-light text-decoration-none">User Agreement</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-3 border-top border-secondary">
                    <p className="mb-0">&copy; 2025 Trip Web App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
