import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/pages/404/404";
import ArticleByURL from "./components/pages/articleByURL/ArticleByURL";
import Home from "./components/pages/home/Home";
import TextToSpeech from "./components/pages/textToSpeech/TextToSpeech";
import Navbar from "./elements/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/texttospeech" element={<TextToSpeech />} />
        <Route path="/imagetotext" element={<ArticleByURL />} />


      </Routes>
    </div>
  );
}

export default App;
