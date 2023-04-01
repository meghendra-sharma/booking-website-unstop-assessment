
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";

function App() {

  return (
    <div className="d-flex flex-column h-100">
    <Header/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
