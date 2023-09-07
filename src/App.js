import { Home, Rent, Buy } from "./pages";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import nProgress from "nprogress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purpose=for-rent" element={<Rent />} />
          <Route path="/purpose=for-sale" element={<Buy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
