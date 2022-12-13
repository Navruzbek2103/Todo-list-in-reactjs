import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/task" element={<Intro />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
