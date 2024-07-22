import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

import React from "react";

function PropfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar: <img src="/jonh-due.jpg" alt="" />
            </span>
            <span>
              Username: <b>Jonh Doe</b>
            </span>
            <span>
              E-mail: <b>jonh-doe@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create new Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default PropfilePage;
