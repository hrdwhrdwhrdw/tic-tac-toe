function Square(props) {
  return (
    <button className={props.className ? 'chosen square' : 'square'} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;