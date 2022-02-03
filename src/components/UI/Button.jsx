import "./styles/Button.css";

import { Link } from "react-router-dom";

const Button = ({ to, text, className, color, type, anchor = false }) => {
  return (
    <>
      {anchor ? (
        <a target="_blank" href={to}>
          <div className={`button ${className} button${color}${type}`}>
            {text}
          </div>
        </a>
      ) : (
        <Link to={to}>
          <div className={`button ${className} button${color}${type}`}>
            {text}
          </div>
        </Link>
      )}
    </>
  );
};

export default Button;
