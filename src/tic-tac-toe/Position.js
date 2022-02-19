import React from 'react';

export default function Position(props) {
  return <div>
      <button className={props.value ? "position" : "hidden"} onClick = {() => props.onClick(props.value)}>
          {props.value ? "position:" + props.value : ''}
      </button>
  </div>;
}
