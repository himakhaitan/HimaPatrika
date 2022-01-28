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
      <div className="owner">
        <div className="owner__img--div">
          <img className="owner--img" src="./images/me.jpg" />
        </div>
        <div className="ownerDetails">
          <h4>Namaste, This is</h4>
          <h2>Himanshu Khaitan.</h2>
          <h2>adding Values while acquiring skills</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor
            mauris eu neque sagittis, lacinia mattis ante vehicula. Vestibulum
            quis convallis elit. Aenean sit amet erat urna. In maximus quam
            mauris. Quisque lobortis maximus nulla nec suscipit. Duis et dictum
            lacus, at sagittis justo.
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
