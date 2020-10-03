import React from "react";

import "./App.css";
import Sidebar from "./Components/sidebar/Sidebar.component";
import Feed from "./Components/feed/Feed.component";
import Header from "./Components/header/Header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
