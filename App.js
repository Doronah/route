// App.jsx
import Header from "./components/header.js";
import "./App.css";
import Footer from "./components/footer.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
