import React from "react";

import { Link, Route } from "react-router-dom";


class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
        
    }
    componentDidMount() {
        fetch("https://www.reddit.com/subreddits/popular.json?limit=100")
          .then((response) => response.json())
          .then((findresponse) => {
            this.setState({
              data: findresponse,
            });
          });
    }

    render(){
        const arr = [];
        if(this.state.data){
          const children = this.state.data.data.children;
            for(var x = 0; x < children.length; x++){
                arr.push(
                  <div className="popular-subreddits">
                    <Link
                      className="subreddits"
                      to={`/subreddit/${children[x].data.url}`}
                    >
                      {children[x].data.title}
                    </Link>
                  </div>
                );
            }
            
        }
        return(
                
                <div className="index-parent-container">
                    <div className="home-title">The Top 100 most popular subreddits!</div>
                    {arr}
                </div>
            
        )

        
    }
}
export default Index;