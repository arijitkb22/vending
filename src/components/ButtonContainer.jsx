const ButtonContainer = ({ handleOnClick }) => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Clear",
    "Get",
  ];
  return (
    <div className="buttonContainer">
      {buttonNames.map((name) => (
        <button className="button" onClick={() => handleOnClick(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
