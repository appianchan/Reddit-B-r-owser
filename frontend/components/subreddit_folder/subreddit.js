import React from "react";
import Post from "../post/post";
import { Redirect } from "react-router-dom";

class Subreddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      arr: null,
      open: false,
      subreddit: this.props.match.params.subreddit
    };
  }


  componentDidMount() {
    const url = window.location.href;
    const n = url.search("subreddit");
    console.log(url.slice(n + 9));
    
      const new_url =
        "https://www.reddit.com" + url.slice(n + 9) + ".json" + "?limit=100";
        
      
        fetch(new_url)
          .then(function (response) {
            if (response.status >= 400 && response.status < 600) {
              throw new Error("Bad response from server");
            }
            return response.json();
          })
          .then((findresponse) => {
            this.setState({
              data: findresponse,
            });
          })
          .catch((error) => this.props.history.push("/error"));
      
    
  }
  componentDidUpdate(){
      if (this.state.subreddit !== this.props.match.params.subreddit) {
          window.location.reload(true);
      }
    
  }

  render() {
      const arr = [];
      

        if (this.state.data) {
            if(this.state.data.data){
          for (var x = 0; x < this.state.data.data.children.length; x++) {
            const child = this.state.data.data.children[x];
            const obj = {};
            obj.title = child.data.title;
            obj.author = child.data.author;
            if (child.data.preview !== undefined) {
              const new_picture_url =
                child.data.preview.images[0].source.url.split('amp;').join('');
              obj.picture = new_picture_url;
            } else {
              obj.picture = "N/A";
            }

            child.data.selftext !== ""
              ? (obj.text = child.data.selftext)
              : (obj.text = "N/A");
            arr.push(
                <Post
                  obj={obj}
                />
              
            );
          }
        }
        }
    return (

      <div className="All_Posts">
          <div className="subreddit-caption">You are at /r/{this.state.subreddit}</div>
        {arr}
      </div>
    );
  }
}
export default Subreddit;
