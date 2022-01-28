import "./styles/Wrapper.css";

export const ImageBack = ({ className, children }) => {
  return <div className={`${className} imageWrapper`}>{children}</div>;
};

export const ColorBack = ({ className, children, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`${className} colorWrapper`}
    >
      {children}
    </div>
  );
};
