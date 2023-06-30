const CustomErrorComponent = ({ message }) => {
  const errorStyle = {
    position: "fixed",
    bottom: "10px",
    left: "10px",
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    borderRadius: "4px",
    zIndex: "9999",
  };

  return (
    <div style={errorStyle}>
      <span>{message}</span>
    </div>
  );
};

export default CustomErrorComponent;
