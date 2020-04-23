import React from "react";
import { Route, Switch, Link, Redirect, HashRouter } from "react-router-dom";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            topic: this.props.match.params.topic
        }
        console.log(this.props);
    }
    componentDidMount(){
        
        const url = window.location.href;
        const n = url.search("search");
        const new_url = "https://www.reddit.com/subreddits/search.json?q=" + url.slice(n + 7);
        console.log(new_url);
        fetch(new_url)
            .then((response) => response.json())
            .then((findresponse) => {
                this.setState({
                    data: findresponse,
                });
            });
    }

    componentDidUpdate() {
        if (this.state.topic !== this.props.match.params.topic) {
            window.location.reload(true);
        }

    }

    render(){
        const arr = [];
    if (this.state.data) {
        if (this.state.data.data){
            const children = this.state.data.data.children;
            for (var x = 0; x < children.length; x++) {
                arr.push(
                    <div className="searched-subreddits">
                        <Link
                            className="subreddits"
                            to={`/subreddit${children[x].data.url}`}
                        >
                            {children[x].data.display_name_prefixed}
                        </Link>
                    </div>
                );
            }
        }
        
    }
        return(
            <div className="search-parent-container">
                <div className="search-title">Search Results</div>
                {arr}
            </div>
        );
            
        
    }
}
export default Search;