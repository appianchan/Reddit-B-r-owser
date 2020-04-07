import React from "react";
// import { fetchSubreddits} from '../../util/reddit_util.jsx';
import { Link, Route } from "react-router-dom";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
        <div>
            <p className="error_message">Sorry! Bowser burned this subreddit and it no longer exists!</p>
            <Link className="error_button" to="/">Go Back Home</Link>
        </div>
    );
  }
}
export default Error;
