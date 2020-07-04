import React from 'react';
import './App.css';
import Quote from './components/Quote/Quote';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote: ' ',
      author: ' ', 
      apiResult: {},
      color: [12, 234, 23]

    }
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTwitter = this.handleTwitter.bind(this);

  }

  componentDidMount(){
    this.applyColor();

    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(
        jsonResponse => {
          this.setState({
            apiResult: jsonResponse,

            quote: jsonResponse[0].text,
            author: jsonResponse[0].author
          })
        })
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

 
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
    document.querySelector(".box-container").style.color = color;
  
  }

  getRandomQuote() {
    let m = this.state.apiResult.length;
    let randomIndex = Math.floor(Math.random() * m);
    this.setState({
      quote: this.state.apiResult[randomIndex].text,
      author: this.state.apiResult[randomIndex].author
    })
  }

  chooseColor() {
    const randomColor = [];
    for(let i = 0; i < 3; i++){
      randomColor.push(Math.random() * 256);
    }
    return randomColor;
 
  }

  handleClick(){
    this.setState({
      color: this.chooseColor()
    });
    
    // this.chooseColor();
    this.getRandomQuote();
     
  }

  handleTwitter(){
    const url = "twitter.com";
    let text = `${this.state.author} - ${this.state.quote}`;
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

  }

  render(){
    return(
      <div id="quote-box">
         <h1 className="title">Random Quote Machine</h1>
         <div className="box-container">
            {/* <h1 id="text">{this.state.quote}</h1>
            <h3 id="author">{this.state.author}</h3> */}
            <Quote quote={this.state.quote} author={this.state.author}/>
            <div className="button-container">
                {/* <Button  onClick={this.handleClick} /> */}
                <button  id="new-quote" onClick={this.handleClick}>New Quote </button>
                <button id="tweet-quote" onClick={this.handleTwitter}>tweet</button>
            </div>
        </div>
      </div>


    );
  }
}

export default App;
