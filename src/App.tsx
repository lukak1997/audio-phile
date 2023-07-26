import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { defaultTheme } from "./defaultTheme";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./page/ProductDetail";
import Home from "./page/Home";
import ProductPage from "./page/ProductPage";
import { Routes, Route } from "react-router-dom";
import { ProductContextProvider } from "./components/ProductContext";
import CheckOutPage from "./page/CheckOutPage";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Poppins:wght@400;600;700&family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <ProductContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/checkoutpage" element={<CheckOutPage />} />
        </Routes>
        <Footer />
      </ProductContextProvider>
    </ThemeProvider>
  );
}

export default App;
