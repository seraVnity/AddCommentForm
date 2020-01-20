import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //TODO ~ call an action creator
    this.props.saveComment(this.state.comment);
    //save the comment
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}
        ></textarea>
        <div>
          <button>Submit Comment</button>

        </div>
      </form>
      <button className = 'fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
      
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
