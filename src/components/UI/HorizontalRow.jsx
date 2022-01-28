import "./styles/HorizontalRow.css";

const HorizontalRow = ({ color, className }) => {
  return <div className={`hR${color} horizontalRow ${className}`}></div>;
};

export default HorizontalRow;
