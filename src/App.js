import "./App.css";
import Header from "./components/Header";
import SearchIcon from "@material-ui/icons/Search";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <Header title="Giant Stride" search={<SearchIcon />} />
      <Login />
    </div>
  );
}

export default App;
