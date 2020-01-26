import React from 'react';
import ReactDOM from 'react-dom';
//import Contador from './components/contador';

class MiComponente extends React.Component {
    constructor(props){
        super(props);
    }

    state ={
        contador:0
    }

    handleContadorUp = () => {
        this.setState({
            contador:this.state.contador + 1
        })
    }
    handleContadorDown = () => {
        this.setState({
            contador:this.state.contador - 1
        })
    }
    handleContadorReset = () => {
        this.setState({
            contador:0
        })
    }

    componentDidUpdate(prevProps, prevState){
        // console.log('cambiaron estados');
        // console.log('Estado anterior', prevState);
        // console.log('Estado actual', this.state.contador);
        const valor = this.state.contador;
        localStorage.setItem('data', valor);
    }
    componentDidMount(){
        const valor = parseInt(localStorage.getItem('data')) || 0;
        this.setState({contador:valor});
    }

    render(){
        return(
            <div>
                <h1>contador: {this.state.contador}</h1>
                <button onClick={this.handleContadorUp}>Incrementar +1</button>
                <button onClick={this.handleContadorDown}>Decrementar -1</button>
                <button onClick={this.handleContadorReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<MiComponente />, document.getElementById('root'));
