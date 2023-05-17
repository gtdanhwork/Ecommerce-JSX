import Alert from "react-bootstrap/Alert";
import React from "react";

export function MessageBox(props) {
  return <Alert variant={props.variant || "info"}>{props.children}</Alert>;
}
