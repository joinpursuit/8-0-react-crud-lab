import React from 'react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';

function WrapRouter(props) {
    // Wrap the entire App in Router component allows for components to return Route components
    return (
        <Router>
            <React.StrictMode>
               <App />
            </React.StrictMode>
        </Router>
    );
}

export default WrapRouter;