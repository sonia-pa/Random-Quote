import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    // when clicj change the color
    render(){
        return(
            <div className="button-container">
                <button onClick={this.props.onClick}>New Quote</button>
            </div>


        );
    }

}

export default Button;