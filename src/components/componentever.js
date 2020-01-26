import React, {Component} from 'react';

class ComponenteVer extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h2>ComponenteVer</h2>
                <p>id: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default ComponenteVer;