import React from 'react';
import './assets/styles/global.css'
// import Landing from './pages/Landing' // Busca pelo arquivo index automaticamente
import Routes from './pages/routes';

// Componente app: O componente é a função que retorna um html
// O componente deve começar com letra maiúscula
// A biblioteca react sempre precisa ser importada
// JSX - Javascript + xml - Html dentro do javascript
function App() {
    return (
        <Routes />
    );
}

export default App;
