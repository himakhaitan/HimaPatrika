import "./styles/Quotes.css";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { BsDashLg } from "react-icons/bs";

const Quotes = ({ className, quote, author }) => {
  return (
    <div className={`quotes ${className}`}>
      <ImQuotesLeft className="quote-icon" />
      <p>{quote}</p>
      <ImQuotesRight className="quote-icon" />
      <h6>
        <BsDashLg />
        {author}
      </h6>
    </div>
  );
};

export default Quotes;
