import React from "react";
import "./App.css";
import Sidebar from "./Components/sidebar/Sidebar.component";
// import SidebarRow from "./Components/SidebarRow/SidebarRow.component";

import Header from "./Components/header/Header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
