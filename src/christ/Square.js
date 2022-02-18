function Square(props) {
  return (
    <button 
        className={`${props.className} + square`}
        onClick={props.onClick}>
          {props.value}
    </button>
  );
}

export default Square;