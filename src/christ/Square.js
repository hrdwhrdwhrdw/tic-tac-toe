function Square(props) {
  return (<li className="item-square">
    <button className={props.className ? 'chosen square' : 'square'} onClick={props.onClick}>
      {props.value}
    </button>
  </li>
  );
}

export default Square;