import React from "react";

import "./App.scss";
import Chat from "./Component/Chat/Chat";
import Sidebar from "./Component/Sidebar/Sidebar";

function App() {
  return (
    // BEM convention
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
