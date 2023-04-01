import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/pages/404/404";
import ArticleByURL from "./components/pages/articleByURL/ArticleByURL";
import Home from "./components/pages/home/Home";
import Summarize from "./components/pages/summarize/Summarize";
import TextToSpeech from "./components/pages/textToSpeech/TextToSpeech";
import Navbar from "./elements/navbar/Navbar";
import Paraphraser from "./components/pages/paraphraser/Paraphraser";
import About from "./components/pages/about/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/texttospeech" element={<TextToSpeech />} />
        <Route path="/imagetotext" element={<ArticleByURL />} />
        <Route path="/summarize" element={<Summarize />} />
        <Route path="/paraphraser" element={<Paraphraser />} />

      </Routes>
    </div>
  );
}

export default App;
