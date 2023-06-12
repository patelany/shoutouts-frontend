import "./App.css";

import Header from "./components/Header";
import Details from "./components/Details";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/Main";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:name" element={<Details />} />
          {/* version 1 */}
          <Route path="/me" element={user ? <Details /> : <Main />} />

          {/* version 2 */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
