import { Home, Rent, Buy, PropertyDetails, Search } from "./pages";
import "./App.css";
import nProgress from "nprogress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="app__app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/purpose=for-rent" element={<Rent />} />
          <Route path="/purpose=for-sale" element={<Buy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
