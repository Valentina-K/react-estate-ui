import "./chat.scss";

import React, { useState } from "react";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="/jonh-due.jpg" alt="" />
          <span>Jonh Doe</span>
          <p>Lorem ipsum dolor sit ame...</p>
        </div>
        <div className="message">
          <img src="/jonh-due.jpg" alt="" />
          <span>Jonh Doe</span>
          <p>Lorem ipsum dolor sit ame...</p>
        </div>
        <div className="message">
          <img src="/jonh-due.jpg" alt="" />
          <span>Jonh Doe</span>
          <p>Lorem ipsum dolor sit ame...</p>
        </div>
        <div className="message">
          <img src="/jonh-due.jpg" alt="" />
          <span>Jonh Doe</span>
          <p>Lorem ipsum dolor sit ame...</p>
        </div>
        <div className="message">
          <img src="/jonh-due.jpg" alt="" />
          <span>Jonh Doe</span>
          <p>Lorem ipsum dolor sit ame...</p>
        </div>
        <div className="message">
          <img src="/jonh-due.jpg" alt="" />
          <span>Jonh Doe</span>
          <p>Lorem ipsum dolor sit ame...</p>
        </div>
        <div className="message">
          <img src="/jonh-due.jpg" alt="" />
          <span>Jonh Doe</span>
          <p>Lorem ipsum dolor sit ame...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="/jonh-due.jpg" alt="" />
              Jonh Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet ...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet ...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet ...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet ...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet ...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet ...</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
