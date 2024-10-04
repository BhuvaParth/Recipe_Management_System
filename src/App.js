import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./component/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-5">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
