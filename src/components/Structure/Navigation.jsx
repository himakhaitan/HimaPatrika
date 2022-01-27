import "./Navigation.css";

import HorizontalRow from "../UI/HorizontalRow";

const Navigation = (props) => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__primary">
          <h6 className="navigation__head">Personal Brand</h6>
          <h3 className="navigation__sub">
            Khaitan trying to build one for himself
          </h3>
          <p>What are your views regarding this?</p>
        </div>
        <h1 className="navigation_tertiary">हिमा Patrika</h1>
        <div className="navigation__secondary">
          <h6 className="navigation__secondary_data">Internet</h6>
          <h6 className="navigation__secondary_data">Thusrday 23-02-2021</h6>
          <h6 className="navigation__secondary_data">Volume-1 Number 8</h6>
        </div>
      </nav>
      <HorizontalRow />
    </>
  );
};

export default Navigation;
