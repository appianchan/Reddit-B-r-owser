import React from "react";
import { Route, Switch, Link, Redirect, HashRouter } from "react-router-dom";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""

    };
    this.handleInput = this.handleInput.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
  }
  handleInput(type) {
      
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
  }
  checkInput(){
      if(this.state.text === ""){
          this.setState({text: " "})
      }
  }
  enterPressed(event) {
    var code = event.which || event.keyCode;
    if(code === 13){
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  }
  

  render() {
    return (
      <div className="searchbar-container">
        <input className="searchbar-input" onChange={this.handleInput("text")} onKeyPress={this.enterPressed} />
        &nbsp;&nbsp;
        <Link
          id="myBtn"
          className="subreddits"
          to={`/subreddit//r/${this.state.text}`}
          onClick={this.checkInput.bind(this)}
        >
          Search for a subreddit!
        </Link>{" "}
        &nbsp; &nbsp; Example: Bowser
      </div>
    );
  }
}
export default Searchbar;
