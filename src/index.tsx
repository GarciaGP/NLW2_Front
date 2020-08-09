import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// O método render injeta a estrutura dentro do elemento no HTML
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

