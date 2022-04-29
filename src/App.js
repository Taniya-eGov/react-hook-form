
import "./App.css";
import Forms from "./Forms";
import EmployeeList from "./EmployeeList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Forms />} />
          <Route path="/emp" element={<EmployeeList />} />
         
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
