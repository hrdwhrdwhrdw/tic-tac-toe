function Square(props) {
  return (
    <button className={`${props.className} square`} onClick={props.onClick}>
      {props.value === "X" ? (
        <div className="cross"></div>
      ) : props.value === "O" ? (
        <div className="circle"></div>
      ) : (
        ""
      )}
    </button>
  );
}

export default Square;
