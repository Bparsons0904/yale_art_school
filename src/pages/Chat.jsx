// Chat page

// Required files for import
import React, { Component } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import watermark from "../assets/watermark4.jpg";

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
    // Bind to variables
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }

  // After component is mounted
  async componentDidMount() {
    // Set menu to active page
    let menuItems = document.getElementsByClassName("active");
    for (const element of menuItems) {
      element.classList.remove("active");
    }
    document.getElementById("menu-item-chat").classList.add("active");

    // Set state to if values have been loaded from DB
    this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;

    // Get all messages from DB
    try {
      db.collection("chats")
        .orderBy("timestamp")
        .onSnapshot((querySnapshot) => {
          // Push sorted items into chats array
          let chats = [];
          querySnapshot.forEach((doc) => {
            chats.push(doc.data());
          });
          // Set state to chats array
          this.setState({ chats });
          // Set chatArea height
          chatArea.scrollBy(0, chatArea.scrollHeight);
          // Stop loading animaiton
          this.setState({ loadingChats: false });
        });
    } catch (error) {
      // Display error rmessage and stop loading animaiton if error
      this.setState({ readError: error.message, loadingChats: false });
    }
  }

  // On change, update value of state
  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  // Submit new message
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;
    try {
      // Submit message to DB
      await db.collection("chats").add({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
        name: this.state.user.displayName
          ? this.state.user.displayName
          : this.state.user.email,
      });
      this.setState({ content: "" });
      chatArea.scrollBy(0, chatArea.scrollHeight);
      // If error display message
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  // Format timestap to DAY/MONTH/YEAR and 24hr time
  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getMonth()}/${
      d.getDate() + 1
    }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  render() {
    return (
      <section id="chat">
        <div className="container">
          <img src={watermark} alt="" id="watermark" />
          <div className="chat-area card card-shadow">
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
            <div className="chat-container">
              {this.state.chats.map((chat) => {
                return (
                  <div
                    className={
                      "chat-bubble " +
                      (this.state.user.uid === chat.uid ? "current-user" : "")
                    }
                    key={chat.timestamp}
                  >
                    <p className="chat-name">{chat.name}</p>
                    <p className="chat-text">{chat.content}</p>
                    <p className="chat-time">
                      {this.formatTime(chat.timestamp)}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              <form onSubmit={this.handleSubmit} id="addMessage">
                {/* <div className="inner-card">
            <h1>Add to Discussion</h1>
          </div> */}
                <div id="add-comment">
                  <textarea
                    className=""
                    name="content"
                    onChange={this.handleChange}
                    value={this.state.content}
                    ref={this.myRef}
                  ></textarea>
                  {this.state.error ? (
                    <p className="text-danger">{this.state.error}</p>
                  ) : null}
                  <div className="send-container">
                    <div className="posting">
                      Posting as:{" "}
                      <strong className="text-info">
                        {this.state.user.displayName
                          ? this.state.user.displayName
                          : this.state.user.email}
                      </strong>
                    </div>
                    <div
                      type="submit"
                      className="btn-accent-light"
                      onClick={this.handleSubmit}
                    >
                      <i className="far fa-paper-plane"></i>Send
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
