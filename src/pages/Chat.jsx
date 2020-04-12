import React, { Component } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      chats: [],
      content: "",
      readError: null,
      writeError: null,
      loadingChats: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }

  async componentDidMount() {
    this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;
    try {
      db.ref("chats").on("value", (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        chats.sort(function (a, b) {
          return a.timestamp - b.timestamp;
        });
        this.setState({ chats });
        chatArea.scrollBy(0, chatArea.scrollHeight);
        this.setState({ loadingChats: false });
      });
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;
    try {
      await db.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
      });
      this.setState({ content: "" });
      chatArea.scrollBy(0, chatArea.scrollHeight);
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${
      d.getMonth() + 1
    }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  render() {
    return (
      <section id="chat" className="container">
        <div className="chat-area" ref={this.myRef}>
          {/* loading indicator */}
          {this.state.loadingChats ? (
            <div className="" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            ""
          )}
          {/* chat area */}
          <div className="inner-card">
            <h1>Class Discussion</h1>
          </div>
          {this.state.chats.map((chat) => {
            return (
              <div
                className={
                  "chat-bubble " +
                  (this.state.user.uid === chat.uid ? "current-user" : "")
                }
                key={chat.timestamp}
              >
                <p className="chat-text">{chat.content}</p>
                <p className="chat-time">{this.formatTime(chat.timestamp)}</p>
              </div>
            );
          })}
        </div>
        <form onSubmit={this.handleSubmit} className="card">
          <div className="inner-card">
            <h1>Add Comment</h1>
          </div>
          <div id="add-comment">
            <textarea
              className=""
              name="content"
              onChange={this.handleChange}
              value={this.state.content}
            ></textarea>
            {this.state.error ? (
              <p className="text-danger">{this.state.error}</p>
            ) : null}
            <div type="submit" className="btn-accent-light">
              <i className="far fa-paper-plane"></i>Send
            </div>
            <div className="posting">
              Posting as:{" "}
              <strong className="text-info">{this.state.user.email}</strong>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
