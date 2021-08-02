import React from "react";

export default function MyButton(props) {
  function executado() {
    props.parentfunction(props.titulo);
  }

  return <button onClick={executado}>{props.titulo}</button>;
}
