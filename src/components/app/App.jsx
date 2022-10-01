import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import Routess from "./Routess";
import MianAppBar from "../main-app-bar/MianAppBar";

axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <MianAppBar />
          <Routess />
        </Router>
      </div>
    </>
  );
}

export default App;
