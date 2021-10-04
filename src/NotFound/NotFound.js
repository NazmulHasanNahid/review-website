import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css'
const NotFound = () => {
    return (
        <Container>
            <div className="Notfound">
                <h1 className="number">404</h1>
                <h2>The Page Not Found</h2>
        </div>
        </Container>
    );
};

export default NotFound;