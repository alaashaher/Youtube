import { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import Routess from "./Routess";

axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";

function App() {

  return (
    <div className="App">
      <Router>
        <Routess />
      </Router>
    </div>
  );
}

export default App;
