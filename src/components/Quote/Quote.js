// to display the quote
import React from 'react';
import './Quote.css';

class Quote extends React.Component{
    render(){
        return(
            <div className="quote-box">
                <h1> {this.props.quote}</h1>
                <h3>{this.props.author}</h3>
            </div>
        );
    }
}

export default Quote;