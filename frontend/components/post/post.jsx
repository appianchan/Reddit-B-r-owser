import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      open: false,
      image_url: this.props.obj.picture,
    };
    this.openClosePost = this.openClosePost.bind(this);
    this.imageCheck = this.imageCheck.bind(this);
  }
  componentDidMount() {
    
  }


  openClosePost() {
    if (this.state.open === false) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  }

  imageCheck() {
    const obj = this.props.obj;
    if (obj.picture === "N/A") {
      return <div>N/A</div>;
    } else{
      return <img src={obj.picture} className="picture" />;
    } 
  }

  render() {
    const obj = this.props.obj;
    const text = obj.text.split("&gt;!").join("").split("!&lt").join("");

    const img = this.imageCheck();

    return (
      <div className="Post" onClick={this.openClosePost}>
        <div className="post-and-star">
          <i class="fas fa-star"></i>
          <div>Title: {obj.title}</div>
        </div>
        <div
          style={{
            display: this.state.open === false ? "none" : "initial",
          }}
        >
          <div>Author: {obj.author}</div>
          <div>Picture: {img}</div>
          <div>Text:  {text}</div>
        </div>
      </div>
    );
  }
}
export default Post;
