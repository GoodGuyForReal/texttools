import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/pages/404/404";
import Home from "./components/pages/home/Home";
import Navbar from "./elements/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
