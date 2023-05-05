import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <p>this is my life now</p>
      <Footer />
    </div>
  );
}
