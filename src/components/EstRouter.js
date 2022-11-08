import React from 'react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';

function EstRouter(props) {
    return (
        <Router>
            <React.StrictMode>
               <App />
            </React.StrictMode>
        </Router>
    );
}

export default EstRouter;