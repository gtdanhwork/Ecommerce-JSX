import { Alert } from "antd";
import React from "react";

export function MessageBoxs(props) {
  const { type, message } = props;
  return <Alert message={message} type={type} />;
}
