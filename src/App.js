import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login />
    </div>
  );
}

export default App;
