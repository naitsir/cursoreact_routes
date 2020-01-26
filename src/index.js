import React from 'react';
import ReactDOM from 'react-dom';
import Rutas from './router/routes';

const MiComponente = () => {

    return (
        <React.Fragment>
            <Rutas/>
        </React.Fragment>
    );
}

ReactDOM.render(<MiComponente />, document.getElementById('root'));
