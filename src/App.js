import "./App.css";

// Components
import Navigation from "./components/Structure/Navigation";
import Quotes from "./components/UI/Quotes";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Quotes
        quote="Investing in Yourself is not about you. It's about putting your stamp on the value you deliver to others."
        author="William Arruda"
      />
    </div>
  );
}

export default App;
